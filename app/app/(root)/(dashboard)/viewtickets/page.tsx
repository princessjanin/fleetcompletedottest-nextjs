import Image from "next/image"

import { Separator } from '@/components/ui/separator'
import Ads from '@/components/ads'

export default function viewtickets() {
  return (
    <>
      <div className="relative w-full h-[600px] border border-red">
          <Image 
              src="/ticket.png" 
              alt="bg" 
              fill
              />
      </div>

    </>
  )
}
