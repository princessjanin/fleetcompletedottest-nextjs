"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Button, buttonVariants } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils";
import { User2Icon } from "lucide-react";
  

  export function UserNav() {
    const { data: session } = useSession();
    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }

    if ( session && session.user ) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                <AvatarFallback className="bg-gradient-to-r from-cyan-300 to-blue-700">
                  <User2Icon />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-auto" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{session?.user.userName}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {session?.user.database}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button 
                onClick={() => signOut()}
                variant="destructive" 
                className="relative h-8 w-full rounded-full"
              >
                Sign Out
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

    return (
      <div>
          <Link 
            href={`/signIn`}
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full h-7 bg-sky-600"
            )}  
          >
            Sign In
          </Link>
      </div>
    )
  }