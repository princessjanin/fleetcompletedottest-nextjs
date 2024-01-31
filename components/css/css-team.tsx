import { CSSProfile } from "@/components/css/css-profile"

export const CSSTeam = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) => {

    return (
        <>
            <div className="p-2">
                <div className="text-xl font-bold text-center w-full mb-2">
                    Meet our Customer Success Team
                </div>
                <div className="flex flex-col justify-center gap-2 px-10">
                    <div className="flex flex-row gap-5 w-full justify-evenly pt-5  px-3">
                        <CSSProfile name="Olivier Sirop" position="Senior Operations Manager" img="/Oli.png"/>
                        <CSSProfile name="Gina Harrison" position="Customer Experience Manager" img="/Gina.png"/>
                    </div>
                    <div className="grid justify-items-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-1 pb-20 pt-10 px-10">
                        <CSSProfile name="Timothing Wallace" position="Senior Success Specialist" img="/Tim.png"/>
                        <CSSProfile name="Celine Daniel" position="Senior Success Specialist" img="/Celine.png"/>
                        <CSSProfile name="Kristine Janin Mendoza" position="Strategic Success Specialist" img="/Kristine.png"/>
                        <CSSProfile name="Simon Caust" position="Strategic Success Specialist" img="/Simon.png"/>
                        <CSSProfile name="Shimark Ghaffoor" position="Strategic Success Specialist" img="/Shimark.png"/>
                        <CSSProfile name="Wild Card" position="" img="/male.png"/>
                        <CSSProfile name="Leanne Merlino" position="" img="/Lea.png"/>
                        <CSSProfile name="Anaru Colmer" position="" img="/male.png"/>
                    </div>
                </div>

            </div>
        </>
    )
}
