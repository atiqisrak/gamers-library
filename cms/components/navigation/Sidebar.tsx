import { ArrowLeftFromLineIcon } from "lucide-react";
import { Button } from "../ui/button";
import MenuItems from "./MenuItems";

export default function Sidebar() {
    return (
        <div className="w-64 min-w-[300px] min-h-screen border-r border-gray-200 p-4"
        >
            <MenuItems />
        </div>
    );
}