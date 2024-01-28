import react from "react";
import BaseSelect from "../../UI_PureComponents/BaseSelect";
import { changeLengValue } from "../../Actions/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return { array: state.TubesReducer.arrLengWire };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateValue: (newValue) => {
            dispatch(changeLengValue(newValue));
        },
    };
};

const ChoiceLengContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseSelect);

export default ChoiceLengContainer;
