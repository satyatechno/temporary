// import config from "../../config";

export const icons = {

cross_icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
  >
    <path
      d="M18.2324 6.98438L6.23242 18.9844M18.2324 18.9844L6.23242 6.98438"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
),
search_icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="23"
    viewBox="0 0 29 29"
    fill="none"
  >
    <path
      d="M14.1853 26.2137C21.1104 26.2137 26.7242 20.5999 26.7242 13.6748C26.7242 6.74982 21.1104 1.13599 14.1853 1.13599C7.26032 1.13599 1.64648 6.74982 1.64648 13.6748C1.64648 20.5999 7.26032 26.2137 14.1853 26.2137Z"
      stroke="white"
      strokeWidth="2.15198"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M23.209 22.6989L27.4699 26.9598"
      stroke="white"
      strokeWidth="2.15198"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
),

}

export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

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

export const sideBarData = [
  {
    src: "Assets/manageWalletHomeIcon.webp",
    title: "Manage Wallet",
    modalType: "",
  },
  {
    src: "Assets/importWalletIcon.webp",
    title: "Link Wallet",
    modalType: "linkWallet",
  },
  {
    src: "Assets/importKeyBellIcon.webp",
    title: "Show private key",
    modalType: "settings",
  },
  {
    src: "Assets/importAccoutIcon.webp",
    title: "Import Account",
    modalType: "linkWallet",
  },
];
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
// interface gameCarousel {
//   name: string;
//   backgroundImage: string;
//   IconImage: string;
// }
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

export const CommunityData = [
  {
    id: "1",
    title: "Discord",
    link: "https://discord.com/invite/BBYfBxf4aF",
    iconLink: "https://assets.gamingarcade.io/Assets/discordIcon.png",
  },
  {
    id: "2",
    title: "Twitter",
    link: "https://x.com/GamingArcade_io",
    iconLink: "https://assets.gamingarcade.io/Assets/discordIcon.png",
  },
  {
    id: "3",
    title: "Instagram",
    link: "https://www.instagram.com/gamingarcade.io/",
    iconLink: "https://assets.gamingarcade.io/Assets/discordIcon.png",
  },
  {
    id: "4",
    title: "Facebook",
    link: "https://www.facebook.com/thegamingarcade.io",
    iconLink: "https://assets.gamingarcade.io/Assets/discordIcon.png",
  },
];

export const communityAboutData = [
  {
    id: "1",
    title: "Privacy Policy",
    link: "",
    iconLink: "https://assets.gamingarcade.io/Assets/privacyPolicyIcon.png",
  },
  {
    id: "2",
    title: "Terms & Conditions",
    link: "",
    iconLink: "https://assets.gamingarcade.io/Assets/termsAndConditionIcon.png",
  },
];
