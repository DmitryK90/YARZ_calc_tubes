import react from "react";
import style from "./InputAmountWire.module.css";

const InputAmountWire = ({ type, sech, amountWire, updateAmountWire }) => {
    if (amountWire < 1) {
        updateAmountWire("");
    } else if (amountWire > 50) {
        updateAmountWire("");
    } else {
        updateAmountWire(amountWire);
    }

    let funcChange = (e) => {
        let value = e.target.value;
        updateAmountWire(value);
    };

    let resetValue = (val) => {
        updateAmountWire(val);
        return amountWire;
    };

    return (
        <input
            className={style.inputNum}
            onChange={funcChange}
            value={
                sech && type //props.valueSechOne(''-def, ''-повт.) type(''-def, ''-повт.)
                    ? amountWire
                    : resetValue("Кол-во.")
            }
            type="number"
            disabled={sech !== "" && type !== "" && type !== "0" ? false : true}
            placeholder="Кол-во."
        ></input>
    );
};

export default InputAmountWire;
