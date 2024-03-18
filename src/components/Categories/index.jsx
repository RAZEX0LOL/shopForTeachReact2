import React from "react";
import styles from "./Categories.module.scss";

export default function Categories(props){

    const categories =[
        {
            key:"all",
            name:"Все"
        },
        {
            key:"Apple",
            name:"Apple"
        },
        {
            key:"Samsung",
            name:"Samsung"
        },
        {
            key:"Nothing",
            name:"Nothing"
        },
        {
            key:"Dyson",
            name:"Dyson"
        },
        {
            key:"MSI",
            name:"MSI"
        }
    ];

    return(
        <div className={styles.categories}>
            {categories.map(el=>(
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
}