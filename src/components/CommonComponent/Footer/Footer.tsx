'use client'
import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import config from "../../../../config";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  
  const pathname = usePathname();
  const noHeaderFooterPaths = ["/userwallet",'/not-found'];

  const shouldShowHeaderFooter = !noHeaderFooterPaths.includes(pathname);

  if(!shouldShowHeaderFooter){
    return null;
  }

  return (
    <>
      <footer className={styles.footerDesktop}>
        <div className={`container-1280 ${styles.mainContainer}`}>
          <div className={`row ${styles.footerLogo}`}>
            <div className="col-lg-2">
              <Link
                href="javascript:void(0)"
                className={`navbar-brand ${styles.footer_logo}`}
                // onClick={(e) => {
                //   e.preventDefault();
                // }}
              >
                <Image
                  src={`${config.imageDomain}Assets/logo.webp`}
                  alt="Gaming Arcade Logo"
                  height={80}
                  width={80}
                  style={{width:"100%"}}
                  // onClick={() => {
                  //   window.scrollTo(0, 0);
                  // }}
                />
                
              </Link>
            </div>
            <div className="col-lg-10">
              <span className={styles.gradientBar}>
                <Image
                  src={`${config.imageDomain}Assets/bar.webp`}
                  className="img-fluid"
                  alt="bar"
                  height={8}
                  width={80}
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
                  <Link href={{ pathname: "/terms-of-use" }}>
                    Terms Of Use
                  </Link>
                </li>
                <li>
                  <Link href={{ pathname: "/cookie-policy" }}>
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href={{ pathname: "/privacy-policy" }}>
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
                  <Link
                    href="https://www.instagram.com/gamingarcade.io/"
                    target="_blank"
                  >
                    {/* <i className="fa fa-instagram" aria-hidden="true"></i> */}
                    {/* <InstagramIcon /> */}
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/GamingArcade_io" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                      fill="white"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    // onClick={(e) => {
                    //   e.preventDefault();
                    // }}
                    href="https://www.youtube.com/@gamingarcade_io"
                    target="_blank"
                  >
                    {/* <i className="fa fa-youtube-square" aria-hidden="true"></i> */}
                    {/* <YouTubeIcon /> */}
                  </Link>
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
                  href={{ pathname: "/terms-of-use" }}
                >
                  Terms & Condition
                </Link>
                Applied
              </p>
            </div>
          </div>
          <div className={`row ${styles.btmBar} ${styles.madeTxt}`}>
            <Link
              href="https://zeltatech.com"
              className={styles.footerCopyright}
            >
              <p className={`${styles.std_p} ${styles.light}`}>
                Made with ❤ by Gaming arcade.
              </p>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
