import SelectChoiceType from "../../UI_PureComponents/SelectChoiceType";
import { connect } from "react-redux";
import { changeBlockFourTypeThunk } from "../../Actions/someThunk";

let mapStateToProps = (state) => {
    return {
        arrType: state.TubesReducer.type, // массив типов проводов.
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateSelectTypeValue: (newValue) => {
            dispatch(changeBlockFourTypeThunk(newValue));
        },
    };
};

let SelectChoiceTypeContainerFour = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectChoiceType);
export default SelectChoiceTypeContainerFour;
