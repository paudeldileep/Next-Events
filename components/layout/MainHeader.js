import { DocumentSearchIcon,HomeIcon } from "@heroicons/react/solid";
import HeaderLink from "./HeaderLink";

const MainHeader = () => {
    return <header className="flex justify-between py-2 px-4 bg-gradient-to-br from-cyan-500 to-gray-400 rounded-sm shadow-md h-12 w-full">
    <HeaderLink Icon={HomeIcon} title="NxtEvents" link="/" />
    <HeaderLink Icon={DocumentSearchIcon} title="Browse All" link="/events" />
</header>
}

export default MainHeader;