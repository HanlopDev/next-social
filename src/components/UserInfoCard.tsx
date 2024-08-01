import Image from "next/image"
import Link from "next/link"

const UserInfoCard = ({userId}: {userId: string}) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* Top */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">User's Info</span>
                <Link href="/" className="text-blue-500 text-xs">See All</Link>
            </div>
             {/* bottom */}
             <div className="flex flex-col gap-4 text-gray-500">
                <div className="flex items-center gap-2">
                    <span className="text-xl text-black">Lloyd Fleming</span>
                    <span className="text-sm">@jonathan</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quo, iste provident, totam optio sequi accusantium ab temporibus 
                    voluptatem commodi suscipit, minus et magni. Maxime quisquam.
                </p>
                <div className="flex items-center gap-2">
                    <Image src="/map.png" alt="" height={16} width={16}/>
                    <span>Living in <b>Denver</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/school.png" alt="" height={16} width={16}/>
                    <span>Went to <b> Edger hight School</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/work.png" alt="" height={16} width={16}/>
                    <span>Work at<b>Apple Inc</b></span> 
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                    <Image src="/link.png" alt="" height={16} width={16}/>
                    <Link href="https://hanaf-mpore.vercel.app" className="text-blue-500 font-medium">Hanaf.Developer</Link>
                    </div>
                    <div className="flex gap-1 items-center">
                    <Image src="/date.png" alt="" height={16} width={16}/>
                    <span>Joined november 2024</span>
                    </div>
                </div>
                <button className="bg-blue-500 text-white text-sm rounded-md p-2">Follow</button>
                <span className="text-red-400 self-end text-xs cursor-pointer">block User</span>
            </div>
        </div>
    )
}

export default UserInfoCard