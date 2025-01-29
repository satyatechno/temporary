"use client";
import React from "react";
import { useState } from "react";
import styles from "./browsecategory.module.scss";
// import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { icons, 
    // menuSlide 
} from "@/utils/Utils";

const BrowseCategory = ({ isOpen, onClose, categories,pageName,tagCategory }:any) => {

  const pathname = usePathname();
  const lastSegment = pathname?.split("/").filter(Boolean).pop();
  const [activeCategory, setActiveCategory] = useState(lastSegment);

  if (!isOpen) return null;

  const handleCategoryClick = (slug:any) => {
    setActiveCategory(slug);
    onClose();
  };

  console.log("categories", {isOpen, onClose, categories,pageName,tagCategory});

  return (
    <div
    //   variants={menuSlide}
    //   initial="initial"
    //   animate="enter"
    //   exit="exit"
      className={styles.menu}
    >
      <div className={styles.sidebarContainer}>
        <div className={styles.close} onClick={onClose}>
          {icons.cross_icon}
        </div>
        <div className={styles.categoriesSection}>
          <p className={styles.title}>BROWSE CATEGORIES</p>
          <div className={styles.categories}>
            {categories?.map(({ slug, title,_id }:any) => (
              <Link href={`/${pageName}/${tagCategory}-category/${slug}?id=${_id}`} key={slug}>
                <div
                  className={`${styles.category} ${
                    activeCategory === slug ? styles.active : ""
                  }`}
                  onClick={() => handleCategoryClick(slug)}
                >
                  <p>{title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCategory;
