import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Author, Startup } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const { title, views, _createdAt, author, _id, image, description, category } = post;

  return (
    <li className="startup-card">
      <div className="startup-card_header">
        <div className="startup-card_date">{formatDate(_createdAt)}</div>

        <div className="startup-card_views">
          <EyeIcon />
          <span>{views}</span>
        </div>
      </div>

      <div className="startup-card_content">
        <div className="startup-card_text">
          <Link href={`/user/${author?._id}`}>
            <p className="startup-card_author">{author?.name}</p>
          </Link>

          <Link href={`/startup/${_id}`}>
            <h3 className="startup-card_title">{title}</h3>
          </Link>
        </div>

        <Link href={`/user/${author?._id}`}>
          <div className="startup-card_avatar-container">
            <Image
              src={author?.image || "/placeholder.png"}
              alt={`${author?.name}'s profile`}
              width={48}
              height={48}
              className="startup-card_avatar"
            />
          </div>
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup_card_desc mb-2">{description}</p>
        <img src={image} alt="placeholder" className="startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
