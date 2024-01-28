import SelectChoiceType from "../../UI_PureComponents/SelectChoiceType";
import { connect } from "react-redux";
import { changeBlockFiveTypeThunk } from "../../Actions/someThunk";

let mapStateToProps = (state) => {
    return {
        arrType: state.TubesReducer.type, // массив типов проводов.
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateSelectTypeValue: (newValue) => {
            dispatch(changeBlockFiveTypeThunk(newValue));
        },
    };
};

let SelectChoiceTypeContainerFive = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectChoiceType);
export default SelectChoiceTypeContainerFive;
