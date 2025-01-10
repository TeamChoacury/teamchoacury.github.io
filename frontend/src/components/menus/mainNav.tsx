import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function MainNav() {
    const navigate = useNavigate();

    return (
        <div className="mr-4 hidden gap-2 md:flex">
            <Button variant={"link"} onClick={() => { navigate("/"); }}>Home</Button>
            <Button variant={"link"} onClick={() => { navigate("/about/"); }}>About</Button>
            <Button variant={"link"} onClick={() => { navigate("/downloads/"); }}>Downloads</Button>
        </div>
    );
}

export default MainNav;