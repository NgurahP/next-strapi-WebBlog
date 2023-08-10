import { NextPage } from "next";
import Link from "next/link";

interface Props {
  title: string;
  description?: string;
  isClickable: boolean;
  blogId?: string;
}

const BlogTitle: NextPage<Props> = ({
  title,
  description,
  isClickable,
  blogId,
}) => {
  if (isClickable && blogId) {
    return (
      <>
        <div>
          <Link href={`/blog/${blogId}`}>
            <p className="text-black text-xl font-semibold hover:underline cursor-pointer">
              {title}
            </p>
            <p className="text-black text-lg">{description}</p>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <p className="text-black text-xl font-semibold cursor-pointer">
          {title}
        </p>
        <p>{description}</p>
      </>
    );
  }
};

export default BlogTitle;
