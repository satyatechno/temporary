"use client";

import React, { useEffect, useState } from "react";
import styles from "./blogDetails.module.scss";
import Head from "next/head";
import Image from "next/image";
import headingIcon from "../../../public/flash.png";
import axios from "axios";
// import FullScreenUntradeLoader from "@/components/Common/Loader/FullScreenUntradeLoader";
// import { useRouter } from "next/navigation";
import { poppins, source_sans } from "../layout";
import config from "../../../config";
import { icons } from "@/utils/Utils";
import BlogCard1 from "@/components/Blogs/BlogCard1/BlogCard1";
import BrowseCategory from "@/components/Blogs/BrowseCategory/BrowseCategory";
import CategoriesSection from "@/components/Blogs/CategorySection/CategorySection";
import CarouselComponent from "@/components/Blogs/BlogCarousel/BlogCarousel";

// import dynamic from 'next/dynamic'

// const Header = dynamic(() => import('@/components/Common/Header/Index'), {
//   ssr: false,
// })
const BlogsNew = ({ data, tag }:any) => {
  const [details, setDetails] = useState([]);
  const [blogsData, setBlogsData] = useState([]);

  const [cat, setCat] = useState([]);
  const [categoryName,setCategoryName] = useState("");
  const [page] = useState(1);
  const [trending, setTrending] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  // const [sidebarPosition, setSidebarPosition] = useState({ top: 0, left: 0 });
  const [value, setValue] = useState(8);
  const [isLoading, setIsLoading] = useState(true); // Initially set to true
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loader, setLoader] = useState(true);
  // const [prevBlogData, setPrevBlogData] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  // const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(""); // Debounced search input
  // const router = useRouter();

  const hasMoreCards = blogsData.length < totalBlogs;


  console.log('categoryName',{categoryName})

  // const canonicalUrl = `https://untrade.io${router.asPath}`;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  useEffect(() => {
    if (data) {
      setDetails(data?.data?.response);
      // setPublished(data?.data?.data?.slice(0, 6));
      setTrending(data?.data?.response?.slice(0, 8));
    } else {
      console.log("data not found");
    }
  }, [data]);

  // const fetchBlogs = () => {
  //   setLoader(true);
  //   axios
  //     .get(
  //       `${config.baseURL}blog`
  //     )
  //     .then((response:any) => {
  //       console.log("response", response.data.data);
  //       if (response.data.data && response.data.data.data) {
  //         setDetails(response.data.data.data);
  //         if (page > 1) {
  //           setBlogsData((prev:any) => [...prev, ...response.data.data.data]);
  //         } else {
  //           setBlogsData(response.data.data.data);
  //         }
  //         setTotalBlogs(response.data.data.pagination.total_results);
  //         setTotalPages(response.data.data.pagination.total_pages);
  //       } else {
  //         console.log(
  //           "No more blogs to load or incorrect data structure:",
  //           response.data.data.data
  //         );
  //       }
  //     })
  //     .catch((error) => console.error("Error fetching blogs:", error))
  //     .finally(() => {
  //       setLoader(false);
  //     });
  // };

  // Debouncing search query
  // useEffect(() => {
  //   const handler = setTimeout(() => {
  //     setDebouncedSearchQuery(searchQuery);
  //   }, 700); 

  //   return () => {
  //     clearTimeout(handler); 
  //   };
  // }, [searchQuery]);

  const fetchBlogs = async () => {
    setLoader(true);
    
    try {
      const { data } = await axios.get(`${config.baseURL}blog`);
      
      if (data.data) {
        setDetails(data.data?.response);
        setBlogsData((prev) => (page > 1 ? [...prev, ...data.data] : data.data));
        setTotalBlogs(data.data.pagination?.total_results || 0);
        setTotalPages(data.data.pagination?.total_pages || 0);
      } else {
        console.log("No blogs found or incorrect response structure:", data.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoader(false);
    }
  };
  
  useEffect(() => {
    fetchBlogs();
  }, [value]);

  const loadMoreBlogs = () => {
    if (!isLoading && page <= totalPages) {
      setValue((prevValue) => prevValue + 8);
    }
  };

  const handleOpenSideBar = () => {
    setSidebarOpen(true);
  };

  const handleCloseSideBar = () => {
    setSidebarOpen(false);
  };

  // useEffect(() => {
  //   if (data) {
  //     setDetails(data?.data?.data);
  //     // setPublished(data?.data?.data?.slice(0, 6));
  //     // setTrending(data?.data?.data?.slice(0, 8));
  //   } else {
  //     console.log("data not found");
  //   }
  // }, [data]);

  useEffect(() => {
    if (tag) {
      setCat(tag.data?.response);
    } else {
      console.log("data not found");
    }
  }, [tag]);

  // useEffect(() => {
  //   if (trendingData) {
  //     setTrending(trendingData?.data?.data);
  //   }
  // }, [trendingData]);

  const generateBlogSchema = (blog:any) => {
    return {
      __html: `{
       "@context": "https://schema.org",
        "@type": "Article",         
        "@id": "#Article",   
         "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "#webpage",
              "url": "https://untrade.io/blogs/${blog?.title}"
            },
            "name" : "${blog?.title}",
            "description" : "${blog?.description}",
            "image" : "${blog?.header}",
            "datePublished" : "${blog?.createdAt}",
            "dateModified" : "${blog?.updatedAt}",
            "author" : "${blog?.author?.name}",
            "publisher" : {
             "@type": "Organization",
             "name" : "${blog?.publishedBy?.name}",
             "logo" : {
              "@type": "ImageObject",
              "url" : "${blog?.publishedBy?.profileImage}"
              }
            }
      }`,
    };
  };

 
  return (
    <>
      <div className={styles.blogs}>
        <Head>
          <title>UnTrade Blog - Learn About Our Trading Bot</title>
          <meta
            name="title"
            content="UnTrade Blog - Learn About Our Trading Bot"
          />
          <meta
            name="description"
            content="Discover how UnTrade's trading bot can automate your crypto gains. Learn more with expert analysis and market trends on our blog."
          />
          <meta
            name="keywords"
            content="UnTrade, Trading Bot, Automate Crypto Gains "
          />
          <meta property="og:url" content="https://unTrade.io/blogs" />
          <meta
            property="og:description"
            content="Stay updated with our informative crypto trading blogs. Learn strategies, trends, and news. Enhance your trading skills with UnTrade."
          />
          <meta
            property="og:title"
            content="UnTrade Blog - Learn About Our Trading Bot"
          />
          <meta property="og:type" content="website" />
          <meta property="fb:app_id" content="796768478800025" />
          <meta
            property="og:image"
            content="https://untrade.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f6d01cb7.png&w=640&q=75"
          />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="300" />
          {details?.map((blog:any) => (
            <script
              key={blog?._id}
              type="application/ld+json"
              dangerouslySetInnerHTML={generateBlogSchema(blog)}
            />
          ))}
          {/* <link rel="canonical" href={canonicalUrl} /> */}
        </Head>
        {/* <Header
          search={true}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        /> */}
         <>
            <div className={styles.section1}>
              <div className={styles.subheadingContainer}>
                <div className={styles.iconContainer}>
                  <Image
                    src={headingIcon}
                    alt="Untrade: Automated Crypto Trading AI Bot"
                  />
                </div>
                <p className={source_sans.className}>Trending articles</p>
              </div>
              <div className={styles.carouselContainer}>
                <CarouselComponent trending={trending} />
              </div>
            </div>
            <div>
              <hr className={styles.horizontalLine}></hr>
            </div>
            
            <div className={styles.section2}>
              <CategoriesSection cat={cat} setCategoryName={setCategoryName} 
              pageName="blogs"  
              tagCategory="blog"
               
              />
              <div className={styles.blogSection}>
                <div className={styles.blogSectionPart1}>
                  <h1 className={`${styles.blogTitle} ${poppins.className}`}>
                    Blog
                  </h1>
                  {/* <div className={styles.search_box}>
                    <input
                      type="search"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {icons.search_icon}
                  </div> */}
                </div>
                {details?.length > 0 ? (
                  <>
                    <div className={styles.blogSectionPart2}>
                      <BlogCard1 blogsData={details} />
                    </div>
                    <div className={styles.buttonContainer}>
                      {hasMoreCards && (
                        <div
                          onClick={loadMoreBlogs}
                          className={styles.readmoreButton}
                        >
                          <p>
                            {loader
                              ? "Loading..."
                              : page > totalPages
                              ? "No More Articles"
                              : "Read More Articles"}
                          </p>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  // Show message if no blogs are found
                  <div className={styles.noBlogsMessage}>
                    <p>
                      Displaying <span style={{ color: "#0501FF" }}>0</span>{" "}
                      Results
                    </p>
                    <div className={styles.noResult}>
                      <div className={styles.iconWrapper}>
                        {icons.search_icon}
                      </div>
                      <p className={styles.boldText}>No result Found</p>
                      <p className={styles.contentText}>
                        Try searching something else.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* <EmailRegister /> */}
            <br />
            <br />
            <br />
            {/* <FooterHead />
            <HomeFooter /> */}
            <BrowseCategory
              isOpen={isSidebarOpen}
              onClose={handleCloseSideBar}
              categories={cat}
              pageName="blogs"  
              tagCategory="blog"
            />
            {/* <AnimatePresence mode="wait"> */}
              <div className={styles.browsebutton}>
                <div className={styles.browse} onClick={handleOpenSideBar}>
                  Browse Category
                </div>
              </div>
            {/* </AnimatePresence> */}
          </>

        {/* {isLoading ? (
          <FullScreenUntradeLoader />
        ) : (
         
        )} */}
      </div>
    </>
  );
};

export default BlogsNew;
