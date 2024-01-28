import SelectChoiceType from "../../UI_PureComponents/SelectChoiceType";
import { connect } from "react-redux";
import { changeBlockThreeTypeThunk } from "../../Actions/someThunk";

let mapStateToProps = (state) => {
    return {
        arrType: state.TubesReducer.type, // массив типов проводов.
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateSelectTypeValue: (newValue) => {
            dispatch(changeBlockThreeTypeThunk(newValue));
        },
    };
};

let SelectChoiceTypeContainerThree = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectChoiceType);
export default SelectChoiceTypeContainerThree;
