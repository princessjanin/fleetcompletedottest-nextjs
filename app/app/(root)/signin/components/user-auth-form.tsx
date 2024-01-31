"use client"


import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { signIn } from "next-auth/react"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { AlertCircle, EyeIcon, EyeOffIcon } from "lucide-react"


const formSchema = z.object({
  username: z.string().min(5),
  password: z.string().min(8),
  database: z.string()
})

type AuthFormValues = z.infer<typeof formSchema>;

export function UserAuthForm({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [isMounted, setIsMounted] = useState(false);
  const [isPassword, setIsPassword] = useState("password");
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoginError, setIsLoginError] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>("")

  const form = useForm<AuthFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: { username: "", password: "", database: ""},
    });

  async function onSubmit(values: AuthFormValues) {
    setIsLoading(true)
    try {
      // console.log("AUTH VALUES", values)
      const res = await signIn("credentials",{
        username: values.username,
        password: values.password,
        redirect: false,        
      },{
        database: values.database
      })
       console.log("AUTH", res)
      if(res?.error){
        console.log("FRONT_AUTH", res.error)
        // window.location.assign("https://fleetcomplete.geotab.com/");
        setErrorMsg("Credentials are invalid. Please try again!")
        setIsLoginError(true);
        setTimeout(() => {
          setIsLoginError(false)
        }, 10000)
      }else{
        window.location.assign(`/`);
      }
      

    } catch (error: any) {
      console.log("AUTH_ERROR", error.message) // error in the provider
      setErrorMsg(error.message)
      setIsLoginError(true);
      setTimeout(() => {
        setIsLoginError(false)
      }, 10000)
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  useEffect(() => {
      setIsMounted(true);
  }, [])

  if (!isMounted) {
      return null;
  }

  return (
    <>
      <div className={cn("grid gap-6", className)} {...props}>
        { isLoginError && 
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {errorMsg}
            </AlertDescription>
          </Alert>
        }

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <FormField
                  control={form.control}
                  name="username"
                  render={({field}) => (
                  <FormItem>
                      <FormControl>
                          <Input 
                              disabled={isLoading} 
                              placeholder="Email Address"
                              {...field} 
                          />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                  )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                  control={form.control}
                  name="password"
                  render={({field}) => (
                  <FormItem>
                      <FormControl className="relative">
                          <div className="flex items-center space-x-2">
                          <Input disabled={isLoading} type={isPassword} placeholder="Password" {...field} />
                          <Button 
                              type="button" 
                              variant="ghost" 
                              size="icon"
                              className="absolute right-1 top-1 z-10"
                              onClick={() => {
                                  isPassword === "password" ? setIsPassword("text") : setIsPassword("password")
                              }}
                          >
                                  {isPassword === "password" ?
                                  <EyeIcon className="h-4 w-4"/> :
                                  <EyeOffIcon className="h-4 w-4"/>
                                  }
                          </Button>
                          </div>
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                  )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                  control={form.control}
                  name="database"
                  render={({field}) => (
                  <FormItem>
                      <FormControl>
                          <Input 
                              disabled={isLoading} 
                              placeholder="Database"
                              {...field} 
                          />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                  )}
              />
            </div>
            <Button disabled={isLoading} type="submit" className="bg-sky-700 hover:bg-sky-500 mt-5">
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign In
            </Button>
          </div>
        </form>
      </Form>
      </div>
    </>
  )
}