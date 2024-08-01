import Image from "next/image"
import Comments from "./Comments"

const Post = () => {
    return ( 
        <div className="flex flex-col gap-4">
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/27141298/pexels-photo-27141298/free-photo-of-rainy-days.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" height={40} width={40} alt="" className="w-10 h-10 rounded-full"/>
                <span className="font-medium">John Lee</span>
                </div>
                <Image src="/more.png" height={16} width={16} alt=""/>
            </div>
            {/* DESC */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                <Image src="https://images.pexels.com/photos/27351280/pexels-photo-27351280/free-photo-of-a-lake-surrounded-by-trees-and-grass.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" fill className="object-cover rounded-md" alt=""/>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus voluptatem, necessitatibus laborum maiores omnis sed accusantium. Reiciendis consequuntur quidem voluptatem, totam laboriosam labore maxime, quam cum inventore omnis, dolores optio!</p>
            </div>
            {/* INTERACTION */}
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/like.png" height={16} width={16} className="cursor-pointer" alt=""/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> Likes</span></span>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/comment.png" height={16} width={16} className="cursor-pointer" alt=""/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> Comments</span></span>
                    </div>
                </div>
                <div className="">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/share.png" height={16} width={16} className="cursor-pointer" alt=""/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> Share</span></span>
                    </div>
                </div>
                </div>
            </div>
            <Comments/>
        </div>
    )
}

export default Post