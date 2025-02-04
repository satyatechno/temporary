'use server';

import config from '../../../config';

export async function fetchGames(fetchOptions?: RequestInit) {
  const baseUrl = config.baseURL;
  try {
    const response = await fetch(`${baseUrl}games`, {
      ...fetchOptions, 
      cache: "force-cache",// add for caching 
    }); // Use `no-store` to avoid caching if needed
    if (!response.ok) {
      throw new Error('Failed to fetch home data');
    }
    const data = await response.json();
    return data?.data;
  } catch (error) {
    console.error('Error fetching home data:', error);
    return null;
  }
}


// export async function generateStaticParams() {
//   // Fetch all slugs for static generation
//   const response = await fetch(`${config.baseURL}games`, {
//     cache: "no-store",
//   });
  
//   if (!response.ok) {
//     throw new Error("Failed to fetch blog slugs");
//   }

//   const blogs = await response.json();

//   // Extract slugs from the API response
//   const slugs = blogs?.data?.blogs?.map((blog:any) => ({ slug: blog.slug })) || [];

//   return slugs;
// }