import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import mainLogo from "@/Main Icon.png";
import { Menu as MenuIcon } from "lucide-react";

function MobileNav() {
    const navigate = useNavigate();

    const [ open, setOpen ] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant={"ghost"} size={"icon"} className="md:hidden">
                    <MenuIcon />
                </Button>
            </SheetTrigger>

            <SheetContent side={"right"}>
                <div className="flex flex-col items-start">
                    <img src={mainLogo} alt="ChoacuryOS" className="w-[75px]" />

                    <div className="flex flex-col w-full mt-3 space-y-2">
                        <Button variant={"outline"} onClick={() => { setOpen(false); navigate("/"); }}>Home</Button>
                        <Button variant={"outline"} onClick={() => { setOpen(false); navigate("/about/"); }}>About</Button>
                        <Button variant={"outline"} onClick={() => { setOpen(false); navigate("/downloads/"); }}>Downloads</Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;