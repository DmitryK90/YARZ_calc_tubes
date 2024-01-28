import * as actions from "./actions";

//--- ONE BLOCK -------------------------
export const changeBlockOneTypeThunk = (newValue) => {
    return (dispatch, getState) => {
        dispatch(actions.isCompletedTypeOneAC(newValue)); // изменяем value селекта 'типа' перв.блока.
        const { typeOne, sechOne, inputOne, isCompletedBlockOne } =
            getState().TubesReducer.blockOne;
        dispatch(
            actions.isCompletedBlockOneAC(
                typeOne,
                sechOne,
                inputOne,
                isCompletedBlockOne
            )
        );
        //интересно, мы запрашиваем state перед первый dispatch, поидее во втором должен быть старый state, но все норм.
    };
};

export const changeBlockOneSechThunk = (newValue) => {
    return (dispatch, getState) => {
        dispatch(actions.isCompletedSechOneAC(newValue));
        const { typeOne, sechOne, inputOne, isCompletedBlockOne } =
            getState().TubesReducer.blockOne;
        dispatch(
            actions.isCompletedBlockOneAC(
                typeOne,
                sechOne,
                inputOne,
                isCompletedBlockOne
            )
        );
    };
};

export const changeBlockOneInputThunk = (newValue) => {
    return (dispatch, getState) => {
        dispatch(actions.isCompletedInputOneAC(newValue));
        const { typeOne, sechOne, inputOne, isCompletedBlockOne } =
            getState().TubesReducer.blockOne;
        dispatch(
            actions.isCompletedBlockOneAC(
                typeOne,
                sechOne,
                inputOne,
                isCompletedBlockOne
            )
        );
    };
};

//--- TWO BLOCK -------------------------

export const changeBlockTwoTypeThunk = (newValue) => {
    return (dispatch, getState) => {
        dispatch(actions.isCompletedTypeTwoAC(newValue));
        const { typeTwo, sechTwo, inputTwo, isCompletedBlockTwo } =
            getState().TubesReducer.blockTwo;
        dispatch(
            actions.isCompletedBlockTwoAC(
                typeTwo,
                sechTwo,
                inputTwo,
                isCompletedBlockTwo
            )
        );
    };
};

export const changeBlockTwoSechThunk = (newValue) => {
    return (dispatch, getState) => {
        dispatch(actions.isCompletedSechTwoAC(newValue));
        const { typeTwo, sechTwo, inputTwo, isCompletedBlockTwo } =
            getState().TubesReducer.blockTwo;
        dispatch(
            actions.isCompletedBlockTwoAC(
                typeTwo,
                sechTwo,
                inputTwo,
                isCompletedBlockTwo
            )
        );
    };
};

export const changeBlockTwoInputThunk = (newValue) => {
    return (dispatch, getState) => {
        dispatch(actions.isCompletedInputTwoAC(newValue));
        const { typeTwo, sechTwo, inputTwo, isCompletedBlockTwo } =
            getState().TubesReducer.blockTwo;
        dispatch(
            actions.isCompletedBlockTwoAC(
                typeTwo,
                sechTwo,
                inputTwo,
                isCompletedBlockTwo
            )
        );
    };
};

//--- THREE BLOCK -------------------------

export const changeBlockThreeTypeThunk = (newValue) => {
    return (dispatch, getState) => {
        dispatch(actions.isCompletedTypeThreeAC(newValue));
        const { typeThree, sechThree, inputThree, isCompletedBlockThree } =
            getState().TubesReducer.blockThree;
        dispatch(
            actions.isCompletedBlockThreeAC(
                typeThree,
                sechThree,
                inputThree,
                isCompletedBlockThree
            )
        );
    };
};

export const changeBlockThreeSechThunk = (newValue) => {
    return (dispatch, getState) => {
        dispatch(actions.isCompletedSechThreeAC(newValue));
        const { typeThree, sechThree, inputThree, isCompletedBlockThree } =
            getState().TubesReducer.blockThree;
        dispatch(
            actions.isCompletedBlockThreeAC(
                typeThree,
                sechThree,
                inputThree,
                isCompletedBlockThree
            )
        );
    };
};

export const changeBlockThreeInputThunk = (newValue) => {
    return (dispatch, getState) => {
        dispatch(actions.isCompletedInputThreeAC(newValue));
        const { typeThree, sechThree, inputThree, isCompletedBlockThree } =
            getState().TubesReducer.blockThree;
        dispatch(
            actions.isCompletedBlockThreeAC(
                typeThree,
                sechThree,
                inputThree,
                isCompletedBlockThree
            )
        );
    };
};

