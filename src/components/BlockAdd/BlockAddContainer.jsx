import { connect } from "react-redux";
import BlockAdd from "./BlockAdd";
import {
    blockOneReady,
    blockTwoReady,
    blockThreeReady,
    blockFourReady,
    blockFiveReady,
    blockSixReady,
} from "../../Actions/actions";

let mapStateToProps = (state) => {
    return {
        isCompletedBlockOne: state.TubesReducer.blockOne.isCompletedBlockOne,
        isCompletedBlockTwo: state.TubesReducer.blockTwo.isCompletedBlockTwo,
        isCompletedBlockThree: state.TubesReducer.blockThree.isCompletedBlockThree,
        isCompletedBlockFour: state.TubesReducer.blockFour.isCompletedBlockFour,
        isCompletedBlockFive: state.TubesReducer.blockFive.isCompletedBlockFive,
        isCompletedBlockSix: state.TubesReducer.blockSix.isCompletedBlockSix,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateReadyOne: (newValue) => {
            dispatch(blockOneReady(newValue));
        },
        updateReadyTwo: (newValue) => {
            dispatch(blockTwoReady(newValue));
        },
        updateReadyThree: (newValue) => {
            dispatch(blockThreeReady(newValue));
        },
        updateReadyFour: (newValue) => {
            dispatch(blockFourReady(newValue));
        },
        updateReadyFive: (newValue) => {
            dispatch(blockFiveReady(newValue));
        },
        updateReadySix: (newValue) => {
            dispatch(blockSixReady(newValue));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockAdd);
