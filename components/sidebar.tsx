"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Building2, LayoutDashboard, PersonStanding, SearchIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useParams, usePathname } from "next/navigation";

import { Input } from "@/components/ui/input"
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";


const SideBar = () => {
    const [isMounted, setIsMounted] = useState(false);
    const {data: session} = useSession();
    const pathname = usePathname();
    const params = useParams();

    const routes = [
        {
            label: "Home",
            icon: LayoutDashboard,
            href: "/",
            active: pathname === "/",
            color: "text-yellow-500"
        },
        {
            label: "Get Help",
            icon: PersonStanding,
            href: "https://www.fleetcomplete.com.au/post-sales-support#main-content",
            active: pathname === `/help`,
            color: "text-yellow-500"
        },
        {
            label: "Resources",
            icon: PersonStanding,
            href: "https://www.welcometofleetcomplete.com.au/",
            active: pathname === `/resources`,
            color: "text-yellow-500"
        },
        {
            label: "Order Details",
            icon: Building2,
            href: "/orderdetails",
            active: pathname === `/orderdetails`,
            color: "text-yellow-500"
        },
        {
            label: "View Ticket Status",
            icon: Building2,
            href: "/viewtickets",
            active: pathname === `/viewtickets`,
            color: "text-yellow-500"
        },
        {
            label: "Database link",
            icon: Building2,
            href: `https://fleetcomplete.geotab.com/${session?.user.database}/#dashboard`,
            active: pathname === `/databaselink`,
            color: "text-yellow-500"
        },
        {
            label: "Meet Our Team",
            icon: Building2,
            href: "/meatourteam",
            active: pathname === `/meatourteam`,
            color: "text-yellow-500"
        },
        {
            label: "Book A Training",
            icon: Building2,
            href: "https://www.welcometofleetcomplete.com.au/training",
            active: pathname === `/bookatraining`,
            color: "text-yellow-500"
        },
        {
            label: "What's New",
            icon: Building2,
            href: "https://www.fleetcomplete.com.au/p/3g-migration/",
            active: pathname === `/whatsnew`,
            color: "text-yellow-500"
        },
        {
            label: "CS Portal",
            icon: Building2,
            href: "/csportal",
            active: pathname.includes("/csportal"),
            color: "text-yellow-500"
        },
        {
            label: "RSM Portal",
            icon: Building2,
            href: "/rsmportal",
            active: pathname.includes("/rsmportal"),
            color: "text-yellow-500"
       },
    ]

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }

    return ( 
        <div className="space-y-4 py-3 flex flex-col h-full bg-white px-1 text-black">
            <div className="flex items-center space-x-2">
                <Input type="text" placeholder="Search" />
                <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon"
                    className="absolute right-1 lg:top-3 md:top-3 sm:top-7 z-10"
                    onClick={() => {}}
                >
                        <SearchIcon className="h-4 w-4"/> 
                </Button>
            </div>
            <Separator />
            <div className="space-y-1">
                {routes.map((route) => (
                    <Link 
                        href={route.href}
                        key={route.href}
                        className={cn("text-xs bg-blue-700 border-black border group flex p-2 w-full justify-start font-medium cursor-pointer hover:text-black hover:font-bold hover:bg-blue-400 transition",
                            route.active ? "text-black font-bold bg-blue-400 dark:text-white" : "text-white "
                        )}
                    >
                        <div className="flex items-center flex-1">
                            {/* <route.icon className={cn("h-5 w-5 mr-3", route.color)} /> */}
                            {route.label}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
     );
}
 
export default SideBar;
