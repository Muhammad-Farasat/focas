import React from "react";
import styles from "./index.module.css";
import Button from "../Button/index";
import { FaPen, FaTrash } from "react-icons/fa";

function ListTable(props) {

  const { headers, data } = props


  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            backgroundColor: "white",
            width: "82%",
            height: "max-content",
            borderRadius: "0 0 16px 16px"
          }}
          className={styles.table}
        >
          <table className={styles.newtable}>

            <thead>
              <tr>
                {
                  headers.map((header, index) => (
                    <td key={index} style={{fontWeight: '600'}} > {header} </td>
                  ))
                }
              </tr>
            </thead>

            <tbody>
              {
                data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {
                      row.map((cell, cellIndex) => (
                        <td key={cellIndex}> {cell} </td>
                      ))
                    }
                  </tr>
                ))
              }
            </tbody>

          </table>
        </div>
      </div>
    </>
  );
}

export default ListTable;
