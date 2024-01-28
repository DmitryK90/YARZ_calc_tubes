import react from "react";
import InputAmountWire from "../../UI_PureComponents/InputAmountWire";
import { changeBlockTwoInputThunk } from "../../Actions/someThunk";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        type: state.TubesReducer.blockTwo.typeTwo, // значение(id) типа провода.
        sech: state.TubesReducer.blockTwo.sechTwo, // значение(sechId_1) сечения.
        amountWire: state.TubesReducer.blockTwo.inputTwo, // сюда приходит кол-во проводов из первого блока input.s
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateAmountWire: (newValue) => {
            dispatch(changeBlockTwoInputThunk(newValue));
        },
    };
};

const InputAmountWireContainerTwo = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputAmountWire);
export default InputAmountWireContainerTwo;
