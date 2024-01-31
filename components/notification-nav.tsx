"use client";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"
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
import { Bell } from "lucide-react"
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
  
  export function NotificationNav() {
    
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
            <Button variant="ghost" className="relative text-xs">
              <Bell className="h-4 w-4 text-yellow-500 mr-2"/>
              <span className="rounded-full bg-red-600 text-xs text-white font-bold w-4 h-4 px-1 mr-2">2</span>
              Notifications
              
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-row space-y-1">
                <Bell className="h-4 w-4 text-yellow-500 mr-2 mt-1"/>
                <p className="text-sm font-bold leading-none">Notifications</p>
                <span className="rounded-full bg-red-600 text-xs text-white font-bold w-4 h-4 px-1 ml-2">2</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Sample Notification
              </DropdownMenuItem>
              <DropdownMenuItem>
                Sample Notification
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

    return null;
  }