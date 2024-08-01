"use client"

import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Image from "next/image"
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"

const Navbar = () => {
    return (
        <div className="h-24 flex items-center justify-between">
            {/* left  */}
            <div className="md:hidden lg:block w-[20%]">
                <Link href="/" className="font-bold text-xl text-blue-600">InfinityTech Social</Link>
            </div>

            {/* center */}
            <div className="hidden md:flex w-[50%] text-sm items-center justify-between">

                {/* links */}
                <div className="flex gap-6 text-gray-600">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/home.png" alt="homepage" width={16} height={16} className="w-4 h-4"/>
                        <span>Homepage</span>
                    </Link>
                    
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/friends.png" alt="homepage" width={16} height={16} className="w-4 h-4"/>
                        <span>Friends</span>
                    </Link>

                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/stories.png" alt="homepage" width={16} height={16} className="w-4 h-4"/>
                        <span>Stories</span>
                    </Link>
                </div>
                <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
                    <input type="text" placeholder="search..." className="bg-transparent outline-none"/>
                    <Image src="/search.png" width={14} height={14} alt=""/>
                </div>
            </div>

            {/* right */}
            <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
                <ClerkLoading>
                <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1s_linear_infinite] dark:text-white"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <div className="cursor-pointer">
                            <Image src="/people.png" alt="" height={24} width={24}/>
                        </div>
                        <div className="cursor-pointer">
                            <Image src="/messages.png" alt="" height={20} width={20}/>
                        </div>
                        <div className="cursor-pointer">
                            <Image src="/notifications.png" alt="" height={20} width={20}/>
                        </div>
                        <UserButton/>
                    </SignedIn>
                    <SignedOut>
                        <div className="flex items-center gap-2 text-sm">
                        <Image src="/login.png" alt="" height={20} width={20}/>
                        <Link href="/sign-in">Login/Register</Link>
                        </div>
                    </SignedOut>
                </ClerkLoaded>
                <MobileMenu/>
            </div>
        </div>
       
    )
}

export default Navbar