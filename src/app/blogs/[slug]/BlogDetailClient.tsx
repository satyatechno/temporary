"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./blogdetails.module.scss";
import draftToHtml from "draftjs-to-html";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import {
  // FaTwitter,
  // FaTelegramPlane,
  // FaRedditAlien,
  // FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Head from "next/head";
import { poppins } from "@/app/layout";
import BrowseCategory from "@/components/Blogs/BrowseCategory/BrowseCategory";
import BlogDetailsCarousel from "@/components/Blogs/BlogDetailsCarousel/BlogDetailsCarousel";

const BlogDetailClient = ({
  data,
  blogDetail,
  cat,
  blogHtmlContent,
  blogUrl,
  meta,
}: any) => {
  const [details, setDetails] = useState<any>([]);
  const [obj, setObj] = useState(undefined);
  const [blogs, setBlogs] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  // const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const [blogUrl, setBlogUrl] = useState("");

  const blogDetailRef = useRef<any>();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  const handleBackClick = () => {
    window.location.href = "/blogs";
  };

  // useEffect(() => {
  //   if (pathname) {
  //     const url = `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`;
  //     setBlogUrl(url);
  //     console.log("blogUrl", url);
  //   }
  // }, [router.isReady]);

  // const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
  //   blogUrl
  // )}`;
  // const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
  //   blogUrl
  // )}`;
  // const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
  //   blogUrl
  // )}`;
  // const redditShareUrl = `https://reddit.com/submit?url=${encodeURIComponent(
  //   blogUrl
  // )}`;

  useEffect(() => {
    setBlogs(data?.data?.response);
    setDetails(blogDetail?.data?.response[0]);
    setObj(blogDetail?.data?.response[0]);
  }, []);

  //   const options = {
  //     blockStyleFn: (block) => {
  //       switch (block.getType()) {
  //         case "unstyled":
  //           return {
  //             style: {
  //               marginBottom: "15px",
  //               fontWeight: "200",
  //               fontSize: "1.1rem",
  //               lineHeight: "150%",
  //             },
  //           };
  //         case "header-one":
  //           return {
  //             style: { marginBottom: "15px", color: "#ff00c7", fontSize: "2rem" },
  //           };
  //         case "header-two":
  //           return {
  //             style: {
  //               marginBottom: "15px",
  //               marginTop: "30px",
  //               lineHeight: "120%",
  //             },
  //           };
  //         case "header-three":
  //           return { style: { marginBottom: "15px", marginTop: "30px" } };
  //         case "strong":
  //           return { style: { fontWeight: "bold", fontSize: "1.1rem" } };
  //         case "unordered-list-item":
  //           return {
  //             style: {
  //               marginBottom: "15px",
  //               marginLeft: "15px",
  //               fontSize: "1.1rem",
  //               lineHeight: "150%",
  //             },
  //           };
  //         case "ordered-list-item":
  //           return {
  //             style: {
  //               marginBottom: "15px",
  //               fontSize: "1.1rem",
  //               marginLeft: "15px",
  //               lineHeight: "150%",
  //             },
  //           };

  //         default:
  //           return { style: { marginBottom: "15px", marginTop: "0px" } };
  //       }
  //     },
  //     entityStyleFn: (entity) => {
  //       const type = entity.getType();
  //       if (type === "LINK") {
  //         const data = entity.getData();
  //         return {
  //           element: "a",
  //           attributes: {
  //             href: data.url, // Set the href attribute to the link's URL
  //             className: styles.customLink, // Apply your custom CSS class
  //             target: "_blank", // Optional: Open link in a new tab
  //             rel: "noopener noreferrer", // Optional: Security best practices
  //           },
  //         };
  //       }
  //     },
  //   };

  const richTextRenderer = (rawContent: any) => {
    console.log("json", rawContent);
    // const contentState = convertFromRaw(JSON.parse(rawContent));
    // console.log('contentrrrr', contentState);

    const htmlContent = draftToHtml(JSON.parse(rawContent));
    console.log("htmlContent", htmlContent);
    return (
      <div
        className={styles.htmlContent}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    );
  };

  const handleOpenSideBar = () => {
    setSidebarOpen(true);
  };

  const handleCloseSideBar = () => {
    setSidebarOpen(false);
  };

  // useEffect(() => {
  //   const element = document.getElementById("moreBlogsRef");

  //   if (element) {
  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         setIsIntersecting(entry.isIntersecting);
  //         console.log("Is intersecting:", entry.isIntersecting);
  //       },
  //       {
  //         root: null,
  //         rootMargin: "0px",
  //         threshold: 0.1,
  //       }
  //     );

  //     observer.observe(element);

  //     return () => {
  //       if (element) {
  //         observer.unobserve(element);
  //       }
  //     };
  //   }
  //   console.log("Element selected:", element);
  // }, []);

  //   gsap.registerPlugin(ScrollTrigger);

  //   useEffect(() => {
  //     if ("moreBlogsRef") {
  //       const trigger = ScrollTrigger.create({
  //         trigger: "moreBlogsRef",
  //         // markers: true,
  //         start: "+=4320",
  //         end: "bottom 90%",
  //         onEnter: () => setIsIntersecting(true), // When the element enters the viewport
  //         onLeaveBack: () => setIsIntersecting(false), // When scrolling back and element leaves viewport
  //       });

  //       // Return cleanup function
  //       return () => {
  //         trigger.kill();
  //       };
  //     }
  //   }, [setIsIntersecting]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // console.log("detailsdetails-updated", blogHtmlContent);

  //   const renderContent = (blocks) => {
  //     console.log("blocks", blocks);
  //     return blocks?.map((block, index) => {
  //       const { key, text, type, inlineStyleRanges } = block;

  //       let style = {};
  //       if (inlineStyleRanges) {
  //         inlineStyleRanges.forEach((range) => {
  //           if (range.style === "BOLD") {
  //             style.fontWeight = "bold";
  //           }
  //         });
  //       }

  //       switch (type) {
  //         case "unstyled":
  //           return (
  //             <p key={key} style={style}>
  //               {text}
  //             </p>
  //           );
  //         case "unordered-list-item":
  //           return (
  //             <li key={key} style={style}>
  //               {text}
  //             </li>
  //           );
  //         case "header-one":
  //           return (
  //             <h1 key={key} style={style}>
  //               {text}
  //             </h1>
  //           );
  //         case "header-two":
  //           return (
  //             <h2 key={key} style={style}>
  //               {text}
  //             </h2>
  //           );
  //         case "header-three":
  //           return (
  //             <h3 key={key} style={style}>
  //               {text}
  //             </h3>
  //           );
  //         case "header-four":
  //           return (
  //             <h4 key={key} style={style}>
  //               {text}
  //             </h4>
  //           );
  //         case "header-five":
  //           return (
  //             <h5 key={key} style={style}>
  //               {text}
  //             </h5>
  //           );
  //         case "header-six":
  //           return (
  //             <h6 key={key} style={style}>
  //               {text}
  //             </h6>
  //           );
  //         default:
  //           return (
  //             <p key={key} style={style}>
  //               {text}
  //             </p>
  //           );
  //       }
  //     });
  //   };

  if (!obj) {
    return (
      <div>
        <Head>
          <title>{meta?.title}</title>
          <meta name="title" content={meta?.title} />
          <meta name="description" content={meta?.description} />
          <meta name="keywords" content={meta?.keywords} />

          {/* Open Graph meta tags */}
          <meta property="og:url" content={blogUrl} />
          <meta property="og:title" content={meta?.og_title || meta?.title} />
          <meta
            property="og:description"
            content={meta?.og_description || meta?.description}
          />
          <meta property="og:image" content={meta?.og_image?.url} />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="300" />
          <meta property="og:type" content="article" />

          {/* Twitter meta tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content={meta?.twitter_title || meta?.title}
          />
          <meta
            name="twitter:description"
            content={meta?.twitter_description || meta?.description}
          />
          <meta
            name="twitter:image"
            content={meta?.twitter_image?.url || meta?.og_image?.url}
          />

          {/* LinkedIn meta tags */}
          <meta property="linkedin:card" content="summary_large_image" />
          <meta property="linkedin:title" content={meta?.title} />
          <meta property="linkedin:description" content={meta?.description} />
          <meta property="linkedin:image" content={meta?.og_image?.url} />

          {/* Reddit meta tags */}
          <meta property="reddit:card" content="summary_large_image" />
          <meta property="reddit:title" content={meta?.title} />
          <meta property="reddit:description" content={meta?.description} />
          <meta property="reddit:image" content={meta?.og_image?.url} />

          {/* Telegram meta tags */}
          <meta property="telegram:card" content="summary_large_image" />
          <meta property="telegram:title" content={meta?.title} />
          <meta property="telegram:description" content={meta?.description} />
          <meta property="telegram:image" content={meta?.og_image?.url} />
        </Head>
        <p className={styles.loading}>{/* <FullScreenUntradeLoader /> */}</p>
      </div>
    );
  }

  console.log("detailsdetails", details,isLoading);

  return (
    <>
      {/* {isLoading ? (
        <FullScreenUntradeLoader />
      ) : (
        
      )} */}

      <div className={styles.blogDetails}>
        <div className={styles.arrowContainerLeft} onClick={handleBackClick}>
          <IoArrowBackCircleOutline />
        </div>
        <div className={`${styles.blogContentContainer} ${poppins.className}`}>
          <div className={`${styles.blogContent}`}>
            <h1 className={`${styles.blogTitle} ${poppins.className}`}>
              {details?.title}
            </h1>
            <p className={`${styles.contentDescription} ${poppins.className}`}>
              {details?.description}
            </p>
            <div className={styles.blogDescriptionContainer}>
              <div className={styles.authorData}>
                <div className={styles.authorImageContainer}>
                  <Image
                    src={
                      "https://assets.gamingarcade.io/Assets/allIMG_20230827_000544_821.jpg"
                    }
                    width={75}
                    height={75}
                    alt="Untrade: Automated Crypto Trading AI Bot"
                  />
                </div>
                <div className={styles.authorPost}>
                  <p className={styles.authorName}>{details?.author?.name}</p>
                  <p className={styles.postDate}>
                    {moment(data?.createdAt).format("MMMM D, YYYY")}
                  </p>
                </div>
              </div>
              <div className={styles.blogCategory}>
                {details?.category[0]?.name}
              </div>
            </div>
            {/* <div className={styles.iconsContainerMobile}>
              <div className={styles.socialMobile}>
                <a
                  href={twitterShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
                  <FaTelegramPlane />
                </a>
                <a
                  href={redditShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaRedditAlien />
                </a>
                <a
                  href={linkedInShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div> */}
            <div className={styles.blogImageContainer}>
              <Image
                src={details?.header}
                height={1000}
                width={1000}
                alt="Untrade: Automated Crypto Trading AI Bot"
              />
            </div>
            <div className={styles.blogContent} ref={blogDetailRef}>
              <div dangerouslySetInnerHTML={{ __html: blogHtmlContent }} />
              {details?.body && richTextRenderer(details?.body)}
            </div>
            <div className={styles.blogTagsContainer}>
              {details.tags.map((tag: any) => (
                <Link href={`/blogs/blog-tag/${tag?.slug}?id=${tag?._id}`} key={tag?.slug}>
                  <div className={styles.blogTag}>{tag.title}</div>
                </Link>
              ))}
            </div>
          </div>
          {/* {!isIntersecting && (
            <div className={styles.iconsContainer}>
              <div className={styles.socials}>
                <a
                  href={twitterShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
                  <FaTelegramPlane />
                </a>
                <a
                  href={redditShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaRedditAlien />
                </a>
                <a
                  href={linkedInShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          )} */}
          {
            <div onClick={scrollToTop} className={styles.arrowContainerUp}>
              <FaArrowUp />
            </div>
          }
        </div>
        <div>
          <div id="moreBlogsRef" className={styles.desktopCarousel}>
            <BlogDetailsCarousel blogs={blogs} details={details} />
          </div>
          {/*
           <div id="moreBlogsRef" className={styles.desktopCarousel}>
            <MultipleItemsCarousel blogs={blogs} details={details} />
          </div>
          <div className={styles.mobileCarousel}>
            <MultipleItemsCarouselItem blogs={blogs} details={details} />
          </div> */}
          <br />
          <br />
          <br />
          <BrowseCategory
            isOpen={isSidebarOpen}
            onClose={handleCloseSideBar}
            categories={cat.data.response}
            pageName="blogs"
            tagCategory="blog"
          />
        </div>
      </div>
      <div className={styles.browsebutton}>
        <div className={styles.browse} onClick={handleOpenSideBar}>
          Browse Category
        </div>
      </div>
    </>
  );
};

export default BlogDetailClient;
