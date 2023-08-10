import { useState } from "react";
import { IBlog } from "@/pages/common/types/BlogInterface";
import { NextPage } from "next";
import BlogTitle from "../../common/elements/blog/BlogTitle";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  blogs: IBlog[];
}

const BlogCardList: NextPage<Props> = ({ blogs }) => {
  const [visibleBlogs, setVisibleBlogs] = useState<IBlog[]>(blogs.slice(0, 3));
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchMoreData = () => {
    const newData = blogs.slice(visibleBlogs.length, visibleBlogs.length + 1);

    if (newData.length === 0) {
      setHasMore(false);
    } else {
      setVisibleBlogs([...visibleBlogs, ...newData]);
    }
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={visibleBlogs.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading....</h4>}
        endMessage={<p>You reach the end</p>}>
        {visibleBlogs.map((blog, i) => (
          <div key={i} className="bg-slate-100 py-4 my-2">
            <BlogTitle
              title={blog.attributes.title}
              isClickable={true}
              blogId={blog.id}
              description={blog.attributes.description}
            />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default BlogCardList;
