import Script from "next/script";
import BlogsNew from "./BlogsNew";
import { fetchBlogsData } from "./fetchBlogsData";

export const metadata = {
  title: "Explore Expert Crypto Trading Insights & Strategies | UnTrade Blogs",
  description:
    "Stay ahead in crypto trading with UnTrade Blogs! Discover expert strategies, algorithmic tools, and market insights tailored for beginners and pros. Learn to maximize profits with ease.",
};

const BlogsPage = async ({ params }: any) => {
  const { page = 1 } = params;
  const { data, tag } = await fetchBlogsData({ page });

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "UnTrade",
    url: "https://untrade.io/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://untrade.io/blogs{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div>
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <BlogsNew data={data} tag={tag} />
    </div>
  );
};

export default BlogsPage;
