import react from "react";
import InputAmountWire from "../../UI_PureComponents/InputAmountWire";
import { changeBlockFiveInputThunk } from "../../Actions/someThunk";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        type: state.TubesReducer.blockFive.typeFive, // значение(id) типа провода.
        sech: state.TubesReducer.blockFive.sechFive, // значение(sechId_1) сечения.
        amountWire: state.TubesReducer.blockFive.inputFive, // сюда приходит кол-во проводов из первого блока input.s
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateAmountWire: (newValue) => {
            dispatch(changeBlockFiveInputThunk(newValue));
        },
    };
};

const InputAmountWireContainerFive = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputAmountWire);
export default InputAmountWireContainerFive;
