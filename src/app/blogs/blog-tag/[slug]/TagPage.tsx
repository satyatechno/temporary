"use client";
import { useEffect, useState } from "react";
import styles from "./blogtag.module.scss";
import axios from "axios";
import { poppins } from "@/app/layout";
import Head from "next/head";
import config from "../../../../../config";
import BrowseCategory from "@/components/Blogs/BrowseCategory/BrowseCategory";
import { icons } from "@/utils/Utils";
import CategoriesSection from "@/components/Blogs/CategorySection/CategorySection";
import BlogCard1 from "@/components/Blogs/BlogCard1/BlogCard1";

export default function TagPage({ initialData, initialTag }: any) {
  // const { slug } = router.query;

  const [details, setDetails] = useState([]);
  const [cat, setCat] = useState([]);
  //   const [blogSearch, setBlogSearch] = useState("");
  // const [tags, setTags] = useState([]);
  // const [page, setPage] = useState(0);
  // const limit = 8;
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  //   const [tagsData, setTagsData] = useState([]);

  const [searchQuery, setSearchQuery] = useState(""); // Immediate search input
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(""); // Debounced search input
  // const [value, setValue] = useState(8);
  const [isLoading, setIsLoading] = useState(true); // Initially set to true
  // const [totalBlogs, setTotalBlogs] = useState(0);
  // const [totalPages, setTotalPages] = useState(0);
  const [loader, setLoader] = useState(false);
  // const [blogsData, setBlogsData] = useState([]);
  const [cards, setCards] = useState([]);
  const [tagName, setTagName] = useState("");

  console.log(isLoading,loader)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const fetchBlogs = () => {
    setLoader(true);
    if (!debouncedSearchQuery) return;

    axios
      .get(`${config.baseURL}blogs?title=${debouncedSearchQuery}`)
      .then((response) => {
        console.log("response", response.data.data);
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

  const fetchBlogsByTag = () => {
    setLoader(true);
    axios
      .get(`${config.baseURL}tags`)
      .then((response) => {
        console.log("response-tag", response.data.data?.response);
        if (response.data.data && response.data.data.data) {
          setDetails(response.data.data?.response);
          // if (page > 1) {
          //   setBlogsData((prev) => [...prev, ...response.data.data.data]);
          // } else {
          //   setBlogsData(response.data.data.data);
          // }
          // setTotalBlogs(response.data.data.pagination.total_results);
          // setTotalPages(response.data.data.pagination.total_pages);
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

  useEffect(() => {
    fetchBlogsByTag();
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

  useEffect(() => {
    if (initialData) {
      setDetails(initialData.data.response);
    }
  }, [initialData]);

  // const hasMoreCards = (page + 1) * limit < initialData?.data?.length;
  console.log("tag-details", details,cat);
  useEffect(() => {
    if (initialTag) {
      setCat(initialTag.data?.response);
    } else {
      console.log("Data not found");
    }
  }, [initialTag]);

  // useEffect(() => {
  //   axios.get(`${config.baseURL}/api/v1/blogs/tag/all`).then((response) => {
  //     console.log("Tags data:", response.data.data);
  //     setTags(response.data.data);
  //   });
  // }, []);

  // const handleCategoryClick = (slug) => {
  //   setActiveTag(slug);
  // };

  const handleOpenSideBar = () => {
    setSidebarOpen(true);
  };

  const handleCloseSideBar = () => {
    setSidebarOpen(false);
  };

  // useEffect(() => {
  //   if (initialTag) {
  //     setTags(initialTag.data);
  //   }
  // }, []);

  // const loadMoreBlogs = () => {
  //   if (!isLoading && page <= totalPages) {
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
        {/* <Navbar /> */}
        <div className={styles.section2}>
          {/* <div className={styles.categoriesSection}>
          <p className={styles.title}>BROWSE TAGS</p>
          <div className={styles.categories}>
            {tags?.map((tag) => (
              // <div className={styles.category}>
              //   <Link href={`/blogs/blog-tag/${tag.slug}`}>
              //     <p>{tag.title}</p>
              //   </Link>
              // </div>
              <Link href={`/blogs/blog-tag/${tag.slug}`}>
                <div
                  key={tag.slug}
                  className={`${styles.category} ${
                    activeTag === tag.slug ? styles.active : ""
                  }`}
                  onClick={() => {
                    handleCategoryClick(tag.slug);
                  }}
                >
                  <p>{tag.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div> */}
          <CategoriesSection
            cat={cat}
            type={true}
            setCategoryName={setTagName}
            pageName="blogs"
            tagCategory="blog"
          />
          <div className={styles.blogSection}>
            <div className={styles.blogSectionPart1}>
              <div className={`${styles.blogTitle} ${poppins.className}`}>
                {tagName}
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
                {/* <div className={styles.buttonContainer}>
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
                </div> */}
              </>
            ) : (
              // Show message if no blogs are found
              <div className={styles.noBlogsMessage}>
                <p>
                  Displaying <span style={{ color: "#0501FF" }}>0</span> Results
                </p>
                <div className={styles.noResult}>
                  <div className={styles.iconWrapper}>{icons.search_icon}</div>
                  <p className={styles.boldText}>No result Found</p>
                  <p className={styles.contentText}>
                    Try searching something else.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <BrowseCategory
          isOpen={isSidebarOpen}
          onClose={handleCloseSideBar}
          categories={cat}
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
}
