import React from "react";
import styles from "./ListTable.module.css";
import Button from "../Button/Button";
import { FaPen, FaTrash } from "react-icons/fa";

function ListTable(props) {

  const {firstColumn, secondColumn, thirdColumn, fourthColumn, fivithColumn, sixthColumn, seventhColumn} = props


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
                <th>{firstColumn}</th>
                <th>{secondColumn}</th>
                <th>{thirdColumn}</th>
                <th>{fourthColumn}</th>
                <th>{fivithColumn}</th>
                <th>{sixthColumn}</th>
                <th>{seventhColumn}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <td>001</td>
                <td>Farasat</td>
                <td>03152557056</td>
                <td>07 / 19 / 24</td>
                <td style={{display: "flex", gap: "6px"}} className="action">
                  <Button 
                    width='min-content' 
                    color='#000'
                    iconPosition='before' 
                    padding='10px 0px 10px 12px' 
                    radius='6px' 
                    hovercolor='cyan' 
                    hovcolor='white'
                  >
                    <FaPen />
                  </Button>  
                  <Button 
                    width='min-content' 
                    color='#000'
                    iconPosition='before' 
                    padding='10px 4px 10px 12px' 
                    radius='6px' 
                    hovercolor='red' 
                    hovcolor='white'
                  >
                    <FaTrash />
                  </Button>
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ListTable;
