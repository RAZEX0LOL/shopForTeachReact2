import React from "react";
import styles from "./Orders.module.scss";
import { TiDeleteOutline } from "react-icons/ti";

export default function Orders(props){
    return(
        <div className={styles.item}>
            <img src={"./images/"+props.item.img} alt="Error" />
            <h2>{props.item.title}</h2>
            <b>{props.item.price}$</b>
            <TiDeleteOutline onClick={()=>props.onDelete(props.item.id)} className={styles.deleteIcon}/>
        </div>
    );
}