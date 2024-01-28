import * as types from "./actionsTypes";

export const isCompletedTypeOneAC = (newValue) => {
    return {
        type: types.IS_COMPLETED_TYPE_ONE,
        newValue,
    };
};
export const isCompletedSechOneAC = (newValue) => {
    return {
        type: types.IS_COMPLETED_SECH_ONE,
        newValue,
    };
};
export const isCompletedInputOneAC = (newValue) => {
    return {
        type: types.IS_COMPLETED_INPUT_ONE,
        newValue,
    };
};
export const isCompletedBlockOneAC = (
    typeOne,
    sechOne,
    inputOne,
    isCompletedBlockOne
) => {
    return {
        type: types.IS_COMPLETED_BLOCK_ONE,
        typeOne,
        sechOne,
        inputOne,
        isCompletedBlockOne,
    };
};
export const blockOneReady = (newValue) => {
    return {
        type: types.BLOCK_ONE_READY,
        newValue,
    };
};

export const isCompletedTypeTwoAC = (newValue) => {
    return {
        type: types.IS_COMPLETED_TYPE_TWO,
        newValue,
    };
};
export const isCompletedSechTwoAC = (newValue) => {
    return {
        type: types.IS_COMPLETED_SECH_TWO,
        newValue,
    };
};
export const isCompletedInputTwoAC = (newValue) => {
    return {
        type: types.IS_COMPLETED_INPUT_TWO,
        newValue,
    };
};
export const isCompletedBlockTwoAC = (
    typeTwo,
    sechTwo,
    inputTwo,
    isCompletedBlockTwo
) => {
    return {
        type: types.IS_COMPLETED_BLOCK_TWO,
        typeTwo,
        sechTwo,
        inputTwo,
        isCompletedBlockTwo,
    };
};
export const blockTwoReady = (newValue) => {
    return {
        type: types.BLOCK_TWO_READY,
        newValue,
    };
};

export const isCompletedTypeThreeAC = (newValue) => {
    return {
        type: types.IS_COMPLETED_TYPE_THREE,
        newValue,
    };
};
export const isCompletedSechThreeAC = (newValue) => {
    return {
        type: types.IS_COMPLETED_SECH_THREE,
        newValue,
    };
};
export const isCompletedInputThreeAC = (newValue) => {
    return {
        type: types.IS_COMPLETED_INPUT_THREE,
        newValue,
    };
};
export const isCompletedBlockThreeAC = (
    typeThree,
    sechThree,
    inputThree,
    isCompletedBlockThree
) => {
    return {
        type: types.IS_COMPLETED_BLOCK_THREE,
        typeThree,
        sechThree,
        inputThree,
        isCompletedBlockThree,
    };
};
export const blockThreeReady = (newValue) => {
    return {
        type: types.BLOCK_THREE_READY,
        newValue,
    };
};

export const isCompletedTypeFourAC = (newValue) => {
    return {
        type: types.IS_COMPLETED_TYPE_FOUR,
        newValue,
    };
};
export const isCompletedSechFourAC = (newValue) => {
    return {
        type: types.IS_COMPLETED_SECH_FOUR,
        newValue,
    };
};
export const isCompletedInputFourAC = (newValue) => {
    return {
        type: types.IS_COMPLETED_INPUT_FOUR,
        newValue,
    };
};
export const isCompletedBlockFourAC = (
    typeFour,
    sechFour,
    inputFour,
    isCompletedBlockFour
) => {
    return {
        type: types.IS_COMPLETED_BLOCK_FOUR,
        typeFour,
        sechFour,
        inputFour,
        isCompletedBlockFour,
    };
};
export const blockFourReady = (newValue) => {
    return {
        type: types.BLOCK_FOUR_READY,
        newValue,
    };
};
export const isCompletedTypeFiveAC = (newValue) => {
    return {
        type: types.IS_COMPLETED_TYPE_FIVE,
        newValue,
    };
};
export const isCompletedSechFiveAC = (newValue) => {
    return {
        type: types.IS_COMPLETED_SECH_FIVE,
        newValue,
    };
};
export const isCompletedInputFiveAC = (newValue) => {
    return {
        type: types.IS_COMPLETED_INPUT_FIVE,
        newValue,
    };
};
export const isCompletedBlockFiveAC = (
    typeFive,
    sechFive,
    inputFive,
    isCompletedBlockFive
) => {
    return {
        type: types.IS_COMPLETED_BLOCK_FIVE,
        typeFive,
        sechFive,
        inputFive,
        isCompletedBlockFive,
    };
};
export const blockFiveReady = (newValue) => {
    return {
        type: types.BLOCK_FIVE_READY,
        newValue,
    };
};
export const isCompletedTypeSixAC = (newValue) => {
    return {
        type: types.IS_COMPLETED_TYPE_SIX,
        newValue,
    };
};
export const isCompletedSechSixAC = (newValue) => {
    return {
        type: types.IS_COMPLETED_SECH_SIX,
        newValue,
    };
};
export const isCompletedInputSixAC = (newValue) => {
    return {
        type: types.IS_COMPLETED_INPUT_SIX,
        newValue,
    };
};
export const isCompletedBlockSixAC = (
    typeSix,
    sechSix,
    inputSix,
    isCompletedBlockSix
) => {
    return {
        type: types.IS_COMPLETED_BLOCK_SIX,
        typeSix,
        sechSix,
        inputSix,
        isCompletedBlockSix,
    };
};
export const blockSixReady = (newValue) => {
    return {
        type: types.BLOCK_SIX_READY,
        newValue,
    };
};
export const changeLengValue = (newValue) => {
    return {
        type: types.CHANGE_LENG_VALUE,
        newValue,
    };
};
export const changeTypeTubeValue = (newValue) => {
    return {
        type: types.CHANGE_TYPE_TUBE_VALUE,
        newValue,
    };
};
export const changeOutputFinalValue = (newValue) => {
    return {
        type: types.CHANGE_OUTPUT_FINAL_VALUE,
        newValue,
    };
};
