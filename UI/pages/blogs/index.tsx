import { GetStaticProps } from "next";
import blogService from "../../services/blog-service";
import { BlogListProps } from "@/utils/interface";

const BlogList = ({ blogs }: BlogListProps) => {
  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            {blog.title}
            {blog.publishDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await blogService.getBlog();
  return {
    props: {
      blogs: res,
    },
    revalidate: 60,
  };
};

export default BlogList;
