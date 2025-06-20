import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Link from "next/link"

const StartupCard = ({ post } : { post: StartupTypeCard }) => {

    const { views, _createdAt, author: { _id: authorId, name} } = post;

  return (
    <li className="startup-card group">
        <div className="flex-between">
            <p className="startup_card_date">
                {formatDate(_createdAt)}
            </p>

            <div className="flex gap-1.5">
                <EyeIcon className="size-6" />
                <span className="text-16-medium">{views}</span>
            </div>
        </div>
        <div className="flex-between mt-5 gap-5">
            <div className="flex-1">
                <Link href={`/user/${authorId}`}>
                    <p className="text-16-medium line-climp-1">{name}</p>
                </Link>
            </div>
        </div>
    </li>
  )
}

export default StartupCard