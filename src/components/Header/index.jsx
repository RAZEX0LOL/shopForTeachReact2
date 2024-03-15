import React, { useState } from "react";
import { PiBasketBold } from "react-icons/pi";
import styles from "./Header.module.scss";
import Orders from "../Orders";


export default function Header(props){
    let [cartOpen,setCartOpen]=useState(false);

    const showOrders=(props)=>{
        let summa=0;
        props.orders.forEach(el=>summa+=Number.parseFloat(el.price));
        return(
            <div>
                {props.orders.map(el=>(
                    <Orders onDelete={props.onDelete} key={el.id} item={el}/>
                ))}
                <p className={styles.summa}>Итого: {new Intl.NumberFormat().format(summa)} $</p>
            </div>
        );
    }
    
    const showNothing=()=>{
        return(
            <div className={styles.empty}>
                <h2>Товары отсутствуют в корзине!</h2>
            </div>
        );
    }

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
                        {props.orders.length>0?
                                showOrders(props):showNothing()
                        }
                    </div>
                )}
            </div>
            <div className={styles.presentation}></div>
        </header>
    );
}