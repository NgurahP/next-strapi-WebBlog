import { IBlog } from "@/pages/common/types/BlogInterface";
import { NextPage } from "next";
import BlogTitle from "../../common/elements/blog/BlogTitle";

interface Props {
  blogs: IBlog[];
}

const BlogCardList: NextPage<Props> = ({ blogs }) => {
  return (
    <div className="h-screen">
      {blogs.map((blog, i) => {
        return (
          <div key={i}>
            <BlogTitle
              title={blog.attributes.title}
              isClickable={true}
              blogId={blog.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BlogCardList;
