import react from "react";
import SelectChoiceSech from "../../UI_PureComponents/SelectChoiceSech";
import { changeBlockSixSechThunk } from "../../Actions/someThunk";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        arrSech: state.TubesReducer.sech, // массив с сечениями проводов.
        type: state.TubesReducer.blockSix.typeSix, // значение(id) типа провода.
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateSelectSechValue: (newValue) => {
            dispatch(changeBlockSixSechThunk(newValue));
        },
    };
};

let SelectChoiceSechContainerSix = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectChoiceSech);
export default SelectChoiceSechContainerSix;
