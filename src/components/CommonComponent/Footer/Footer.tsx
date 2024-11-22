"use client";
import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import config from "../../../../config";
// import Whitepaper from '../../../public/Assets/Gaming_Arcade_Whitepaper_compressed.pdf'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  const openInNewTab = (url: any) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <footer className={styles.footerDesktop}>
        <div className={`container-1280 ${styles.mainContainer}`}>
          <div className={`row ${styles.footerLogo}`}>
            <div className="col-lg-2">
              <Link
                href="javascript:void(0)"
                className={`navbar-brand ${styles.footer_logo}`}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <img
                  src={`${config.imageDomain}Assets/logo.webp`}
                  alt="Gaming Arcade Logo"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                />
              </Link>
            </div>
            <div className="col-lg-10">
              <span className={styles.gradientBar}>
                <img
                  src={`${config.imageDomain}Assets/bar.webp`}
                  className="img-fluid"
                  alt="bar"
                />
              </span>
            </div>
          </div>

          <div
            className={`${styles.footer_content_container} ${styles.footerLinksWraper}`}
          >
            <div className="col-lg-2 col-md-6 col-6">
              <p className={styles.std_p}>Company</p>
              <ul className={styles.footerList}>
                <li>
                  <Link href={{ pathname: "/" }}> Home </Link>
                </li>
                {/* <li>
                  <Link href={{ pathname: "/about" }}>About Us</Link>
                </li> */}
                {/* <li>
                  <Link href={{ pathname: "/integration-service" }}>Integration Services</Link>
                </li> */}
                {/* <li>
                  <Link href={{ pathname: "/media-assets" }}>Media Assets</Link>
                </li> */}
                <li>
                  <Link href={{ pathname: "/contact-us" }}>Contact Us</Link>
                </li>
                <li>
                  <Link href={{ pathname: "/about" }}>About Us</Link>
                </li>
                <li>
                  <Link href={{ pathname: "/blogs" }}>Blogs</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 col-6">
              <p className={styles.std_p}>Play</p>
              <ul className={styles.footerList}>
                <li>
                  <Link href={{ pathname: "/games" }}> Explore Games </Link>
                </li>
                <li>
                  <Link href={{ pathname: "/tournament" }}> Tournament </Link>
                </li>
                <li>
                  <Link href={{ pathname: "/nft" }}>NFT's</Link>
                </li>
                <li>
                  <Link href={{ pathname: "/dashboard" }}>Dashboard</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 col-6">
              <p className={styles.std_p}>Resources</p>
              <ul className={styles.footerList}>
                {/* <li>
                  <Link href={{ pathname: "/blogs" }}>Blogs</Link>
                </li> */}
                {/* <li>
                  <Link href={{ pathname: "/Roadmap" }}>RoadMap</Link>
                </li> */}
                {/* <li>
                  <Link href={{ pathname: "/developer" }}>Developer Docs</Link>
                </li> */}
                <li>
                  <a href="https://gamingarcade.gitbook.io/gamingarcade.io/">
                    Gitbook
                  </a>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: `${config.imageDomain}/Assets/Gaming_Arcade_Whitepaper_compressed.pdf`,
                    }}
                    target="_blank"
                  >
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <Link href={{ pathname: "/media-assets" }}>Media Assets</Link>
                </li>
                <li>
                  <Link href={{ pathname: "integration-service" }}>
                    Integration Services
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 col-6">
              <p className={styles.std_p}>Useful Links</p>
              <ul className={styles.footerList}>
                {/* <li>
                  <Link href={{ pathname: "/faq" }}>FAQ's</Link>
                </li> */}
                <li>
                  <Link href={{ pathname: "/contact-support" }}>
                    Contact Support
                  </Link>
                </li>

                <li>
                  <Link href={{ pathname: "/policy/terms-of-use" }}>
                    Terms Of Use
                  </Link>
                </li>
                <li>
                  <Link href={{ pathname: "/policy/cookie-policy" }}>
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href={{ pathname: "/policy/privacy-policy" }}>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-2 col-md-6 col-sm-12">
              <p className={styles.std_p}>Follow Us on</p>
              <ul className={`${styles.footerList} ${styles.icons}`}>
                {/* <li>
                  <a href="https://www.facebook.com/thegamingarcade.io" target="_blank">
                    <FacebookIcon />
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.instagram.com/gamingarcade.io/"
                    target="_blank"
                  >
                    {/* <i className="fa fa-instagram" aria-hidden="true"></i> */}
                    {/* <InstagramIcon /> */}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/GamingArcade_io" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                      fill="white"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    // onClick={(e) => {
                    //   e.preventDefault();
                    // }}
                    href="https://www.youtube.com/@gamingarcade_io"
                    target="_blank"
                  >
                    {/* <i className="fa fa-youtube-square" aria-hidden="true"></i> */}
                    {/* <YouTubeIcon /> */}
                  </a>
                </li>

                <li>
                  <a href="https://discord.gg/BBYfBxf4aF" target="_blank">
                    {/* <i class="fab fa-discord"></i> */}
                    <img
                      style={{ height: "35px", marginBottom: "-32px" }}
                      src="https://assets.gamingarcade.io/loading-images/discordIconNew.webp"
                      alt=""
                    />
                  </a>
                  {/* https://www.youtube.com/@gamingarcade_io */}
                </li>
              </ul>
            </div>
          </div>
          <div className={`row ${styles.copyRihgtText}`}>
            <div className="col-lg-7">
              <p className={`${styles.std_p} ${styles.light}`}>
                ©{new Date().getFullYear()}. All rights reserved. Gaming Arcade.
                <Link
                  className="m-1"
                  href={{ pathname: "/policy/terms-of-use" }}
                >
                  Terms & Condition
                </Link>
                Applied
              </p>
            </div>
          </div>
          <div className={`row ${styles.btmBar} ${styles.madeTxt}`}>
            <a
              className={styles.footerCopyright}
              onClick={() => openInNewTab("https://zeltatech.com")}
            >
              <p className={`${styles.std_p} ${styles.light}`}>
                Made with ❤ by Gaming arcade.
              </p>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