//--- FOUR BLOCK -------------------------

export const changeBlockFourTypeThunk = (newValue) => {
    return (dispatch, getState) => {
        dispatch(actions.isCompletedTypeFourAC(newValue));
        const { typeFour, sechFour, inputFour, isCompletedBlockFour } =
            getState().TubesReducer.blockFour;
        dispatch(
            actions.isCompletedBlockFourAC(
                typeFour,
                sechFour,
                inputFour,
                isCompletedBlockFour
            )
        );
    };
};

export const changeBlockFourSechThunk = (newValue) => {
    return (dispatch, getState) => {
        dispatch(actions.isCompletedSechFourAC(newValue));
        const { typeFour, sechFour, inputFour, isCompletedBlockFour } =
            getState().TubesReducer.blockFour;
        dispatch(
            actions.isCompletedBlockFourAC(
                typeFour,
                sechFour,
                inputFour,
                isCompletedBlockFour
            )
        );
    };
};

export const changeBlockFourInputThunk = (newValue) => {
    return (dispatch, getState) => {
        dispatch(actions.isCompletedInputFourAC(newValue));
        const { typeFour, sechFour, inputFour, isCompletedBlockFour } =
            getState().TubesReducer.blockFour;
        dispatch(
            actions.isCompletedBlockFourAC(
                typeFour,
                sechFour,
                inputFour,
                isCompletedBlockFour
            )
        );
    };
};
//--- FIVE BLOCK -------------------------
export const changeBlockFiveTypeThunk = (newValue) => {
    return (dispatch, getState) => {
        dispatch(actions.isCompletedTypeFiveAC(newValue));
        const { typeFive, sechFive, inputFive, isCompletedBlockFive } =
            getState().TubesReducer.blockFive;
        dispatch(
            actions.isCompletedBlockFiveAC(
                typeFive,
                sechFive,
                inputFive,
                isCompletedBlockFive
            )
        );
    };
};

export const changeBlockFiveSechThunk = (newValue) => {
    return (dispatch, getState) => {
        dispatch(actions.isCompletedSechFiveAC(newValue));
        const { typeFive, sechFive, inputFive, isCompletedBlockFive } =
            getState().TubesReducer.blockFive;
        dispatch(
            actions.isCompletedBlockFiveAC(
                typeFive,
                sechFive,
                inputFive,
                isCompletedBlockFive
            )
        );
    };
};

export const changeBlockFiveInputThunk = (newValue) => {
    return (dispatch, getState) => {
        dispatch(actions.isCompletedInputFiveAC(newValue));
        const { typeFive, sechFive, inputFive, isCompletedBlockFive } =
            getState().TubesReducer.blockFive;
        dispatch(
            actions.isCompletedBlockFiveAC(
                typeFive,
                sechFive,
                inputFive,
                isCompletedBlockFive
            )
        );
    };
};
//--- SIX BLOCK -------------------------
export const changeBlockSixTypeThunk = (newValue) => {
    return (dispatch, getState) => {
        dispatch(actions.isCompletedTypeSixAC(newValue));
        const { typeSix, sechSix, inputSix, isCompletedBlockSix } =
            getState().TubesReducer.blockSix;
        dispatch(
            actions.isCompletedBlockSixAC(
                typeSix,
                sechSix,
                inputSix,
                isCompletedBlockSix
            )
        );
    };
};

export const changeBlockSixSechThunk = (newValue) => {
    return (dispatch, getState) => {
        dispatch(actions.isCompletedSechSixAC(newValue));
        const { typeSix, sechSix, inputSix, isCompletedBlockSix } =
            getState().TubesReducer.blockSix;
        dispatch(
            actions.isCompletedBlockSixAC(
                typeSix,
                sechSix,
                inputSix,
                isCompletedBlockSix
            )
        );
    };
};

export const changeBlockSixInputThunk = (newValue) => {
    return (dispatch, getState) => {
        dispatch(actions.isCompletedInputSixAC(newValue));
        const { typeSix, sechSix, inputSix, isCompletedBlockSix } =
            getState().TubesReducer.blockSix;
        dispatch(
            actions.isCompletedBlockSixAC(
                typeSix,
                sechSix,
                inputSix,
                isCompletedBlockSix
            )
        );
    };
};
