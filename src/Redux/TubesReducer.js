import * as types from "../Actions/actionsTypes";

const initialState = {
    blockOne: {
        typeOne: "", // селект типа перв.блока заполнен. Должно прийти ЗНАЧЕНИЕ!
        sechOne: "", // селект сечений перв.блока заполнен. Должно прийти ЗНАЧЕНИЕ!
        inputOne: "", // кол-во пров. перв.блока заполнено. Должно прийти ЗНАЧЕНИЕ!
        isCompletedBlockOne: false, // все поля ввода перв.блока заполнены.
    }, // первый блок проводов.
    blockTwo: {
        typeTwo: "",
        sechTwo: "",
        inputTwo: "",
        isCompletedBlockTwo: "",
    }, // второй блок проводов.
    blockThree: {
        typeThree: "",
        sechThree: "",
        inputThree: "",
        isCompletedBlockThree: "",
    }, // третий блок проводов.
    blockFour: {
        typeFour: "",
        sechFour: "",
        inputFour: "",
        isCompletedBlockFour: "",
    },
    blockFive: {
        typeFive: "",
        sechFive: "",
        inputFive: "",
        isCompletedBlockFive: "",
    },
    blockSix: {
        typeSix: "",
        sechSix: "",
        inputSix: "",
        isCompletedBlockSix: "",
    },
    lengValue: "0", // выбор длины провода.
    typeTubesValue: "0", // выбор трубки.
    outputFinal: "", // финальный вывод трубки сюда.
    addNewTube: {
        ReadyOne: false,
        ReadyTwo: false,
        ReadyThree: false,
        ReadyFour: false,
        ReadyFive: false,
        ReadySix: false,
    }, // если isCompletedBlockOne(Two..): true, то при клике на кнопку 'Добавить' меняем ReadyOne(Two...): true,
    //BlockTubesContainer подписан на изменения ReadyOne, будет сразу перерисовка с добавлением нового блока.
    tubeNames: {
        tubeOne: "Провод №1",
        tubeTwo: "Провод №2",
        tubeThree: "Провод №3",
        tubeFour: "Провод №4",
        tubeFive: "Провод №5",
        tubeSix: "Провод №6",
    }, // title всех блоков проводов.
    arrLengWire: [
        { value: 0, name: "- Длина провода -" },
        { value: 2.0, name: "До 3 метров" },
        { value: 2.2, name: "От 3 до 10 метров" },
        { value: 2.4, name: "От 10 метров" },
    ], // массив выбора длины провода.
    arrTypeTube: [
        { value: "0", name: "- Тип трубки -" },
        { value: "ТВ-40", name: "305ТВ-40" },
        { value: "ТВ-40Т", name: "305ТВ-40Т" },
        { value: "ТВ-40А", name: "305ТВ-40А" },
        { value: "ТВ-50", name: "305ТВ-50" },
        { value: "ТВ-50-14", name: "305ТВ-50-14" },
        { value: "ТВ-60", name: "305ТВ-60" },
        { value: "Deray IAKT 3:1", name: "Deray IAKT 3:1" },
        { value: "Deray IAKT 4:1", name: "Deray IAKT 4:1" },
        { value: "Deray HB", name: "Deray HB" },
    ], // массив выбора типа трубки.
    type: [
        { id: 0, title: "- Тип -" },
        { id: 1, title: "МГТФ" },
        { id: 2, title: "МГТФЭ" },
        { id: 3, title: "МГШВ" },
        { id: 4, title: "МГШВЭ" },
        { id: 5, title: "МПО" },
        { id: 6, title: "МПОЭ" },
        { id: 7, title: "ПВ3" },
        { id: 8, title: "МС 16-13" },
        { id: 9, title: "МСЭ 16-13" },
    ],
    sech: [
        { prId_1: 0, sechId_1: 0, title: "" },
        { prId_1: 1, sechId_1: 0.56, title: "0,03" },
        { prId_1: 1, sechId_1: 0.62, title: "0,05" },
        { prId_1: 1, sechId_1: 0.75, title: "0,07" },
        { prId_1: 1, sechId_1: 0.85, title: "0,10" },
        { prId_1: 1, sechId_1: 0.87, title: "0,12" },
        { prId_1: 1, sechId_1: 0.9, title: "0,14" },
        { prId_1: 1, sechId_1: 1.04, title: "0,20" },
        { prId_1: 1, sechId_1: 1.19, title: "0,35" },
        { prId_1: 1, sechId_1: 1.5, title: "0,50" },
        { prId_1: 1, sechId_1: 1.8, title: "0,75" },
        { prId_1: 1, sechId_1: 1.9, title: "1,0" },
        { prId_1: 1, sechId_1: 2.2, title: "1,5" },
        { prId_1: 1, sechId_1: 2.6, title: "2,5" },
        { prId_1: 2, sechId_1: 1.3, title: "1x0,07" },
        { prId_1: 2, sechId_1: 1.4, title: "1x0,10" },
        { prId_1: 2, sechId_1: 1.6, title: "1x0,12" },
        { prId_1: 2, sechId_1: 1.6, title: "1x0,14" },
        { prId_1: 2, sechId_1: 2.1, title: "2x0,07" },
        { prId_1: 2, sechId_1: 2.3, title: "2x0,10" },
        { prId_1: 2, sechId_1: 2.5, title: "2x0,12" },
        { prId_1: 2, sechId_1: 2.5, title: "2x0,14" },
        { prId_1: 2, sechId_1: 2.5, title: "3x0,07" },
        { prId_1: 2, sechId_1: 2.8, title: "3x0,10" },
        { prId_1: 2, sechId_1: 3.0, title: "3x0,12" },
        { prId_1: 2, sechId_1: 3.0, title: "3x0,14" },
        { prId_1: 3, sechId_1: 1.3, title: "0,12" },
        { prId_1: 3, sechId_1: 1.4, title: "0,14" },
        { prId_1: 3, sechId_1: 1.6, title: "0,20" },
        { prId_1: 3, sechId_1: 1.9, title: "0,35" },
        { prId_1: 3, sechId_1: 2.2, title: "0,50" },
        { prId_1: 3, sechId_1: 2.5, title: "0,75" },
        { prId_1: 3, sechId_1: 2.8, title: "1,00" },
        { prId_1: 3, sechId_1: 3.0, title: "1,50" },
        { prId_1: 4, sechId_1: 1.9, title: "1х0,12" },
        { prId_1: 4, sechId_1: 2.0, title: "1х0,14" },
        { prId_1: 4, sechId_1: 2.2, title: "1х0,20" },
        { prId_1: 4, sechId_1: 2.5, title: "1х0,35" },
        { prId_1: 4, sechId_1: 2.8, title: "1х0,50" },
        { prId_1: 4, sechId_1: 3.3, title: "1х0,75" },
        { prId_1: 4, sechId_1: 4.6, title: "2х0,35" },
        { prId_1: 4, sechId_1: 5.2, title: "2х0,50" },
        { prId_1: 4, sechId_1: 5.8, title: "2х0,75" },
        { prId_1: 4, sechId_1: 4.9, title: "3х0,35" },
        { prId_1: 4, sechId_1: 5.4, title: "3х0,50" },
        { prId_1: 4, sechId_1: 6.8, title: "3х0,75" },
        { prId_1: 5, sechId_1: 1.1, title: "0,12" },
        { prId_1: 5, sechId_1: 1.3, title: "0,20" },
        { prId_1: 5, sechId_1: 1.6, title: "0,35" },
        { prId_1: 5, sechId_1: 1.8, title: "0,50" },
        { prId_1: 5, sechId_1: 2.0, title: "0,75" },
        { prId_1: 5, sechId_1: 2.1, title: "1,00" },
        { prId_1: 5, sechId_1: 2.5, title: "1,50" },
        { prId_1: 5, sechId_1: 3.1, title: "2,50" },
        { prId_1: 5, sechId_1: 3.8, title: "4,00" },
        { prId_1: 5, sechId_1: 4.4, title: "6,00" },
        { prId_1: 6, sechId_1: 1.7, title: "1x0,12" },
        { prId_1: 6, sechId_1: 1.9, title: "1x0,20" },
        { prId_1: 6, sechId_1: 2.2, title: "1x0,35" },
        { prId_1: 6, sechId_1: 2.4, title: "1x0,50" },
        { prId_1: 6, sechId_1: 2.6, title: "1x0,75" },
        { prId_1: 6, sechId_1: 2.7, title: "1x1,00" },
        { prId_1: 6, sechId_1: 3.1, title: "1x1,50" },
        { prId_1: 6, sechId_1: 3.7, title: "1x2,50" },
        { prId_1: 6, sechId_1: 4.4, title: "1x4,00" },
        { prId_1: 6, sechId_1: 5.0, title: "1x6,00" },
        { prId_1: 6, sechId_1: 2.8, title: "2x0,12" },
        { prId_1: 6, sechId_1: 3.2, title: "2x0,20" },
        { prId_1: 6, sechId_1: 3.8, title: "2x0,35" },
        { prId_1: 6, sechId_1: 4.2, title: "2x0,50" },
        { prId_1: 6, sechId_1: 3.0, title: "3x0,12" },
        { prId_1: 6, sechId_1: 3.4, title: "3x0,20" },
        { prId_1: 6, sechId_1: 3.8, title: "3x0,35" },
        { prId_1: 6, sechId_1: 4.5, title: "3x0,50" },
        { prId_1: 7, sechId_1: 2.6, title: "0,50" },
        { prId_1: 7, sechId_1: 2.8, title: "0,75" },
        { prId_1: 7, sechId_1: 3.0, title: "1,00" },
        { prId_1: 7, sechId_1: 3.3, title: "1,20" },
        { prId_1: 7, sechId_1: 3.4, title: "1,50" },
        { prId_1: 7, sechId_1: 3.7, title: "2,00" },
        { prId_1: 7, sechId_1: 4.2, title: "2,50" },
        { prId_1: 7, sechId_1: 4.4, title: "3,00" },
        { prId_1: 7, sechId_1: 4.8, title: "4,00" },
        { prId_1: 7, sechId_1: 5.2, title: "5,00" },
        { prId_1: 7, sechId_1: 6.3, title: "6,00" },
        { prId_1: 8, sechId_1: 0.6, title: "0,02" },
        { prId_1: 8, sechId_1: 0.6, title: "0,03" },
        { prId_1: 8, sechId_1: 0.7, title: "0,05" },
        { prId_1: 8, sechId_1: 0.7, title: "0,08" },
        { prId_1: 8, sechId_1: 0.8, title: "0,12" },
        { prId_1: 8, sechId_1: 1.0, title: "0,20" },
        { prId_1: 8, sechId_1: 1.3, title: "0,35" },
        { prId_1: 8, sechId_1: 1.4, title: "0,50" },
        { prId_1: 9, sechId_1: 1.1, title: "0,08" },
        { prId_1: 9, sechId_1: 1.2, title: "0,12" },
        { prId_1: 9, sechId_1: 1.4, title: "0,20" },
        { prId_1: 9, sechId_1: 1.7, title: "0,35" },
        { prId_1: 9, sechId_1: 1.9, title: "0,50" },
    ],
    tubesGost: {
        arrTB: [
            0.5, 0.75, 1.0, 1.5, 1.75, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 6.0, 7.0,
            8.0, 9.0, 10.0, 12.0, 14.0, 16.0, 18.0, 20.0, 22.0, 25.0, 30.0, 35.0,
            40.0, 50.0,
        ],
        arrDerayIAKT3: [
            { id: 3.0, name: "Deray-IAKT-3,0/1,0" },
            { id: 4.5, name: "Deray-IAKT-4,5/1,5" },
            { id: 6.0, name: "Deray-IAKT-6,0/2,0" },
            { id: 9.0, name: "Deray-IAKT-9,0/3,0" },
            { id: 12.0, name: "Deray-IAKT-12,0/4,0" },
            { id: 19.0, name: "Deray-IAKT-19,0/6,0" },
            { id: 24.0, name: "Deray-IAKT-24,0/8,0" },
            { id: 40.0, name: "Deray-IAKT-40,0/13,0" },
        ],
        arrDerayIAKT4: [
            { id: 4.0, name: "Deray-IAKT-4,0/1,0" },
            { id: 8.0, name: "Deray-IAKT-8,0/2,0" },
            { id: 12.0, name: "Deray-IAKT-12,0/3,0" },
            { id: 16.0, name: "Deray-IAKT-16,0/4,0" },
            { id: 24.0, name: "Deray-IAKT-24,0/6,0" },
            { id: 32.0, name: "Deray-IAKT-32,0/8,0" },
            { id: 52.0, name: "Deray-IAKT-52,0/13,0" },
        ],
        arrDerayHB: [
            { id: 1.2, name: "Deray-HB-1,2/0,6" },
            { id: 1.6, name: "Deray-HB-1,6/0,8" },
            { id: 2.4, name: "Deray-HB-2,4/1,2" },
            { id: 3.2, name: "Deray-HB-3,2/1,6" },
            { id: 4.0, name: "Deray-HB-4,0/1,0" },
            { id: 4.8, name: "Deray-HB-4,8/2,4" },
            { id: 6.4, name: "Deray-HB-6,4/3,2" },
            { id: 8.0, name: "Deray-HB-8,0/2,0" },
            { id: 9.5, name: "Deray-HB-9,5/4,8" },
            { id: 12.7, name: "Deray-HB-12,7/6,4" },
            { id: 19.0, name: "Deray-HB-19,0/9,5" },
            { id: 25.4, name: "Deray-HB-25,4/12,7" },
            { id: 31.8, name: "Deray-HB-31,8/15,9" },
            { id: 38.0, name: "Deray-HB-38,1/19,0" },
            { id: 51.0, name: "Deray-HB-50,8/25,4" },
            { id: 76.0, name: "Deray-HB-76,0/38,0" },
            { id: 102.0, name: "Deray-HB-102,0/51,0" },
        ],
    },
};

