import Image from "next/image"

interface ProfileProps extends React.HTMLAttributes<HTMLElement> {
    name: string;
    position: string;
    img: string;
}

export const CSSProfile: React.FC<ProfileProps> = ({
    name,
    position,
    img
}) => {

    return (
        <>
            <div className="flex flex-col item-center w-36 ">
                <div className="relative border flex-col h-36">
                    <div className="absolute top-5 left-3  w-5/6 h-5/6">
                        <Image 
                            src={img} 
                            alt="person" 
                            fill
                            className="rounded-full border-4 border-white"
                            />
                    </div>
                    <div className="border bg-slate-500 h-3/5 "> </div>
                    
                </div>
                <div className="text-lg lg:text-lg md:text-md sm:text-sm font-bold text-center ">
                    {name}
                </div>
                <div className="text-xs lg:text-xs md:text-[0.5rem] sm:text-[0.5rem] font-bold text-center ">
                    {position}
                </div>

            </div>
        </>
    )
}