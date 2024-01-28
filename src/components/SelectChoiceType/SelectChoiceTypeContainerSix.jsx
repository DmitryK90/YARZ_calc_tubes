import SelectChoiceType from "../../UI_PureComponents/SelectChoiceType";
import { connect } from "react-redux";
import { changeBlockSixTypeThunk } from "../../Actions/someThunk";

let mapStateToProps = (state) => {
    return {
        arrType: state.TubesReducer.type, // массив типов проводов.
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateSelectTypeValue: (newValue) => {
            dispatch(changeBlockSixTypeThunk(newValue));
        },
    };
};

let SelectChoiceTypeContainerSix = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectChoiceType);
export default SelectChoiceTypeContainerSix;
