import Head from "next/head";
import config from "../../config";
import styles from "./not-found.module.scss";
import Image from "next/image";
import Link from "next/link";

function NotFoundPage() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Gaming Arcade</title>
        <meta name="title" content="404 - Page Not Found | Gaming Arcade" />
        <meta
          name="description"
          content="Sorry, the page you’re looking for is missing. Return to the Gaming Arcade homepage and discover exciting Web3 games and crypto rewards."
        />

        <meta
          name="keywords"
          content="Page not found,
          Gaming not found,
          Error 404,
          Crypto game error,
          Lost page,
          Return to gaming"
        />

        <meta property="og:url" content="https://gamingarcade.io/404" />
        <meta
          property="og:description"
          content="Sorry, the page you’re looking for is missing. Return to the Gaming Arcade homepage and discover exciting Web3 games and crypto rewards."
        />
        <meta
          property="og:title"
          content="404 - Page Not Found | Gaming Arcade"
        />
      </Head>

      <div className={styles.error_container}>
        <h3 className={styles.ooops_h3}>Ooops...</h3>
        <h4 className={styles.something_went_wrong}>Something went wrong</h4>
        <div className={styles.image_container}>
          <Image
            src={`${config.imageDomain}Assets/e404.webp`}
            alt="404 Not Found"
            fill
            quality={85}
          />
        </div>
        <div className={styles.error_text_content}>
          <p className={styles.text_font_color}>
            We searched for it all over..
          </p>
          <p className={styles.text_font_color}>
            looking for somewhere else..or it just never existed!
          </p>
        </div>
        <Link href="/" replace>
          <p className={styles.hz_linear_button}>Got to the Homepage</p>
        </Link>
      </div>
    </>
  );
}
export default NotFoundPage;
