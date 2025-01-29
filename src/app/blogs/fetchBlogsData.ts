import config from "../../../config";

export async function fetchBlogsData({ page = 1 }) {
  const [dataRes, tagRes] = await Promise.all([
    fetch(`${config.baseURL}blog?isPublic=true&page=${page}`, {
      cache: "no-store",
    }),
    fetch(`${config.baseURL}category?all=true&isDeleted=false`, {
      cache: "no-store",
    }),
  ]);

  const [data, tag] = await Promise.all([dataRes.json(), tagRes.json()]);
  return {
    data,
    tag,
  };
}