import Head from "next/head";
import styles from "./privacypolicy.module.scss";
import config from "../../../config";
// import { useRouter } from "next/router";

function PrivacyPolicy() {
  //   const router = useRouter();
  //   const canonicalUrl = `https://gamingarcade.io${router.asPath}`;
  //   console.log("canonical",canonicalUrl);
  return (
    <>
      <Head>
        <title>Gaming Arcade Privacy Policies - Safeguarding Your Data</title>
        <meta
          name="title"
          content="Gaming Arcade Privacy Policies - Safeguarding Your Data"
        />
        <meta
          name="description"
          content="Discover how Gaming Arcade prioritizes your privacy and protects your data. Our privacy policies detail how we keep your information secure in the crypto gaming world."
        />
        <meta
          name="keywords"
          content="Privacy policy,
Data protection,
User privacy,
Crypto data security,
Web3 privacy,
Personal information"
        />

        <meta
          property="og:url"
          content="https://gamingarcade.io/privacy-policy"
        />
        <meta
          property="og:description"
          content="Discover how Gaming Arcade prioritizes your privacy and protects your data. Our privacy policies detail how we keep your information secure in the crypto gaming world."
        />
        <meta
          property="og:title"
          content="Gaming Arcade Privacy Policies - Safeguarding Your Data"
        />
        <meta property="og:type" content="website" />
        {/* <link rel="canonical" href={canonicalUrl} /> */}
      </Head>
      <div className={`${styles.App} ${styles.policyMain}`}>
        <section className={styles.privacy}>
          <div className="container-1280 ">
            <div className="row align-items-center">
              <div className={`col-lg-12 ${styles.pp_txt_d}`}>
                <h1
                  className={`white-color ${styles.lgTxt} col-lg-3`}
                  style={{
                    background:
                      "linear-gradient(270deg, rgba(83, 22, 217, 0.00) 0%, #FFC000 69.33%)",
                    width: "50%",
                    textAlign: "center",
                  }}
                >
                  Privacy
                </h1>
                <img
                  className="col-lg-3"
                  src={`${config.imageDomain}/loading-images/privacyPolicy.webp`}
                  alt="Privacy Policy - Gaming Arcade"
                  style={{ width: "15%", rotate: "-10deg" }}
                />
                <h1
                  className={`white-color ${styles.lgTxt} col-lg-3`}
                  style={{
                    background:
                      "linear-gradient(342deg, #FF00F5 0%, rgba(83, 22, 217, 0.00) 74.33%)",
                    width: "50%",
                    textAlign: "center",
                  }}
                >
                  Policy
                </h1>
              </div>

              <div className={styles.pp_txt_m}>
                <h2 className="white-color">Privacy Policy</h2>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.privacyText}>
          <div className="container-1280">
            <h2>Last Revised On February 8, 2024</h2>
            <p>
              {` This Privacy Policy (“Policy”) outlines how Gaming arcade, and its
              subsidiaries (collectively, “Gaming Arcade,” “we,” “us,” or “our”)
              collect, use, and share information about users of our website`}
              <a
                href="https://gamingarcade.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                [Gaming Arcade: Play to Win Games | Hyper Casual Web3 Gaming ]
              </a>{" "}
              {`(“Website”), our mobile application (“App”), should one be
              available, and all related platforms, as well as other online and
              offline interactions (collectively, the “Services”). <br></br>{" "}
              Your engagement with our Services is governed by our Terms of Use,
              located at`}
              <a
                href="https://gamingarcade.io/policy/terms-of-use"
                target="_blank"
                rel="noopener noreferrer"
              >
                [Gaming Arcade: Terms of Use ]
              </a>
              {` , which includes essential terms regarding limitations of
              liability and dispute resolution. By accessing and using the
              Services, you consent to the practices described in this Policy.
              If you disagree with any aspect of this Policy, please refrain
              from using the Services or providing us with your Personal
              Information (as defined below).`}
            </p>
            <div className={styles.infomationTerms}>
              <h2
                className={styles.infomationTerms__text}
                style={{ fontSize: "25px" }}
              >
                I. Information collection & use
              </h2>
              <div className={styles.personalInformation}>
                <h3 style={{ margin: "25px 0px 0px 0px" }}>
                  1.1 Personal Information
                </h3>
                <p>
                  {` In this Policy, "Personal Information" refers to any data that
                  identifies or can be linked to an individual or household,
                  directly or indirectly, including but not limited to data
                  protected under data privacy laws. `}
                </p>
                <p>
                  {`Your privacy is of utmost importance to us. Hence, we have
                  crafted this Policy to provide you with a clear understanding
                  of how we collect, use, communicate, disclose, and utilize
                  personal information. Here's an outline of our Privacy Policy:`}
                </p>
                <ol>
                  <li>
                    Before or at the time of gathering personal information, we
                    will specify the purposes for which the information is being
                    collected.
                  </li>
                  <li>
                    {" "}
                    {` We will collect and utilize personal information solely to
                    fulfill the purposes specified by us and for other
                    compatible purposes, unless we obtain the individual's
                    consent or as mandated by law.`}
                  </li>
                  <li>
                    Personal information will only be retained for as long as
                    necessary to fulfill those purposes.
                  </li>
                  <li>
                    {` We will gather personal information through lawful and fair
                    means, and with the individual's knowledge or consent where
                    appropriate.`}
                  </li>
                  <li>
                    Personal data will be relevant to the purposes for which it
                    is intended, and, to the extent necessary, it will be
                    accurate, complete, and up-to-date.
                  </li>
                  <li>
                    We will safeguard personal information with reasonable
                    security measures against loss, theft, unauthorized access,
                    disclosure, copying, use, or alteration.
                  </li>
                  <li>
                    {" "}
                    Information about our policies and practices concerning the
                    management of personal information will be readily available
                    to our customers.
                  </li>
                  <li>
                    We are dedicated to conducting our business in accordance
                    with these principles to ensure the confidentiality of
                    personal information is preserved and upheld.
                  </li>
                </ol>
                <h2 style={{ fontSize: "20px", marginTop: "35px" }}>
                  1.2 Gathering of Personal Data
                </h2>
                <p>
                  The scope of Personal Data we gather is shaped by the
                  specifics of the services we provide and engage in, as well as
                  our interactions with users.
                </p>
                <h2 style={{ fontSize: "20px", marginTop: "35px" }}>
                  1.3 Types of Personal Data Collected
                </h2>
                <p style={{ marginBottom: "40px" }}>
                  The range of Personal Data we accumulate varies based on the
                  interaction, yet may include the following categories,
                  adhering to relevant legal standards and limitations:
                </p>
                <ul className={styles.Data__list}>
                  <li>
                    Identifying Information: This includes names, usernames,
                    account names, blockchain addresses, physical addresses,
                    phone numbers, birth dates, email addresses, discord
                    username, twitter username and other online identifiers.
                  </li>
                  <li>
                    Customer Records: Digital records that contain Personal
                    Information. Note that payment details are also collected
                    but are processed through a third-party payment processor.
                  </li>
                  <li>
                    Blockchain Details: Information such as your wallet address,
                    activities on the blockchain, and interactions with our
                    services in the blockchain environment.
                  </li>
                  <li>
                    Device Details: Data such as your IP address, type of web
                    browser, operating system, mobile carrier and manufacturer
                    details, installed applications, device and advertising
                    identifiers, and push notification tokens.
                  </li>
                  <li>
                    Protected Class Information: Data related to protected
                    classifications under law, including race, gender, age, and
                    disability.
                  </li>
                  <li>
                    Communications: Information from direct interactions, such
                    as through web forms, online polls, or engagements with our
                    blogs and posts.
                  </li>
                  <li>
                    Commercial Data: Records of products or services that have
                    been purchased, acquired, or considered, along with other
                    related purchase or consumption histories.
                  </li>
                  <li>
                    Usage Data: Information on internet or other electronic
                    network activity, including browsing and search history, and
                    interactions with our website, applications, or
                    advertisements.
                  </li>
                  <li>
                    Location Data: General information about the location of an
                    individual or device, derived from your IP address, but not
                    including precise geolocation data.
                  </li>
                  <li>
                    {" "}
                    {`  Profiles and Preferences: Inferences made from any of the
                    data mentioned above to form a profile that reflects an
                    individual’s preferences and behavior.`}
                  </li>
                </ul>
                <h2 style={{ fontSize: "20px", marginTop: "35px" }}>
                  1.4 Sources of personal Data for Gaming Arcade
                </h2>
                <p style={{ marginBottom: "20px" }}>
                  At Gaming Arcade, we gather Personal Data from a variety of
                  sources to enhance your gaming experience:
                </p>
                <ul className={styles.Data__list}>
                  <li>
                    Directly from You: This includes data provided when you set
                    up a user account with us, link your blockchain wallet to
                    your Gaming Arcade account, interact with our chatbots,
                    engage in transactions, use our services, enter our
                    competitions and promotions, sign up for our marketing
                    materials, or reach out to our customer support team.
                  </li>
                  <li>
                    From Third Parties: We receive information from affiliates,
                    public databases, service providers (like those for fraud
                    detection, identity verification, and security), data
                    resellers, social media platforms, marketing partners, and
                    affiliates.
                  </li>
                  <li>
                    {` Through Your Use of Our Services: We automatically collect
                    data when you navigate our website or interact with our
                    services, as well as derive insights about your preferences
                    and interests from the personal data we've gathered and our
                    interactions with you.`}
                  </li>
                </ul>
                <h2 style={{ fontSize: "20px", marginTop: "35px" }}>
                  1.5 Personal Data We Collect From You{" "}
                </h2>
                <p style={{ marginBottom: "20px" }}>
                  Our collection of your Personal Data can include:
                </p>
                <ul className={styles.Data__list}>
                  <li>
                    Registration and Account Information: Upon registering for
                    an account with Gaming Arcade, we collect details such as
                    your blockchain addresses, usernames, and email addresses.
                    Connecting third-party services to your account also allows
                    us to gather data from those services, along with other
                    preferences and payment information you provide.
                  </li>
                  <li>
                    {` Marketing Engagement: By opting into our marketing
                    communications or participating in events we host, you're
                    giving us information like your name, contact details, and
                    your interests.`}
                  </li>
                  <li>
                    Communications: Anytime you contact us through email, phone,
                    or other means, we keep a record of your contact
                    information, the content of your communications, and our
                    responses to ensure we provide the best support and service.
                  </li>
                </ul>
                <h2 style={{ fontSize: "20px", marginTop: "35px" }}>
                  1.6 Gathering Data From External Source at Gaming Arcade
                </h2>
                <p style={{ marginBottom: "40px" }}>
                  Gaming Arcade might obtain Personal Data about you from
                  outside sources, which we might merge with the data we already
                  have, including:
                </p>
                <ul className={styles.Data__list}>
                  <li>
                    External Accounts: When you link external accounts (like
                    Twitter, Discord, or GitHub) to your Gaming Arcade profile,
                    we gather specific information provided by these platforms.
                  </li>
                  <li>
                    Transactions: For transactions such as purchasing NFTs or
                    other blockchain assets through our services, we collect
                    necessary details to process payments, including names,
                    billing addresses, and payment methods like credit card
                    numbers or PayPal accounts.
                  </li>
                  <li>
                    {` Social Media Integration: If you integrate or interact with
                    our services via social media platforms, we're authorized to
                    access certain profile information. This extends to
                    interactions on social media pages or posts involving Gaming
                    Arcade, where we might collect data related to these
                    engagements.`}
                  </li>
                  <li>
                    Additional Third-party Data: We may receive updated contact
                    details or demographic information from third-party sources,
                    including public databases.
                  </li>
                </ul>
                <h2 style={{ fontSize: "20px", marginTop: "35px" }}>
                  1.7 Automated Data Collection
                </h2>
                <p>
                  Our collection of Personal Data may also happen automatically
                  through your interaction with our services:
                </p>
                <br />
                <p style={{ marginTop: "20px" }}>
                  {" "}
                  {` Digital Footprints: Gaming Arcade and our service partners
                  employ various digital tracking tools, including cookies and
                  pixels, to gather data from your browser or device. This
                  includes but isn't limited to browser types, device
                  specifications, operating systems, application details, and
                  online activity indicators like page visits, link clicks, and
                  timestamps within our website, as well as IP addresses tied to
                  your activities. This automatically gathered information could
                  be integrated with other Personal Data we've compiled to
                  enhance your service experience`}
                </p>
                <h2 style={{ fontSize: "20px", marginTop: "35px" }}>
                  1.8 Utilization of Personal Data at Gaming Arcade
                </h2>
                <p>
                  Gaming Arcade is committed to processing your Personal Data
                  only when legally permissible. The diverse uses for Personal
                  Data include, but are not limited to:
                </p>
                <ul className={styles.Data__list}>
                  <li>
                    <span>Support and Services Provision: </span>We use your
                    data to deliver our services, manage our website and app,
                    generate your unique gaming profile, update your Gaming
                    Arcade user details, and engage with you across our
                    platforms. This includes addressing inquiries,
                    troubleshooting, fulfilling requests, processing payments,
                    and offering customer support, grounded in fulfilling our
                    contractual obligations to you.
                  </li>
                  <li>
                    <span>Business Analysis and Enhancement: </span>We analyze
                    user interaction with our services to enhance our offerings,
                    develop new features, and improve overall service and
                    operations. This includes conducting surveys, understanding
                    customer interests, and performing other research and
                    analytical tasks to better comprehend and serve our user
                    base, justified by our legitimate interest in advancing our
                    services.
                  </li>
                  <li>
                    <span>Personalizing User Experience: </span>We aim to
                    customize the content and services we offer, tailoring them
                    to fit user preferences and interests. This personalization
                    effort is based on our legitimate interest in providing a
                    more engaging and tailored service.
                  </li>
                  <li>
                    <span>Marketing and Promotion: </span>With your consent, we
                    engage in marketing efforts to present you with more
                    relevant advertisements and updates, aiming to inform you
                    about our services and products that might interest you,
                    thereby potentially expanding our customer base.
                  </li>
                  <li>
                    <span>Business Security: </span>We take measures to protect
                    our operations, assets, and technological infrastructure,
                    actively preventing and addressing fraud, unauthorized
                    access, and other threats, based on our legitimate business
                    interest in safeguarding our enterprise.
                  </li>
                  <li>
                    <span>Legal Rights Defense: </span>We manage and address
                    legal disputes and claims, safeguarding our rights or
                    interests, including in litigation contexts, relying on our
                    legitimate interest in defending our business.
                  </li>
                  <li>
                    <span>Auditing and Governance: </span>{" "}
                    {`Our operations
                    undergo various audits and reviews to comply with financial,
                    legal, and operational obligations, supporting our
                    business's legal and governance structures.`}
                  </li>
                  <li>
                    <span>Legal Compliance: </span> We adhere to legal
                    requirements, processing data as necessary to comply with
                    laws, court orders, and law enforcement or regulatory
                    requests.
                  </li>
                  <li>
                    <span>Legitimate Business Interests: </span>We process your
                    Personal Data in ways that are essential for our legitimate
                    business interests, ensuring that the impact on you is
                    considered and balanced against our business needs.
                  </li>
                </ul>
                <p>
                  Aggregated and Anonymized Data: We may anonymize data to
                  create aggregated datasets for business assessment, industry
                  benchmarking, and analytical purposes, under the allowance of
                  applicable data protection laws.
                </p>
                <h2 style={{ fontSize: "20px", marginTop: "35px" }}>
                  1.9 Disclosure of Personal Data at Gaming Arcade
                </h2>
                <p>
                  At Gaming Arcade, we may share or reveal the Personal
                  Information we gather as outlined below:
                </p>
                <ul className={styles.Data__list}>
                  <li>
                    <span>Service Providers: </span>We might disclose Personal
                    Information with third-party service providers who utilize
                    this data to render services for us, such as hosting
                    providers, auditors, advisors, consultants, and customer
                    service providers.
                  </li>
                  <li>
                    <span>Advertising and Marketing Partners: </span>Personal
                    Information may be shared with third parties offering
                    advertising, campaign measurement, and analytics services.
                    These parties may access data about your service usage to
                    enhance our ad targeting and campaign measurement efforts.
                  </li>
                  <li>
                    <span>
                      Subsidiaries, Affiliates, and Business Partners:{" "}
                    </span>
                    We may share your Personal Information with affiliated
                    companies and business partners for the purposes outlined in
                    this Policy.
                  </li>
                  <li>
                    <span>Legal Compliance: </span>We may share Personal
                    Information in response to legal mandates, court orders, or
                    government investigations, or when necessary to protect the
                    rights, property, and safety of our company and others.
                  </li>
                  <li>
                    <span>Business Transfers: </span>Personal Information may be
                    disclosed as part of business mergers, sales, acquisitions,
                    or similar events.
                  </li>
                  <li>
                    <span>Protection of Rights: </span>We may disclose Personal
                    Information to respond to claims, enforce agreements,
                    prevent fraud, or protect the rights and safety of Gaming
                    Arcade, our affiliates, partners, clients, and customers.
                  </li>
                  <li>
                    <span>Aggregated and De-identified Data: </span>We may share
                    aggregated or de-identified information with third parties
                    for research, marketing, advertising, and analytical
                    purposes.
                  </li>
                </ul>
                <p>
                  If you choose not to provide requested Personal Information or
                  withdraw your consent to its processing, it may impact your
                  ability to use our Services.
                </p>
                <h2 style={{ fontSize: "20px", marginTop: "35px" }}>
                  1.10.1 Managing Your Personal Information and Rights
                </h2>
                <p>
                  Marketing Preferences: If you previously consented to the use
                  of your personal information for direct marketing purposes and
                  wish to revoke this permission, you can do so at any time by
                  reaching out to us on{" "}
                  <a href="mailto:hello@gamingarcade.io">
                    hello@gamingarcade.io
                  </a>
                </p>
                {/* <h4 className={styles.typesOfData}>Gaming Arcade Support</h4>
                <h4 style={{ fontWeight: "600" }}>
                  Email: hello@gamingarcade.io
                </h4> */}
                <h2 style={{ fontSize: "20px", marginTop: "35px" }}>
                  1.10.2 Complaints Procedure:{" "}
                </h2>{" "}
                <p>
                  {" "}
                  Should you believe that we have violated any relevant data
                  protection regulations and desire to file a complaint, kindly
                  reach out to us using the contact details provided below,
                  furnishing us with comprehensive information regarding the
                  alleged breach. We will conduct a thorough investigation into
                  your complaint and provide a written response outlining the
                  findings of our investigation and the measures we intend to
                  undertake to address your concerns. You may also have the
                  option to escalate your complaint to a regulatory authority or
                  data protection agency. For additional information, please
                  refer to the EU/UK Addendum.{" "}
                </p>
                <h2 style={{ fontSize: "20px", marginTop: "35px" }}>
                  1.11 Handling of Sensitive Information
                </h2>
                <p>
                  We kindly request that you refrain from sending or disclosing
                  any sensitive Personal Information to Gaming Arcade unless
                  explicitly requested. This includes, but is not limited to,
                  details such as social security numbers, racial or ethnic
                  origin, political opinions, religious beliefs, health
                  information, biometrics or genetic characteristics, criminal
                  background, or trade union membership. Please exercise caution
                  and discretion when sharing any such sensitive information on
                  our Services or directly with us.
                </p>
                <h2 style={{ fontSize: "20px", marginTop: "35px" }}>
                  {` 1.12 Ensuring Your Information's Security`}
                </h2>
                <p>
                  At Gaming Arcade, we prioritize the security of your personal
                  data through stringent measures:
                </p>
                <ul className={styles.Data__list}>
                  <li>
                    We employ robust security protocols, including SSL
                    technology, to encrypt all sensitive information during
                    transmission.
                  </li>
                  <li>
                    Your data is stored in secure databases managed by
                    authorized personnel with strict access controls.
                  </li>
                  <li>
                    We are committed to maintaining the confidentiality of your
                    information and ensuring its safety at all times.
                  </li>
                </ul>
                <h2 style={{ fontSize: "20px", marginTop: "35px" }}>
                  1.13 Ensuring Confidential, Resilient, and Available
                  Processing Systems
                </h2>
                <p>
                  At Gaming Arcade, we employ various measures to ensure the
                  confidentiality, resilience, and availability of our
                  processing systems. This includes implementing high
                  availability practices, maintaining business continuity, and
                  executing prompt disaster recovery plans. Additionally, we
                  enforce stringent physical and logical access controls and
                  conduct regular penetration testing to identify and address
                  potential vulnerabilities.
                </p>
                <ul className={styles.Data__list}>
                  <li>
                    High Availability: We utilize properly-provisioned,
                    redundant servers across all aspects of our gaming
                    infrastructure to mitigate the impact of failures. Regular
                    maintenance procedures are executed without disrupting
                    availability.
                  </li>
                  <li>
                    Business Continuity: We store encrypted backups of data
                    daily in multiple regions on Google Cloud Platform, enabling
                    swift restoration in the event of production data loss
                  </li>
                  <li>
                    Disaster Recovery: In the case of a region-wide outage, we
                    initiate duplicate environments in alternative Google Cloud
                    Platform regions. Our operations team possesses extensive
                    experience in conducting full region migrations.
                  </li>
                  <li>
                    Physical Access Controls: Our gaming infrastructure is
                    hosted on secure platforms like Amazon Web Services and
                    Google Cloud Platform, which feature robust physical
                    security measures such as biometrics, access cards, and
                    surveillance systems.
                  </li>
                  <li>
                    Logical Access Controls: Only designated Dapper operations
                    team members with two-factor authenticated access have the
                    authorization to configure our infrastructure on Google
                    Cloud Platform. Private keys for individual servers are
                    securely stored and encrypted.
                  </li>
                  <li>
                    Penetration Testing: We engage independent third-party
                    agencies to conduct annual black box penetration testing to
                    identify and address security vulnerabilities proactively.
                  </li>
                  <li>
                    {`Intrusion Detection and Prevention: Google Cloud Platform's
                    intrusion detection and prevention systems (IDS/IPS) are
                    deployed to identify and mitigate unusual network patterns
                    or suspicious behaviour. We prioritise maintaining a secure
                    environment to prevent known threats and remedy dangerous
                    situations promptly.`}
                  </li>
                </ul>
                <h2 style={{ fontSize: "20px", marginTop: "35px" }}>
                  1.14 Data Retention Policy
                </h2>
                <p>
                  {" "}
                  We retain Personal Information for as long as necessary based
                  on the purpose for which it was collected and in accordance
                  with relevant laws.
                </p>
                <h4 className={styles.typesOfData}>
                  Factors influencing our retention periods include:
                </h4>
                <ul className={styles.Data__list}>
                  <li>
                    Duration of our relationship and your use of our services
                    (e.g., as long as you maintain an account or continue to use
                    our services).
                  </li>
                  <li>
                    Legal obligations we must adhere to (e.g., laws mandating
                    certain transaction records be retained for a specific
                    period).
                  </li>
                  <li>
                    Prudence regarding our legal stance (e.g., considering
                    statutes of limitations, ongoing litigation, or regulatory
                    inquiries).
                  </li>
                </ul>
                <h2 style={{ fontSize: "20px", marginTop: "35px" }}>
                  1.15 Erasure of Personal Data
                </h2>
                <p>
                  We are committed to erasing your personal data when it is no
                  longer necessary for the purposes for which it was collected
                  or to meet specific legal requirements.
                </p>
                <ul className={styles.Data__list}>
                  <li>
                    If you have made a purchase, your personal data will be
                    deleted no later than two years after your last transaction,
                    unless a longer retention period is required by law.
                  </li>
                  <li>
                    If you have communicated with us via email, we will delete
                    the information within 30 days, unless obligated by law to
                    retain it longer. 
                  </li>
                  <li>
                    Alternatively, you may request the deletion of your personal
                    data by sending an email to us at{" "}
                    <a href="mailto:hello@gamingarcade.io">
                      hello@gamingarcade.io
                    </a>
                    {`with "Please delete my personal data" in the subject line.
                    We will verify your request and delete the associated
                    personal data. We aim to respond to your request within 14
                    days, but in any case, within 30 days of receiving it.`}
                  </li>
                </ul>
                <h4 style={{ fontWeight: "600" }}>2. AUTOMATED DECISIONS</h4>
                <p style={{ fontWeight: "600", margin: "12px 0px" }}>
                  Automated decisions, which are decisions made without human
                  intervention and hold legal implications or similarly
                  significant effects, are not conducted as part of our
                  processing activities within the Gaming Arcade.
                </p>
                <h4 style={{ fontWeight: "600" }}>
                  3. COOKIES & DATA ANALYTICS
                </h4>
                <p style={{ margin: "15px 0px" }}>
                  At Gaming Arcade, we employ cookies, pixels, tags, and other
                  technologies, some of which may be provided by third parties,
                  across our platform to enhance specific functionalities,
                  ensure security, and prevent fraud. Additionally, these tools
                  help us gather usage data about our website and emails,
                  personalize content, and deliver more relevant advertisements
                  and information. The information collected through these means
                  may be combined with other data, including Personal
                  Information.
                </p>
                <p style={{ margin: "15px 0px" }}>
                  For further details, please refer to our cookie policy
                  accessible here: [insert Cookie Policy URL here]
                </p>
                <p style={{ margin: "15px 0px" }}>
                  3.1 Cookies: Alphanumeric identifiers transferred to your
                  computer via web browsers serve record-keeping functions.
                  While certain cookies facilitate log-ins or save preferences,
                  others aid in tracking usage and activities on our platform,
                  personalizing content, or delivering targeted ads. Although
                  most web browsers automatically accept cookies, you have the
                  option to adjust your browser settings to block them. However,
                  please note that blocking cookies may affect the availability
                  or functionality of certain features on our website.
                </p>
                <p style={{ margin: "15px 0px" }}>
                  {`3.2 Third-Party Cookies: Third parties may utilize cookies and
                  similar technologies to gather information from our site and
                  other online sources to deliver targeted advertisements. If
                  you wish to opt out of such advertising practices on the
                  device you're currently using, please visit`}
                  <a
                    href="http://optout.aboutads.info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.underlineLinks}
                  >
                    http://optout.aboutads.info
                  </a>{" "}
                  . Additionally, the Network Advertising Initiative provides a
                  means to opt out of several advertising cookies. For more
                  information, please visit
                  <a
                    href="https://thenai.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.underlineLinks}
                  >
                    Home - NAI: Network Advertising Initiative.
                  </a>{" "}
                  {`. Please note that opting out does not mean you'll cease to
                  receive online advertisements; it simply means that the
                  opted-out companies will no longer deliver ads tailored to
                  your preferences and usage patterns.`}
                </p>
                <p style={{ margin: "15px 0px" }}>
                  3.3 Pixel Tags and Embedded Scripts: Pixel tags, similar to
                  cookies but embedded invisibly on web pages, track user
                  activities, improve ads, manage content, and gather usage data
                  about our website. These tags may also be used in HTML emails
                  to monitor email engagement rates and forwarding.
                </p>
                <p style={{ margin: "15px 0px" }}>
                  3.4 Third-Party Analytics Tools: Our website employs automated
                  devices and applications operated by third parties, such as
                  Google Analytics, to collect and analyze information about
                  website usage. Google Analytics may also gather data regarding
                  the use of other websites, apps, and online resources. To
                  learn more about Google’s practices, please visit
                  www.google.com/policies/privacy/partners/ , and to opt out,
                  you can download the Google Analytics opt-out browser add-on
                  from{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.underlineLinks}
                  >
                    {" "}
                    Google Analytics opt-out browser add-on
                  </a>
                  .
                </p>
                <h2
                  className={styles.infomationTerms__text}
                  style={{ fontSize: "25px" }}
                >
                  4. EXTERNAL WEBSITE LINKS
                </h2>
                <p>
                 {` Within Gaming Arcade's services, you may encounter links to
                  various websites operated by third parties, including those
                  displaying Gaming Arcade trademarks. This Privacy Policy does
                  not govern third-party websites accessible through our
                  services unless such sites explicitly refer users or visitors
                  to this Policy. Clicking on these links will redirect you away
                  from our services to the website of the respective
                  organization or company. Despite any affiliations, we do not
                  oversee these linked websites. Each maintains its own privacy
                  and data collection policies. We encourage you to review the
                  privacy policies of these external sites to understand how
                  they collect, use, share, and secure your information before
                  providing any Personal Information.`}
                </p>
                <h3>{`5. Minor's Privacy`}</h3>
                <p>
                 {` Gaming Arcade restricts the use of its services to individuals
                  of legal age, and users under the age of 18 are prohibited
                  from accessing our services. Gaming Arcade does not knowingly
                  collect or retain Personal Information from individuals under
                  the age of 18. If it comes to our attention that we have
                  inadvertently collected Personal Information from a child
                  under 18, we will promptly remove such information. If you
                  have any concerns regarding the collection of Personal
                  Information from minors using our services, please reach out
                  to us using the contact information provided in the "Contact
                  Us'' section below. While our services are not intended for
                  individuals under the age of 18, if your child has used our
                  services and you wish to review or delete their Personal
                  Information, you can make such a request by contacting us at
                  the address or email provided under 'Contact Us' below.`}
                </p>
                <h3>6. INTERNATIONAL  DATA TRANSFERS</h3>
                <h4 className={styles.data_headBold}>
                  6.1 Data Transfers Outside UK/Europe
                </h4>
                <p>Processing Your Personal Information</p>
                <p>
                  We handle your personal information to fulfill our contractual
                  obligations and provide you with optimal services, including:
                </p>
                <ul className={styles.Data__list}>
                  <li>Registering and maintaining your account with us</li>
                  <li>
                    Delivering our Services, content, and website
                    functionalities
                  </li>
                  <li>
                    Enabling your access to and usage of our Services,
                    associated applications, and affiliated social media
                    platforms
                  </li>
                </ul>
                <p className={styles.data_desc}>
                  We seek your consent to process your personal information for
                  the following purposes
                </p>
                <ul className={styles.Data__list}>
                  <li>Subscribing you to marketing communications</li>
                  <li>Customizing our Services to suit your preferences</li>
                  <li>
                    If you opt into marketing, communicating with you about
                    products, services, marketing, promotions, events, and other
                    relevant information we believe will interest you
                  </li>
                </ul>
                <p className={styles.data_desc}>
                  In line with our legitimate interests to be responsive,
                  provide effective services, and maintain our business
                  relationship, we may use your personal information to:
                </p>
                <ul className={styles.Data__list}>
                  <li>Contact and engage with you</li>
                </ul>
                <p>
                  Furthermore, we may process your personal information to
                  comply with legal obligations (e.g., compliance requirements),
                  resolve disputes, and ensure security and fraud prevention.
                  This includes ensuring the safety and security of our sites
                  and apps, aligning with our Terms of Use at
                  [https://gamingarcade.io/policy/terms-of-use ].
                </p>
                <h4 className={styles.data_head}>
                  6.2 Data Storage Locations:
                </h4>
                <p className={styles.data_desc}>
                  The personal information we gather from you may be transferred
                  to and stored or processed in countries beyond the European
                  Economic Area (EEA) and the United Kingdom (UK). Additionally,
                  your personal information may be processed by personnel
                  outside the EEA and the UK, including employees of ours or our
                  third-party service providers or partners. We commit to taking
                  all reasonably necessary steps to ensure that your personal
                  information is handled securely and in accordance with this
                  Privacy Policy
                </p>
                <p className={styles.data_desc}>
                 {` It's important to note that privacy laws in these countries
                  may differ from those in your home country. When transferring
                  data to a country without adequate data protection standards,
                  we ensure the implementation of security measures and approved
                  European or UK model clauses (accessible on the European
                  Union’s legal website at{" "}`}
                  <a
                    href="https://eur-lex.europa.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.underlineLinks}
                  >
                    EUR-Lex — Access to European Union law — choose your
                    language{" "}
                  </a>{" "}
                  and the {`UK's `}ICO website at{" "}
                  <a
                    href="https://eur-lex.europa.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.underlineLinks}
                  >
                    www.ico.gov.uk{" "}
                  </a>
                  , or other suitable safeguards to protect your Personal
                  Information. Should you require further details about our data
                  transfer safeguards outside the UK/EEA, please contact us.
                </p>
                <p className={styles.data_desc}>
                  For users outside the UK and EEA, if we transfer your Personal
                  Information to countries beyond your home country, we will
                  adhere to the necessary requirements for such transfers as
                  mandated by relevant laws in your home country.
                </p>
                <h4 className={styles.data_head}>
                  6.3 UK/EEA Residents Rights Regarding Personal Information
                </h4>
                <p className={styles.data_desc}>
                  According to the law, you possess several rights concerning
                  your Personal Information. For additional information and
                  guidance regarding your rights, you may contact the data
                  protection authority in your jurisdiction. Many countries
                  allow individuals to file complaints with the regulator if
                  necessary.
                </p>
                <p className={styles.data_desc}>
                  You have the right to request a copy of the Personal
                  Information we have on record about you, or details about how
                  we utilize or disclose your Personal Information.
                  Additionally, you can ask us to rectify or update your
                  Personal Information, or withdraw your consent and request
                  cessation of the use or disclosure of your Personal
                  Information for any of the purposes outlined in this Policy.
                </p>
                <p className={styles.data_desc}>
                  To exercise these rights, you can submit your request in
                  writing or via email using the contact details provided below.
                </p>
                <p className={styles.data_desc}>
                  While we typically fulfill requests and provide information at
                  no cost, we reserve the right to charge a reasonable fee to
                  cover administrative expenses for baseless, excessive, or
                  repeated requests, or for additional copies of the same
                  information. Alternatively, there may be circumstances in
                  which we are entitled to decline the request. Please carefully
                  consider your request before submission. We will strive to
                  respond promptly, typically within one month of receiving your
                  request. However, if additional time is required to address
                  the request, we will inform you accordingly.
                </p>
                <h4 className={styles.data_head}>
                  6.4 Rights of Data Subjects Under United Kingdom and European
                  Regulations:
                </h4>
                <p className={styles.data_desc}>
                  In compliance with the GDPR, EEA/UK citizens are granted the
                  following rights to safeguard their data privacy:
                </p>
                <ol className={styles.Data__list}>
                  <li>
                    <span> Right to information: </span> Individuals have the
                    entitlement to be informed about the processing of their
                    personal data, including how and when it occurs.
                  </li>
                  <li>
                    <span>Right to Access: </span> Individuals can request
                    access to their processed data, along with details about the
                    purpose and duration of processing.
                  </li>
                  <li>
                    <span>Right to Object: </span> Individuals reserve the right
                    to object to the processing of their personal data for
                    purposes they find inappropriate
                  </li>
                  <li>
                    <span>Right to Erasure: </span> {`Data subjects can request
                    the deletion of their data if it's no longer necessary or if
                    consent is withdrawn, except when required for legal
                    obligations or public tasks.`}
                  </li>
                  <li>
                    <span>Right to Rectification: </span> Individuals can
                    request the correction of inaccurate or incorrect data
                    concerning them
                  </li>
                  <li>
                    <span>Right to Restrict Processing: </span> {`Data subjects
                    can limit the processing of their personal data for purposes
                    they don't approve of, with compliance to the imposed
                    restrictions.`}
                  </li>
                  <li>
                    <span>Rights Related to Data Portability: </span> Upon
                    choice, data subjects can transfer their data to other data
                    controllers and request a copy of their personal data for
                    such purposes.
                  </li>
                  <li>
                    <span>Right to Automated Decision Making:</span> In
                    instances of automated decision making during data
                    processing, individuals must be informed and have the right
                    to intervene or object to the process. 
                  </li>
                </ol>
                <h4
                  className={styles.data_headBold}
                  style={{ marginTop: "50px" }}
                >
                  {`6.5 California Residents' Privacy Rights`}
                </h4>
                <p className={styles.data_desc}>
                  {`Under California’s “Shine the Light” law (Cal. Civ. Code §
                  1798.83), California residents providing us with certain
                  personal data have the right to request and receive, free of
                  charge, information about any personal data we have shared
                  with third parties for their direct marketing purposes during
                  the preceding calendar year. Requests can be made once per
                  calendar year for information regarding relevant third-party
                  sharing from the prior calendar year. California residents
                  wishing to make such a request can do so by submitting a
                  request to the contact information provided below. The request
                  should confirm the requester's California residency and
                  include a current California address. We are obligated to
                  respond to a customer request only once during any calendar
                  year. Please note that not all information sharing falls under
                  California’s “Shine the Light” law, and our response will only
                  include information sharing covered by this law.`}
                </p>
                <h4 className={styles.data_headBold}>
                  6.6 California Consumer Privacy Act Disclosures
                </h4>
                <p className={styles.data_desc}>
                  {`In accordance with the California Consumer Privacy Act of 2018
                  ("CCPA"), we offer additional insights into the types of
                  Personal Information we collect, utilize, and disclose about
                  California residents. This section is not applicable to our
                  job applicants, employees, contractors, owners, directors, or
                  officers, concerning Personal Information collected in
                  relation to their current, former, or potential roles with us.`}
                </p>
                <h4 className={styles.data_headBold}>
                  6.7 Collection and Disclosure of Personal Information
                </h4>
                <p className={styles.data_desc}>
                  The following table outlines the categories of Personal
                  Information about California residents that we intend to
                  collect, as well as those we have collected and disclosed for
                  our operational business purposes in the past 12 months.
                </p>
                <table className={styles.table}>
                  <tbody>
                    <tr>
                      <td>Categories of Personal Information</td>
                      <td>
                        Disclosed to Which Categories of Third Parties for
                        Operational Business Purposes
                      </td>
                      <td>To Whom We Sell Information</td>
                    </tr>
                    <tr>
                      <td>
                        Audio/Video Data; Audio, electronic, and similar
                        information
                      </td>
                      <td>
                        Affiliates; service providers; business partners; joint
                        marketing partners; contest sponsors; legal authorities;
                        debt collectors, payment system operators or
                        sub-contractors
                      </td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <td>
                        Identifiers, such as username, contact information,
                        government-issued ID, IP address and other online
                        identifiers
                      </td>
                      <td>
                        Affiliates; service providers; business partners; joint
                        marketing partners; contest sponsors; legal authorities;
                        debt collectors, payment system operators or
                        sub-contractors
                      </td>
                      <td>Analytics vendors; advertising partners</td>
                    </tr>
                    <tr>
                      <td>
                        Internet or network activity information, such as
                        interactions with our online properties
                      </td>
                      <td>
                        Affiliates; service providers; business partners; joint
                        marketing partners; contest sponsors; legal authorities;
                        debt collectors, payment system operators or
                        sub-contractors
                      </td>
                      <td>Analytics vendors; advertising partners</td>
                    </tr>
                    <tr>
                      <td>
                        Commercial Information, such as transaction information
                        and purchase history
                      </td>
                      <td>
                        Affiliates; service providers; business partners; joint
                        marketing partners; contest sponsors; legal authorities;
                        debt collectors, payment system operators or
                        sub-contractors
                      </td>
                      <td>Analytics vendors; advertising partners</td>
                    </tr>
                    <tr>
                      <td>
                        Geolocation Data, such as approximate location derived
                        from IP address
                      </td>
                      <td>
                        Affiliates; service providers; business partners; joint
                        marketing partners; contest sponsors; legal authorities;
                        debt collectors, payment system operators or
                        sub-contractors
                      </td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <td>
                        Personal information as defined in the California
                        customer records law, such as name, contact information
                        and government-issued ID
                      </td>
                      <td>
                        Affiliates; service providers; business partners; joint
                        marketing partners; contest sponsors; legal authorities;
                        debt collectors, payment system operators or
                        sub-contractors
                      </td>
                      <td>N/A</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                 {` In the preceding 12 months, we have not engaged in the
                  "selling" or past "sale" of Personal Information as defined by
                  the CCPA. This includes refraining from any sale of Personal
                  Information belonging to minors under the age of 16.`}
                </p>
                <h4 className={styles.data_headBold}>
                  6.8 Privacy Policy - California Privacy Rights
                </h4>
                <p className={styles.data_desc}>
                  As a California resident, these are your rights under the
                  California Consumer Privacy Act (CCPA) and the California
                  Privacy Rights Act (CPRA), and how you can exercise these
                  rights with respect to the Personal Information we collect.
                </p>
                <h4 className={styles.data_headBold}>
                  6.9 Your Rights under the CCPA and CPRA
                </h4>
                <p>
                  As a California resident, you are afforded specific rights
                  regarding your personal information. These include:
                </p>
                <ol className={styles.Data__list}>
                  <li>
                    <span>The Right to Know: </span>You have the right to
                    request information about the categories of personal
                    information we have collected about you, the sources from
                    which we have collected that information, the purposes for
                    collecting or selling the information, and the categories of
                    third parties with whom we share personal information. This
                    includes access to the specific pieces of personal
                    information we have collected about you.
                  </li>
                  <li>
                    <span>The Right to Delete: </span>You may request the
                    deletion of your personal information that we have
                    collected, subject to certain exceptions prescribed by law.
                  </li>
                  <li>
                    <span>The Right to Opt-Out: </span>You have the right to opt
                    out of the sale or sharing of your personal information to
                    third parties. This includes the right to opt out of the
                    sharing of your personal information for cross-context
                    behavioral advertising purposes.
                  </li>
                  <li>
                    <span>The Right to Data Portability: </span>Upon request,
                    you have the right to obtain a copy of your personal
                    information in a portable and, to the extent technically
                    feasible, readily usable format that can be transferred to
                    another entity without hindrance.
                  </li>
                  <li>
                    <span>Non-Discrimination: </span>Exercising your CCPA rights
                    comes with the assurance that you will not receive
                    discriminatory treatment by us for the exercise of the
                    privacy rights conferred by the CCPA.
                  </li>
                  <li>
                    <span>No Sale of Personal Information of Minors: </span>We
                    respect the privacy of minors. If you are under 16 years of
                    age, we will not sell your personal information without
                    affirmative authorisation.
                  </li>
                  <li>
                    <span>Legal Action:</span>You have the right to exercise
                    legal action in the event of a data breach, as permitted
                    under the CCPA and CPRA.
                  </li>
                </ol>
                <h4 className={styles.data_headBold}>
                  6.10 How to Exercise Your Rights
                </h4>
                <p>
                  To exercise any of the rights described above, please follow
                  the instructions available in our Privacy Policy regarding the
                  submission of requests. You can typically submit requests
                  through a designated email address{" "}
                  <a href="mailto:hello@gamingarcade.io">
                    hello@gamingarcade.io
                  </a>{" "}
                  .
                </p>
                <p style={{ marginTop: "15px" }}>
                  We are committed to honouring your rights under the CCPA and
                  CPRA and will respond to your requests in accordance with
                  applicable law.
                </p>
                <h4
                  className={styles.data_headBold}
                  style={{ marginTop: "50px" }}
                >
                  6.11 Additional Information for Nevada Residents
                </h4>
                <p>
                  {`If you reside in Nevada, you have the option to opt-out of the
                  sale of specific Personal Information to third parties
                  intending to license or sell that data. You can exercise this
                  right by reaching out to us at Info@Tonohealth.com, using the
                  subject line "Nevada Do Not Sell Request," and providing your
                  name along with the email address linked to your account.
                  Please be aware that we presently do not engage in the sale of
                  your Personal Information as defined in Nevada Revised
                  Statutes Chapter 603A. Should you have any inquiries, feel
                  free to contact us using the information provided below.`}
                </p>
              </div>
              <h2
                className={styles.infomationTerms__text}
                style={{ margin: "15px 0px" }}
              >
                7. USER CREATED CONTENT DISCLAIMER
              </h2>
              <p>
                Kindly be aware that we do not have control over who may access
                the information you opt to share with others, and we cannot
                guarantee that those who access such information will uphold
                your privacy or maintain its security. We disclaim
                responsibility for the privacy or security of any information
                you choose to make publicly available through features allowing
                the creation of User-Generated Content (UGC). Additionally, we
                are not liable for the accuracy, proper use, or misuse of any
                UGC disclosed by you or received from third parties via social
                media or discussions on our Services.
              </p>
              <h2
                className={styles.infomationTerms__text}
                style={{ margin: "15px 0px" }}
              >
                8. Policy Updates
              </h2>
              <p>
                We reserve the right to revise our Privacy Policy at our
                discretion, to align with changes in our business operations,
                current industry practices, or legal regulations. In the event
                of any modifications to this Privacy Policy, we will publish the
                updated version at the same link from which you accessed this
                Privacy Policy, along with the date of the last revision. These
                updates will solely affect information collected after the date
                of the amendment.
              </p>
              <p>
                We encourage you to regularly review our website for any updates
                to our Privacy Policy. In cases where the changes are
                significant or where required by law, we will notify you (based
                on your chosen communication preferences) as well as all our
                registered users, providing the new details and links to the
                updated or revised policy.
              </p>
              <p>
                Should it be necessary by law, we will seek your consent or
                offer you the opportunity to opt in or opt out, as applicable,
                of any new uses of your personal information.
              </p>
              <h2
                className={styles.infomationTerms__text}
                style={{ margin: "15px 0px" }}
              >
                9.CONTACT US
              </h2>
              <p>
                If you have any questions, concerns, or inquiries regarding our
                Privacy Policy or the handling of your personal information at
                Gaming Arcade, please feel free to contact us. You can reach out
                to us via email at{" "}
                <a href="mailto:hello@gamingarcade.io">hello@gamingarcade.io</a>{" "}
                . <br />
                We are committed to addressing your queries promptly and
                ensuring transparency in our data practices.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default PrivacyPolicy;
