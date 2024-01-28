import react from "react";
import style from "./SelectChoiceType.module.css";
import imgTr from "../public/Img/treug1.png";

const SelectChoiceType = ({ arrType, updateSelectTypeValue }) => {
    let handleChange = (e) => {
        let newValue = e.target.value;
        updateSelectTypeValue(newValue);
    };
    return (
        <div className={style.container}>
            <select onChange={handleChange} className={style.selectType}>
                {arrType.map((item) => (
                    <option value={item.id} key={item.id}>
                        {item.title}
                    </option>
                ))}
            </select>
            <img src={imgTr} className={style.img1} />
        </div>
    );
};

export default SelectChoiceType;
