import React, { useMemo } from "react";
import { connect } from "react-redux";
import BlockTube from "./BlockTube";
import BlockAddContainer from "../BlockAdd/BlockAddContainer";

const BlockTubesContainer = ({
                                 name,
                                 ReadyOne,
                                 ReadyTwo,
                                 ReadyThree,
                                 ReadyFour,
                                 ReadyFive,
                             }) => {
    // СПОРНО! c useMemo избегает перерисовки всех блоков при каждом добавлении нового,
    // хотя тут не дорогостоящие вычисления(помимо этого компонента перерисовываются ещё в каждом блоке 2 селекта и инпут на каждый чих)...
    // Дублирование! мапить из массива будет кучи длинных if... масштабирования не будет. Вроде не правильно, но всего понятней и короче!
    const blockOne = useMemo(() => {
        return <BlockTube name={name.tubeOne} num={1} />;
    }, []);
    const blockTwo = useMemo(() => {
        return ReadyOne && <BlockTube name={name.tubeTwo} num={2} />;
    }, [ReadyOne]);
    const blockThree = useMemo(() => {
        return ReadyTwo && <BlockTube name={name.tubeThree} num={3} />;
    }, [ReadyTwo]);
    const blockFour = useMemo(() => {
        return ReadyThree && <BlockTube name={name.tubeFour} num={4} />;
    }, [ReadyThree]);
    const blockFive = useMemo(() => {
        return ReadyFour && <BlockTube name={name.tubeFive} num={5} />;
    }, [ReadyFour]);
    const blockSix = useMemo(() => {
        return ReadyFive && <BlockTube name={name.tubeSix} num={6} />;
    }, [ReadyFive]);
    return (
        <>
            {blockOne}
            {blockTwo}
            {blockThree}
            {blockFour}
            {blockFive}
            {blockSix}
            {!ReadyFive && <BlockAddContainer />}
            {/* <BlockTube name={name.tubeOne} num={1} />
      {ReadyOne && <BlockTube name={name.tubeTwo} num={2} />}
      {ReadyTwo && <BlockTube name={name.tubeThree} num={3} />}
      {ReadyThree && <BlockTube name={name.tubeFour} num={4} />}
      {ReadyFour && <BlockTube name={name.tubeFive} num={5} />}
      {ReadyFive && <BlockTube name={name.tubeSix} num={6} />} */}
        </>
    );
};
// ReadyOne(Two...); (если isCompletedBlockOne: true, тогда при клике на кнопку 'Добавить' меняется
// значение в state ReadyOne на true, компонента BlockTubesContainer подписана на обновление ReadyOne(Two...) и
// сразу же перерисуется с добавлением нового блока)

let mapStateToProps = (state) => {
    return {
        ReadyOne: state.TubesReducer.addNewTube.ReadyOne,
        ReadyTwo: state.TubesReducer.addNewTube.ReadyTwo,
        ReadyThree: state.TubesReducer.addNewTube.ReadyThree,
        ReadyFour: state.TubesReducer.addNewTube.ReadyFour,
        ReadyFive: state.TubesReducer.addNewTube.ReadyFive,
        name: state.TubesReducer.tubeNames,
    };
};

export default connect(mapStateToProps, null)(BlockTubesContainer);

// const BlockTubesContainer = ({
//   name,
//   ReadyOne,
//   ReadyTwo,
//   ReadyThree,
//   ReadyFour,
//   ReadyFive,
// }) => {
//   // СПОРНО! c useMemo избегает перерисовки всех блоков при каждом добавлении нового,
//   // хотя тут не дорогостоящие вычисления(помимо этого перерисовывают ещё в каждом блоке 2 селекта и инпут)...
//   const memo0 = useMemo(() => {
//     return <BlockTube name={name.tubeOne} num={1} />;
//   }, []);
//   const memo1 = useMemo(() => {
//     return ReadyOne && <BlockTube name={name.tubeTwo} num={2} />;
//   }, [ReadyOne]);
//   const memo2 = useMemo(() => {
//     return ReadyTwo && <BlockTube name={name.tubeThree} num={3} />;
//   }, [ReadyTwo]);
//   const memo3 = useMemo(() => {
//     return ReadyThree && <BlockTube name={name.tubeFour} num={4} />;
//   }, [ReadyThree]);
//   const memo4 = useMemo(() => {
//     return ReadyFour && <BlockTube name={name.tubeFive} num={5} />;
//   }, [ReadyFour]);
//   const memo5 = useMemo(() => {
//     return ReadyFive && <BlockTube name={name.tubeSix} num={6} />;
//   }, [ReadyFive]);
//   const memo6 = useMemo(() => {
//     return !ReadyFive && <BlockAddContainer />;
//   }, []);
//   return (
//     <>
//       {memo0}
//       {memo1}
//       {memo2}
//       {memo3}
//       {memo4}
//       {memo5}
//       {memo6}
//       {/* <BlockTube name={name.tubeOne} num={1} />
//       {ReadyOne && <BlockTube name={name.tubeTwo} num={2} />}
//       {ReadyTwo && <BlockTube name={name.tubeThree} num={3} />}
//       {ReadyThree && <BlockTube name={name.tubeFour} num={4} />}
//       {ReadyFour && <BlockTube name={name.tubeFive} num={5} />}
//       {ReadyFive && <BlockTube name={name.tubeSix} num={6} />}
//       {!ReadyFive && <BlockAddContainer />} */}
//     </>
//   );
// };
// // ReadyOne(Two...); (если isCompletedBlockOne(см.выше): true, тогда при клике на кнопку 'Добавить' меняется
// // значение в state ReadyOne на true, компонента BlockTubesContainer подписана на обновление ReadyOne и
// // сразу же перерисуется с добавлением нового блока)

// let mapStateToProps = (state) => {
//   return {
//     ReadyOne: state.TubesReducer.addNewTube.ReadyOne,
//     ReadyTwo: state.TubesReducer.addNewTube.ReadyTwo,
//     ReadyThree: state.TubesReducer.addNewTube.ReadyThree,
//     ReadyFour: state.TubesReducer.addNewTube.ReadyFour,
//     ReadyFive: state.TubesReducer.addNewTube.ReadyFive,
//     name: state.TubesReducer.tubeNames,
//   };
// };
