import React, { useState } from "react";
import ChoiceLengContainer from "../ChoiceLengSection/ChoiceLengContainer";
import ChoiceTypeTubeContainer from "../ChoiceTypeTube/ChoiceTypeTubeContainer";
import ResultSectionContainer from "../ResultSection/ResultSectionContainer";
import BtnInfo from "../../UI_PureComponents/BtnInfo";
import ModalTubeInfo from "../../UI_PureComponents/ModalTubeInfo";
import style from "../BlockResult/BlockResultContainer.module.css";

const BlockResultContainer = () => {
    const [modal, setModal] = useState(false);
    const handleClickOnWrapper = (e) => {
        if (e.target.classList.contains(style.wrapper)) setModal(false);
    };
    // модалка скрываем за счёт класса.
    return (
        <>
            <div
                className={`${style.wrapper} ${modal ? style["open"] : ""}`}
                onClick={handleClickOnWrapper}
            >
                <div className={`${style.modal} ${modal ? style["open"] : ""}`}>
                    <ModalTubeInfo setStatus={setModal} />
                </div>
            </div>
            <ChoiceLengContainer />
            <div className={style.result_block}>
                <ChoiceTypeTubeContainer />
                <BtnInfo setStatus={setModal}>?</BtnInfo>
            </div>
            <ResultSectionContainer />
        </>
    );
};

export default BlockResultContainer;
