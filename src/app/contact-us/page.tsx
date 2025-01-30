import React from "react";
import Head from "next/head";
import styles from "./contactus.module.scss";
import config from "../../../config";
import Image from "next/image";

const ContactUs = () => {
  //   const { sendNow, inputfields, setInputFields } = useContact();
  return (
    <>
      <Head>
        <title>Get in Touch with Gaming Arcade - Contact Us Today</title>
        <meta
          name="title"
          content="Get in Touch with Gaming Arcade - Contact Us Today"
        />
        <meta
          name="description"
          content="Have questions or feedback? Contact Gaming Arcade for support, partnership opportunities, or general inquiries. We’re here to assist you in your crypto gaming journey."
        />
        <meta
          name="keywords"
          content="Contact Gaming Arcade,
            Crypto gaming support,
            Web3 gaming help,
            Contact crypto team,
            Play to earn support,
            Gaming inquiries"
        />
        <meta property="og:url" content="https://gamingarcade.io/contact-us" />
        <meta property="og:type" content="website" />

        <meta
          property="og:description"
          content="Have questions or feedback? Contact Gaming Arcade for support, partnership opportunities, or general inquiries. We’re here to assist you in your crypto gaming journey."
        />
        <meta
          property="og:title"
          content="Get in Touch with Gaming Arcade - Contact Us Today"
        />
      </Head>

      <div className={`${styles.contactUs} ${styles.absoluteBg}`}>
        <section className={styles.contactSupportSec}>
          <div className={styles.barCs1}>
            <div className="container-1440">
              <div className={`row ${styles.Row}`}>
                <div className="col-lg-12">
                  <span className={styles.imgCs1}>
                    <Image
                      width={150}
                      height={150}
                      src={`${config.imageDomain}Assets/call-cs.webp`}
                      alt="call"
                      style={{ objectFit: "cover" }}
                    />
                  </span>
                  <h1>contact us</h1>
                  <span className={styles.imgCs2}>
                    <Image
                      width={150}
                      height={150}
                      src={`${config.imageDomain}Assets/headphone-ccs.webp`}
                      alt="headphone"
                      style={{ objectFit: "cover" }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.formSec}>
          <div className="container-1440">
            <div className={`row ${styles.Row}`}>
              <div className="col-lg-6">
                {/* <form
                  type="submit"
                  onSubmit={(e) => {
                    sendNow(e);
                  }}
                >
                  <div className={styles.csInput}>
                    <input
                      required
                      type="text"
                      placeholder="Your Name*"
                      onChange={(e) =>
                        setInputFields({ ...inputfields, name: e.target.value })
                      }
                      value={inputfields.name}
                    />
                  </div>
                  <div className={styles.csInput}>
                    <input
                      required
                      type="email"
                      placeholder="Your Email*"
                      onChange={(e) =>
                        setInputFields({
                          ...inputfields,
                          email: e.target.value,
                        })
                      }
                      value={inputfields.email}
                    />
                  </div>
                  <div className={styles.csInput}>
                    <textarea
                      required
                      id="story"
                      name="story"
                      placeholder="Your Message"
                      rows="5"
                      cols="33"
                      onChange={(e) =>
                        setInputFields({
                          ...inputfields,
                          message: e.target.value,
                        })
                      }
                      value={inputfields.message}
                    />
                  </div>

                  <div className={styles.btnCs}>
                    <button type={styles.submit}>Send Now</button>
                  </div>
                </form> */}
              </div>

              <div className="col-lg-6">
                <div className={styles.imgRight}>
                  <Image
                    src={`${config.imageDomain}Assets/man-css.webp`}
                    alt="Contact Us - Gaming Arcade"
                    fill
                    style={{ objectFit: "cover" }}
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
