import { GetServerSideProps } from "next";
import blogService from "../../services/blog-service";
import { BlogListProps } from "@/utils/interface";
import Link from "next/link";

const BlogList = ({ blogs }: BlogListProps) => {
  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            {blog.title}
            {blog.publishDate}
            <Link href={`/blogs/${blog.slug}`}>
              <h2>{blog.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await blogService.getBlog();
  return {
    props: {
      blogs: res,
    },
  };
};

export default BlogList;
