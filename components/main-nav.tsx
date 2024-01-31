"use client";

import { cn } from "@/lib/utils";
import { LayoutDashboard, PersonStandingIcon, Settings, User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export const MainNav = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) => {
    const pathname = usePathname();
    const params = useParams();



    return (
        <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
                <Link
                    href="/"
                    className="flex flex-col pl-3 mb-2 mt-2"
                >
                    <div className="relative w-44 h-8">
                        <Image fill alt="Logo" src="/FC.png" />   
                    </div>
                    <div className="relative text-xs font-bold w-full pl-8">
                        Customer Self-Service Portal  
                    </div>
                </Link>
        </nav>
    )
}