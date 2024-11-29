import config from "../../config";

export const header_element = [
  //   {
  //     title: "Home",
  //     link: "/",
  //   },
  {
    title: "Explore Games",
    link: "/games",
  },
  {
    title: "Tournament",
    link: "/tournament",
  },
  {
    title: "Dashboard",
    link: "/dashboard",
  },
];


interface gameCarousel {
  name: string;
  backgroundImage: string;
  IconImage: string;
}
// export const defaultGame: gameCarousel = [
//   {
//     name: "HelixJump",
//     backgroundImage:
//       "https://assets.gamingarcade.io/loading-images/helixJumpBg.webp",
//     IconImage:
//       "https://assets.gamingarcade.io/loading-images/HelixJump-logo.webp",
//   },
// ];
