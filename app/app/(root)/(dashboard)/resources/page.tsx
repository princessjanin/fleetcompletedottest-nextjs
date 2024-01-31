"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Resources from "./components/resources"

export default function Home() {

  const howtoguides = [
    {
      label: "Download your Quick Start Guide",
      url: "https://securatrak.freshdesk.com/support/solutions/articles/4000096837-download-your-quick-start-guide"
    },
    {
      label: "Register for your Introduction Webinar",
      url: "https://securatrak.freshdesk.com/support/solutions/articles/4000095575-register-for-your-introduction-webinar"
    }
  ]

  const selfhelp = [
    {
      label: "Assigning a Driver Key",
      url: "https://securatrak.freshdesk.com/support/solutions/articles/4000095579-assigning-a-driver-key"
    },
    {
      label: "Running Reports",
      url: "https://securatrak.freshdesk.com/support/solutions/articles/4000095580-running-reports"
    },
    {
      label: "Setting up Service Reminders",
      url: "https://securatrak.freshdesk.com/support/solutions/articles/4000095581-setting-up-service-reminders"
    },
    {
      label: "Setting up Automated Reports",
      url: "https://securatrak.freshdesk.com/support/solutions/articles/4000095582-setting-up-automated-reports-"
    },
    {
      label: "Creating a Route",
      url: "https://securatrak.freshdesk.com/support/solutions/articles/4000095583-creating-a-route-"
    }
  ]

  const installation = [
    {
      label: "Plug and Play Installation",
      url: "https://securatrak.freshdesk.com/support/solutions/articles/4000095589-plug-and-play-installation-"
    }
  ]



  return (
    <>
      <Tabs defaultValue="resources" className="w-full max-w-[1400px] space-y-4 p-5">
        <TabsList className="grid grid-cols-5 w-full bg-blue-700 text-white">
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="solutions">Solutions</TabsTrigger>
        </TabsList>
        <TabsContent value="resources" className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3">
          <Resources title="How-To-Guides" list={howtoguides} />
          <Resources title="Self-Help" list={selfhelp} />
          <Resources title="Installation" list={installation} />
        </TabsContent>
        <TabsContent value="solutions"> This tab is ongoing development.</TabsContent>
      </Tabs>
      

    </>
  )
}
