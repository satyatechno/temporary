"use client";

import React, { useState, useEffect } from "react";
import styles from "./blogcategory.module.scss";

import { poppins } from "@/app/layout";
import Head from "next/head";
import axios from "axios";
import config from "../../../../../config";
import BrowseCategory from "@/components/Blogs/BrowseCategory/BrowseCategory";
import { icons } from "@/utils/Utils";
import BlogCard1 from "@/components/Blogs/BlogCard1/BlogCard1";
import CategoriesSection from "@/components/Blogs/CategorySection/CategorySection";

const CategoryPage = ({ data, tag, slug }:any) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Immediate search input
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(""); // Debounced search input
  const [details, setDetails] = useState([]);
  // const [page, setPage] = useState(1);
  // const [value, setValue] = useState(8);
  const [isLoading, setIsLoading] = useState(true); // Initially set to true
  // const [totalBlogs, setTotalBlogs] = useState(0);
  // const [totalPages, setTotalPages] = useState(0);
  const [loader, setLoader] = useState(false);
  // const [blogsData, setBlogsData] = useState([]);
  const [cards, setCards] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  console.log(loader,isLoading);
  
  const handleOpenSideBar = () => {
    setSidebarOpen(true);
  };

  const handleCloseSideBar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (data) {
      setDetails(data?.data?.response);
    }
  }, [data]); 

  // const hasMoreCards = blogsData.length < totalBlogs;


  const fetchBlogs = () => {
    setLoader(true);

    axios
      .get(`${config.baseURL}blogs?title=${debouncedSearchQuery}`)
      .then((response) => {
        if (response.data.data && response.data.data.data) {
          setCards(response.data.data.data);
        } else {
          console.log(
            "No more blogs to load or incorrect data structure:",
            response.data.data.data
          );
        }
      })
      .catch((error) => console.error("Error fetching blogs:", error))
      .finally(() => {
        setLoader(false);
      });
  };

  // const fetchBlogsByCategory = () => {
  //   setLoader(true);
  //   axios
  //     .get(
  //       `${config.baseURL}blogs/by-category?slug=${slug}&page=1&limit=${value}`
  //     )
  //     .then((response) => {
  //       if (response.data.data && response.data.data.data) {
  //         setDetails(response.data.data.response);
  //         if (page > 1) {
  //           setBlogsData((prev) => [...prev, ...response.data.data.data]);
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
  const fetchBlogsByCategory = async () => {
    try {
      setLoader(true);
  
      if (!slug) {
        console.error("Slug is undefined. Cannot fetch blogs.");
        return;
      }
  
      const { data } = await axios.get(
        `${config.baseURL}blogs/by-category?slug=${slug}`
      );
  
      if (!data?.data) {
        console.error("Invalid API response:", data);
        return;
      }
  
      const blogDetails = data.data.response || [];
      // const blogList = data.data.data || [];
  
      setDetails(blogDetails);
  
      // setBlogsData((prev) => (page > 1 ? [...prev, ...blogList] : blogList));
  
      // setTotalBlogs(data.data.pagination?.total_results || 0);
      // setTotalPages(data.data.pagination?.total_pages || 0);
    } catch (error:any) {
      console.error("Error fetching blogs:", error.message || error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchBlogsByCategory();
  }, []);

  // Debouncing search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 700); // Delay of 500ms

    return () => {
      clearTimeout(handler); // Cleanup the timeout if input changes
    };
  }, [searchQuery]);

  useEffect(() => {
    fetchBlogs();
  }, [debouncedSearchQuery]);

  // const loadMoreBlogs = () => {
  //   if (!isLoading && page <= totalPages) {
  //     // setPage((prevPage) => prevPage + 1);
  //     setValue((prevValue) => prevValue + 8);
  //   }
  // };

  const noBlogsAvailable =
    (!debouncedSearchQuery && details.length === 0) ||
    (debouncedSearchQuery && cards.length === 0);

  return (
    <>
      {noBlogsAvailable && (
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
      )}
      {/* {isLoading ? (
        <FullScreenUntradeLoader />
      ) : (
        
      )} */}
      <div className={styles.categorySectionContainer}>
          {/* <div className={styles.support_icon}>
            <SupportIconDesktop />
          </div>
          <div className={styles.support_icon_mob}>
            <SupportIcon />
          </div> */}
          <div className={styles.section2}>
            <CategoriesSection
              cat={tag?.data?.response}
              setCategoryName={setCategoryName}
              pageName='blogs'
              tagCategory="blog"

            />
            <div className={styles.blogSection}>
              <div className={styles.blogSectionPart1}>
                <div className={`${styles.blogTitle} ${poppins.className}`}>
                  {categoryName}
                </div>
                <div className={styles.search_box}>
                  <input
                    type="search"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {icons.search_icon}
                </div>
              </div>
              {!noBlogsAvailable ? (
                <>
                  <div className={styles.blogSectionPart2}>
                    <BlogCard1
                      blogsData={debouncedSearchQuery ? cards : details}
                    />
                  </div>
                  <div className={styles.buttonContainer}>
                    {/* {hasMoreCards && (
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
                    )} */}
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
          <br />
          <br />
          <br />
          <BrowseCategory
            isOpen={isSidebarOpen}
            onClose={handleCloseSideBar}
            categories={tag.data}
            pageName="blogs"  
            tagCategory="blog"
          />
          <div className={styles.browsebutton}>
            <div className={styles.browse} onClick={handleOpenSideBar}>
              Browse Category
            </div>
          </div>
        </div>
    </>
  );
};

export default CategoryPage;
