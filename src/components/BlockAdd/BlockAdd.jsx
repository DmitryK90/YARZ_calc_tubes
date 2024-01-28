import react from "react";
import style from "./BlockAdd.module.css";

// isCompletedBlockOne - первый блок заполнен.
const BlockAdd = ({
                      isCompletedBlockOne,
                      isCompletedBlockTwo,
                      isCompletedBlockThree,
                      isCompletedBlockFour,
                      isCompletedBlockFive,
                      isCompletedBlockSix,
                      updateReadyOne,
                      updateReadyTwo,
                      updateReadyThree,
                      updateReadyFour,
                      updateReadyFive,
                      updateReadySix,
                  }) => {
    const addNewBlockTube = () => {
        if (isCompletedBlockOne) {
            updateReadyOne(true);
        }
        if (isCompletedBlockTwo) {
            updateReadyTwo(true);
        }
        if (isCompletedBlockThree) {
            updateReadyThree(true);
        }
        if (isCompletedBlockFour) {
            updateReadyFour(true);
        }
        if (isCompletedBlockFive) {
            updateReadyFive(true);
        }
        if (isCompletedBlockSix) {
            updateReadySix(true);
        }
    };
    return (
        <div className={style.wrapper}>
            <div className={style.blockAdd}>
                <button
                    onClick={addNewBlockTube}
                    disabled={
                        //isCompletedBlockOne(Two...) === "" при initialState, при отрисовке компонента =false
                        //т.е. если хоть ОДНО поле у ОТРИСОВАННЫХ компонентов блоков не заполнено, кнопка disables.
                        (isCompletedBlockOne && isCompletedBlockTwo === "") ||
                        (isCompletedBlockOne &&
                            isCompletedBlockTwo &&
                            isCompletedBlockThree === "") ||
                        (isCompletedBlockOne &&
                            isCompletedBlockTwo &&
                            isCompletedBlockThree &&
                            isCompletedBlockFour === "") ||
                        (isCompletedBlockOne &&
                            isCompletedBlockTwo &&
                            isCompletedBlockThree &&
                            isCompletedBlockFour &&
                            isCompletedBlockFive === "") ||
                        (isCompletedBlockOne &&
                            isCompletedBlockTwo &&
                            isCompletedBlockThree &&
                            isCompletedBlockFour &&
                            isCompletedBlockFive &&
                            isCompletedBlockSix === "") ||
                        (isCompletedBlockOne &&
                            isCompletedBlockTwo &&
                            isCompletedBlockThree &&
                            isCompletedBlockFour &&
                            isCompletedBlockFive &&
                            isCompletedBlockSix)
                            ? false
                            : true
                    }
                    type="button"
                    className={style.btnBigAdd}
                >
                    Добавить
                </button>
            </div>
        </div>
    );
};

export default BlockAdd;
