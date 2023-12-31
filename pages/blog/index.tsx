import { GetStaticProps, NextPage } from "next";
import { IBlog } from "../common/types/BlogInterface";
import client from "../common/graphql/client";
import { LIST_BLOG } from "../common/graphql/queries";
import BlogCardList from "../modules/blog/BlogCardList";

interface Props {
  blogs: IBlog[];
}

const BlogPage: NextPage<Props> = ({ blogs }) => {
  return (
    <>
      <div className="h-auto bg-white justify-center text-center items-center">
        <h1 className="text-black text-6xl py-4">
          <strong>Blog & News</strong>
        </h1>
      </div>
      <div className="h-[66rem] bg-white justify-center text-center items-center">
        <BlogCardList blogs={blogs} />
      </div>
    </>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await client.query({ query: LIST_BLOG });
  const blogs: IBlog[] = data.blogPosts.data;

  return {
    props: {
      blogs,
    },
  };
};
