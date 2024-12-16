import Image from "next/image";
import styles from "./leaderboardtable.module.scss";
import config from "../../../../config";

const LeaderBoardTable = ({ participate }: any) => {
  return (
    <div className={styles.right_container}>
      <div className={styles.leaderboard_img_container}>
        <Image
          src={`${config?.imageDomain}/loading-images/lb2.webp`}
          fill
          alt="leaderboard-logo"
          sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.responsiveTable}>
          <thead>
            <tr>
              <th>RANK</th>
              <th>Address</th>
              <th>Twitter</th>
              <th>Reward</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {loadedItems.map((item, index) => (
              <tr key={index}>
                <td>{item.rank}</td>
                <td>
                  <div className={styles.address_section}>
                    <Image
                      src={`${config.imageDomain}/loading-images/user1.webp`}
                      alt="discord"
                      height={25}
                      width={25}
                    />
                    {item.address
                      ? `${item.address.substring(0, 5)}...${item.address.slice(
                          -5
                        )}`
                      : "N/A"}
                  </div>
                </td>
                <td>{item.twitter || "N/A"}</td>
                <td>
                  <div className={styles.address_section}>
                    <Image
                      src={`${config.imageDomain}/loading-images/matic1.webp`}
                      alt="discord"
                      height={18}
                      width={18}
                    />
                    {item.winning || "0"}
                  </div>
                </td>
                <td className={styles.yellowTxtL}>{item.score || "0"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoardTable;

const loadedItems = [
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667283ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },

  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },

  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },

  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
  {
    status: "NOT ELIGIBLE",
    isFalsy: false,
    notificationSended: false,
    _id: "66742164c6a6fca098c7b97b",
    paymentProcessed: true,
    serial: 19,
    tournament: {
      _id: "667281ffe282d0209f42edce",
      serial: 160,
    },
    freeEntry: null,
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    sync: true,
    isClosed: true,
    score: 11460,
    rank: "1",
    startAt: "2024-06-20T12:32:36.069Z",
    createdAt: "2024-06-20T12:32:36.071Z",
    updatedAt: "2024-06-21T04:40:15.773Z",
    __v: 0,
    twitter: null,
    winning: 37.03,
  },
];

// <div className={styles.tableContainer}>
// <table className={styles.table}>
//   <thead>
//     <tr>
//       <th>RANK</th>
//       <th>Address</th>
//       <th>Twitter</th>
//       <th>Reward</th>
//       <th>Score</th>
//     </tr>
//   </thead>
//   <tbody>
//     {loadedItems?.slice(3, 10)?.map((item: any, index: any) => {
//       const rank = index + 4;
//       return (
//         <tr
//           key={index}
//           className={
//             `${styles.topscore}`

//           }
//         >

//           <td>
//             <h4 className={`${styles.whiteTxtL}`}>{rank}</h4>
//           </td>
//           <td>
//             {" "}
//             <div className={styles.userImageLd}>
// <img
//   src={`${config.imageDomain}/loading-images/user1.webp`}
//   alt="discord"
// />
//               <h4 className={`${styles.whiteTxtL}`}>
//                 {item?.address
//                   ? `${item?.address.substring(0, 5)}...`
//                   : "N/A"}
//               </h4>
//             </div>
//           </td>

//           <td>
//             <h4
//               style={{ marginLeft: "20px" }}
//               className={`${styles.whiteTxtL}`}
//             >
//               {
//                 <h3 className={styles.userName}>
//                   {item?.twitter?.toLowerCase() || "--"}
//                 </h3>
//               }
//             </h4>
//           </td>

//           <td>
//             <h3 className={`${styles.whiteTxtL}`}>
// <img
//   src={`${config.imageDomain}/loading-images/matic1.webp`}
//   alt="discord"
//   className="w-20"
// />
//               {item?.winning ? item?.winning?.toFixed(4) : 0}
//             </h3>
//           </td>
//           <td>
//             <h3
//               className={styles.yellowTxtL}
//               style={{ backgroundColor : item === topScore ? "pink" : "transparent" }}
//             >
//               {item?.score}
//             </h3>
//           </td>
//         </tr>
//       );
//     })}

//   </tbody>
// </table>
// </div>
