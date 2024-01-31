import { getServerSession } from "next-auth"
import { authOptions } from "../../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import Sidebar from '@/components/sidebar'
import Navbar from '@/components/navbar'


import Link from 'next/link'

const Layout = async ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    const session = await getServerSession(authOptions)
    console.log("Session", session)
    if(!session){
        redirect("/signin")
    }

  return (
    <>
        <div className="h-full relative">
            <Navbar />
            <div className="hidden h-90 md:flex md:w-52 md:flex-col md:fixed md:inset-y-0 z-[80] mt-16">
                <Sidebar />
            </div>
            <div className="pr-2 lg:pl-52 md:pl-52 sm:pl-0">
            <div className='p-2'>
              <div className='flex justify-center w-full py-1'>
                  <div className='flex-row border text-xs text-center item-center text-white bg-blue-800 w-8/12 py-2'>
                    Telstra 3G shutdown is coming. Upgrade your fleet now to avoid disruptions. Future-proof your business: &nbsp;
                    <Link href="https://www.fleetcomplete.com.au/p/3g-migration/" target='#' className='font-bold underline underline-offset-1'>Learn more</Link>.
                  </div>
              </div>
                    {children}                  
              </div>
            </div>
        </div>
    </>
  )
}

export default Layout
