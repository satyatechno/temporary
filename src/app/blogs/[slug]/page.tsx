import React from "react";
import draftToHtml from "draftjs-to-html";
import { notFound } from "next/navigation";
import config from "../../../../config";
import BlogDetailClient from "./BlogDetailClient";
import styles from "./blogdetails.module.scss";

export default async function BlogDetailPage({ params }:any ) {
  const { slug } = params;

  const [dataRes, blogDetailRes, tagRes] = await Promise.all([
    fetch(`${config.baseURL}blog`, { cache: "no-store" }),
    fetch(`${config.baseURL}blog?slug=${slug}`, { cache: "no-store" }),
    fetch(`${config.baseURL}category`, { cache: "no-store" }),
  ]);

  if (!dataRes.ok || !blogDetailRes.ok || !tagRes.ok || !slug) {
    notFound();
  }

  const [data, blogDetail, tag] = await Promise.all([
    dataRes.json(),
    blogDetailRes.json(),
    tagRes.json(),
  ]);

  if (!blogDetail?.data) {
    return notFound(); // Return 404 if no blog details are found for the given slug
  }

  const meta = blogDetail?.data?.data?.meta?.[0] || {};
  const blogUrl = `${config.baseURL}blogs/${slug}`;

  const blog = blogDetail?.data;
  const blogHtmlContent = draftToHtml(blog?.response?.[0]);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "UnTrade",
    url: "https://untrade.io/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://untrade.io/trader{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": blogUrl,
    },
    headline: blog?.title,
    description: blog?.description,
    image: blog?.header,
    datePublished: blog?.createdAt,
    dateModified: blog?.updatedAt,
    author: {
      "@type": "Person",
      name: blog?.author?.name || "Unknown",
    },
    publisher: {
      "@type": "Organization",
      name: "UnTrade",
    },
  };

  return (
    <>
      <script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        key={blog?.slug}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <div className={styles.blogDetails}>
        <BlogDetailClient
          data={data}
          blogDetail={blogDetail}
          cat={tag}
          blogHtmlContent={blogHtmlContent}
          details={blog}
          obj={blog?.body}
          blogUrl={blogUrl}
          meta={meta}
        />
      </div>
    </>
  );
}
