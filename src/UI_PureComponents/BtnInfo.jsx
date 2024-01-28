import React from "react";
import style from "./BtnInfo.module.css";

const BtnInfo = ({ children, setStatus }) => {
    const handleClick = (e) => {
        setStatus(true);
    };
    return (
        <button onClick={handleClick} className={style.btn}>
            {children}
        </button>
    );
};

export default BtnInfo;
