"use client";

import React from "react";
import styles from "./dynamictable.module.scss";
import Image from "next/image";
import config from "../../../../config";

interface DynamicTableProps {
  headers: string[];
  data: Array<{ [key: string]: any }>;
  isLoading: boolean;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  headers,
  data,
  isLoading,
}) => {
  return (
    <div className={styles.tableContainer}>
      {isLoading ? (
        <div className={styles.loadingContainer}>
          {/* <AiOutlineLoading size={50} className={styles.loadingIcon} /> */}
          <Image
            src={`${config.imageDomain}Assets/gameTbl.webp`}
            alt="Gaming Arcade"
            height={100}
            width={100}
          />
          <p>Loading...</p>
        </div>
      ) : data.length === 0 ? (
        <div className={styles.noDataContainer}>
            <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
        </table>
          <p>No data available</p>
        </div>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex}>{row[header] ?? "-"}</td> // Fallback for missing data
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DynamicTable;
