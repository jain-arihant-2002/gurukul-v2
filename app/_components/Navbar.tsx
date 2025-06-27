import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/Theme-Btn";
import { SearchIcon } from "lucide-react";
import Link from "next/link";

export function Navbar() {
    const links = [
        { href: "/course", label: "Courses" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return <nav className="sticky top-0 w-full flex py-4 px-6 border-b-1 border-border items-center text-card-foreground z-50 justify-between">
        <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold mr-8">
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
            <ul className="flex space-x-4">
                <li className={buttonVariants({ variant: "default" })}>
                    <Link href='/login' className="text-lg">
                        Login
                    </Link>
                </li>
                <li className={`${buttonVariants({ variant: "secondary" })}`} >
                    <Link href='/signup' className="text-lg ">
                        Sign Up
                    </Link>
                </li>
            </ul>
            <ThemeToggle />
        </div>
    </nav>
}