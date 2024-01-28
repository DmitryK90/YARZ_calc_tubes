import react from "react";
import InputAmountWire from "../../UI_PureComponents/InputAmountWire";
import { changeBlockFourInputThunk } from "../../Actions/someThunk";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        type: state.TubesReducer.blockFour.typeFour, // значение(id) типа провода.
        sech: state.TubesReducer.blockFour.sechFour, // значение(sechId_1) сечения.
        amountWire: state.TubesReducer.blockFour.inputFour, // сюда приходит кол-во проводов из первого блока input.s
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateAmountWire: (newValue) => {
            dispatch(changeBlockFourInputThunk(newValue));
        },
    };
};

const InputAmountWireContainerFour = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputAmountWire);
export default InputAmountWireContainerFour;
