"use client";

import BlogDetailsPage from "@/components/blog/BlogDetailsPage";
import SheardHeader from "@/components/Sheard/SheardHeader";
import SheardNewsletterSupport from "@/components/Sheard/SheardNewsletterSupport";
import { useGetSingleBlogQuery } from "@/redux/api/blog/blogApi";
import React from "react";

const SingleBLog = ({ params }: { params: any }) => {
  const {
    data: blog,
    isLoading,
    isError,
    isSuccess,
  } = useGetSingleBlogQuery(params.blogId);
  let content = null;
  if (isLoading) {
    content = <div>Loding..</div>;
  } else if (!isLoading && isError) {
    content = <div className="">Blog is not found!!</div>;
  } else if (!isLoading && !isError && blog && isSuccess) {
    content = blog;
  }
  return (
    <div>
      <SheardHeader title="BlogDetails" subTitle="blog / details" />
      <div className="max-w-7xl mx-auto my-20 ">
        <BlogDetailsPage blog={content} />
      </div>
      <SheardNewsletterSupport />
    </div>
  );
};

export default SingleBLog;
