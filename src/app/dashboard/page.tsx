import Dashboard from "./DashboardClient";

{
// type DashboardData = {
//   tournamentHistoryData?: any;
// };

// export async function fetchDashboardTournamentHistoryData(
//   token: string
// ): Promise<DashboardData | null> {
//   const baseUrl = config.baseURL;
//   try {
//     const response = await fetch(`${baseUrl}tournament/user-history/main`, {
//       cache:"force-cache",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }); // Use `no-store` to avoid caching if needed
//     if (!response.ok) {
//       throw new Error("Failed to fetch home data");
//     }
//     const data = await response.json();
//     return data?.data?.participates;
//   } catch (error) {
//     console.error("Error fetching home data:", error);
//     return null;
//   }
// }


// not in use (need brainstrom)

// export  async function fetchDashboardGameHistoryData(token: string): Promise<DashboardData | null>{
//   const baseUrl = config.baseURL;
//   try {
//     const response = await fetch(`${baseUrl}tournament/user-history/main`, { cache: "no-store",
//      headers: {
//       Authorization: `Bearer ${token}`,
//     }, }); // Use `no-store` to avoid caching if needed
//     if (!response.ok) {
//       throw new Error("Failed to fetch home data");
//     }
//     const data = await response.json();
//     return data?.data?.participates;
//   } catch (error) {
//     console.error("Error fetching home data:", error);
//     return null;
//   }
// }
}


//  async function fetchUserDetails(token: string) {
//   const baseUrl = config.baseURL;
//   try {
//     const response = await fetch(`${baseUrl}user/get/details`, {
//       cache:"force-cache",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }); // Use `no-store` to avoid caching if needed
//     if (!response.ok) {
//       throw new Error("Failed to fetch home data");
//     }
//     const data = await response.json();
//     return data?.data;
//   } catch (error) {
//     console.error("Error fetching home data:", error);
//     return null;
//   }
// }

export default async function Pages() {

    return <Dashboard />;
  }


  // const cookiesData = cookies();
  // const token =cookiesData.get("userToken")?.value;

  // if (!token) {
  //   console.error("Token is missing");
  //   return <div>You need to log in to view this page.</div>;
  // }

  // const tournamentHistoryData = await fetchDashboardTournamentHistoryData(token);

  // console.log(tournamentHistoryData,"checking for games")
