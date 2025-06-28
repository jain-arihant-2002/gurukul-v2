import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/Theme-Btn";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import HamMenu from "./HamMenu";
import AuthBtn from "@/app/(main)/_components/Auth-Btn";

export function     Navbar() {
    const links = [
        { href: "/course", label: "Courses" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return <nav className="sticky top-0 w-full flex py-4 px-6 border-b-1 border-border items-center text-card-foreground z-50 justify-between">
        <div className="flex items-center ">
            <HamMenu/>
            <Link href="/" className="text-2xl font-bold mr-8 space-x-2">
                Gurukul
            </Link>
            <ul className="hidden space-x-4 md:flex">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className="text-lg">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex items-center space-x-4">
            <div>
                <SearchIcon className="w-5 h-5 text-muted-foreground md:hidden" />
                <Input className=" hidden md:block" placeholder="Search Courses" />
            </div>
            <AuthBtn/>
            <ThemeToggle />
        </div>
    </nav>
}