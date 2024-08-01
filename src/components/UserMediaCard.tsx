import Image from "next/image"
import Link from "next/link"

const UserMediaCard = ({userId}: {userId: string}) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* Top */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">User Media</span>
                <Link href="/" className="text-blue-500 text-xs">See All</Link>
            </div>
            {/* bottom */}
        </div>
    )
}

export default UserMediaCard