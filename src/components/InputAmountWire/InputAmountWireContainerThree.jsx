import react from "react";
import InputAmountWire from "../../UI_PureComponents/InputAmountWire";
import { changeBlockThreeInputThunk } from "../../Actions/someThunk";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        type: state.TubesReducer.blockThree.typeThree, // значение(id) типа провода.
        sech: state.TubesReducer.blockThree.sechThree, // значение(sechId_1) сечения.
        amountWire: state.TubesReducer.blockThree.inputThree, // сюда приходит кол-во проводов из первого блока input.s
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateAmountWire: (newValue) => {
            dispatch(changeBlockThreeInputThunk(newValue));
        },
    };
};

const InputAmountWireContainerThree = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputAmountWire);
export default InputAmountWireContainerThree;
