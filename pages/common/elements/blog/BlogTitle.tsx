import { NextPage } from "next";
import Link from "next/link";

interface Props {
  title: string;
  isClickable: boolean;
  blogId?: string;
}

const BlogTitle: NextPage<Props> = ({ title, isClickable, blogId }) => {
  if (isClickable && blogId) {
    return (
      <>
        <div>
          <Link href={`/blog/${blogId}`}>
            <p className="text-black text-xl font-semibold hover:underline cursor-pointer">
              {title}
            </p>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <p className="text-black text-xl font-semibold cursor-pointer">{title}</p>
    );
  }
};

export default BlogTitle;
