import React, { useState } from "react";
import { PiBasketBold } from "react-icons/pi";
import styles from "./Header.module.scss";

export default function Header(){
    let [cartOpen,setCartOpen]=useState(false);

    return(
        <header>
            <div>
                <span className={styles.logo}>Hi-Tech Hub</span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Личный кабинет</li>
                </ul>
                <PiBasketBold onClick={()=>setCartOpen(cartOpen= !cartOpen)} className={`${styles.shopCartButton} ${cartOpen ? styles.active : ''}`}/>

                {cartOpen &&(
                    <div className={styles.shopCart}>

                    </div>
                )}
            </div>
            <div className={styles.presentation}></div>
        </header>
    );
}