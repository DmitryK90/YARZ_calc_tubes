import react from "react";
import style from "./BlockMain.module.css";
import SelectChoiceTypeContainerOne from "../SelectChoiceType/SelectChoiceTypeContainerOne";
import SelectChoiceTypeContainerTwo from "../SelectChoiceType/SelectChoiceTypeContainerTwo";
import SelectChoiceTypeContainerThree from "../SelectChoiceType/SelectChoiceTypeContainerThree";
import SelectChoiceTypeContainerFour from "../SelectChoiceType/SelectChoiceTypeContainerFour";
import SelectChoiceTypeContainerFive from "../SelectChoiceType/SelectChoiceTypeContainerFive";
import SelectChoiceTypeContainerSix from "../SelectChoiceType/SelectChoiceTypeContainerSix";

import SelectChoiceSechContainerOne from "../SelectChoiceSech/SelectChoiceSechContainerOne";
import SelectChoiceSechContainerTwo from "../SelectChoiceSech/SelectChoiceSechContainerTwo";
import SelectChoiceSechContainerThree from "../SelectChoiceSech/SelectChoiceSechContainerThree";
import SelectChoiceSechContainerFour from "../SelectChoiceSech/SelectChoiceSechContainerFour";
import SelectChoiceSechContainerFive from "../SelectChoiceSech/SelectChoiceSechContainerFive";
import SelectChoiceSechContainerSix from "../SelectChoiceSech/SelectChoiceSechContainerSix";

import InputAmountWireContainerOne from "../InputAmountWire/InputAmountWireContainerOne";
import InputAmountWireContainerTwo from "../InputAmountWire/InputAmountWireContainerTwo";
import InputAmountWireContainerThree from "../InputAmountWire/InputAmountWireContainerThree";
import InputAmountWireContainerFour from "../InputAmountWire/InputAmountWireContainerFour";
import InputAmountWireContainerFive from "../InputAmountWire/InputAmountWireContainerFive";
import InputAmountWireContainerSix from "../InputAmountWire/InputAmountWireContainerSix";

function BlockTube({ name, num }) {
    return (
        <div className={style.block1}>
            <p className={style.titleBlock}>{name}</p>
            {num === 1 && <SelectChoiceTypeContainerOne />}
            {num === 2 && <SelectChoiceTypeContainerTwo />}
            {num === 3 && <SelectChoiceTypeContainerThree />}
            {num === 4 && <SelectChoiceTypeContainerFour />}
            {num === 5 && <SelectChoiceTypeContainerFive />}
            {num === 6 && <SelectChoiceTypeContainerSix />}
            {num === 1 && <SelectChoiceSechContainerOne />}
            {num === 2 && <SelectChoiceSechContainerTwo />}
            {num === 3 && <SelectChoiceSechContainerThree />}
            {num === 4 && <SelectChoiceSechContainerFour />}
            {num === 5 && <SelectChoiceSechContainerFive />}
            {num === 6 && <SelectChoiceSechContainerSix />}
            {num === 1 && <InputAmountWireContainerOne />}
            {num === 2 && <InputAmountWireContainerTwo />}
            {num === 3 && <InputAmountWireContainerThree />}
            {num === 4 && <InputAmountWireContainerFour />}
            {num === 5 && <InputAmountWireContainerFive />}
            {num === 6 && <InputAmountWireContainerSix />}
        </div>
    );
}

export default BlockTube;
