import react from "react";
import BaseSelect from "../../UI_PureComponents/BaseSelect";
import { changeTypeTubeValue } from "../../Actions/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return { array: state.TubesReducer.arrTypeTube };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateValue: (newValue) => {
            dispatch(changeTypeTubeValue(newValue));
        },
    };
};

const ChoiceLengContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseSelect);

export default ChoiceLengContainer;
