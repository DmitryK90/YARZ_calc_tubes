import react from "react";
import SelectChoiceSech from "../../UI_PureComponents/SelectChoiceSech";
import { changeBlockFourSechThunk } from "../../Actions/someThunk";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        arrSech: state.TubesReducer.sech, // массив с сечениями проводов.
        type: state.TubesReducer.blockFour.typeFour, // значение(id) типа провода.
        // sech: state.TubesReducer.blockTwo.sechTwo, // значение(sechId_1) сечения.
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateSelectSechValue: (newValue) => {
            dispatch(changeBlockFourSechThunk(newValue));
        },
    };
};

let SelectChoiceSechContainerFour = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectChoiceSech);
export default SelectChoiceSechContainerFour;
