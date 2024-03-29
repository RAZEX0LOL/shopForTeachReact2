import React from "react";
import styles from "./Footer.module.scss";

const Footer:React.FC=()=>{
    return(
        <footer style={styles.footer}>
            Все права защищены &copy;
        </footer>
    );
};

export default Footer;