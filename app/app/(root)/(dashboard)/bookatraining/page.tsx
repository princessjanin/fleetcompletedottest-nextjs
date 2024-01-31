import Image from "next/image"

import { Separator } from '@/components/ui/separator'
import Ads from '@/components/ads'

export default function bookatraining() {
  return (
    <>
      <div className="relative w-full h-[600px] border border-red">
          <Image 
              src="/booking.png" 
              alt="bg" 
              fill
              />
      </div>

    </>
  )
}
