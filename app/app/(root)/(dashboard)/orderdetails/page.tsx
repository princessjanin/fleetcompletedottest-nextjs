import Image from "next/image"

import { Separator } from '@/components/ui/separator'
import Ads from '@/components/ads'

export default function orderdetails() {
  return (
    <>
      <div className="relative w-full h-[600px] border border-red">
          <Image 
              src="/order.png" 
              alt="bg" 
              fill
              />
      </div>

    </>
  )
}
