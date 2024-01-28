import react from "react";
import style from "./ResultSectionContainer.module.css";
import { connect } from "react-redux";
import { changeOutputFinalValue } from "../../Actions/actions";
import BaseButton from "../../UI_PureComponents/BaseButton";

const ResultSectionContainer = ({
                                    blockOne,
                                    blockTwo,
                                    blockThree,
                                    blockFour,
                                    blockFive,
                                    blockSix,
                                    lengValue,
                                    typeTubesValue,
                                    arrTB,
                                    arrDerayIAKT3,
                                    arrDerayIAKT4,
                                    arrDerayHB,
                                    updateOutputFinal,
                                    outputFinal,
                                }) => {
    const result = () => {
        const arrAllWireOne = []; // [1.6, 1.6, 1.6] , если кол-во проводов 3, то цепляет сечения(1.6 - диам сечения из массива в state).
        const arrAllWireTwo = []; // второй блок.
        const arrAllWireThree = []; // третий.
        const arrAllWireFour = []; // четвёртый.
        const arrAllWireFive = []; // пятый.
        const arrAllWireSix = []; // шестой.
        const arrFinalAllBlock = []; // общий диаметр проводов всех блоков, куда скидывается с учётом коэфф.длины. Длинный массив будет.

        //Обработка данных первого блока.
        for (let i = 0; i < blockOne.inputOne; i++) {
            arrAllWireOne.push(+blockOne.sechOne);
        }
        for (let i = 0; i < arrAllWireOne.length; i++) {
            const modifSquare = ((arrAllWireOne[i] ** 2 * 3.14) / 4) * lengValue; // получаем S(площать) каждого провода c коэф.
            arrFinalAllBlock.push(Math.floor(+modifSquare * 100) / 100); // округляем до сотых в меньшую сторону.
        }

        //Обработка данных второго блока.
        for (let i = 0; i < blockTwo.inputTwo; i++) {
            arrAllWireTwo.push(+blockTwo.sechTwo);
        }
        for (let i = 0; i < arrAllWireTwo.length; i++) {
            const modifSquare = ((arrAllWireTwo[i] ** 2 * 3.14) / 4) * lengValue;
            arrFinalAllBlock.push(Math.floor(+modifSquare * 100) / 100);
        }

        //Обработка данных третьего блока.
        for (let i = 0; i < blockThree.inputThree; i++) {
            arrAllWireThree.push(+blockThree.sechThree);
        }
        for (let i = 0; i < arrAllWireThree.length; i++) {
            const modifSquare = ((arrAllWireThree[i] ** 2 * 3.14) / 4) * lengValue;
            arrFinalAllBlock.push(Math.floor(+modifSquare * 100) / 100);
        }

        //Обработка данных четвёртого блока.
        for (let i = 0; i < blockFour.inputFour; i++) {
            arrAllWireFour.push(+blockFour.sechFour);
        }
        for (let i = 0; i < arrAllWireFour.length; i++) {
            const modifSquare = ((arrAllWireFour[i] ** 2 * 3.14) / 4) * lengValue;
            arrFinalAllBlock.push(Math.floor(+modifSquare * 100) / 100);
        }

        //Обработка данных пятого блока.
        for (let i = 0; i < blockFive.inputFive; i++) {
            arrAllWireFive.push(+blockFive.sechFive);
        }
        for (let i = 0; i < arrAllWireFive.length; i++) {
            const modifSquare = ((arrAllWireFive[i] ** 2 * 3.14) / 4) * lengValue;
            arrFinalAllBlock.push(Math.floor(+modifSquare * 100) / 100);
        }

        //Обработка данных шестого блока.
        for (let i = 0; i < blockSix.inputSix; i++) {
            arrAllWireSix.push(+blockSix.sechSix);
        }
        for (let i = 0; i < arrAllWireSix.length; i++) {
            const modifSquare = ((arrAllWireSix[i] ** 2 * 3.14) / 4) * lengValue;
            arrFinalAllBlock.push(Math.floor(+modifSquare * 100) / 100);
        }

        const summSquare = arrFinalAllBlock.reduce((acc, elem) => acc + elem); // сумма всех площадей проводов.
        const backDiameter = 2 * Math.sqrt(summSquare / 3.14); // переводим умноженную на коэфф. площадь обратно в диаметр.
        const fixDiameter = +backDiameter.toFixed(2);

        //Сверяем финальное значение с массивом трубок и ближайшим диаметром.
        //1) В переменную fixDiameter приходит финальное округлённое до сотых число.
        //2) Перебирем массив в ЗАВИСИМОСТИ от выбранной трубки typeTubesValue(props).
        const tubeGost = "ГОСТ 19034-82";
        const finaleResult = () => {
            let num; // сюда приходит нужное значение диаметра трубки после цикла.
            if (
                typeTubesValue == "ТВ-40" ||
                typeTubesValue == "ТВ-40Т" ||
                typeTubesValue == "ТВ-40А" ||
                typeTubesValue == "ТВ-50" ||
                typeTubesValue == "ТВ-50-14" ||
                typeTubesValue == "ТВ-60"
            ) {
                // если выбрана трубка ТВ40...ТВ60, то...
                for (let i = 0; i < arrTB.length; i++) {
                    // arr.Tube - массив с диаметрами трубок ТВ.
                    if (fixDiameter < arrTB[i]) {
                        // допустим рез=4,78 след массив = 5,1
                        num = arrTB[i]; //если фин.диам меньше диаметра в массиве, то заносив диам. массива в перем. num.
                        break;
                    }
                }
            } else if (fixDiameter !== 0 && typeTubesValue == "Deray IAKT 3:1") {
                for (let i = 0; i < arrDerayIAKT3.length; i++) {
                    if (fixDiameter < arrDerayIAKT3[i].id) {
                        num = arrDerayIAKT3[i].name;
                        break;
                    }
                }
            } else if (fixDiameter !== 0 && typeTubesValue == "Deray IAKT 4:1") {
                for (let i = 0; i < arrDerayIAKT4.length; i++) {
                    if (fixDiameter < arrDerayIAKT4[i].id) {
                        num = arrDerayIAKT4[i].name;
                        break;
                    }
                }
            } else if (fixDiameter !== 0 && typeTubesValue == "Deray HB") {
                for (let i = 0; i < arrDerayHB.length; i++) {
                    if (fixDiameter < arrDerayHB[i].id) {
                        num = arrDerayHB[i].name;
                        break;
                    }
                }
            }
            // вывод в поле out в зависимости от выбранной трубки и учёт макс. диаметра.
            //СТРАННЫЕ СКОБКИ НИЖЕ АВТОМАТИЧЕНСКИ ДОБАВЛЯЕТ!!! ВОЗМОЖНО IF НЕ ПРАВИЛЬНО ОТРАБОТАЕТ!
            if (
                (fixDiameter < 50 && lengValue !== "0" && typeTubesValue == "ТВ-40") ||
                typeTubesValue == "ТВ-40Т" ||
                typeTubesValue == "ТВ-40А" ||
                typeTubesValue == "ТВ-50" ||
                typeTubesValue == "ТВ-50-14" ||
                typeTubesValue == "ТВ-60"
            ) {
                // колбэк функция для изменения state значения outputFinal
                updateOutputFinal(
                    `Трубка 305 ${typeTubesValue}, ` + num + " " + tubeGost
                );
            } else if (fixDiameter < 40 && typeTubesValue == "Deray IAKT 3:1") {
                updateOutputFinal(`Трубка ` + num);
            } else if (fixDiameter < 52 && typeTubesValue == "Deray IAKT 4:1") {
                updateOutputFinal(`Трубка ` + num);
            } else if (fixDiameter < 102 && typeTubesValue == "Deray HB") {
                updateOutputFinal(`Трубка ` + num);
            } else if (typeTubesValue == "0") {
                updateOutputFinal("");
            } else {
                updateOutputFinal("В макс. диаметр трубки 999 не поместится!");
            }
            if (lengValue == 0) {
                updateOutputFinal("");
            }
        };
        finaleResult();
    };

    const init = () => {
        if (
            (blockOne.isCompletedBlockOne &&
                blockTwo.isCompletedBlockTwo === "" &&
                lengValue !== "0" &&
                typeTubesValue !== "0") ||
            (blockOne.isCompletedBlockOne &&
                blockTwo.isCompletedBlockTwo &&
                blockThree.isCompletedBlockThree === "" &&
                lengValue !== "0" &&
                typeTubesValue !== "0" &&
                typeTubesValue !== "0") ||
            (blockOne.isCompletedBlockOne &&
                blockTwo.isCompletedBlockTwo &&
                blockThree.isCompletedBlockThree &&
                blockFour.isCompletedBlockFour === "" &&
                lengValue !== "0" &&
                typeTubesValue !== "0") ||
            (blockOne.isCompletedBlockOne &&
                blockTwo.isCompletedBlockTwo &&
                blockThree.isCompletedBlockThree &&
                blockFour.isCompletedBlockFour &&
                blockFive.isCompletedBlockFive === "" &&
                lengValue !== "0" &&
                typeTubesValue !== "0") ||
            (blockOne.isCompletedBlockOne &&
                blockTwo.isCompletedBlockTwo &&
                blockThree.isCompletedBlockThree &&
                blockFour.isCompletedBlockFour &&
                blockFive.isCompletedBlockFive &&
                blockSix.isCompletedBlockSix === "" &&
                lengValue !== "0" &&
                typeTubesValue !== "0") ||
            (blockOne.isCompletedBlockOne &&
                blockTwo.isCompletedBlockTwo &&
                blockThree.isCompletedBlockThree &&
                blockFour.isCompletedBlockFour &&
                blockFive.isCompletedBlockFive &&
                blockSix.isCompletedBlockSix &&
                lengValue !== "0" &&
                typeTubesValue !== "0")
        ) {
            return false;
        } else {
            return true;
        }
    };

    const disableStatus = init();

    return (
        <>
            <BaseButton callBack={result} disableStatus={disableStatus}>
                Рассчитать
            </BaseButton>
            <p className={style.outResult}>{outputFinal}</p>
        </>
    );
};

let mapStateToProps = (state) => {
    return {
        blockOne: state.TubesReducer.blockOne,
        blockTwo: state.TubesReducer.blockTwo,
        blockThree: state.TubesReducer.blockThree,
        blockFour: state.TubesReducer.blockFour,
        blockFive: state.TubesReducer.blockFive,
        blockSix: state.TubesReducer.blockSix,
        lengValue: state.TubesReducer.lengValue,
        typeTubesValue: state.TubesReducer.typeTubesValue,
        arrTB: state.TubesReducer.tubesGost.arrTB,
        arrDerayIAKT3: state.TubesReducer.tubesGost.arrDerayIAKT3,
        arrDerayIAKT4: state.TubesReducer.tubesGost.arrDerayIAKT4,
        arrDerayHB: state.TubesReducer.tubesGost.arrDerayHB,
        outputFinal: state.TubesReducer.outputFinal,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateOutputFinal: (newValue) => {
            dispatch(changeOutputFinalValue(newValue));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultSectionContainer);
