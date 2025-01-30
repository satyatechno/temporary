'use client'

import React from "react";
// import useContactSupport from "Hooks/useContactSupport";
import styles from "./contactsupport.module.scss";
import Head from "next/head";
// import { useRouter } from "next/router";
import config from "../../../config";
import Image from "next/image";

const ContactSupport = () => {
  // const { send, dataFields, setDataFields } = useContactSupport();
  // const router = useRouter();
  // const canonicalUrl = `https://gamingarcade.io${router.asPath}`;

  // const handlePhoneNumberChange = (event:any) => {
  //   const value = event.target.value;
  //   const regex = /^[0-9]{0,10}$/; // Regex to allow only digits and limit to 10 digits
  //   if (regex.test(value)) {
  //     setDataFields({ ...dataFields, phone: value });
  //   }
  // };
  return (
    <div
      className={`${styles.mainCS} ${styles.absoluteBg} ${styles.contactsupport}`}
    >
      <Head>
        <title>
          Contact Gaming Arcade Support - Get Help with Crypto Gaming
        </title>
        <meta
          name="title"
          content="Contact Gaming Arcade Support - Get Help with Crypto Gaming"
        />
        <meta
          name="description"
          content="Need help with your Gaming Arcade account, games, or crypto rewards? Reach out to our support team for prompt assistance and expert advice."
        />
        <meta
          name="keywords"
          content="Customer support,
            Contact us,
            Help center,
            Support services,
            Gaming help,
            Technical support"
        />
        <meta property="og:url" content="https://gamingarcade.io/contact-support" />
        <meta
          property="og:description"
          content="Need help with your Gaming Arcade account, games, or crypto rewards? Reach out to our support team for prompt assistance and expert advice."
        />
        <meta
          property="og:title"
          content="Contact Gaming Arcade Support - Get Help with Crypto Gaming"
        />
          <meta property="og:type" content="website" />
          {/* <link rel="canonical" href={canonicalUrl} /> */}
      </Head>
      <section className={styles.contactSupportSec}>
        <div className={styles.barCs1}>
          <div className="container-1440">
            <div className={`row ${styles.Row}`}>
              <div className="col-lg-12">
                <span className={styles.imgCs1}>
                  <Image
                    src={`${config.imageDomain}Assets/chat-cs.webp`}
                    alt="chat"
                    width={200}
                    height={200}
                    style={{objectFit:"cover"}}
                  />
                </span>
                <h1 style={{ margin: "1vw 16vw" }}>contact support</h1>
                <span className={styles.imgCs2}>
                  <Image
                    src={`${config.imageDomain}Assets/handfree-cs.webp`}
                    alt="talk"
                    width={200}
                    height={200}
                    style={{objectFit:"cover"}}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.formSec}>
        <div
          className="container-1440"
          style={{ background: "none", border: "none" }}
        >
          <div className={`row ${styles.Row}`}>
            <div className="col-lg-6" style={{ marginTop: "10px" }}>
              {/* <form
                type="submit"
                onSubmit={(e) => {
                  send(e);
                }}
              >
                <div className={styles.csInput}>
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    onChange={(e) =>
                      setDataFields({ ...dataFields, name: e.target.value })
                    }
                    value={dataFields.name}
                  />
                </div>
                <div className={styles.csInput}>
                  <input
                    required
                    type="text"
                    placeholder="Company"
                    onChange={(e) =>
                      setDataFields({ ...dataFields, company: e.target.value })
                    }
                    value={dataFields.company}
                  />
                </div>
                <div className={styles.csInput}>
                  <input
                    required
                    type="text"
                    placeholder="Country"
                    onChange={(e) =>
                      setDataFields({ ...dataFields, country: e.target.value })
                    }
                    value={dataFields.country}
                  />
                </div>
                <div className={styles.csInput}>
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    onChange={(e) =>
                      setDataFields({ ...dataFields, email: e.target.value })
                    }
                    value={dataFields.email}
                  />
                </div>
                <div className={styles.csInput}>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    maxLength="10"
                    value={dataFields?.phone}
                    onChange={handlePhoneNumberChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className={styles.csInput}>
                  <textarea
                    required
                    id="story"
                    name="story"
                    placeholder="  Issue Description"
                    onChange={(e) =>
                      setDataFields({ ...dataFields, message: e.target.value })
                    }
                    value={dataFields.message}
                    rows="5"
                    cols="33"
                  ></textarea>
                </div>
                <div className={`${styles.btnCs} ${styles.contactBtn}`}>
                  <button type="submit">Send Message</button>
                </div>
              </form> */}
            </div>
            <div className="col-lg-6">
              <div className={styles.imgRight}>
                <div className={styles.cs_girl_image_container}>
                <Image
                  src={`${config.imageDomain}Assets/cs-girl.webp`}
                  alt="Contact Support - Gaming Arcade"
                  fill
                  style={{objectFit:"cover"}}
                />
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSupport;
