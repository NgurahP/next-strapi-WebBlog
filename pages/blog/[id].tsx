import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { IBlog, IBlogIdentification } from "../common/types/BlogInterface";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { LIST_ID, SINGLE_BLOG } from "../common/graphql/queries";

interface Props {
  blog: IBlog;
}

const client = new ApolloClient({
  uri: process.env.STRAPI_ADDRESS,
  cache: new InMemoryCache(),
});

const Blog: NextPage<Props> = ({ blog }) => {
  console.log(blog);
  return (
    <div className="bg-white">
      <p className="text-5xl text-center">
        <strong>{blog.attributes.title}</strong>
      </p>
      <p className="my-8 mx-8 text-center text-lg">
        {blog.attributes.description}
      </p>
      <p>{blog.attributes.body}</p>
    </div>
  );
};

export default Blog;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: LIST_ID });
  const ids: IBlogIdentification[] = data.blogPosts.data;

  const paths = ids.map((id) => {
    return { params: { ...id } };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  console.log();
  const { data } = await client.query({
    query: SINGLE_BLOG,
    variables: { blogId: params!.id },
  });
  const blog: IBlog = data.blogPosts.data[0];

  return {
    props: {
      blog,
    },
  };
};
