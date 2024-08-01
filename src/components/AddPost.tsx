import Image from "next/image"

const AddPost = () => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
            {/* avator */}
            <Image src="https://images.pexels.com/photos/801625/pexels-photo-801625.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={48} height={48} className="w-12 h-12 object-cover rounded-full"/>
            {/* post */}
            <div className="flex-1">
                {/* text input */}
                <div className="flex gap-4">
                    <textarea placeholder="What's on your mind?" className="bg-slate-100 rounded-lg flex-1 p-2"></textarea>
                    <Image src="/emoji.png" height={20} width={20} alt="" className="w-5 h-5 cursor-pointer self-end"/>
                </div>
                {/* post option */}
                <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addimage.png" height={20} width={20} alt=""/>
                        Photo
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addVideo.png" height={20} width={20} alt=""/>
                        Video
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addevent.png" height={20} width={20} alt=""/>
                        Event
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/poll.png" height={20} width={20} alt=""/>
                        Poll
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost