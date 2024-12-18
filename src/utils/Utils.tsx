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

export const sideBarData=[
  {
      src:"Assets/manageWalletHomeIcon.webp",
      title:"Manage Wallet",
      modalType:""
  },
  {
      src:"Assets/importWalletIcon.webp",
      title:"Link Wallet",
      modalType:"linkWallet"

  },
  {
      src:"Assets/importKeyBellIcon.webp",
      title:"Show private key",
      modalType:"settings"

  },
  {
      src:"Assets/importAccoutIcon.webp",
      title:"Import Account",
      modalType:"linkWallet"

  }
]
export const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/thegamingarcade.io",
    image: "fb.webp",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/gamingarcade.io/",
    image: "insta.webp",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/GamingArcade_io",
    image: "twi.webp",
  },
  { name: "Discord", url: "https://discord.gg/BBYfBxf4aF", image: "ga.webp" },
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


export const marqueeImages = [
  {
    src: "https://assets.gamingarcade.io/Assets/iconsMarqee.png",
  },
  {
    src: "https://assets.gamingarcade.io/Assets/iconsMarqee.png",
  },
  {
    src: "https://assets.gamingarcade.io/Assets/iconsMarqee.png",
  },
  {
    src: "https://assets.gamingarcade.io/Assets/iconsMarqee.png",
  },
];