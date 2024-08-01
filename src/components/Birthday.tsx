import Image from "next/image"
import Link from "next/link"

const Birthday = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">Birthdays</span>
            </div>
            {/* Users */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/27221178/pexels-photo-27221178/free-photo-of-laptop-in-an-office.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" height={40} width={40} className="w-10 h-10 rounded-full object-cover" alt=""/>
                    <span className="font-semibold">Wayne Bishop</span>
                </div>
                <div className="flex gap-3 justify-end">
                   <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">Celebrate</button>
                </div>
            </div>
            {/* Upcoming */}
            <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
                <Image src="/gift.png" alt="" height={24} width={24}/>
                <Link href="/">
                <span className="text-gray-700 font-semibold">Upcoming Birthdays</span>
                <span className="text-gray-500">See other 16 upcoming Birthdays</span>
                </Link>
            </div>
        </div>
    )
}

export default Birthday