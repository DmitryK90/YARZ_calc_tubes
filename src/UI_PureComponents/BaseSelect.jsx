import react from "react";
import style from "./BaseSelect.module.css";
import imgTr from "../public/Img/treug1.png";

//imgTr прикреплён к правой стороне, и отцентрирован вертикально, при изм.размеров select проблем быть не должно.
const BaseSelect = ({
                        array,
                        updateValue,
                        width = "160px",
                        height = "25px",
                    }) => {
    const update = (e) => {
        updateValue(e.target.value);
    };
    return (
        <div className={style.container}>
            <div className={style.selOne}>
                <select
                    onChange={update}
                    className={style.leng}
                    style={{ width, height }}
                >
                    {array.map((item) => (
                        <option value={item.value} key={item.value}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <img src={imgTr} alt="" className={style.img1} />
            </div>
        </div>
    );
};

export default BaseSelect;
