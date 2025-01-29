import React from "react";
import { notFound } from "next/navigation";
import config from "../../../../../config";
import CategoryPage from "./CategoryPage";

async function getData(slug: any,id:any) {
  const [dataRes, tagRes] = await Promise.all([
    fetch(`${config.baseURL}blog?category=${id}`),
    fetch(`${config.baseURL}category?all=true&isDeleted=false`)
  ]);

  if (!dataRes.ok || !tagRes.ok || !slug) {
    notFound();
  }

  const [data, tag] = await Promise.all([dataRes.json(), tagRes.json()]);

  if (!data || data.data.length === 0) {
    return notFound(); // Return 404 if no blogs are found for the category slug
  }
  console.log("dataRes", dataRes, "data", data);
  return { data, tag };
}

export default async function blogcategory({ params,searchParams }: any) {
  const { slug } = await params;
  const {id} =await searchParams || "default"; 

  const { data, tag } = await getData(slug,id);
  // console.log("catergory-page",data,tag,slug)
  console.log("catergory-page",data)
  return <CategoryPage data={data} tag={tag} slug={slug} />;
}
