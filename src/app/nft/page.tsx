
import Head from "next/head";
import styles from "./nft.module.scss";


function NftJourney() {
 
    return (
      <>
        <Head>
          <title>Gaming Arcade NFT | NFT Staking | Buy NFT | NFT Games</title>
          <meta
            name='title'
            content='Gaming Arcade NFT | NFT Staking | Buy NFT | NFT Games'
          />
          <meta
            name='description'
            content='Gaming Arcade is the largest online gaming platform where you can play crypto games and buy NFTs. We offer you to stake your NFT and make your profit double.'
          />
          <meta
            name='keywords'
            content='Stake NFT, Buy NFT, NFT Games, Gaming Arcade NFT'
          />
          <meta property="og:url" content="https://gamingarcade.io/nft" />
          <meta property="og:description" content="Gaming Arcade is the largest online gaming platform where you can play crypto games and buy NFTs. We offer you to stake your NFT and make your profit double." />
          <meta property="og:title" content="Gaming Arcade NFT | NFT Staking | Buy NFT | NFT Games" />
          <meta property="og:type" content="website" />
          <meta property="fb:app_id" content="894682138254327" />
          <meta property="og:image" content="https://assets.gamingarcade.io/Assets/gamePlay/alphaPass.png" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="300" />
        </Head>
        <div className={styles.comingPage} />
      </>
    );

}


export default NftJourney;
