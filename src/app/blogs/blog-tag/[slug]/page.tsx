import React from "react";
// import TagPage from "./TagPage";
import { notFound } from "next/navigation";
import config from "../../../../../config";
import TagPage from "./TagPage";


async function getData(id:any) {
  const [dataRes, catRes, 
    // tagRes
  ] = await Promise.all([
    fetch(`${config.baseURL}blog?tag=${id}`, {
      cache: "no-store",
    }),
    fetch(`${config.baseURL}category`, {
      cache: "no-store",
    }),
    // fetch(`${config.baseURL}/api/v1/blogs/tag/all`, {
    //   cache: "no-store",
    // }),
  ]);

  if (!dataRes.ok || !catRes.ok || !id
    //  !tagRes.ok 
) {
    notFound();
  }
  console.log("conditionss",!dataRes.ok || !catRes.ok || !id)

  const [data, cat,
    //  tag
    ] = await Promise.all([
    dataRes.json(),
    catRes.json(),
    // tagRes.json(),
  ]);
  // if (!data || data.data.data.length === 0) {
  //   return notFound(); // Return 404 if no blogs are found for the category slug
  // }
  return { data, cat,
    //  tag
     };
}

export default async function PageTag({ params,searchParams }:any) {
  const { slug } =await params;
  const {id} =await searchParams || "default"; 

  const { data, cat } = await getData(id);

  console.log("slugslug", data, slug,cat);
  return <TagPage initialData={data} initialTag={cat} slug={slug} />;
}
