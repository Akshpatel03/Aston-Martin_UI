import { GetStaticPaths, GetStaticProps } from "next";
import blogService from "../../services/blog-service";
import { Blog } from "@/utils/interface";

interface BlogProps {
  blog: Blog;
}

const BlogPage = ({ blog }: BlogProps) => {
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.publishDate}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await blogService.getBlog();

  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  const blogs = await blogService.getBlog();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return { notFound: true };
  }

  return {
    props: {
      blog,
    },
    revalidate: 60,
  };
};

export default BlogPage;
