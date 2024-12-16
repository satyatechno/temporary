'use client';
import React, { useState } from 'react';
import styles from './footer.module.scss';
import config from '../../../../config';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import { poppins } from '@/app/layout';
const Footer = ({ game }: any) => {
  const [clicked, setClicked] = useState(false);
  let message = `Hey! I Have Scored 2000 in gameName, click here to play this game`;
  return (
    <div className={styles.container}>
      <div
        className={styles.leftView}
        // onClick={() => openInNewTab("https://discord.gg/Y347B99a9g")}
        style={{ cursor: 'pointer' }}
      >
        <img src={`${config.imageDomain}Assets/discord.webp`} alt="discord" />
        <h4 className={poppins.className}>
          Join The <br />
          Community
        </h4>
      </div>
      <div className={styles.centerView}>
        <h3 className={poppins.className}>{200000}</h3>
        <p className={poppins.className}>Game played till noww!</p>
      </div>
      <div className={styles.rightView} onClick={() => setClicked(!clicked)}>
        <img src={`${config.imageDomain}Assets/share.webp`} alt="share" />
        <h4 className={poppins.className}>
          Share Your <br />
          Achievement
        </h4>

        <div className={styles.social}>
          {clicked ? (
            <>
              <FacebookShareButton
                title={message}
                url={`http://gamingarcade.io/games/${game}`}
                hashtag="#GamingArcade"
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton
                related={['RELATED_TEST']}
                title={message}
                url={`http://gamingarcade.io/games/${game}`}
                hashtags={['GamingArcade']}
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <WhatsappShareButton
                title={message}
                url={`http://gamingarcade.io/games/${game}`}
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <TelegramShareButton
                title={message}
                url={`http://gamingarcade.io/games/${game}`}
                className="Demo__some-network__share-button"
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>
              <LinkedinShareButton
                title={message}
                url={`http://gamingarcade.io/games/${game}`}
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Footer;
