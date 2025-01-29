"use client";
import React, { useEffect, useState } from "react";
import styles from "./categorysection.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { poppins, source_sans } from "@/app/layout";

const CategoriesSection = ({ cat, type, setCategoryName,pageName,tagCategory}:any) => {
  const pathname = usePathname();
  const lastSegment = pathname?.split("/").filter(Boolean).pop();
  const [activeCategory, setActiveCategory] = useState(lastSegment);

  useEffect(() => {
    setCategoryName(cat?.find((c:any) => c.slug === activeCategory)?.title);
  }, []);
  console.log("catcatcat",cat,activeCategory)

  return (
    <div className={styles.categoriesSection}>
      <p className={`${styles.title} ${source_sans.className}`}>
        BROWSE {type ? "TAGS" : "CATEGORIES"}
      </p>
      <div className={styles.categories}>
        {cat?.map(({ slug, title,_id }:any) => (
          <Link
            key={slug} 
            href={
              type ? `/${pageName}/${tagCategory}-tag/${slug}?id=${_id}` : `/${pageName}/${tagCategory}-category/${slug}?id=${_id}`
            }
          >
            <div
              className={`${styles.category} ${
                activeCategory === slug ? styles.active : ""
              }`}
              onClick={() => {
                setActiveCategory(slug);
              }}
            >
              <p className={poppins.className}>{title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
