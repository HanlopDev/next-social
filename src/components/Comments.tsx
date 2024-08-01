import Image from "next/image"


const Comments = () => {
    return(
        <div className="">
            {/* write */}
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/26738323/pexels-photo-26738323/free-photo-of-ringed-kingfisher-in-wilderness.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" 
                alt="" width={32} height={32} className="w-8 h-8 rounded-full"/>
                <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                <input placeholder="write a comment..." type="text" className="bg-transparent outline-none flex-1"/>
                <Image src="/emoji.png" alt="" height={16} width={16} className="cursor-pointer"/>
                </div>
            </div>

            {/* comments */}
            <div className="">

                {/* comment */}
                <div className="flex gap-4 justify-between mt-6">
                    {/* avator */}
                    <Image src="https://images.pexels.com/photos/26738323/pexels-photo-26738323/free-photo-of-ringed-kingfisher-in-wilderness.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" 
                    alt="" width={40} height={40} className="w-10 h-10 rounded-full"/>

                    {/* desc */}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium">Username</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias obcaecati facere minima aliquid, incidunt ab maiores deleniti aliquam asperiores debitis et ut minus itaque eveniet distinctio! Ab fugit eligendi asperiores.</p>
                    <div className="flex items-center gap-8 text-gray-500">
                        <div className="flex items-center gap-4">
                            <Image src="/like.png" 
                            height={12} width={12} alt="" 
                            className="cursor-pointer w-4 h-4"/>
                            <span className="text-gray-300">|</span>
                            <span className="text-gray-500">123 Likes</span>
                        </div>
                        <div className="">Reply</div>
                    </div>
                    </div>

                    {/* icon */}
                    <Image src="/more.png" 
                    height={16} width={16} alt="" 
                    className="cursor-pointer w-4 h-4"/>
                </div>
            </div>
        </div>
    )
}

export default Comments