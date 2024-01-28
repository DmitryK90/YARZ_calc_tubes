import react from "react";
import style from "./SelectChoiceSech.module.css";
import imgTr from "../public/Img/treug1.png";

const SelectChoiceSech = ({ arrSech, type, updateSelectSechValue }) => {
    let funcChange = (e) => {
        let newValue = e.target.value;
        updateSelectSechValue(newValue);
    };

    let reset = () => {
        if (type !== "0") {
            // при занулении(нажатии на тип(-Тип-) type становится = '0'), т.е если провод выбран, то отрис. сечения.
            return arrSech
                .filter((item) => item.prId_1 == type)
                .map((items) => (
                    <option value={items.sechId_1} key={items.id}>
                        {items.title}
                    </option>
                ));
        } else {
            return updateSelectSechValue("");
        }
    };

    return (
        <div className={style.container}>
            <select
                onChange={funcChange}
                className={style.selectType}
                disabled={type !== "" && type !== "0" ? false : true}
            >
                <option value="">- Сечение -</option>
                {reset()}
            </select>
            <img src={imgTr} className={style.img2} />
        </div>
    );
};

export default SelectChoiceSech;
