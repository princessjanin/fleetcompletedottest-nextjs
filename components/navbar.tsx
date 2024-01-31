


import { MainNav } from "@/components/main-nav";
import MobileSidebar from "@/components/ui/mobile-sidebar";
import { UserNav } from "@/components/user-nav";
import { NotificationNav } from "./notification-nav";

const Navbar = async () => {

    return ( 
        <div className="border-b sticky top-0 z-50 bg-white">
            <div className="flex h-14 items-center px-4">
                <MobileSidebar />
                <MainNav className="mx-6"/>
                <div className="ml-auto flex items-center space-x-4">
                    <NotificationNav />
                    <UserNav />
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;