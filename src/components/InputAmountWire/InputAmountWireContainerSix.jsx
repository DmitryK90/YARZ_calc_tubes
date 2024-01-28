import react from "react";
import InputAmountWire from "../../UI_PureComponents/InputAmountWire";
import { changeBlockSixInputThunk } from "../../Actions/someThunk";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        type: state.TubesReducer.blockSix.typeSix, // значение(id) типа провода.
        sech: state.TubesReducer.blockSix.sechSix, // значение(sechId_1) сечения.
        amountWire: state.TubesReducer.blockSix.inputSix, // сюда приходит кол-во проводов из первого блока input.s
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateAmountWire: (newValue) => {
            dispatch(changeBlockSixInputThunk(newValue));
        },
    };
};

const InputAmountWireContainerSix = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputAmountWire);
export default InputAmountWireContainerSix;
