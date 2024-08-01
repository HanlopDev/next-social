import Image from "next/image"

const Ad = ({size}: {size: "sm" | "md" | "lg"}) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm">
            {/* Top */}
            <div className="flex items-center justify-between">
                <span>Sponsared Ads</span>
                <Image src="/more.png'" alt="" height={16} width={16}/>
            </div>
            {/* Bottom */}
            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
                <div className={`relative w-full ${size === "sm" ? "h-24" : "h-48"}`}>
                    <Image src="https://images.pexels.com/photos/1639813/pexels-photo-1639813.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="" fill className="rounded-lg object-cover"/>
                </div>
                <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/1639813/pexels-photo-1639813.jpeg?auto=compress&cs=tinysrgb&w=400"
                 alt="" width={24} height={24} className="rounded-full h-6 w-6 object-cover"/>
                 <span className="text-blue-500 font-medium">BigChef Lounge</span>
                </div>
                <p className={size === "sm" ? "text-xs" : "text-sm"}>
                    {size === "sm" ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum" 
                    : size === "md" ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, culpa laborum repudiandae" 
                    : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, culpa laborum repudiandae accusantium alias"}
                </p>
                <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn more</button>
            </div>
        </div>
    )
}

export default Ad