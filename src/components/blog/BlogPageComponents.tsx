"use client";
import { useGetAllBlogDbFromQuery } from "@/redux/api/blog/blogApi";
import Blog from "../ui/Blog";

const BlogPageComponents = () => {
  const {
    data: blogs,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllBlogDbFromQuery("");
  let content = null;
  if (isLoading) {
    content = <div>Loding..</div>;
  } else if (!isLoading && !isError && blogs?.length == 0) {
    content = <div className="">Blog tag not found!!</div>;
  } else if (!isLoading && !isError && blogs?.length > 0 && isSuccess) {
    content = blogs?.map((blog: any, index: any) => (
      <Blog key={index} blog={blog} />
    ));
  }
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5">{content}</div>
  );
};

export default BlogPageComponents;
