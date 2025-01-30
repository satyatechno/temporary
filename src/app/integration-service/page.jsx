import React from "react";
// import useIteraion from "../Hooks/useIntegraion";
import config from "../../../config";
import Head from "next/head";
import styles from "./integrationservice.module.scss";
import Image from "next/image";
// import { useRouter } from "next/router";

function IntegrationService() {
  //   const { onSubmit, fields, setFields } = useIteraion();
  //   const router = useRouter();
  //   const canonicalUrl = `https://gamingarcade.io${router.asPath}`;
  //   console.log("canonical", canonicalUrl);

  function schemaOrganisation() {
    return {
      __html: `{
       "@context" : "https://schema.org",
      "@type" :"Organization",
      "name":"Gaming Arcade",
      "url" : "https://gamingarcade.io",
      "logo" : "https://assets.gamingarcade.io/Assets/logo.webp",
      "description": "Dive into the ultimate Gaming Arcade experience. Play to win real crypto rewards, explore Web3 gaming, and join our thriving community of casual gamers and crypto enthusiasts!",
      "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "email": "hello@gamingarcade.io",
            "areaServed": "All Over World"
        },
                "sameAs": ["https://twitter.com/GamingArcade_io", "https://www.instagram.com/gamingarcade.io/", "https://discord.gg/Y347B99a9g", "https://www.linkedin.com/showcase/gaming-arcade", "https://www.facebook.com/thegamingarcade.io", "https://gamingarcade.io"]
       
      }`,
    };
  }

  return (
    <>
      <Head>
        <title>
          Gaming Arcade Integration - Bring Your Games to the Web3 Era
        </title>
        <meta
          name="title"
          content="Gaming Arcade Integration - Bring Your Games to the Web3 Era"
        />
        <meta
          name="description"
          content="Integrate your games into Gaming Arcade’s platform, enabling crypto rewards and tapping into the world of Web3 gaming. Expand your reach with our seamless integration services."
        />
        <meta
          name="keywords"
          content="Crypto gaming integration,
            Blockchain API services,
            Web3 integration solutions,
            Play to earn API,
            Gaming platform integration,
            Crypto payment gateway"
        />
        <meta
          property="og:url"
          content="https://gamingarcade.io/integration-service"
        />
        <meta
          property="og:description"
          content="Integrate your games into Gaming Arcade’s platform, enabling crypto rewards and tapping into the world of Web3 gaming. Expand your reach with our seamless integration services."
        />
        <meta
          property="og:title"
          content="Gaming Arcade Integration - Bring Your Games to the Web3 Era"
        />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="894682138254327" />
        <meta
          property="og:image"
          content="https://assets.gamingarcade.io/Assets/mobile-new.png"
        />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={schemaOrganisation()}
        />
        {/* <link rel="canonical" href={canonicalUrl} /> */}
      </Head>

      <div className={styles.integratServiceMain}>
        <section className={`${styles.sectionBanner} ${styles.servicesBanner}`}>
          <div className="container-1280">
            <div className="row">
              <div className="col-lg-12">
                <h2>Integration</h2>
                <h3>Services</h3>
                <p>
                  Let our expert development team seamlessly integrate games and
                  gamification into your mobile or web app. GamingArcade.io
                  ensures a professional touch throughout the integration
                  process
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.customContent}>
          <div className="container-1280">
            <div className={`row ${styles.upper_row}`}>
              <div className={styles.column_lg_4}>
                <div className={styles.customBody}>
                  <h3>Customized Games</h3>
                  <p>
                    {` Empower developers with Gaming Arcade's SDK, allowing
                    effortless creation and customization of games tailored to
                    their specifications. Whether it's free-to-play, open play,
                    or customized stake-based gaming, easily integrate them onto
                    the Gaming Arcade platform.`}
                  </p>
                </div>
                <div className={styles.customBody}>
                  <h3>Daily Visits</h3>
                  <p>
                    {`Stay ahead with your game analytics using Gaming Arcade's
                    intuitive analytics dashboard. Monitor daily visits, track
                    the number of games played, winnings, and all the statistics
                    you can imagine to keep your game at the forefront.`}
                  </p>
                </div>
              </div>

              <div className={styles.column_lg_4}>
                <div className={styles.imgBody}>
                  <Image
                    src={`${config.imageDomain}Assets/mobile-new.webp`}
                    alt="INTELLIGENCE SUITE - Gaming Arcade"
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className={styles.column_lg_4}>
                <div className={styles.customBody}>
                  <h3>Prizes & Rewards</h3>
                  <p>
                    {` Utilize Gaming Arcade's Dev console to set prizes for your
                    games, seamlessly define winning metrics, and automatically
                    distribute rewards on-chain to the deserving winners.`}
                  </p>
                </div>
                {/* <div className={styles.customBody}>
                  <h3>Referral Program</h3>
                  <p>
                    The program aims to activate the community to promote the
                    game. Our referral dashboard generates a new link for every
                    player joining the game. We open the doors of promotional
                    opportunities for the dApps offering referral programs.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${styles.exploreGames} ${styles.playEarn} ${styles.nextGen}`}
        >
          <div className="container-1280">
            <div className={styles.upper_row}>
              <div className="col-lg-6">
                <h1>Powering</h1>
                <h2>
                  The Next Generation{" "}
                  <span style={{ textTransform: "uppercase" }}>
                    Of Developers
                  </span>
                </h2>
                {/* <p>
                  We have positive play guidelines for gamers to enjoy and play
                  crypto games online with joyfulness. Whether you are a new
                  plat-to-earn gamer or holding years of experience, we still
                  need you to make the community stand out from all other web3
                  gaming platforms.
                </p> */}
              </div>
              <div className={styles.arcade_side}>
                <Image
                  src={`${config.imageDomain}Assets/arcade-side.webp`}
                  alt="Powering"
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.contactcInfo}>
          <div className="container-1280">
            <div className="row" style={{ position: "relative" }}>
              <div className="col-lg-12">
                <h4 style={{ padding: "8px 0px" }}>
                  Begin your development journey with Gaming Arcade – <br /> Get
                  in touch today
                </h4>
                {/* <div className="col-lg-3">
                    <Button value="Contact Us" />
                    </div> */}
              </div>
              <div
                className={styles.contactUsButton}
                style={{ cursor: "pointer" }}
              >
                <button
                  className="noStyle"
                  type="submit"
                  // onClick={() => (window.location.href = "/contact-us")}
                >
                  <a class="hz-linear-button">
                    <span>Contact Us </span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${styles.exploreGames} ${styles.playEarn} ${styles.nextGen}`}
        >
          <div className="container-1280">
            <div className={styles.upper_row}>
              <div className="col-lg-6">
                <h2>
                  <span>Fully Integerated </span>
                  <br /> Marketplace
                </h2>
                <p>
                  {` Craft your gaming economy and effortlessly incorporate a
                  comprehensive marketplace for buying and selling in-game
                  assets using Gaming Arcade's SDK.`}
                </p>
              </div>
              <div className={styles.FullyIntegerated_Marketplace}>
                <Image
                  src={`${config.imageDomain}Assets/board.webp`}
                  alt="Fully Integerated Marketplace - Gaming Arcade"
                  width={300}
                  height={400}
                  objectFit='cover'
                />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.exploreGames} ${styles.playEarn}`}>
          <div className="container-1280">
            <div className={styles.upper_row}>
              <div className={`col-lg-6 ${styles.crpto}`}>
                <Image
                  src={`${config.imageDomain}Assets/intelligence.webp`}
                  alt="INTELLIGENCE SUITE - Gaming Arcade"
                  width={300}
                  height={400}
                  objectFit='cover'
                />
              </div>
              <div className="col-lg-6">
                <h2>
                  <span>Intelligence</span>
                  <br />
                  Suite
                </h2>
                <p>
                  Our intelligent all-in-one suite aids developers with AI
                  matchmaking, smart contract deployments, data warehousing,
                  FIAT on-ramp, and more for seamless integration.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${styles.exploreGames} ${styles.playEarn} ${styles.nextGen}`}
        >
          <div className="container-1280">
            <div className={styles.upper_row}>
              <div className="col-lg-6">
                <h2>
                  <span> Token </span>
                  <br /> Manager
                </h2>
                <p>
                  {` Effortlessly deploy your in-game token with Gaming Arcade's
                  SDK. Easily mint, manage supply, and handle distribution.`}
                </p>
              </div>
              <div className="col-lg-6">
                <Image
                  src={`${config.imageDomain}Assets/token.webp`}
                  alt="Token Manager"
                  width={300}
                  height={400}
                  objectFit='cover'
                />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.exploreGames} ${styles.playEarn}`}>
          <div className="container-1280">
            <div className="row align-items-center">
              <div className={`col-lg-6 ${styles.crpto}`}>
                <Image
                  src={`${config.imageDomain}Assets/new.webp`}
                  alt="BUILT-IN COMPLIANCE - Gaming Arcade"
                  width={300}
                  height={400}
                  objectFit='cover'
                />
              </div>
              <div className="col-lg-6 ">
                <h2>
                  <span>Built-in</span>
                  <br />
                  Compliance
                </h2>

                <p>
                  {`Gaming Arcade's professional teams guide you every step of the
                  way, providing assistance in integration and offering 24/7
                  support to developers.`}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.homeSec6}>
          <div className={styles.upper_row}>
            <div className="row">
              <div className="col-lg-12">
                <h2>Our Partners</h2>
              </div>
              <div className={`col-lg-12 ${styles.partnerLogo}`}>
                <Image
                  width={252}
                  height={70}
                  style={{ objectFit: "cover" }}
                  src={`${config.imageDomain}Assets/market-watch.webp`}
                  alt="Market Watch"
                />
                <Image
                  width={252}
                  height={70}
                  style={{ objectFit: "cover" }}
                  src={`${config.imageDomain}Assets/market-watch.webp`}
                  alt="Market Watch"
                />
                <Image
                  width={252}
                  height={70}
                  style={{ objectFit: "cover" }}
                  src={`${config.imageDomain}Assets/NewsBTC.webp`}
                  alt="NEWS BTC"
                />
                <Image
                  width={252}
                  height={70}
                  style={{ objectFit: "cover" }}
                  src={`${config.imageDomain}Assets/market-watch.webp`}
                  alt="Market Watch"
                />
                <Image
                  width={252}
                  height={70}
                  style={{ objectFit: "cover" }}
                  src={`${config.imageDomain}Assets/market-watch.webp`}
                  alt="Market Watch"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${styles.gameArcadePlatform} ${styles.platformSec}`}
        >
          <div className="container-1280">
            <div className={`row ${styles.Row}`}>
              <div className="col-lg-6">
                <h3>
                  Gaming Arcade <span>Platform</span> Functionalites
                </h3>
                <ul className={styles.white_color}>
                  <li>Hypercasual games </li>
                  <li> Find a Challenger</li>
                  <li>NFTs for increased participation</li>
                  <li> Custom Rooms</li>
                </ul>
              </div>
              <div className="col-lg-6 img-center-400">
                <Image
                  src={`${config.imageDomain}Assets/laptop.webp`}
                  alt="Platform Functionalites - Gaming Arcade"
                  width={350}
                  height={300}
                  objectFit="cover"
                />
              </div>
              <div className={styles.getInTouchButton}>
                <button
                  className="noStyle"
                  type="submit"
                  // onClick={() => (window.location.href = "/contact-us")}
                >
                  <a class="hz-linear-button">
                    <span>Get In Touch </span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.gameArcadePlatform}`}>
          <div className="container-1280">
            <div className="col-lg-12">
              <h2>
                Contact <span>Us</span>
              </h2>
            </div>
            <div className={`row ${styles.Row}`}>
              <div className="col-lg-6">
                {/* <form
                  type="submit"
                  onSubmit={(e) => {
                    onSubmit(e.preventDefault());
                  }}
                >
                  <input
                    type="text"
                    className={`form-control ${styles.whiteText}`}
                    placeholder="Your Name*"
                    required
                    onChange={(e) =>
                      setFields({ ...fields, name: e.target.value })
                    }
                    value={fields.name}
                  />
                  <input
                    type="email"
                    className={`form-control ${styles.whiteText}`}
                    placeholder="Your Email*"
                    required
                    onChange={(e) =>
                      setFields({ ...fields, email: e.target.value })
                    }
                    value={fields.email}
                  />
                  <textarea
                    className={`form-control ${styles.whiteText}`}
                    placeholder="Your Message*"
                    required
                    onChange={(e) =>
                      setFields({ ...fields, message: e.target.value })
                    }
                    value={fields.message}
                  />
                  <button className="noStyle" type="submit">
                    <a class="hz-linear-button">
                      <span>Send Now </span>
                    </a>
                  </button>
                </form> */}
              </div>
              <div className={`col-lg-6 ${styles.imgCenter400}`}>
                <Image
                  src={`${config.imageDomain}Assets/contact-robo.webp`}
                  alt="Contact Us - Gaming Arcade"
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default IntegrationService;
