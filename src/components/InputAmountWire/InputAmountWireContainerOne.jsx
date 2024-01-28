import react from "react";
import InputAmountWire from "../../UI_PureComponents/InputAmountWire";
import { changeBlockOneInputThunk } from "../../Actions/someThunk";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        type: state.TubesReducer.blockOne.typeOne, // значение(id) типа провода.
        sech: state.TubesReducer.blockOne.sechOne, // значение(sechId_1) сечения.
        amountWire: state.TubesReducer.blockOne.inputOne, // кол-во проводов из первого блока input.
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateAmountWire: (newValue) => {
            dispatch(changeBlockOneInputThunk(newValue));
        },
    };
};

const InputAmountWireContainerOne = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputAmountWire);
export default InputAmountWireContainerOne;
