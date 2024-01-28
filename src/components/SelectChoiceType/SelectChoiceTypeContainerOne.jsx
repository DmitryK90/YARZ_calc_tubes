import SelectChoiceType from "../../UI_PureComponents/SelectChoiceType";
import { connect } from "react-redux";
import { changeBlockOneTypeThunk } from "../../Actions/someThunk";

let mapStateToProps = (state) => {
    return {
        arrType: state.TubesReducer.type, // массив типов проводов.
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateSelectTypeValue: (newValue) => {
            dispatch(changeBlockOneTypeThunk(newValue));
        },
    };
};

let SelectChoiceTypeContainerOne = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectChoiceType);
export default SelectChoiceTypeContainerOne;
