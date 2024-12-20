"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Dashboradtournamenthistory.module.scss";
import config from "../../../../config";
import moment from "moment";
import { tournamentHistoryData } from "@/services/challenge";

interface Tournament {
  serial: string;
  game: {
    thumbnail: string;
  };
  createdAt: string;
  endAt: string;
  entryFee: string;
  tx: string;
}

interface TourItem {
  tournament: Tournament;
  freeEntry: boolean;
  score: number | null;
  rank: number | null;
  sync: boolean;
  isClosed: boolean;
  winning: number | null;
  serial: string;
}

const DashboardTournamentHistory: React.FC = () => {
  const [tours, setTours] = useState<TourItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [transaction, setTransaction] = useState<boolean>(false);
  const isAuthenticated: boolean = false;

  function gameChanger(
    first: Tournament,
    second: boolean,
    third: string,
    fourth: string
  ) {}

  async function fetchUserTournamentHistory() {
    try {
      const res = await tournamentHistoryData();
      setTours(res?.data?.data);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchUserTournamentHistory();
  }, []);

  const status = (targetTime: string): string => {
    const targetDate = new Date(targetTime);
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    return timeDifference <= 0 ? "🔴 Completed" : "🟢 Live";
  };

  return (
    <section className={`${styles.dashSec4} ${styles.tournamentSec}`}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col12}>
            <div className={styles.sec4HeadRow1}>
              <div className={styles.sunWrap}>
                <div
                  className={`${styles.sec4Head1} ${styles.gradient_border}`}
                >
                  <h2>Tournament History</h2>
                </div>
              </div>
            </div>
            <div className={`${styles.sec4TableRow} ${styles.customTable}`}>
              <table
                className={styles.responsive_table}
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>S No.</th>
                    <th>Tournament NO</th>
                    <th>Game</th>
                    <th>Date & Time</th>
                    <th>Entry Amount</th>
                    <th>Score</th>
                    <th>Rank</th>
                    <th>Result</th>
                    <th>Tournament Status</th>
                  </tr>
                </thead>
                {loading ? (
                  <tbody>
                    <tr>
                      <td colSpan={9}>
                        <div className={styles.alternateTbl}>
                          <div className={styles.altImg}>
                            <img
                              src={`${config.imageDomain}Assets/starTbl.webp`}
                              alt="Loading..."
                              className={styles.imgFluid}
                            />
                          </div>
                          <div className={styles.sunWrap}>
                            <h4>Loading...</h4>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ) : tours.length === 0 ? (
                  <tbody>
                    <tr>
                      <td colSpan={9}>
                        <div className={styles.alternateTbl}>
                          <div className={styles.altImg}>
                            <img
                              src={`${config.imageDomain}Assets/starTbl.webp`}
                              alt="No tournaments"
                              className={styles.imgFluid}
                            />
                          </div>
                          <div className={styles.sunWrap}>
                            <h4>
                              No tournaments available. Start playing to earn
                              rewards!
                            </h4>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>
                    {tours.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.tournament.serial}</td>
                        <td>
                          <Image
                            src={item.tournament.game.thumbnail}
                            alt="Game Thumbnail"
                            height={50}
                            width={50}
                            className={styles.gameThumbnail}
                          />
                        </td>
                        <td>
                          {moment(item.tournament.createdAt).format(
                            "DD-MM-YYYY hh:mm A"
                          )}
                          <br />
                          {moment(item.tournament.endAt).format(
                            "DD-MM-YYYY hh:mm A"
                          )}
                        </td>
                        <td>
                          {item.freeEntry ? "Free" : item.tournament.entryFee}
                        </td>
                        <td>{item.score}</td>
                        <td>{item.rank || "--"}</td>
                        <td>
                          {status(item.tournament.endAt) === "🟢 Live" &&
                          !item.sync &&
                          !item.freeEntry ? (
                            <p
                              className={`${styles.buttonNew} ${styles.payGas}`}
                              onClick={() =>
                                gameChanger(
                                  item.tournament,
                                  false,
                                  "walletAddress",
                                  item.serial
                                )
                              }
                            >
                              Pay GAS Fee
                            </p>
                          ) : status(item.tournament.endAt) === "🟢 Live" &&
                            !item.isClosed ? (
                            <p
                              className={`${styles.buttonNew} ${styles.playAgain}`}
                              onClick={() => {
                                setTransaction(true);
                                gameChanger(
                                  item.tournament,
                                  true,
                                  "walletAddress",
                                  item.serial
                                );
                              }}
                            >
                              Play Again
                            </p>
                          ) : status(item.tournament.endAt) === "🟢 Live" ? (
                            "--"
                          ) : (
                            item.winning?.toFixed(2)
                          )}
                        </td>
                        <td>
                          {status(item.tournament.endAt)}
                          {status(item.tournament.endAt) !== "🟢 Live" && (
                            <a
                              href={`https://polygonscan.com/tx/${item.tournament.tx}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                src={`${config.imageDomain}/loading-images/externalLinkNew.webp`}
                                alt="External Link"
                                height={15}
                                width={15}
                                className={styles.externalLink}
                              />
                            </a>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardTournamentHistory;
