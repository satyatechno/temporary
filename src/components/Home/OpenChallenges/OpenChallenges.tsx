"use client";

import { useEffect, useState } from "react";
import styles from "./openChallenges.module.scss";
import { customBetsAll } from "@/services/GameServices";
import OpenChallengesSwiperCarousel from "./OpenChallengeSwiper/OpenChallengeSwiper";

const OpenChallenges = () => {
  //   const { activeButton } = useContext(CurrencyContext);
  const [customBets, setCustomBets] = useState([]);
  // const [paymentPopUp, setPaymentPopup] = useState(false);

  const medium = "ticket";

  const FetchCustomBets = async () => {
    let data = await customBetsAll(medium);
    setCustomBets(data?.data?.game);
  };

  useEffect(() => {
    FetchCustomBets();
    // if (isAuthenticated) {
    // }
  }, [medium]);

  


  return (
    <div className={styles.main_container}>
      <h3 className={styles.heading}>Open Challenges</h3>
      <section className="playgame-screen classonbody">
        <section>
          <OpenChallengesSwiperCarousel data={customBets} />
        </section>
      </section>
    </div>
  );
};

export default OpenChallenges;

{
  /* <section className="challenges">
    <OpenChallengesCard
      name={item?.game?.name}
      stage={item?.stage}
      gameId={item?.gameId}
      betAmount={item?.betAmount}
      score={item?.player1?.score}
      medium={item?.medium}

      customBetLength={customBets?.length}
      gameIcon={item?.game?.IconImage}
      loaderUrl={item?.buildUrl?.typeLoader}
      frameworkUrl={item?.buildUrl?.typeFramework}
      dataUrl={item?.buildUrl?.typeData}
      codeUrl={item?.buildUrl?.typeWasm}
    />
  </section> */
}

{
  /* {customBets?.map((item: any) => {
        return (
          <>
          
          </>
        );
      })} */
}

//  customBets?.map((item: any) => (
//             <section className="playgame-screen classonbody">
//               <section className="challenges">
//                 <OpenChallengesCard
//                   name={item?.game?.name}
//                   stage={item?.stage}
//                   gameId={item?.gameId}
//                   betAmount={item?.betAmount}
//                   score={item?.player1?.score}
//                   medium={item?.medium}
//                   customBetLength={customBets?.length}
//                   gameIcon={item?.game?.IconImage}
//                   loaderUrl={item?.game?.buildUrl?.typeLoader}
//                   frameworkUrl={item?.game?.buildUrl?.typeFramework}
//                   dataUrl={item?.game?.buildUrl?.typeData}
//                   codeUrl={item?.game?.buildUrl?.typeWasm}
//                 />
//               </section>
//             </section>
//         ))