export function TubesReducer(state = initialState, action) {
    switch (action.type) {
        case types.IS_COMPLETED_TYPE_ONE: {
            let newState = { ...state };
            newState.blockOne = { ...state.blockOne };
            newState.blockOne.typeOne = action.newValue;
            newState.outputFinal = "";
            return newState;
        }
        case types.IS_COMPLETED_SECH_ONE: {
            let newState = { ...state };
            newState.blockOne = { ...state.blockOne };
            newState.blockOne.sechOne = action.newValue;
            newState.outputFinal = "";
            return newState;
        }
        case types.IS_COMPLETED_INPUT_ONE: {
            let newState = { ...state };
            newState.blockOne = { ...state.blockOne };
            newState.blockOne.inputOne = action.newValue;
            newState.outputFinal = "";
            return newState;
        }
        case types.IS_COMPLETED_BLOCK_ONE: {
            // проверка на заполненность трёх полей данных первого блока.
            const {
                blockOne: { typeOne, sechOne, inputOne },
            } = state; // вытаскиваем из state, чтобы могли обратиться.
            if (typeOne && sechOne && inputOne !== "Кол-во." && inputOne !== "") {
                let newState = { ...state };
                newState.blockOne = { ...state.blockOne };
                newState.blockOne.isCompletedBlockOne = true;
                return newState;
            } else {
                let newState1 = { ...state };
                newState1.blockOne = { ...state.blockOne };
                newState1.blockOne.isCompletedBlockOne = false;
                return newState1;
            }
        } // без else при ручном сбросе не правильно будет отображаться.
        case types.BLOCK_ONE_READY: {
            // при клике на 'Добавить' меняем значение, и сразу отрисуется новый блок в BlockTubes.
            let newState = { ...state };
            newState.addNewTube = { ...state.addNewTube };
            newState.addNewTube.ReadyOne = action.newValue;
            return newState;
        }
        case types.IS_COMPLETED_TYPE_TWO: {
            let newState = { ...state };
            newState.blockTwo = { ...state.blockTwo };
            newState.blockTwo.typeTwo = action.newValue;
            newState.outputFinal = "";
            return newState;
        }
        case types.IS_COMPLETED_SECH_TWO: {
            let newState = { ...state };
            newState.blockTwo = { ...state.blockTwo };
            newState.blockTwo.sechTwo = action.newValue;
            newState.outputFinal = "";
            return newState;
        }
        case types.IS_COMPLETED_INPUT_TWO: {
            let newState = { ...state };
            newState.blockTwo = { ...state.blockTwo };
            newState.blockTwo.inputTwo = action.newValue;
            newState.outputFinal = "";
            return newState;
        }
        case types.IS_COMPLETED_BLOCK_TWO: {
            // проверка на заполненность трёх полей данных второго блока.
            const {
                blockTwo: { typeTwo, sechTwo, inputTwo },
            } = state;
            if (typeTwo && sechTwo && inputTwo !== "Кол-во." && inputTwo !== "") {
                let newState = { ...state };
                newState.blockTwo = { ...state.blockTwo };
                newState.blockTwo.isCompletedBlockTwo = true;
                return newState;
            } else {
                let newState1 = { ...state };
                newState1.blockTwo = { ...state.blockTwo };
                newState1.blockTwo.isCompletedBlockTwo = false;
                return newState1;
            } // без else при ручном сбросе не правильно будет отображаться.
        }
        case types.BLOCK_TWO_READY: {
            // при клике на 'Добавить' меняем значение, и сразу отрисуется новый блок в BlockTubes.
            let newState = { ...state };
            newState.addNewTube = { ...state.addNewTube };
            newState.addNewTube.ReadyTwo = action.newValue;
            return newState;
        }
        case types.IS_COMPLETED_TYPE_THREE: {
            let newState = { ...state };
            newState.blockThree = { ...state.blockThree };
            newState.blockThree.typeThree = action.newValue;
            newState.outputFinal = "";
            return newState;
        }
        case types.IS_COMPLETED_SECH_THREE: {
            let newState = { ...state };
            newState.blockThree = { ...state.blockThree };
            newState.blockThree.sechThree = action.newValue;
            newState.outputFinal = "";
            return newState;
        }
        case types.IS_COMPLETED_INPUT_THREE: {
            let newState = { ...state };
            newState.blockThree = { ...state.blockThree };
            newState.blockThree.inputThree = action.newValue;
            newState.outputFinal = "";
            return newState;
        }
        case types.IS_COMPLETED_BLOCK_THREE: {
            // проверка на заполненность трёх полей данных третьего блока.
            const {
                blockThree: { typeThree, sechThree, inputThree },
            } = state;
            if (
                typeThree &&
                sechThree &&
                inputThree !== "Кол-во." &&
                inputThree !== ""
            ) {
                let newState = { ...state };
                newState.blockThree = { ...state.blockThree };
                newState.blockThree.isCompletedBlockThree = true;
                return newState;
            } else {
                let newState1 = { ...state };
                newState1.blockThree = { ...state.blockThree };
                newState1.blockThree.isCompletedBlockThree = false;
                return newState1;
            } // без else при ручном сбросе не правильно будет отображаться.
        }
        case types.BLOCK_THREE_READY: {
            // при клике на 'Добавить' меняем значение, и сразу отрисуется новый блок в BlockTubes.
            let newState = { ...state };
            newState.addNewTube = { ...state.addNewTube };
            newState.addNewTube.ReadyThree = action.newValue;
            return newState;
        }
        case types.IS_COMPLETED_TYPE_FOUR: {
            let newState = { ...state };
            newState.blockFour = { ...state.blockFour };
            newState.blockFour.typeFour = action.newValue;
            newState.outputFinal = "";
            return newState;
        }
        case types.IS_COMPLETED_SECH_FOUR: {
            let newState = { ...state };
            newState.blockFour = { ...state.blockFour };
            newState.blockFour.sechFour = action.newValue;
            newState.outputFinal = "";
            return newState;
        }
        case types.IS_COMPLETED_INPUT_FOUR: {
            let newState = { ...state };
            newState.blockFour = { ...state.blockFour };
            newState.blockFour.inputFour = action.newValue;
            newState.outputFinal = "";
            return newState;
        }
        case types.IS_COMPLETED_BLOCK_FOUR: {
            // проверка на заполненность трёх полей данных четвертого блока.
            const {
                blockFour: { typeFour, sechFour, inputFour },
            } = state;
            if (typeFour && sechFour && inputFour !== "Кол-во." && inputFour !== "") {
                let newState = { ...state };
                newState.blockFour = { ...state.blockFour };
                newState.blockFour.isCompletedBlockFour = true;
                return newState;
            } else {
                let newState1 = { ...state };
                newState1.blockFour = { ...state.blockFour };
                newState1.blockFour.isCompletedBlockFour = false;
                return newState1;
            } // без else при ручном сбросе не правильно будет отображаться.
        }
        case types.BLOCK_FOUR_READY: {
            // при клике на 'Добавить' меняем значение, и сразу отрисуется новый блок в BlockTubes.
            let newState = { ...state };
            newState.addNewTube = { ...state.addNewTube };
            newState.addNewTube.ReadyFour = action.newValue;
            return newState;
        }
        case types.IS_COMPLETED_TYPE_FIVE: {
            let newState = { ...state };
            newState.blockFive = { ...state.blockFive };
            newState.blockFive.typeFive = action.newValue;
            newState.outputFinal = "";
            return newState;
        }
        case types.IS_COMPLETED_SECH_FIVE: {
            let newState = { ...state };
            newState.blockFive = { ...state.blockFive };
            newState.blockFive.sechFive = action.newValue;
            newState.outputFinal = "";
            return newState;
        }
        case types.IS_COMPLETED_INPUT_FIVE: {
            let newState = { ...state };
            newState.blockFive = { ...state.blockFive };
            newState.blockFive.inputFive = action.newValue;
            newState.outputFinal = "";
            return newState;
        }
        case types.IS_COMPLETED_BLOCK_FIVE: {
            // проверка на заполненность трёх полей данных пятого блока.
            const {
                blockFive: { typeFive, sechFive, inputFive },
            } = state;
            if (typeFive && sechFive && inputFive !== "Кол-во." && inputFive !== "") {
                let newState = { ...state };
                newState.blockFive = { ...state.blockFive };
                newState.blockFive.isCompletedBlockFive = true;
                return newState;
            } else {
                let newState1 = { ...state };
                newState1.blockFive = { ...state.blockFive };
                newState1.blockFive.isCompletedBlockFive = false;
                return newState1;
            } // без else при ручном сбросе не правильно будет отображаться.
        }
        case types.BLOCK_FIVE_READY: {
            // при клике на 'Добавить' меняем значение, и сразу отрисуется новый блок в BlockTubes.
            let newState = { ...state };
            newState.addNewTube = { ...state.addNewTube };
            newState.addNewTube.ReadyFive = action.newValue;
            return newState;
        }
        case types.IS_COMPLETED_TYPE_SIX: {
            let newState = { ...state };
            newState.blockSix = { ...state.blockSix };
            newState.blockSix.typeSix = action.newValue;
            newState.outputFinal = "";
            return newState;
        }
        case types.IS_COMPLETED_SECH_SIX: {
            let newState = { ...state };
            newState.blockSix = { ...state.blockSix };
            newState.blockSix.sechSix = action.newValue;
            newState.outputFinal = "";
            return newState;
        }
        case types.IS_COMPLETED_INPUT_SIX: {
            let newState = { ...state };
            newState.blockSix = { ...state.blockSix };
            newState.blockSix.inputSix = action.newValue;
            newState.outputFinal = "";
            return newState;
        }
        case types.IS_COMPLETED_BLOCK_SIX: {
            // проверка на заполненность трёх полей данных шестого блока.
            const {
                blockSix: { typeSix, sechSix, inputSix },
            } = state;
            if (typeSix && sechSix && inputSix !== "Кол-во." && inputSix !== "") {
                let newState = { ...state };
                newState.blockSix = { ...state.blockSix };
                newState.blockSix.isCompletedBlockSix = true;
                return newState;
            } else {
                let newState1 = { ...state };
                newState1.blockSix = { ...state.blockSix };
                newState1.blockSix.isCompletedBlockSix = false;
                return newState1;
            } // без else при ручном сбросе не правильно будет отображаться.
        }
        case types.BLOCK_SIX_READY: {
            // при клике на 'Добавить' меняем значение, и сразу отрисуется новый блок в BlockTubes.
            let newState = { ...state };
            newState.addNewTube = { ...state.addNewTube };
            newState.addNewTube.ReadySix = action.newValue;
            return newState;
        }
        case types.CHANGE_LENG_VALUE: {
            return {
                ...state,
                lengValue: action.newValue,
                outputFinal: "",
            };
        }
        case types.CHANGE_TYPE_TUBE_VALUE: {
            return {
                ...state,
                typeTubesValue: action.newValue,
                outputFinal: "",
            };
        }
        case types.CHANGE_OUTPUT_FINAL_VALUE: {
            return {
                ...state,
                outputFinal: action.newValue,
            };
        }
        default:
            return state;
    }
}

export default TubesReducer;
