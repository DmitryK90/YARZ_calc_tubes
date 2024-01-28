import react from "react";
import SelectChoiceSech from "../../UI_PureComponents/SelectChoiceSech";
import { changeBlockFiveSechThunk } from "../../Actions/someThunk";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        arrSech: state.TubesReducer.sech, // массив с сечениями проводов.
        type: state.TubesReducer.blockFive.typeFive, // значение(id) типа провода.
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateSelectSechValue: (newValue) => {
            dispatch(changeBlockFiveSechThunk(newValue));
        },
    };
};

let SelectChoiceSechContainerFive = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectChoiceSech);
export default SelectChoiceSechContainerFive;
