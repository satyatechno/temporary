
import Head from "next/head";
import styles from "./cookiespolicy.module.scss";
import config from "../../../config";
import Image from "next/image";

// import { useRouter } from "next/router";

function CookiePolicy() {
//   const router = useRouter();
//   const canonicalUrl = `https://gamingarcade.io${router.asPath}`;
//   console.log("canonical", canonicalUrl);
  return (
    <>
      <Head>
        <title>
          Gaming Arcade Cookie Policy - Understanding Our Data Practices
        </title>
        <meta
          name="title"
          content="Gaming Arcade Cookie Policy - Understanding Our Data Practices"
        />
        <meta
          name="description"
          content="Learn about Gaming Arcade’s use of cookies to enhance your browsing experience. Our cookie policy explains how we manage data to provide seamless gameplay."
        />
        <meta
          name="keywords"
          content="Cookie policy,
Cookies use,
User data,
Privacy cookies,
Data collection,
Tracking policy"
        />

        <meta
          property="og:url"
          content="https://gamingarcade.io/cookie-policy"
        />
        <meta
          property="og:description"
          content="Learn about Gaming Arcade’s use of cookies to enhance your browsing experience. Our cookie policy explains how we manage data to provide seamless gameplay."
        />
        <meta
          property="og:title"
          content="Gaming Arcade Cookie Policy - Understanding Our Data Practices"
        />
        <meta property="og:type" content="website" />
        {/* <link rel="canonical" href={canonicalUrl} /> */}
      </Head>
      {/* <Router>

</Router> */}
      <div className={`${styles.App} ${styles.policyMain}`}>
        <section className={styles.privacy}>
          <div className={`col-lg-12 ${styles.pp_txt_d}`}>
            <h1
              className={`white-color ${styles.lgTxt} col-lg-3`}
              style={{
                width: "45%",
                textAlign: "center",
                background:
                  "linear-gradient(270deg, rgba(83, 22, 217, 0.00) 0%, #FFC000 69.33%)",
              }}
            >
              Cookie
            </h1>
            <Image
              className="col-lg-3"
              src={`${config.imageDomain}Assets/cookie-img.webp`}
              alt="Cookie Policy - Gaming Arcade"
              width={200}
              height={200}
            />
            <h2
              className={`white-color ${styles.lgTxt2} col-lg-3`}
              style={{
                width: "45%",
                textAlign: "center",
                background:
                  "linear-gradient(342deg, #FF00F5 0%, rgba(83, 22, 217, 0.00) 74.33%)",
              }}
            >
              Policy
            </h2>
          </div>
          <div className="container-1280">
            <div className="row align-items-center">
              <div className={styles.pp_txt_m}>
                <h2 className="white-color">Cookie Policy</h2>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.privacyText}>
          <div className="container-1280">
            <h3>Revised on February, 9, 2024</h3>
            <p className={styles.cookie_desc}>
              {`This Cookie Policy outlines the practices adopted by Gaming Arcade
              regarding its website(s) ("Website(s)"; "we"; "us" or "our")
              concerning the collection and dissemination of information through
              cookies. When we refer to "you" or "yours", we are addressing all
              users of our Website(s). Application(s), and other services
              offered by Gaming Arcade.`}
            </p>
            <p className={styles.cookie_desc}>
              {`We utilize cookies, which are small text files containing
              alphanumeric characters placed on your computer, along with
              similar tracking technologies like web beacons, pixels, tags, and
              scripts. These technologies help uniquely identify visitors'
              and/or users' browsers and gather information about their
              interactions with the Website(s), including for interest-based
              advertising. We employ this information for various purposes,
              including navigation assistance, registration, login facilitation,
              feedback provision, product, service, or application analysis, and
              promotional and marketing endeavors (including behavioral
              advertising). Some Third Parties, such as service providers,
              affiliates, sub-contractors, business partners, advertisers,
              publishers, and advertising agencies, may also utilize such
              technologies in connection with services they perform on our
              behalf`}
            </p>
            <p className={styles.cookie_desc}>
              Cookies, on their own, do not reveal your personally identifiable
              information unless voluntarily provided by you (e.g., during
              service registration). However, once you choose to furnish the
              Website(s), Applications, and other services offered by Gaming
              Arcade with your personally identifiable information, it may be
              linked to the data stored in the cookie.
            </p>
            <p className={styles.cookie_desc}>
              We collect and/or use cookies through Website(s), Applications,
              and other services offered by Gaming Arcade, operated by us and/or
              our authorized third parties, as well as through software and/or
              mobile applications made available by us and/or our authorized
              third parties for use on or through computers and/or mobile
              devices. By using the Website, you agree to the terms and
              conditions outlined in this Cookie Policy. Please review this
              policy carefully.
            </p>
            <p className={styles.cookie_desc}>
             {` Additionally, to enhance your experience on Gaming Arcade, we
              utilize cookies. This policy is a component of Gaming Arcade's
              overall privacy policy and addresses the interaction of cookies
              between your device and our site.`}
            </p>
            <p className={styles.cookie_desc}>
                {`If you prefer not to accept cookies from us, you can configure
                your browser to reject cookies from Gaming Arcade's website,
                application, and other services offered by Gaming Arcade. However,
                please note that this may result in limitations to accessing
                certain content and services.`}
            </p>

            <h1 className={styles.mainHead}>
              1. Website Functionality and Service Delivery
            </h1>
            <p>
              <span className={styles.list_head}>
                1.1 Essential Operations:
              </span>
              {`Gaming Arcade employs "technical" Cookies and similar trackers to
              perform activities crucial for the operation and delivery of the
              service.`}
            </p>
            <p>
              <span className={styles.list_head}>
                1.2 Basic Interactions and Features:
              </span>
              Trackers are utilized to enable fundamental interactions and
              functionalities, facilitating user access to selected features and
              enhancing communication with the Owne
            </p>
            <p>
              <span className={styles.list_head}>1.3 Support Management: </span>
              Through this service, Gaming Arcade handles support and contact
              requests received via email or other means, such as contact forms.
              Personal Data processed depends on the information provided by the
              User and the communication methods used.
            </p>
            <p>
              <span className={styles.list_head}>
                1.4 Enhanced User Experience:
              </span>
              Trackers are employed to provide a personalized user experience,
              enhancing preference management options and enabling interaction
              with external networks and platforms.
            </p>
            <p>
              <span className={styles.list_head}>
                1.5 Interaction with Third Parties:
              </span>
             {` Users can directly interact with data collection platforms or
              other services from Gaming Arcade's pages to save and reuse data.
              Even if Users do not actively use the service, it may collect
              browsing and usage data on the installed pages.`}
            </p>
            <p>
              <span className={styles.list_head}>
                1.6 Traffic Measurement and Analysis:
              </span>{" "}
              Gaming Arcade utilizes Trackers to measure traffic and analyze
              user behavior, aiming to enhance the service.
            </p>
            <p>
              <span className={styles.list_head}>1.7 Analytics</span> This
              section includes services that allow the Owner to monitor and
              analyze web traffic, including Google Analytics provided by Google
              LLC. Google utilizes collected data to track website usage,
              application usage, and prepare reports, and personalize ads within
              its advertising network. Personal Data processed includes Tracker
              and Usage Data.
            </p>

            <h1 className={styles.mainHead}>2. TYPES OF COOKIES</h1>
            <p style={{ marginBottom: "20px" }}>
              We may utilize various categories of cookies to enhance your
              experience on Gaming Arcade:
            </p>

            <p>
              <span className={styles.list_head}>2.1 Session Cookies: </span>
              These cookies are temporary and are deleted from your device upon
              closing the browser. They support the functionality of the
              Website(s), application(s), and provide insights into your
              browsing behavior, such as visited pages, clicked links, and
              duration of stay.
            </p>
            <p>
              <span className={styles.list_head}>2.2 Essential Cookies:</span>{" "}
              Necessary for the operation of the Website(s), these cookies
              enable functionalities like user log-in and access to member
              benefits if applicable.
            </p>
            <p>
              <span className={styles.list_head}>2.3 Functional Cookies: </span>
              We employ Functional Cookies to preserve your settings on the
              Website(s), such as currency preferences, and to store data for
              easy retrieval during subsequent visits
            </p>
            <p>
              <span className={styles.list_head}>2.4 Persistent Cookies:</span>
              Unlike session cookies, these are not deleted when you close your
              browser and are stored on your device for a predetermined period
              or until manually removed. They retain your preferences for future
              visits, streamlining processes like log-ins.
            </p>
            <p>
              <span className={styles.list_head}>
                2.5 Targeting and Advertising Cookies:{" "}
              </span>{" "}
              Designed to gather information to enhance our services and deliver
              targeted advertisements tailored to your interests. These cookies
              are integral to various marketing initiatives and campaigns on our
              Website(s).
            </p>
            <p>
              <span className={styles.list_head}>2.6 Analytics Cookies: </span>
              Collecting data on your Website(s) and application(s) usage, these
              cookies help us refine and optimize site functionality. They
              provide aggregated information for monitoring site performance,
              tracking page visits, identifying technical errors, analyzing user
              traffic, and evaluating advertising effectiveness.
            </p>

            <h1 className={styles.mainHead}>3. THIRD PARTY COOKIES</h1>
            <p>
              <span className={styles.list_head}>3.1 Google Cookies:</span>We
              {`utilize Google Analytics cookies to gather data on how visitors
              interact with our Gaming Arcade website(s) and application(s).
              This information aids us in compiling reports and enhancing the
              user experience. Google cookies, including Google Ads 360 cookies,
              enable us to recognize visitors on our site and provide them with
              relevant marketing and advertising content. For more information
              on Google's privacy policy and to opt-out of Google Analytics,
              click`}
              <a
                href="https://support.google.com/analytics/answer/6004245"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.underlineLinks}
              >
                here{" "}
              </a>
              . Additionally, you can find details about Google Ads 360 cookies{" "}
              <a
                href="https://support.google.com/searchads/answer/2903014?hl=en&ref_topic=6054260"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.underlineLinks}
              >
                here{" "}
              </a>
            </p>
            <p>
              <span className={styles.list_head}>3.2 Facebook Cookies:</span>
              {`These cookies support interest-based advertising by collecting
                information from your website visits and enabling targeted ads on
                Facebook platforms. To opt-out of Facebook's interest-based ads,
                please follow the instructions provided on Facebook's privacy
                policy, refer to the Facebook Privacy Policy`}
              <a
                href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.underlineLinks}
              >
                here{" "}
              </a>
              .
            </p>
            <p>
              <span className={styles.list_head}>3.3 Bing Cookies:</span>Bing
             {` cookies are employed to gather data on visitor interaction with
              our website for marketing, advertising, and remarketing endeavors.
              They facilitate the recognition of visitors on our advertising
              partners' websites and the delivery of interest-related
              information or ads. For further insights into Microsoft/Bing
              privacy practices, click`}
              <a
                href="https://privacy.microsoft.com/en-us/privacystatement"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.underlineLinks}
              >
                here{" "}
              </a>
              .
            </p>

            <h1 className={styles.mainHead}>4. DATA SHARING PRACTICES </h1>
            <p style={{ marginBottom: "20px" }}>
              We adhere to specific guidelines regarding the sharing of contact
              and/or billing information, as outlined in our{" "}
              <a
                className={styles.underlineLinks}
                href="/policy/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>{" "}
              and this Cookies Policy:
            </p>
            <p>
              <span className={styles.list_head}>
                4.1 With Your Explicit Consent:{" "}
              </span>
              We only share information with third parties when you provide us
              with express permission to do so.
            </p>
            <p>
              <span className={styles.list_head}>
                4.2 With Our Partners and Affiliates:
              </span>{" "}
              We may share information with our partners and affiliates, which
              encompass entities under common control with us or those
              controlling or controlled by us, in accordance with our Privacy
              Policy.
            </p>
            <p>
              <span className={styles.list_head}>
                4.3 Contracted Service Providers:{" "}
              </span>
              When engaging third-party service providers, such as analytics or
              web hosting services, we ensure their privacy and security
              practices align with ours. We only provide them with the necessary
              information to perform requested services and prohibit them from
              using this data for other purposes.
            </p>
            <p>
              <span className={styles.list_head}>
                4.4 Corporate Transactions:
              </span>{" "}
              In the event of a merger, sale, or transfer of assets, including
              bankruptcy proceedings, we may disclose or transfer information as
              part of the transaction.
            </p>
            <p>
              <span className={styles.list_head}>4.5 Legal Obligations</span> We
              may share information to protect our website(s) and
              application(s), enforce our terms of service, safeguard legal
              rights, or comply with governmental requests, legal processes, or
              other legal obligations
            </p>
            <p>
              <span className={styles.list_head}>
                4.6 Service Development:{" "}
              </span>{" "}
              We may share other collected information, including aggregate
              data, as necessary for the development and provision of our
              services, consistent with the practices outlined in this policy
              and our Privacy Policy.
            </p>
            <p>
              <span className={styles.list_head}>4.7 Legal Requests:</span>We
              may be obligated to disclose information in response to lawful
              requests from public authorities, including those related to
              national security or law enforcement matters.
            </p>

            <h1 className={styles.mainHead}>5.COOKIE SETTINGS & MANAGEMENT</h1>
            <h6>Managing Your Cookie Preferences</h6>
            <p className={styles.cookie_desc}>
              To control the usage of cookies and other online tracking
              technologies on our website(s) and application(s), you have the
              following options:
            </p>

            <p>
              <span className={styles.list_head}>
                5.1 Adjust Browser Settings:{" "}
              </span>{" "}
              {`You can modify your browser settings to prevent cookies from being
              downloaded to your device. Most browsers provide options to stop
              accepting new cookies, receive notifications when receiving a new
              cookie, and disable existing cookies. Instructions for adjusting
              these settings can usually be found in the "Help" section of your
              browser's menu or by visiting`}{" "}
              <a
                className={styles.underlineLinks}
                href="https://www.allaboutcookies.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                All About Cookies | Online Privacy and Digital Security{" "}
              </a>{" "}
              {`.Please note that disabling cookies may affect your ability to
                access certain features of our website. Some browsers offer a
                "private mode" option that automatically deletes cookies after
                each browsing session. However, please be aware that using this
                mode may impact your user experience, and some features may not
                work optimally. You can learn more about managing cookie settings
                in popular browsers:`}
            </p>
            <ul style={{ marginLeft: "15px" }}>
              <a
                className={styles.underlineLinks}
                href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&redirectslug=Cookies"
                target="_blank"
              >
                <li>Firefox</li>
              </a>
              <a
                className={styles.underlineLinks}
                href="https://support.google.com/chrome/answer/95647?hl=en"
                target="_blank"
              >
                <li>Chrome</li>
              </a>
              <a
                className={styles.underlineLinks}
                href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
                target="_blank"
              >
                <li>Internet Explorer</li>
              </a>
              <a
                className={styles.underlineLinks}
                href="https://support.apple.com/en-gb/105082"
                target="_blank"
              >
                <li>Safari</li>
              </a>
              <a
                className={styles.underlineLinks}
                href="https://support.microsoft.com/en-gb/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd"
                target="_blank"
              >
                <li>Edge</li>
              </a>
            </ul>
            <p style={{ marginTop: "15px" }}>
              <span className={styles.list_head}>5.2 Opting Out:</span>{`You can
              opt out of certain types of cookies, such as those used for
              interest-based advertising, by visiting the Digital Advertising
              Alliance's opt-out page`}{" "}
              <a
                className={styles.underlineLinks}
                href="https://optout.aboutads.info/?c=2&lang=EN"
                target="_blank"
              >
                (http://optout.aboutads.info)
              </a>{" "}
             {` or the Network Advertising Initiative's opt-out tool`}
              <a
                className={styles.underlineLinks}
                href="https://optout.networkadvertising.org/?c=1"
                target="_blank"
              >
                (http://www.networkadvertising.org/choices)
              </a>
              {`. Additionally, certain mobile devices allow you to limit
              advertising and reset your advertising identifier within the
              device's settings. `}
            </p>
            <p>
              <span className={styles.list_head}>5.3 Manual Deletion:</span> You
              can manually delete cookies stored on your device at any time.
              However, please note that this action will not prevent our
              website(s) from placing further cookies on your device unless you
              adjust your browser settings accordingly. You can also manually
              delete the cookies from application(s). For guidance on how to
              manually delete cookies, please refer{" "}
              <a
                className={styles.underlineLinks}
                href="https://us.norton.com/blog/how-to/how-to-clear-cookies"
                target="_blank"
              >
                How to clear cookies and cache in every browser
              </a>
              .
            </p>
            <p className={styles.cookie_desc}>
              Please be aware that if you choose to reject or disable cookies,
              it may affect your browsing experience on our website, and some
              features may not work as intended.
            </p>
            <p className={styles.cookie_desc}>
              For additional information about cookies, behavioral advertising,
              and online privacy, you can visit{" "}
              <a
                className={styles.underlineLinks}
                href="https://www.allaboutcookies.org/"
                target="_blank"
              >
                All About Cookies | Online Privacy and Digital Security
              </a>{" "}
              . Some of our service providers participate in the Digital
              Advertising Alliance (DAA), where you can opt out of
              interest-based advertising at
              <a
                className={styles.underlineLinks}
                href="https://optout.aboutads.info/?c=2&lang=EN/"
                target="_blank"
              >
                http://optout.aboutads.info
              </a>
              {`. You may also opt out of receiving interest-based ads from
              third-party websites and applications through the Network
              Advertising Initiative's (NAI) Opt-Out Tool, available at`}{" "}
              <a
                className={styles.underlineLinks}
                href="https://optout.networkadvertising.org/?c=1/"
                target="_blank"
              >
                http://www.networkadvertising.org/choices
              </a>
              {`. Additionally, certain mobile devices allow you to limit
              advertising and reset advertising identifiers within your device's
              settings. For more information, visit`}
              <a
                className={styles.underlineLinks}
                href="https://youradchoices.com/appchoices"
                target="_blank"
              >
                YourAdChoices.com | AppChoices
              </a>
            </p>

            <h1 className={styles.mainHead}>
              6. Rights of Data Subjects Under United Kingdom and European
              Regulations:
            </h1>
            <p className={styles.cookie_desc}>
              In compliance with the GDPR, EEA/UK citizens are granted the
              following rights to safeguard their data privacy:
            </p>

            <p>
              <span className={styles.list_head}>
                6.1 Right to Information:
              </span>
              Individuals have the entitlement to be informed about the
              processing of their personal data, including how and when it
              occurs.
            </p>
            <p>
              <span className={styles.list_head}>6.2 Right to Access:</span>
              Individuals can request access to their processed data, along with
              details about the purpose and duration of processing.
            </p>
            <p>
              <span className={styles.list_head}>6.3 Right to Object:</span>
              Individuals reserve the right to object to the processing of their
              personal data for purposes they find inappropriate.
            </p>
            <p>
              <span className={styles.list_head}>6.4 Right to Erasure:</span>:
            {` Data subjects can request the deletion of their data if it's no
              longer necessary or if consent is withdrawn, except when required
              for legal obligations or public tasks.`}
            </p>
            <p>
              <span className={styles.list_head}>
                6.5 Right to Rectification:
              </span>
              Individuals can request the correction of inaccurate or incorrect
              data concerning them.
            </p>
            <p>
              <span className={styles.list_head}>
                6.6 Right to Restrict Processing:
              </span>
            {`Data subjects can limit the processing of their personal data for
              purposes they don't approve of, with compliance to the imposed
              restrictions.`}
            </p>
            <p>
              <span className={styles.list_head}></span>
            </p>
            <p>
              <span className={styles.list_head}></span>
            </p>

            <h1 className={styles.mainHead}>7. UPDATES TO OUR COOKIE POLICY</h1>
            <p>
             {` We retain the right to modify this Cookie Policy at our
              discretion. Any amendments to this policy will be communicated by
              updating the "Last Updated" section above. It is your
              responsibility to periodically review the Cookie Policy for any
              changes. Your continued use of the Sites following any updates to
              this Cookie Policy indicates your acceptance of the revised terms.
              While we may choose to inform you of changes via email, it remains
              your obligation to regularly check this Cookie Policy for updates.
              Such communications do not diminish your responsibility to stay
              informed about any changes made herein.`}
            </p>

            <h1 className={styles.mainHead}>8. CONTACT US</h1>
            <p>
              For inquiries about this Cookie Policy or how we manage your
              personal information, or if you wish to request additional
              information or exercise your data privacy rights, please reach out
              to us at{" "}
              <a href="mailto:hello@gamingarcade.io" target="_blank">
                hello@gamingarcade.io
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default CookiePolicy;
