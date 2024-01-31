
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Book } from "lucide-react";
import Link from "next/link";

interface ResourcesProps{
    label: string;
    url: string;
}

const Resources = ({
    title,
    list
}: {
    title: string,
    list: ResourcesProps[]
}) => {
  return (
    <>
        <Card>
            <CardHeader>
                <CardTitle className="flex flex-row justify-between">
                    <span> {title} </span>
                    <span className=" text-muted-foreground"> ({list.length}) </span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {
                    list.map((item) => (
                        <div key={item.label} className="flex gap-2 flex-row justify-start py-1">
                            <Book />
                            <Link 
                                href={item.url}
                                target="#"
                                className="text-md text-sky-600 font-bold hover:text-sky-400"
                            >{item.label}</Link>
                        </div>
                    ))
                }
            </CardContent>
        </Card>

    </>
  )
}

export default Resources
