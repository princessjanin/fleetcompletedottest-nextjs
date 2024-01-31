
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Ads = () => {
  return (
    <>
        <div className=' grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-2 mt-5'>
          <div className='p-5'>
            <h2 className='text-2xl font-bold'> Why Choose Fleet Complete’s GPS Fleet Tracking Software Solutions? </h2>
            <h3 className='text-lg font-bold text-red-500'> We help clients improve safety & reduce operating costs. </h3>
            <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-5 mt-5">
                    <div className="relative h-10 w-10">
                      <Image loading="lazy" fill alt="map" src="https://www.fleetcomplete.com.au/wp-content/uploads/sites/33/2020/12/ic-australia.png?_t=1608155480" />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='text-2xl font-bold'>20+ years</div>
                      <div className='text-md text-slate-400'>Operating in Australia since 2003</div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <div className="relative h-10 w-10">
                      <Image loading="lazy" fill alt="map" src="https://www.fleetcomplete.com.au/wp-content/uploads/sites/33/2020/12/ic-globe.png?_t=1608157439" />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='text-2xl font-bold'>600,000+ Subscribers</div>
                      <div className='text-md text-slate-400'>Worldwide use Fleet Complete</div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <div className="relative h-10 w-10">
                      <Image loading="lazy" fill alt="map" src="https://www.fleetcomplete.com.au/wp-content/uploads/sites/33/2020/12/telstra-logo.png?_t=1608157458" />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='text-2xl font-bold'>Telstra Gold</div>
                      <div className='text-md text-slate-400'>Partner</div>
                    </div>
                  </div>
            </div>
            <Link href="https://www.fleetcomplete.com.au/about-fleet-complete" className={cn(buttonVariants({ variant: "outline", size: "lg"}),'transition mt-5 rounded-s-full rounded-e-full border-2 hover:text-black font-bold border-sky-900 text-sky-900')}> About Us </Link>
          </div>
          <div className='relative h-[500px] lg:h-[500px] md:h-[350px] sm:h-[350px] w-auto'>
            <Image loading='lazy' fill src='/Header-Image_V2.gif' alt='commercial'/>
          </div>
        </div>
    </>
  )
}

export default Ads
