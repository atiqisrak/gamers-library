import { ArrowLeftFromLineIcon } from "lucide-react";
import { Button } from "../ui/button";
import MenuItems from "./MenuItems";

export default function Sidebar() {
    return (
        <div className="w-64 min-w-[300px] min-h-full p-4 bg-gray-800 text-white pt-20">
            <MenuItems />
        </div>
    );
}