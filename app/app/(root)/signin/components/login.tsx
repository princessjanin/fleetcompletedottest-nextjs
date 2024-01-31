"use client";

import { UserAuthForm } from "./user-auth-form";
import Image from "next/image";

const Login = () => {
  return (
    <>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <div className="flex flex-col items-center pl-3 mb-2 mt-2">
                  <div className="relative w-64 h-12">
                      <Image fill alt="Logo" src="/FC.png" />   
                  </div>
                  <div className="relative text-md font-bold w-full">
                      Customer Self-Service Portal  
                  </div>
              </div>
              <h1 className="text-2xl font-semibold tracking-tight">
                {/* {company.name.toUpperCase()} */}
                Sign In
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your credentials below to sign in your account.
              </p>
            </div>

            <UserAuthForm />
            
          </div>
        </div>
    </>
  )
}

export default Login
