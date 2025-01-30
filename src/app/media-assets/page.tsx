import Image from "next/image";
import config from "../../../config";
import styles from "./mediaassets.module.scss";

const MediaAssets = () => {
  return (
    <div className={styles.mediaAsset}>
      <section className={styles.bannerMas}>
        <div className={styles.barCs1Mass}>
          <div className={`container-1200 ${styles.container1200}`}>
            <div className="row">
              <div className={`col-lg-12 ${styles.barImgMain}`}>
                <span className={styles.imgCs1Mas}>
                  <Image
                    width={118}
                    height={100}
                    objectFit="cover"
                    src={`${config.imageDomain}Assets/cube-mas.webp`}
                    alt="cube"
                  />
                </span>
                <span className={styles.imgCs11Mas}>
                  <Image
                    width={118}
                    height={100}
                    objectFit="cover"
                    src={`${config.imageDomain}Assets/rubix-mas.webp`}
                    alt="rubix"
                  />
                </span>
                <h1>Brand</h1>
                <h2> Overview</h2>
                <span className={styles.imgCs2Mas}>
                  <Image
                    width={118}
                    height={100}
                    objectFit="cover"
                    src={`${config.imageDomain}Assets/game1-mas.webp`}
                    alt="controller"
                  />
                </span>

                <span className={styles.imgCs22Mas}>
                  <Image
                    width={118}
                    height={100}
                    objectFit="cover"
                    src={`${config.imageDomain}Assets/cube-g-mas.webp`}
                    alt="cube"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.brandTxtSec}>
        <div className={`container-1200 ${styles.container1200}`}>
          <div className="row">
            <div className="col-lg-12">
              <h3> Brand Guidelines And Assets</h3>
              <div className="container-1085">
                <p style={{ marginBottom: "20px" }}>
                  {` Welcome to the authoritative guide for Gaming Arcade's Brand
                  Guidelines and Assets. This resource is dedicated to ensuring
                  all representations of our brand faithfully echo the vision
                  and energy that define Gaming Arcade. We advise users to
                  strictly use the approved screenshots and logos from our Brand
                  Resource Center, following our comprehensive guidelines for
                  uniform brand depiction across all media.`}
                </p>

                <p style={{ marginBottom: "20px" }}>
                  {`   For expansive uses beyond digital, such as in radio,
                  broadcast, print, or outdoor advertising exceeding 8.5 x 11
                  inches, we require a formal access request. These requests
                  should be composed in English and accompanied by a mock-up
                  showcasing the intended use of Gaming Arcade's logo, ensuring
                  our brand is portrayed with integrity and distinction.`}
                </p>
                <p style={{ marginBottom: "20px" }}>
                  {`Embracing the power of iconic imagery, Gaming Arcade's logo,
                  much like the essence of our platform, combines dynamic
                  elements designed to be instantly recognizable. The logo pack,
                  available for download below, includes our signature assets,
                  tailored for various contexts while maintaining brand
                  consistency.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.downloadSectionMas}>
        <div className={`container-1200 ${styles.container1200}`}>
          <div className={styles.downloadFlexMas}>
            <div className={styles.imgMas}>
              <Image
                src={`${config.imageDomain}Assets/logo-circle.webp`}
                alt="logo"
                width={320}
                height={320}
              />
            </div>
            <div className={styles.txtMas}>
              <h4>Download Logo Pack</h4>
              <div className={styles.checkMas}>
                <label>
                  {/* <input type="checkbox" value={isChecked} onChange={()=> setIsChecked(!isChecked)} /> */}
                  <span>
                    I have read and accept the applicable guidelines and other
                    terms for use.
                  </span>
                </label>
              </div>
            </div>

            <div className={styles.imgDownMas}>
              <Image
                src={`${config.imageDomain}Assets/down-mass.webp`}
                alt="down mass"
                width={150}
                height={150}
                style={{ cursor: "pointer", objectFit: "cover" }}
                //   onClick={handleDownload}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.infographicsSectionMas}>
        <div className={`container-1200 ${styles.container1200}`}>
          <div className={styles.infographicsFlexMas}>
            <div className={styles.txtMas}>
              <h4 className={`f70 ${styles.f70}`}>
                Design style and infographics for you to use
              </h4>
            </div>
            <div className={styles.imgMas}>
              <Image
                src={`${config.imageDomain}Assets/game-mass.webp`}
                alt="Game Controller - Gaming Arcade"
                width={350}
                height={350}
                objectFit="cover"
              />
            </div>

            <span className={styles.designDiamond}>
              <Image
                src={`${config.imageDomain}Assets/design-mas.webp`}
                alt="puzzle"
                width={110}
                height={110}
                objectFit="cover"
              />
            </span>
          </div>
        </div>
      </section>

      <section className={styles.utilizeSec}>
        <div className={`container-1200 ${styles.container1200}`}>
          <h2 className={styles.hzGradientText}>utilizing the brand</h2>
          <p>
            Avoid using the brand image in ways that imply sponsorship,
            partnership, or make Gaming Arcade the only prominent or
            distinguishing feature. Any context in a script or storyline that
            casts a negative light on the brand must be avoided. You must comply
            with our Community Guidelines and Terms of Service.
          </p>
        </div>
      </section>

      <section className={styles.utilizing_the_brand_container_upper}>
        <div className={styles.avoid_shedding_negative_light}>
          <h2>Avoid Shedding Negative Light</h2>
        </div>

        <div>
          <div>
            <div></div>
            <div>
              <div className={styles.utilizeContent}>
                <h3>Consistency Assurance</h3>
                <ul>
                  <li>
                    <p>
                      Make sure you use Gaming Arcade as a whole and in the same
                      font style and size as the surrounding content.
                    </p>
                  </li>

                  <li>
                    <p>
                      {" "}
                      {` When developing a website, app, or any product or service
                      that utilizes Gaming Arcade or is in any way associated
                      with or compatible with Gaming Arcade, you are permitted
                      to use Gaming Arcade in a descriptive manner. For example,
                      you may state that your game is "designed and you can play
                      the game on Gaming Arcade" or that the name of your
                      campaign is "on Gaming Arcade."`}
                    </p>
                  </li>

                  <li>
                    <p>
                      {" "}
                      {` Refrain from translating, abbreviating, or altering the
                      term "Gaming Arcade" into any other language using
                      non-English characters, and avoid substituting it with any
                      of our logos.`}
                    </p>
                  </li>

                  <li>
                    <p>
                      {" "}
                      {`  Avoid using the terms "Gaming" or "Arcade" in relation to
                      your own brand.`}
                    </p>
                  </li>

                  <li>
                    <p>
                      {" "}
                      Combining the Gaming Arcade brand with a company name,
                      generic terms, or other trademarks is strictly prohibited.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.utilizing_the_brand_container_lower}>
        <div>
          <div>
            <div>
              <div className={styles.utilizeContent}>
                <p>Avoid representing the Gaming Arcade brand in ways where:</p>
                <ul>
                  <li>
                    <p>
                      Gaming Arcade may appear in a television advertisement
                      alongside other Gaming Arcade businesses or products.
                    </p>
                  </li>

                  <li>
                    <p>
                      {`Unless it is a general "Follow us on..." call-to-action,
                      it is not appropriate to include other
                      blockchains/crypto/web3.0/De-Fi-based platforms in the
                      same context as Gaming Arcade or its products.`}
                    </p>
                  </li>

                  <li>
                    <p>
                      {`When generating a hashtag incorporating the terms "Gaming"
                      or "Arcade," it is essential to refrain from utilizing it
                      on alternative social platforms. Furthermore, it is
                      advisable not to invest any resources in enforcing or
                      obtaining rights for such a hashtag.`}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={styles.keep_gaming_arcade_container}
          //   className={`${styles.utilizeBoxText} ${styles.utilizeBoxRight} align-items-center m-0`}
        >
          <h2>
            Keep Gaming Arcade <br /> Apart From others <br />
            blockchain/Crypto/ <br /> Web3.0/De-Fi Based <br /> Platforms
          </h2>
        </div>
      </section>

      <section className={styles.tvandfilms}>
        <div className={`container-1200 ${styles.container1200}`}>
          <div className="row">
            <div className="col-md-6 col-sm-7">
              <div className={styles.tvfilmContent}>
                <h2>
                  using the
                  <span className={styles.hzGradientText}> gaming arcade</span>
                  Brand in TV & Film
                </h2>
                <p>
                  When employing Gaming Arcade in mainstream media, it is
                  imperative to ensure that members of our community receive
                  appropriate acknowledgement for their content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.laptopImg}>
          <Image
            src={`${config.imageDomain}Assets/laptop1.webp`}
            alt="Gaming Arcade Brand in TV and Film"
            width={350}
            height={750}
            objectFit="cover"
            quality={85}
          />
        </div>
      </section>

      <section className={styles.movieCommercial}>
        <div className={`container-1200 ${styles.container1200}`}>
          <div className={styles.movieComContent}>
            <h2 className="text-left">
              Movies, Commercials <br /> & Shows
            </h2>
            <p className="text-left">
              {` To maintain your presence on Gaming Arcade in any of its products
              or utilize screenshots of King's Charts and its product interface
              for commercial purposes, such as in short films, movies, weekly
              shows, TV or web series, and other videos, it is essential to
              adhere to our approval process. Please follow the steps outlined
              below.`}
            </p>
          </div>
          <div className={`${styles.movie_commercial_steps}`}>
            {/* <div className="col-md-6"> */}
            <div className={styles.utilizeContent}>
              <button className={styles.hzStepButton}>Step 1</button>
              <ul>
                <li>
                  <p>
                    {" "}
                    Follow the guidelines below for utilizing Gaming Arcade in
                    commercial, film, or show productions. To begin, kindly
                    provide us with the core section of the script and a
                    prototype of the Gaming Arcade asset.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    If the intended usage is ambiguous, we may require the
                    complete script for review. Additionally, please include an
                    animated script, business development sketches, and digital
                    storyboards for consideration.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    It is important to utilize only the approved assets. Upon
                    submitting your request, we aim to respond within a
                    timeframe of two to three weeks.
                  </p>
                </li>
              </ul>
            </div>
            {/* </div> */}
            {/* <div className="col-md-6"> */}
            <div className={styles.utilizeContent}>
              <button className={styles.hzStepButton}>Step 2</button>
              <ul>
                <li>
                  <p>
                    {" "}
                    After completing the creatives, which include your mock and
                    script, please submit the nearly finalized version of our
                    asset through your media.
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    Regarding animation, ensure that the final clip is uploaded
                    once the animation process is complete.
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    Upon receiving your finalized creatives, we will provide a
                    response within two to three weeks.
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    If the approval process exceeds the timeframe of two to
                    three weeks, kindly revise your creative and resubmit the
                    request while following our guidelines. Please note that
                    written approval is necessary for finalizing any approvals.
                  </p>
                </li>
              </ul>
            </div>
            {/* </div> */}
          </div>
          <div className={styles.movieComContent}>
            <h2>Legal</h2>
            <p>
              {" "}
              At Gaming Arcade, we place great emphasis on safeguarding and
              advancing our intellectual property. We take active measures to
              protect our trademarks and pursue worldwide registration for our
              logos and trademarks. These trademarks are the exclusive property
              of Gaming Arcade and their usage must adhere to the aforementioned
              guidelines or receive explicit permission from Gaming Arcade.
              Below are a few examples of our registered trademarks.
            </p>
            <p>
              {" "}
              {` Any attempt to register, use, or assert rights over any of Gaming
              Arcade’s trademarks, whether as a service mark, trade name,
              trademark, company name, domain registration, or username, is
              strictly prohibited. You are prohibited from utilizing or claiming
              any trademark rights that bear suspicious resemblance to or
              dilution of Gaming Arcade’s trademarks, either as a standalone
              trademark or as part of one. Please employ Gaming Arcade’s
              trademarks only for purposes that align with our Community
              Standards and Terms of Service.`}
            </p>
            <p>
              {" "}
              {` We retain the right to rescind authorization to use Gaming
              Arcade’s trademarks at any given time. Gaming Arcade also reserves
              the right to reject content that it deems inconsistent with the
              Gaming Arcade brand.`}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaAssets;
