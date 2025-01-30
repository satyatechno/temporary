import Head from "next/head";
import styles from "./termsofuse.module.scss";
import config from "../../../config";
import Image from "next/image";
// import { useRouter } from "next/router";

function TermsOfUse() {
  //   const router = useRouter();
  //   const canonicalUrl = `https://gamingarcade.io${router.asPath}`;
  return (
    <>
      <Head>
        <title>Gaming Arcade Terms of Use - Your Guide to Our Platform</title>
        <meta
          name="title"
          content="Gaming Arcade Terms of Use - Your Guide to Our Platform"
        />
        <meta
          name="description"
          content="Understand the terms and conditions of using Gaming Arcade. Learn about your rights, responsibilities, and how we protect your gaming experience in the Web3 and crypto space."
        />
        <meta
          name="keywords"
          content="Terms of use,
            User agreement,
            Crypto gaming policy,
            Web3 terms,
            Platform rules,
            Legal terms"
        />

        <meta
          property="og:url"
          content="https://gamingarcade.io/terms-of-use"
        />
        <meta
          property="og:description"
          content="Understand the terms and conditions of using Gaming Arcade. Learn about your rights, responsibilities, and how we protect your gaming experience in the Web3 and crypto space."
        />
        <meta
          property="og:title"
          content="Gaming Arcade Terms of Use - Your Guide to Our Platform"
        />
        <meta property="og:type" content="website" />
        {/* <link rel="canonical" href={canonicalUrl} /> */}
      </Head>

      <div className={`${styles.App} ${styles.policyMain}`}>
        <section className={styles.privacy}>
          <div className="container-1280">
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
                  Terms
                </h1>
                <Image
                  className="col-lg-3"
                  src={`${config.imageDomain}Assets/terms_of_use.webp`}
                  alt="Terms of Use - Gaming Arcade"
                  width={250}
                  height={250}
                />
                <h2
                  className={`white-color ${styles.lgTxt} col-lg-3`}
                  style={{
                    background:
                      "linear-gradient(342deg, #FF00F5 0%, rgba(83, 22, 217, 0.00) 74.33%)",
                    width: "50%",
                    textAlign: "center",
                  }}
                >
                  Of Use
                </h2>
              </div>

              <div className={styles.pp_txt_m}>
                <h2 className="white-color">Terms Of Use</h2>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.privacyText}>
          <div className="container-1280">
            <p className={styles.cookie_desc}>
              {`Gaming Arcade is an application leveraging the Polygon blockchain
              network, allowing users to own, transfer Matic in case of win or
              lose (In a game). Through the App and Website, users can view
              their tickets and obtain tickets packs. Gaming arcade. operating
              as Gaming Arcade ("Gaming Arcade," "we," or "us") provides access
              to the App and Website. However, before utilizing the App or the
              Site, you must review these Terms of Use and any incorporated
              terms and conditions (collectively, "Terms"). Our Privacy Policy
              outlines how we collect, use, store, and disclose your personal
              information and is incorporated into these Terms. By using the
              App, you consent to the collection, use, storage, and disclosure
              of your data in accordance with our Privacy Policy.`}
            </p>

            <p className={styles.cookie_desc}>
              {`PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE APP OR THE
              SITE. THEY GOVERN YOUR USE OF THE APP, THE SITE, AND ANY PURCHASES
              UNLESS WE HAVE A SEPARATE WRITTEN AGREEMENT WITH YOU. WE ONLY
              PROVIDE ACCESS TO THE APP AND THE SITE IF YOU ACCEPT ALL THESE
              TERMS. BY USING THE APP AND/OR THE SITE, OR ANY PART THEREOF, YOU
              CONFIRM YOU UNDERSTAND AND AGREE TO BE BOUND BY ALL THESE TERMS.
              IF YOU ACCEPT THESE TERMS ON BEHALF OF A COMPANY OR OTHER ENTITY,
              YOU REPRESENT YOU HAVE THE LEGAL AUTHORITY TO DO SO, AND "YOU"
              REFERS TO THAT ENTITY. IF YOU LACK SUCH AUTHORITY OR DISAGREE WITH
              THESE TERMS, WE CANNOT PROVIDE ACCESS TO THE APP OR THE SITE. IF
              YOU DISAGREE, YOU MAY NOT ACCESS OR USE THE APP OR THE SITE`}
            </p>

            <h1 className={styles.mainHead}>1. KEY DEFINITIONS</h1>
            <ul style={{ marginLeft: "15px" }}>
              <li>
                “Tickets” means the digital collectible in-app currency we
                offer.
              </li>
              <li>
                “Smart Contracts” means the computer code executed in response
                to transactions published on the Polygon blockchain that
                generates a consistent and verifiable result.
              </li>
              <li>
                “Gaming arcade. d/b/a Gaming Arcade” means the Gaming arcade
                Corporation that owns the Gaming Arcade App and Site.
              </li>
            </ul>

            <h1 className={styles.mainHead}>2. The App and Website</h1>
            <p className={styles.cookie_desc}>
              The App is accessible through a supported web browser on desktop
              or mobile devices. Engaging in digital assets transactions may
              require third-party tools and services.
            </p>
            <p className={styles.cookie_desc}>
              In-app currency(Digital Assets) transactions on the App/ Website
              are processed and validated through the fiat network. You
              acknowledge that your transaction address will be visible during
              transactions on the App or Website.
            </p>
            <p className={styles.cookie_desc}>
              {`We do not own or control the Polygon network, or any third-party
              sites, products, or services you may access to utilize the App's/
              Websites features. We are not liable for the actions or omissions
              of such third parties, nor for any damages resulting from your
              transactions or interactions with them.`}
            </p>
            <p className={styles.cookie_desc}>
              When creating an account for the App or Website, you must provide
              accurate and complete registration information. By creating an
              account, you agree to furnish precise, up-to-date, and
              comprehensive account details, and to promptly update them as
              needed. You are responsible for the security of your account and
              associated digital assets wallet (including other Polygon wallets
              and accounts). If you discover any unauthorized use of your
              password or account, you agree to notify us immediately at
              <a
                href="mailto:hello@gamingarcade.com"
                className={styles.underlineLinks}
                target="_blank"
              >
                hello@gamingarcade.com
              </a>
              .
            </p>

            <h1 className={styles.mainHead}>3. Fees and Payment</h1>
            <p>
             {` If you decide to buy or interact with ticket packs or tickets on
              the App, or with other users through the App, all financial
              transactions will be carried out exclusively on the fiat network.
              We won't have control over these payments or transactions, and we
              can't reverse any transactions. You acknowledge that we're not
              liable to you or any third party for any claims or damages arising
              from transactions you make via the App or other transactions on
              the fiat networks.`}
            </p>
            <p className={styles.cookie_desc}>
              {`Currently, all digital asset transactions occur solely on the
              Polygon network. We plan to integrate additional networks in the
              future. We won't have visibility into or control over these
              payments or transactions, and we can't reverse any transactions.
              You acknowledge that we're not liable to you or any third party
              for any claims or damages arising from transactions you make via
              the App or other transactions on the Polygon or other blockchain
              networks.`}
            </p>
            <p className={styles.cookie_desc}>
             {` On the Polygon network, every transaction requires Matic. So,
              you'll need to make sure you have enough Matic in your account to
              transact on the App/ Website.`}
            </p>
            <p className={styles.cookie_desc}>
              {`Regarding taxes, you're solely responsible for paying any
              applicable sales, use, value-added, or other taxes associated with
              your use of the App or website. This includes taxes related to
              owning, or acquiring your Matic. You agree to cover all taxes
              imposed by any governmental authority, except for income taxes on
              Gaming Arcade. This means you'll pay or reimburse us for any
              national, federal, state, local, or international taxes, duties,
              or assessments now or in the future. You won't deduct these taxes
              from payments you make to us under these Terms.`}
            </p>
            <h1 className={styles.mainHead}>4. Purchasing Tickets</h1>

            <p>
              When you make payments through any payment method, you do so at
              your own risk. Gaming Arcade explicitly disclaims any liability
              related to the purchase of Tickets offered through the Gaming
              Arcade Store.
            </p>

            <p>You confirm that:</p>
            <ol style={{ marginLeft: "15px", fontFamily: "Inter" }}>
              <li>You are at least 13 years old.</li>
              <li>
                The payment account you use to purchase tickets is either in
                your name or you have authorisation to use it.
              </li>
              <li>
                The digital assets wallet you use to play game is either in your
                name or you have authorisation to use it.
              </li>
              <li>The information you provide is accurate and true.</li>
            </ol>

            <p className={styles.cookie_desc}>
              All payments are processed by Gaming Arcade. Due to the processing
              methods of our currency payment processors, there may be delays in
              receiving the Tickets you purchase or are awarded.
            </p>
            <p className={styles.cookie_desc}>
              Every transaction is subject to the Terms and Conditions
              applicable at the time of the transaction, specifically for use in
              the Gaming Arcade Platform. Tickets are exclusively for players
              looking to buy Gaming Arcade Tickets and/or items from the Gaming
              Arcade Shop. Any other use of Tickets is strictly prohibited, and
              Gaming Arcade will prevent your account from purchasing Tickets if
              such use is detected.
            </p>

            <p className={styles.cookie_desc}>
              Users are strictly prohibited from using Tickets to buy items in
              Gaming Arcade from their own accounts or other accounts they
              control in exchange for digital assets. This action is a clear
              violation of the Terms and Conditions, and Gaming Arcade disclaims
              any liability associated with such transactions.
            </p>
            <p className={styles.cookie_desc}>
              {`If Gaming Arcade detects any attempt by a user to engage in such
              activity, it reserves the right to block the user's account from
              accessing the game website and/or mobile application, as well as
              preventing them from purchasing Tickets.`}
            </p>
            <p className={styles.cookie_desc}>
              Gaming Arcade may, at its discretion, impose transaction limits on
              the purchase of Tickets by any user. Additionally, Gaming Arcade
              reserves the right to set limits on the number of Tickets a player
              can use to buy in-game items or tickets from other players.
            </p>
            <p className={styles.cookie_desc}>
              By using the App, you confirm that you are at least 13 years old,
              as the App is not intended for children under 13. If you are 13 or
              older but under 13, or under the legal age of majority in your
              jurisdiction if it is older than 13, you agree to review these
              Terms with your parent or guardian to ensure mutual understanding
              and agreement. If you are a parent or guardian agreeing to these
              Terms on behalf of a child over 13, you assume full responsibility
              for the child’s use of the App, including any financial charges
              and legal liability incurred.
            </p>

            <h1 className={styles.mainHead}>5. Ownership and Restrictions</h1>
            <p>
              {`You acknowledge and agree that, unless otherwise stated, we (or
              our licensors) own all legal rights, title, and interest in all
              elements of the App, including all intellectual property rights.
              The visual interfaces, graphics, design, systems, methods,
              information, computer code, software, services, and all other
              elements of the App ("Gaming Arcade Materials") are owned by
              Gaming Arcade and are protected by various laws and conventions.
              All Gaming Arcade Materials are copyrighted property, and all
              trademarks and trade names are proprietary to Gaming Arcade or its
              licensors. Your use of the App does not grant you ownership or any
              other rights with respect to any content or materials accessed
              through the App. We reserve all rights in and to the Gaming Arcade
              Materials not expressly granted to you.`}
            </p>
            <p className={styles.cookie_desc}>
                {` You may provide feedback about the App ("Feedback"), which we may
                use at our discretion without additional compensation to you. By
                submitting Feedback, you grant us a license to use it for any
                purpose.`}
            </p>
            <p className={styles.cookie_desc}>
             {` You are responsible for your conduct while using the App or
              Website and agree to use it only for legal and proper purposes.
              Prohibited actions include distributing objectionable content,
              uploading malicious software, impersonating others, infringing
              intellectual property rights, engaging in illegal activities,
              interfering with others' use of the App or Website, exploiting it
              for commercial purposes, modifying or reverse engineering it,
              removing notices, displaying hate-related or violent content,
              using automated tools, creating false accounts, competing with our
              products or services, and using automated players in specified
              contexts. Violation of these rules may result in consequences
              determined by the App's administrators. By using the App, you
              agree to abide by these rules.`}
            </p>

            <h1 className={styles.mainHead}>6. COMPLIANCE WITH LAWS</h1>

            <h4 style={{ fontWeight: "600" }}>
              6.1 Prohibited US States/Countries
            </h4>
            <p>
              {`You understand that there are specific laws, rules, and
              regulations governing sweepstakes, contests, and tournaments
              involving entry fees and prizes, known as "Gaming Laws," which are
              established by each US state, country, territory, or
              jurisdiction. `}
            </p>
            <p>
              {`As a result, Token Competitions are not available to users in any
              jurisdiction where such Competitions would be in violation of the
              Gaming Laws ("Prohibited Jurisdiction"), and you may not
              participate in Token Competitions if you are in any Prohibited
              Jurisdiction. In the United States, Prohibited Jurisdiction
              includes Arizona, Arkansas, Connecticut, Delaware, Louisiana,
              Montana, New Mexico, South Carolina, South Dakota, and Tennessee,
              and for card games, Prohibited Jurisdictions include Maine and
              Indiana. `}
            </p>

            <p>
              It is your responsibility to determine whether the state, country,
              territory or jurisdiction in which you are located is a Prohibited
              Jurisdiction. We reserve the right, although not obligated, to
              monitor your location while accessing our Services and block
              access from any Prohibited Jurisdiction.
            </p>
            <h4 style={{ fontWeight: "600", margin: "20px 0px" }}>
              6.2 Additional Laws
            </h4>
            <p>
              {`Along with Gaming Laws, you must comply with all city, state, and
              federal laws, rules, and regulations applicable to your location
              and use of Services, including but not limited to U.S. securities
              laws, commodities laws, money transmission regulations, and
              sanction and export laws (collectively referred to as "Applicable
              Laws"). It is your responsibility to abide by all Applicable Laws.
              Note that certain jurisdictions may not allow some or all of the
              Competitions, and may not be lawful for some or all residents or
              individuals present in those jurisdictions.`}
            </p>
            <p>
              COMPETITIONS AND SERVICES MAY BE VOID OR RESTRICTED IN CERTAIN
              JURISDICTION BY APPLICABLE LAWS, AND YOUR PARTICIPATION IN
              COMPETITIONS IS SOLELY AT YOUR OWN RISK. WE ARE NOT RESPONSIBLE OR
              LIABLE IF YOUR ACCESS TO PARTICIPATION IS RESTRICTED OR PROHIBITED
              BY APPLICABLE LAWS. WE DO NOT PROVIDE ANY REPRESENTATIONS OR
              WARRANTIES, EXPRESS OR IMPLIED, AS TO THE LEGALITY OF YOUR USE OF
              SERVICES OR PARTICIPATION IN ANY COMPETITION, AND NO PERSON
              AFFILIATED WITH US HAS THE AUTHORITY TO MAKE SUCH REPRESENTATIONS
              OR WARRANTIES. 
            </p>

            <h1 className={styles.mainHead}>
              7. Gaming Arcade Fair Play Policy
            </h1>
            <p>
              The Gaming Arcade Fair Play Policy is designed to ensure fair and
              competitive gameplay among players, as mandated by Gaming Arcade
              community members through a governance vote requiring
              super-majority approval.
            </p>
            <p>
              This policy specifically applies to the following gaming formats
              within Gaming Arcade:
            </p>
            <ul style={{ marginLeft: "15px" }}>
              <li>1 VS 1</li>
              <li>Open Challenges</li>
              <li>Custom Rooms</li>
              <li>Tournament</li>
            </ul>
            <p>
              Under the Fair Play Policy, the following conduct is strictly
              prohibited in the listed battle formats:
            </p>
            <p>
              <span className={styles.list_head}>1. No Automation:</span>Players
              must not use any form of automation to interact with Gaming Arcade
              APIs or other services during active battles. All actions must be
              performed manually through the website, mobile app, or other
              approved front ends.
            </p>
            <p>
              <span className={styles.list_head}>
                2. No External Assistance:{" "}
              </span>
              Players are prohibited from receiving external assistance in any
              other decisions during active battles. This includes the use of
              battle helpers, bots, plugins, browser extensions, or any tools
              that analyze or aid in analysis of ongoing battles, whether
              automated or manual.
            </p>
            <p>
              <span className={styles.list_head}>3. No Win-Trading:</span>
             {` Players must not engage in "win-trading" or intentionally lose
              matches for any reason. Accounts found to be in violation of the
              Fair Play Policy in any of the specified formats may face
              consequences, including bans from certain battle formats and/or
              the use of website, mobile app, and related services, at the sole
              discretion of the Gaming Arcade.`}
            </p>
            <p>
              Additionally, third-party tools and services, as well as their
              creators and operators, must adhere to the following restrictions
              under this policy:
            </p>
            <ul style={{ marginLeft: "15px", fontFamily: "Inter" }}>
              <li>
                They may not offer any form of automation during active battles
                in the specified formats.
              </li>
              <li>
                They may not access data from Gaming Arcade APIs, website,
                mobile app, or any other source related to battles in the
                specified formats while battles are ongoing.
              </li>
              <li>
                They may not provide assistance or advice during active battles
                in the specified formats.
              </li>
            </ul>
            <h1 className={styles.mainHead}>8. Termination</h1>
            <p>
              You have the right to terminate these Terms at any time by
              canceling your account on the App and Website and ceasing your use
              of the App and Website. Please note that no refunds will be issued
              upon account cancellation or termination of these Terms.
            </p>
            <p>
              We reserve the right, at our sole discretion and without any
              obligation to provide justification, to terminate these Terms and
              suspend or terminate your access to the App and Website. Such
              suspension or termination may occur without prior notice, and we
              will not be liable to you or any third party for such actions. If
              we terminate these Terms or suspend/terminate your access to the
              App and Website due to your violation of these Terms or suspicion
              of fraudulent, abusive, or illegal activity, it will be in
              addition to any other legal remedies available to us.
            </p>
            <p>
              Upon termination or expiration of these Terms, whether initiated
              by you or us, you may lose access to any information you have
              posted on the App or related to your account. We are not obligated
              to maintain such information in our databases or to provide it to
              you or any third party.
            </p>

            <h1 className={styles.mainHead}>9. Limitation of Liability</h1>
            <p>
              You understand and agree that we, along with our subsidiaries,
              affiliates, and licensors, will not be liable to you or any third
              party for any indirect, incidental, special, consequential, or
              exemplary damages, regardless of the theory of liability,
              including but not limited to loss of profits, goodwill, business
              reputation, data, or the cost of procurement of substitute goods
              or services, even if we have been advised of the possibility of
              such damages.
            </p>
            <p>
              You agree that our total liability to you for any and all claims
              arising out of or related to these Terms or your access to or use
              of the App and Website is limited to the lessor of (a) the amounts
              you actually paid us under these Terms in the 12-month period
              preceding the date the claim arose, or (b) $50. HAVING ONE OR MORE
              CLAIMS AGAINST US WON’T INCREASE YOUR LIABILITY BEYOND THAT LIMIT.
              OUR SUPPLIERS OR LICENSORS WILL HAVE NO LIABILITY FOR OUR
              PRODUCTS, INFORMATION, OR SERVICES IN ANY EVENT. You acknowledge
              and agree that we have provided the App and Website to you and
              entered into these Terms in reliance upon the warranty disclaimers
              and limitations of liability set forth herein, which form an
              essential basis of the bargain between us. Without these
              limitations, we would not be able to provide the App and Website
              to you. Some jurisdictions may not allow the exclusion or
              limitation of incidental or consequential damages, and some
              jurisdictions may limit disclaimers or limitations of liability
              for personal injury from consumer products. Therefore, the above
              limitations may not apply to personal injury claims in such
              jurisdictions.
            </p>
            <h1 className={styles.mainHead}>10. Assumption of Risk</h1>
            <p>
              By using the App and Website, you acknowledge and accept the
              following:
            </p>
            <p>
              <span className={styles.list_head}>10.1 Tax Responsibility:</span>
              You are solely responsible for determining the taxes applicable to
              your Gaming Arcade-related transactions. Gaming Arcade does not
              provide tax advice or determine tax obligations related to
              transactions on the App, the Site, or any blockchain.
            </p>
            <p>
              <span className={styles.list_head}>
                10.2 Blockchain Transactions:
              </span>
             {` These exist on the Polygon network's supporting blockchain, and
              any transfers occur within the blockchain network, not on the App
              or Website itself.`}
            </p>
            <p>
              <span className={styles.list_head}>
                10.3 Internet-based Currency Risks:
              </span>
              Using Internet-based currencies, including blockchain assets,
              carries inherent risks such as hardware and software failures,
              Internet connection issues, and potential security breaches.
              Gaming Arcade is not liable for any communication failures,
              disruptions, errors, or delays experienced when using the Polygon
              network.
            </p>
            <p>
              <span className={styles.list_head}>
                10.4 Ecosystem Development:{" "}
              </span>
              The success of the Gaming Arcade ecosystem depends on user
              adoption and interest in distributed ecosystems. A lack of use or
              public interest could negatively impact the development and value
              of Gaming Arcade Cards and other items.
            </p>
            <p>
              <span className={styles.list_head}>
                10.5 Regulatory Uncertainty:
              </span>
              The regulatory landscape surrounding blockchain technologies,
              cryptocurrencies, and tokens is uncertain. New regulations or
              policies may have adverse effects on the Gaming Arcade ecosystem
              and other items.
            </p>
            <p>
              <span className={styles.list_head}>
                10.6 Platform Upgrades and Forks:
              </span>
              Changes or upgrades to the Polygon platform, including hard forks
              or alterations in transaction confirmation methods, may
              unintentionally impact all applications using the Polygon
              platform, including the Gaming Arcade ecosystem.
            </p>
            <h1 className={styles.mainHead}>11. Indemnification</h1>
            <p>
              You agree to indemnify and hold harmless Gaming Arcade, its
              subsidiaries, affiliates, officers, agents, employees,
              advertisers, licensors, suppliers, or partners from and against
              any claims, liabilities, losses, damages (actual and
              consequential), suits, judgments, litigation costs, and attorneys’
              fees arising from (i) your breach of these Terms, (ii) your misuse
              of the App, (iii) your violation of applicable laws, rules, or
              regulations in connection with your use of the App, or (iv) your
              breach of our Privacy Policy. You agree that Gaming Arcade will
              have control over the defense or settlement of any such claims.
            </p>
            <h1 className={styles.mainHead}>12. External Sites</h1>
            <p>
              {`The App may contain hyperlinks to other websites or resources
              (referred to as "External Sites"), provided solely for user
              convenience. We have no control over External Sites. You
              acknowledge and agree that we are not responsible for the
              availability of External Sites and do not endorse any advertising,
              products, or materials on or made available from External Sites.
              You further acknowledge and agree that we are not liable for any
              loss or damage resulting from the availability or unavailability
              of External Sites, or from any reliance placed on the
              completeness, accuracy, or existence of any advertising, products,
              or materials on or made available from External Sites.`}
            </p>
            <h1 className={styles.mainHead}>13. Changes to the App/ Website</h1>
            <p>
             {` We may revise and update these Terms of Use from time to time at
              our sole discretion. When we make changes, we will make the
              updated Terms available on the App and update the "Last Updated"
              date accordingly. These changes will apply to all access to and
              use of the App thereafter. Please check these Terms periodically
              for updates. Your continued access to or use of the App after the
              Terms have been updated will constitute your binding acceptance of
              the changes. If you do not agree to any revised Terms, you may not
              access or use the App or Website.`}
            </p>
            <h1 className={styles.mainHead}>
              14. GOVERNING LAW AND JURISDICTION
            </h1>
            <p className={styles.cookie_desc}>
              14.1 ANY DISPUTES ARISING FROM OR RELATING TO THESE TERMS,
              INCLUDING DISPUTES REGARDING THEIR EXISTENCE, VALIDITY, OR
              TERMINATION, SHALL BE GOVERNED BY THE LAWS OF SAINT VINCENT &
              GRENADINES, EXCLUDING CONFLICTS OF LAW PRINCIPLES.
            </p>
            <p className={styles.cookie_desc}>
              {`14.2 ANY DISPUTE ARISING FROM OR RELATING TO THESE TERMS,
              INCLUDING QUESTIONS ABOUT THEIR EXISTENCE, VALIDITY, OR
              TERMINATION, SHALL BE REFERRED TO AND FINALLY RESOLVED BY
              ARBITRATION ADMINISTERED BY THE SAINT VINCENT & GRENADINES
              INTERNATIONAL ARBITRATION CENTRE ("SVIAC") IN ACCORDANCE WITH THE
              ARBITRATION RULES OF THE SAINT VINCENT & GRENADINES INTERNATIONAL
              ARBITRATION CENTRE ("SVIAC RULES") CURRENTLY IN EFFECT, WHICH
              RULES ARE DEEMED TO BE INCORPORATED BY REFERENCE IN THIS CLAUSE.
              THE ARBITRATION SHALL TAKE PLACE IN SAINT VINCENT & GRENADINES.
              THE ARBITRATION PANEL SHALL CONSIST OF ONE (1) ARBITRATOR. THE
              LANGUAGE USED IN THE ARBITRATION PROCEEDINGS SHALL BE ENGLISH.`}
            </p>
            <p className={styles.cookie_desc}>
              {`14.3 EXCEPT FOR DISPUTES SUBJECT TO ARBITRATION OR SMALL CLAIMS
              COURT AS OUTLINED HEREIN, BOTH PARTIES AGREE TO SUBMIT TO THE
              EXCLUSIVE JURISDICTION OF THE COURTS LOCATED IN SAINT VINCENT &
              GRENADINES. ANY CLAIMS OR DISPUTES SHALL BE SUBJECT TO THE
              ARBITRATION PROVISIONS DETAILED BELOW.Disputes related to our
              privacy policy or these terms of service ("Dispute") shall be
              resolved through individual, non-representative binding
              arbitration in accordance with the rules of THE ARBITRATION ACT,
              CHAPTER 11 OF THE LAWS OF SAINT VINCENT AND THE GRENADINES, which
              governs arbitration proceedings. This Act outlines the legal
              framework for arbitration, including the appointment of
              arbitrators, the conduct of proceedings, and the enforcement of
              arbitral awards. However, disputes falling within the jurisdiction
              of a small claims court may be brought before such courts in the
              county (or equivalent) of your most recent physical address.`}
            </p>

            <p className={styles.cookie_desc}>
              {`Disputes related to our privacy policy or these terms of service
              ("Dispute") shall be resolved through individual,
              non-representative binding arbitration in accordance with the
              rules of THE ARBITRATION ACT, CHAPTER 11 OF THE LAWS OF SAINT
              VINCENT AND THE GRENADINES, which governs arbitration proceedings.
              This Act outlines the legal framework for arbitration, including
              the appointment of arbitrators, the conduct of proceedings, and
              the enforcement of arbitral awards. However, disputes falling
              within the jurisdiction of a small claims court may be brought
              before such courts in the county (or equivalent) of your most
              recent physical address. <br />
              Any arbitration will be conducted by a single, neutral arbitrator
              and shall take place in Kingstown, Saint Vincent & the Grenadines.
              The arbitrator may award any relief that a court of competent
              jurisdiction could grant, including attorneys’ fees when
              authorized by law. The arbitral decision may be enforced in any
              court of competent jurisdiction. You hereby agree that this
              Agreement evidences a transaction within the jurisdiction of Saint
              Vincent & the Grenadines and is governed by THE ARBITRATION ACT,
              CHAPTER 11 OF THE LAWS OF SAINT VINCENT AND THE GRENADINES. We
              each agree that this Act shall govern whether a Dispute is subject
              to arbitration.`}
            </p>
            <p className={styles.cookie_desc}>
             {` The arbitrator will conduct hearings, if necessary, through
              teleconference or videoconference, rather than in person, unless
              determined otherwise by the arbitrator upon request by you or us.
              In-person appearances, if required, will occur at a mutually
              convenient location, considering both parties' travel capabilities
              and other relevant factors. If location agreement cannot be
              reached, AAA or the arbitrator will decide. The arbitrator's
              decision will adhere strictly to the terms laid out in these Terms
              of Service and will be deemed final and binding. The arbitrator
              retains the authority to grant temporary, interim, or permanent
              injunctive relief or relief for specific performance of these
              Terms of Service, but only as necessary to provide adequate relief
              for the individual claim. Any decision made by the arbitrator may
              be enforced in any court with jurisdiction. However,
              notwithstanding the above, you still reserve the right to bring
              matters to the attention of federal, state, or local agencies, and
              where permitted by law, seek relief against us.`}
            </p>

            <h1 className={styles.mainHead}>15. Waiver and Severability</h1>
            <p>
              {`No waiver by the Company of any term or condition set out in these
              Terms of Use shall be deemed a further or continuing waiver of
              such term or condition, nor a waiver of any other term or
              condition. The Company's failure to assert any right or provision
              under these Terms of Use shall not constitute a waiver of such
              right or provision. If any provision of these Terms of Use is held
              by a court or other tribunal of competent jurisdiction to be
              invalid, illegal, or unenforceable for any reason, such provision
              shall be limited or eliminated to the minimum extent necessary,
              and the remaining provisions shall remain in full force and
              effect.`}
            </p>
            <h1 className={styles.mainHead}>16. Content Standards</h1>
            <p>
              These content standards apply to any contributions or use by you
              on the App or Site. Your contributions and use must comply in
              their entirety with all applicable federal, state, local, and
              international laws and regulations. Specifically, you must not:
            </p>
            <ul style={{ marginLeft: "15px" }}>
              <li>
                Provide material that is defamatory, obscene, indecent, abusive,
                offensive, harassing, violent, hateful, inflammatory, or
                otherwise objectionable.
              </li>
              <li>
                Promote sexually explicit or pornographic material, violence, or
                discrimination based on race, sex, religion, nationality,
                disability, sexual orientation, or age.
              </li>
              <li>
                Infringe any intellectual property or other rights of any
                person.
              </li>
              <li>
                Violate the legal rights (including rights of publicity and
                privacy) of others or contain any material that could give rise
                to civil or criminal liability under applicable laws or
                regulations.
              </li>
              <li>Be likely to deceive any person.</li>
              <li>Promote any illegal activity or assist unlawful acts.</li>
              <li>
                Impersonate any person or misrepresent your identity or
                affiliation.
              </li>
              <li>
                Involve commercial activities or sales, such as contests,
                sweepstakes, promotions, barter, or advertising.
              </li>
              <li>Misrepresent the origin or endorsement of content.</li>
            </ul>
            <h1 className={styles.mainHead}>17. Not an Investment Company</h1>
            <p>
              The Company is not registered as an “investment company” under the
              Investment Company Act of 1940, as amended, or under equivalent
              laws of any other jurisdiction.
            </p>
            <h1 className={styles.mainHead}>18. Defamation</h1>
            <p>
              You agree not to disparage or criticize the Company or its
              Affiliates, including their businesses, management, directors,
              business practices, or equity holders (the “Company Entities”).
              Furthermore, you agree not to engage in any activity that could
              disrupt the good morale or harm the interests or reputations of
              the Company Entities. Similarly, we agree not to publicly
              disparage or criticize you.
            </p>

            <h1 className={styles.mainHead}>19. REFUNDS</h1>
            <p>
              Due to the irrevocable nature of the blockchain and our lack of
              control over user assets, we are unable to offer refunds on any
              purchases. Once digital assets (tickets) are purchased, they
              cannot be refunded.
            </p>
            <h1 className={styles.mainHead}>20. PROPRIETARY RIGHTS</h1>
            <p>
              <span className={styles.list_head}>20.1 License of Services</span>
              <br />
              Except for third-party software integrated into the Software or
              Service, Gaming Arcade owns all the technology, content, and other
              materials used, displayed, or provided in connection with the
              Services, including any intellectual property rights associated
              with them. Gaming Arcade grants you a limited, non-transferable,
              and revocable license to access and use the proprietary portions
              of the Services.
            </p>
            <p>
              <span className={styles.list_head}>20.2 Trademarks</span>
              <br />
             {` The names, logos, and marks of Gaming Arcade's products or
              services, which are used on the Site or as part of the Service,
              including Gaming Arcade's name and logo, are trademarks that
              belong to Gaming Arcade, its affiliates or its respective
              licensors. Without Gaming Arcade's (or the applicable licensor's)
              prior written consent, you may not copy, imitate, or use them.`}
            </p>
            <p>
              <span className={styles.list_head}>20.3 User Content</span>
              <br />
              {`By agreeing to these Terms, you are giving us permission to use
              any communication, materials, content, or information that you
              submit to us through the Site or Services ("Content"). This
              includes a worldwide, perpetual, unrestricted, royalty-free
              license to use, copy, modify, perform, transmit, distribute,
              publish, and display the Content, and you waive any moral rights
              you may have in the Content. We may use the Content for any
              purpose and are not liable to compensate you for it. However, if
              you use or share Content in a way that infringes on others'
              intellectual property or privacy rights, you are in breach of
              these Terms. You represent and warrant that you have all necessary
              rights for the Content you upload or share on the Services and
              that its use will not violate any Applicable Laws. If your Wallet
              is suspended, and your IP address terminated, we may permanently
              delete your Content from our servers, and we are not obligated to
              return it to you unless required by Applicable Law.`}
            </p>
            <p>
              <span className={styles.list_head}>20.4 User Feedback</span>
              <br />
              If you provide feedback to the Site, including but not limited to
              questions, requests, opinions, comments, suggestions, or ideas,
              such information will be considered the property of Gaming Arcade.
              Gaming Arcade will not be obligated to the User in any manner
              regarding such information and will have the unrestricted right to
              reproduce, use, disclose, and distribute the information to others
              without any limitations or need for a license. Gaming Arcade
              retains the freedom to utilize any ideas, concepts, know-how, or
              techniques found within such information for any purpose
              whatsoever.
            </p>
            <h1 className={styles.mainHead}>21. General</h1>
            <p>
              These Terms constitute the entire legal agreement between you and
              Gaming Arcade, governing your access to and use of the App and
              Website, and completely replace any prior or contemporaneous
              agreements between the parties related to your access to or use of
              the App and Website, whether oral or written. There are no
              third-party beneficiaries to these Terms. The parties are
              independent contractors, and nothing in these Terms creates any
              agency, partnership, or joint venture. The language in these Terms
              will be interpreted as to its fair meaning and not strictly for or
              against any party. You may not assign any of your rights or
              obligations under these Terms, whether by operation of law or
              otherwise, without our prior written consent. We may assign our
              rights and obligations under these Terms at our sole discretion to
              an affiliate, or in connection with an acquisition, sale, or
              merger. Should any part of these Terms be held invalid or
              unenforceable, that portion shall be construed consistent with
              applicable law, and the remaining portions will remain in full
              force and effect. Our failure to enforce any provision of these
              Terms will not be deemed a waiver of such provision, nor of the
              right to enforce such provision. These Terms will be governed by
              and construed in accordance with the laws of the Commonwealth of
              Pennsylvania, and the federal laws of the United States of America
              applicable therein, excluding its conflicts of law rules and
              principles. We will not be liable for any failure or delayed
              performance of our obligations that result from any condition
              beyond our reasonable control, including, but not limited to,
              governmental action, acts of terrorism, earthquake, fire, flood,
              acts of God, labor conditions, power failures, Internet
              disturbances, or acts or omissions of third parties. You agree
              that we may provide you with notices (including, without
              limitation, those regarding changes to these Terms) by email,
              regular mail, or postings on the App. By providing us with your
              email address, you consent to our using the email address to send
              you any notices required by law in lieu of communication by postal
              mail. <br />
              {`TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, ALL
              SERVICES, PRODUCTS, INFORMATION AND DATA PROVIDED OR MADE
              AVAILABLE BY US (INCLUDING WITHOUT LIMITATION THE SITE, Gaming
              Arcade App and Website) ARE PROVIDED ON AN "AS IS" BASIS AND
              WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED,
              INCLUDING BUT NOT LIMITED TO, IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-
              INFRINGEMENT, AND YOU ASSUME THE ENTIRE RISK WITH RESPECT THERETO.
              WE MAKE NO REPRESENTATION, WARRANTY OR GUARANTEE OF ANY KIND,
              WHETHER EXPRESS OR IMPLIED, (A) AS TO THE OPERATION OR
              AVAILABILITY OF THE WEBSITE, OR ANY INFORMATION, FUNCTIONALITY,
              CONTENT, MATERIALS, SERVICES OR PRODUCTS INCLUDED THEREON; (B)
              THAT THE SERVICES, YOUR ACCOUNT, SOFTWARE, VIRTUAL GOODS AND/OR
              THE SITE WILL BE SECURE, VIRUS-FREE, UNINTERRUPTED OR ERROR-FREE,
              OR THAT THE SAME WILL FUNCTION PROPERLY IN COMBINATION WITH ANY
              THIRD-PARTY COMPONENT, TECHNOLOGY, HARDWARE, SOFTWARE, OR SYSTEM;
              (C) AS TO THE ACCURACY, RELIABILITY, OR CURRENCY OF ANY
              INFORMATION OR CONTENT PROVIDED THROUGH THE SITE OR Gaming Arcade
              App and Website; OR (D) THAT THE SITE, Gaming Arcade App and
              Website, ITS SERVERS, COMMUNICATIONS SENT FROM OR ON BEHALF OF US,
              OR ANY FILES AVAILABLE FOR DOWNLOADING FROM THE SITE ARE FREE OF
              VIRUSES, SCRIPTS, TROJAN HORSES, WORMS, MALWARE, TIMEBOMBS OR
              OTHER HARMFUL COMPONENTS.`}
            </p>
            <ul style={{ margin: "25px 0px 0px 15px" }}>
              <li>
                Some jurisdictions do not allow the exclusion of certain types
                of warranties or limitations on applicable statutory rights of a
                consumer, so some or all of the above exclusions and limitations
                may not apply; but in such a case the exclusions and limitations
                set forth in this section shall be applied to the greatest
                extent enforceable under applicable law.
              </li>
              <li>
                You are responsible for implementing appropriate measures to
                satisfy your particular requirements for anti-virus protection
                and accuracy of data input and output, and for maintaining a
                means external to the Website for any reconstruction of any lost
                data. WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A
                DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES, OR OTHER
                TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER
                EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY
                MATERIAL DUE TO YOUR USE OF THE SITE, Gaming Arcade App and
                Website, SOFTWARE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE
                ABOVE OR TO YOUR DOWNLOADING OF ANY MATERIAL MADE AVAILABLE
                THEREON.
              </li>
              <li>
                WE CANNOT GUARANTEE THE SECURITY OF ANY DATA THAT YOU DISCLOSE
                ONLINE. YOU ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING
                INFORMATION AND DEALING ONLINE AND WILL NOT HOLD US RESPONSIBLE
                FOR ANY BREACH OF SECURITY UNLESS IT IS DUE TO OUR FRAUD, GROSS
                NEGLIGENCE OR WILLFUL MISCONDUCT.
              </li>
              <li>
                We strive to keep Services up and running; however, all online
                services suffer occasional disruptions and outages, we are not
                responsible or liable for any disruption or loss you may suffer
                as a result. You should regularly backup content that you store
                on the Services.
              </li>
            </ul>
            <h1 className={styles.mainHead}>22. COPYRIGHT COMPLAINTS</h1>
            <p>
              The Digital Millennium Copyright Act (DMCA) provides copyright
              owners who believe that their rights under the United States
              copyright law have been infringed by acts of third parties over
              the Internet with ways to protect their rights. If you believe
              that your copyrighted work has been copied without your
              authorization and is available in the Services in a way that may
              constitute copyright infringement, you can provide notice of your
              claim to the designated agent listed below. For your notice to be
              effective, it must include the following information:
            </p>
            <ul style={{ margin: "25px 0px 0px 15px" }}>
              <li>
                A physical or electronic signature of a person authorized to act
                on behalf of the owner of the intellectual property right that
                is allegedly infringed;
              </li>
              <li>
                A physical or electronic signature of a person authorized to act
                on behalf of the owner of the intellectual property right that
                is allegedly infringed;
              </li>
              <li>
                A description of where the material that you claim is infringing
                is located; Information reasonably sufficient to permit us to
                contact the complaining party, such as address, telephone
                number, and, if available, an e-mail address at which the
                complaining party can be contacted;
              </li>
              <li>
                A statement by you that you have a good-faith belief that the
                disputed use is not authorized by the copyright owner, its
                agent, or the law; and
              </li>
              <li>
                A statement that the information in the notification is accurate
                and, under penalty of perjury, that the complaining party is
                authorized to act on behalf of the owner of the exclusive right
                that is allegedly infringed.
              </li>
            </ul>

            <h1 className={styles.mainHead}>23. MISCELLANEOUS</h1>
            <p>
              <span className={styles.list_head}>23.1 Entire Agreement</span>
              <br />
              These Terms, together with any Applicable Policies, constitute the
              entire agreement between you and us pertaining to the subject
              matter hereof and supersede all prior or other arrangements,
              understandings, negotiations and discussions, whether oral or
              written. Our failure to require or enforce strict performance by
              you of any provision of these Terms or to exercise any right under
              them shall not be construed as a waiver or relinquishment of our
              right to assert or rely upon any such provision or right in that
              or any other instance. Section titles in these Terms are for
              reference only and have no legal effect.
            </p>
            <p>
              <span className={styles.list_head}>23.2 Severability</span>
              <br />
              The provisions of these Terms are intended to be severable. If for
              any reason any provision of these Terms shall be held invalid or
              unenforceable in whole or in part by any court of competent
              jurisdiction, such provision shall, as to such jurisdiction, be
              ineffective to the extent of such determination of invalidity or
              unenforceability without affecting the validity or enforceability
              thereof in any other manner or jurisdiction and without affecting
              the remaining provisions of the Terms, which shall continue to be
              in full force and effect.
            </p>
            <p>
              <span className={styles.list_head}>
                23.3 Amendment and Modification
              </span>
              <br />
              These Terms cannot be modified by you and may only be modified by
              us as provided above.
            </p>
            <p>
              <span className={styles.list_head}>23.4 Remedies</span>
              <br />
              No right or remedy of ours shall be exclusive of any other,
              whether at law or in equity, including without limitation damages
              injunctive relief, attorneys’ fees and expenses.
            </p>
            <p>
              <span className={styles.list_head}>23.5 Assignability</span>
              <br />
              We may assign these Terms, in whole or in part, at any time
              without notice to you. You may not assign these Terms or transfer
              any rights to use the Services or Software.
            </p>
            <p>
              <span className={styles.list_head}>23.6 Consent to Notice</span>
              <br />
              You consent to our providing you notifications about the Services
              or information the law requires us to provide via email to the
              address that you specified when you created your Account. Notices
              emailed to you will be deemed given and received when the email is
              sent. If you do not consent to receive notices electronically, you
              must close your Account.
              <br />
              All notices, requests, consents, claims, demands, waivers and
              other communications hereunder shall be in writing and sent to us
              by email to our email address{" "}
              <a
                href="mailto:hello@gamingarcade.com"
                className={styles.underlineLinks}
                target="_blank"
              >
                hello@gamingarcade.com
              </a>
            </p>
            <p>
              <span className={styles.list_head}>
                23.7 Successors and Assigns{" "}
              </span>{" "}
              <br />
              These Terms are solely for your and our benefit, and not for the
              benefit of any other person, except for our successors and
              assigns. A printed version of these Terms and of any notice given
              in electronic form will be admissible in judicial or
              administrative proceedings based upon or relating to these Terms
              to the same extent and subject to the same conditions as other
              business documents and records originally generated and maintained
              in printed form. Please send any questions or comments (including
              all inquiries unrelated to copyright infringement) to:{" "}
              <a href="mailto:support@gamingarcade.com" target="_blank">
                support@gamingarcade.com
              </a>
              . Please print these Terms for your records.
            </p>

            <p>
              <span className={styles.list_head}>
                23.8 User Responsibilities
              </span>
              <br />
            </p>
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Users acknowledge the inherent risks associated with Web3
                technologies, including:
              </li>
            </ul>
            <ul style={{ marginLeft: "30px" }}>
              <li>
                <span className={styles.list_head}>
                  Volatility of cryptocurrency markets:
                </span>
                Values can fluctuate significantly.
              </li>
              <li>
                <span className={styles.list_head}>
                  Loss of private keys or seed phrases:{" "}
                </span>
                Loss leads to permanent loss of access to digital assets.
              </li>
              <li>
                Smart contract vulnerabilities: Code errors can lead to
                unexpected outcomes.
              </li>
              <li>
                Scams and phishing attacks: Be cautious of fraudulent activities
                impersonating the platform.
              </li>
            </ul>
            <li style={{ marginLeft: "7px" }}>
              Security of Private Keys and Seed Phrases: Users are solely
              responsible for safeguarding their private keys and seed phrases.
              Sharing this information with anyone compromises their account and
              assets.
            </li>
            <li style={{ marginLeft: "7px" }}>
              Research on In-Game Assets: Users are responsible for conducting
              their own research on in-game assets (NFTs, tokens) before
              purchasing them. The platform is not liable for investment
              decisions.
            </li>
            <li style={{ marginLeft: "7px" }}>
              Compliance with Laws and Regulations: Users agree to comply with
              all applicable laws and regulations related to their use of the
              platform and blockchain technology. This includes any regional
              restrictions on cryptocurrencies or NFTs.
            </li>
            <li style={{ marginLeft: "7px" }}>
              Respectful Conduct: Users are expected to behave in a respectful
              and ethical manner while interacting with other users on the
              platform. This may include outlining prohibited behavior and
              potential consequences of violating the terms.
            </li>

            <h1 className={styles.mainHead}>24. DISCLAIMERS</h1>
            <p>
              {`You acknowledge and agree that your use of the App and Website is
              at your own risk. The App and Website is provided on an "as is"
              and "as available" basis without any warranties, whether express
              or implied. We, along with our subsidiaries, affiliates, and
              licensors, expressly disclaim all implied warranties regarding the
              App and Website, including but not limited to warranties of
              merchantability, fitness for a particular purpose,
              non-infringement, correctness, accuracy, or reliability.`}
              <br />
              We do not guarantee that: (i) your access to or use of the App and
              Website will meet your requirements; (ii) your access to or use of
              the App and Website will be uninterrupted, timely, secure, or
              error-free; (iii) data provided through the App and Website will
              be accurate; (iv) the App and Website or any content, services, or
              features made available on or through the App and Website are free
              of viruses or other harmful components; or (v) any data you
              disclose when using the App and Website will be secure.
              <br />
              You acknowledge the inherent security risks of providing
              information and conducting transactions online over the internet.
              We are not liable for any breach of security unless it is due to
              our gross negligence.
              <br />
              We will not be responsible or liable for any losses you incur as a
              result of your use of the Polygon network or an electronic wallet,
              including but not limited to losses arising from user error,
              server failure, unauthorized access by third parties, or other
              security breaches.
              <br />
              Gaming Arcade tickets and tickets packs are digital assets
              maintained on the Polygon network. We have no control over the
              functionality of the Polygon blockchain or the execution of smart
              contracts and transactions. Therefore, we make no guarantees or
              promises regarding their functionality or execution.
              <br />
              Gaming Arcade is not responsible for losses due to issues with the
              Polygon network or an electronic wallet, including but not limited
              to late reporting of issues by developers or representatives,
              forks, technical node issues, or any other issues resulting in
              fund losses. <br />
              We collect personal information such as your email address, and
              blockchain wallet address when you register an account or utilize
              the App and Website through third party applications. This
              information is processed to grant you access to the App and
              Website, manage your account, facilitate transactions, and send
              you communications (subject to your consent). We only collect and
              process data essential for these purposes and improve user
              experience.
            </p>

            <ul style={{ margin: "20px 0px 0px 15px" }}>
              <li>
                <b>Your User Content: </b>
              </li>
            </ul>
            <p>
             {` Subject to these Terms, you grant to us a worldwide, perpetual,
              unrestricted, royalty-free license to use, copy, modify,
              distribute, publish, perform, transmit, and display any and all
              your User Content, whether directly or through the Site, Services
              or Software, and waive any moral rights you may have in the User
              Content. Subject to these Terms, any User Content and other
              communication or material you transmit to us, including any data,
              questions, comments, suggestions, or the like ("Other
              Communication Content" and collectively with any User Content,
              "Your Content"), will be treated by us as non-confidential and
              non-proprietary. Subject to these Terms, we may use Your Content
              for any purpose, without any compensation, accounting or other
              liability or obligation to you.`}
            </p>

            <p>
              By publishing or submitting to us Your Content, you represent and
              warrant to us that:
            </p>
            <ul style={{ margin: "25px 0px 0px 15px", fontFamily: "Inter" }}>
              <li>
                Your Content does not infringe any third-party rights including
                without limitation intellectual property rights, proprietary
                rights or rights to privacy.
              </li>
              <li>
                Your Content does not contain any element that may reasonably be
                construed as defamatory, obscene, discriminatory based on any
                bias against any group of individuals, offensive, unlawfully
                threatening or harassing.
              </li>
              <li>
                In the event that Your Content contains any third-party
                intellectual property rights or personal information, you have
                obtained and will continue to have all necessary authorization
                and rights to use such intellectual property rights or personal
                information for the duration of these Terms.
              </li>
              <li>
                If your Account is cancelled or terminated, we may permanently
                delete Your Content from our servers and we have no obligation
                to return Your Content to you except to the extent provided
                under applicable law.
              </li>
              <li>
                Your Content does not contain any computer viruses, worms or
                other potentially harmful codes, programs, links or files.
              </li>
            </ul>

            <p>
              User retains the rights to access, correct, delete, and limit the
              processing of your personal data. Additionally, you can oppose the
              processing of your data and request data transferability. These
              rights can be exercised by reaching out to us at{" "}
              <a href="mailto:hello@gamingarcade.io">hello@gamingarcade.io</a>.
              Updated Date: 15 April 2022 <br /> Updated Date: 15 April 2022{" "}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default TermsOfUse;
