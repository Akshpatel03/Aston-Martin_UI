export interface Blog {
  title: string;
  slug: string;
  publishDate: string;
}

export interface BlogListProps {
  blogs: Blog[];
}
