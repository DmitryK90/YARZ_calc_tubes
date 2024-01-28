import react from "react";
import SelectChoiceSech from "../../UI_PureComponents/SelectChoiceSech";
import { changeBlockTwoSechThunk } from "../../Actions/someThunk";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        arrSech: state.TubesReducer.sech, // массив с сечениями проводов.
        type: state.TubesReducer.blockTwo.typeTwo, // значение(id) типа провода.
        // sech: state.TubesReducer.blockTwo.sechTwo, // значение(sechId_1) сечения.
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateSelectSechValue: (newValue) => {
            dispatch(changeBlockTwoSechThunk(newValue));
        },
    };
};

let SelectChoiceSechContainerTwo = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectChoiceSech);
export default SelectChoiceSechContainerTwo;
