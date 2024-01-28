import react from "react";
import style from "./BaseButton.module.css";

const BaseButton = ({
                        children,
                        callBack,
                        disableStatus,
                        width = "120px",
                        height = "25px",
                        r,
                    }) => {
    const update = () => callBack();
    return (
        <button
            onClick={update}
            disabled={disableStatus}
            style={{ width, height }}
            className={style.btn}
        >
            {children}
        </button>
    );
};

export default BaseButton;
