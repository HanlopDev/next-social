import Image from "next/image"
import Link from "next/link"

const FriendRequest = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* Top */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">Friend Request</span>
                <Link href="/" className="text-blue-500 text-xs">See All</Link>
            </div>
            {/* Users */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/27221178/pexels-photo-27221178/free-photo-of-laptop-in-an-office.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" height={40} width={40} className="w-10 h-10 rounded-full object-cover" alt=""/>
                    <span className="font-semibold">Wayne Bishop</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <Image src="/accept.png" width={20} height={20} alt="" className="cursor-pointer"/>
                    <Image src="/reject.png" width={20} height={20} alt="" className="cursor-pointer"/>

                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/27221178/pexels-photo-27221178/free-photo-of-laptop-in-an-office.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" height={40} width={40} className="w-10 h-10 rounded-full object-cover" alt=""/>
                    <span className="font-semibold">Wayne Bishop</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <Image src="/accept.png" width={20} height={20} alt="" className="cursor-pointer"/>
                    <Image src="/reject.png" width={20} height={20} alt="" className="cursor-pointer"/>

                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/27221178/pexels-photo-27221178/free-photo-of-laptop-in-an-office.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" height={40} width={40} className="w-10 h-10 rounded-full object-cover" alt=""/>
                    <span className="font-semibold">Wayne Bishop</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <Image src="/accept.png" width={20} height={20} alt="" className="cursor-pointer"/>
                    <Image src="/reject.png" width={20} height={20} alt="" className="cursor-pointer"/>

                </div>
            </div>
        </div>
    )
}

export default FriendRequest