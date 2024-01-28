import React, { useEffect } from "react";
import style from "./ModalTubeInfo.module.css";

// обернули в React.memo чтобы небыло перерисовок этого статичного компонента при открытии закрытии.
const ModalTubeInfo = React.memo(({ setStatus }) => {
    useEffect(() => {
        document.addEventListener("keydown", handleClickEsc);
        return () => {
            document.removeEventListener("keydown", handleClickEsc);
        };
    }, []); // при монтировании добавл.слушатель, при размонтирвании удаляет слушатель.

    const handleClickX = (e) => {
        setStatus(false);
    };

    const handleClickContainer = (e) => {
        if (e.target.classList.contains(style.container)) setStatus(false);
    };

    const handleClickEsc = (e) => {
        if (e.key === "Escape") {
            setStatus(false);
        }
    };

    return (
        <>
            <div onClick={handleClickContainer} className={style.container}>
                <div className={style.modal_box}>
                    <h1>Основные виды трубок</h1>
                    <a onClick={handleClickX} className={style.btn_modal_close}>
                        {"\u2716"}
                    </a>
                    <div className={style.block_wrap}>
                        <div className={style.block_one}>
                            <h3
                                style={{
                                    textAlign: "center",
                                    marginBottom: "5px",
                                    fontSize: "20px",
                                }}
                            >
                                ПВХ
                            </h3>
                            <hr className={style.hr} />
                            <h3 style={{ textAlign: "center", marginBottom: "5px" }}>
                                Тип 305 (ГОСТ19034-82).
                            </h3>
                            <p>
                                Предназначены для защиты и доп. изоляции токоведущих элементов,
                                работающих при напряжении до 1000В постоянного и переменного
                                тока частотой до 50Гц.
                            </p>
                            <table className={style.table_trub}>
                                <tr>
                                    <th>Марка трубки</th>
                                    <th>
                                        Рабочая <br />
                                        tº
                                    </th>
                                    <th>Особенности</th>
                                </tr>
                                <tr>
                                    <td>305ТВ-40</td>
                                    <td>-40...+70</td>
                                    <td>Более жесткая</td>
                                </tr>
                                <tr>
                                    <td>305ТВ-40А</td>
                                    <td>-40...+105</td>
                                    <td>Пов.термостойкость</td>
                                </tr>
                                <tr>
                                    <td>305ТВ-40Т</td>
                                    <td>-40...+70</td>
                                    <td>Тропикоустойчивая</td>
                                </tr>
                                <tr>
                                    <td>305ТВ-50</td>
                                    <td>-50...+70</td>
                                    <td>Более мягкая</td>
                                </tr>
                                <tr>
                                    <td>305ТВ-50-14</td>
                                    <td>-50...+70</td>
                                    <td>Улучш.изоляц.св-ва.</td>
                                </tr>
                                <tr>
                                    <td>305ТВ-60</td>
                                    <td>-60...+70</td>
                                    <td>Морозоуст.</td>
                                </tr>
                            </table>
                            <div className={style.Modal_footer}>
                                <p>
                                    <b>
                                        Цвет:
                                        <br />
                                    </b>
                                    ТВ-40, ТВ-40Т, ТВ-50-14, ТВ-60: Белый, черный, серый,
                                    коричневый, красный, розовый, оранжевый, желтый, зеленый,
                                    светло-синий, голубой, фиолетовый.
                                    <br />
                                    ТВ-40А: черный, серый, коричневый, розовый, бордо, оранжевый,
                                    зеленый, синий.
                                    <br />
                                    ТВ-50: черный.
                                </p>
                                <p>
                                    <b>Диаметр:</b> 0.50, 0.75, 1.00, 1.50, 1.75, 2.00, 2.50,
                                    3.00, 3.50, 4.00, 4.50, 5.00,
                                    <br /> 6.00, 7.00, 8.00, 9.00, 10.00, 12.00, 14.00, 16.00,
                                    18.00, 20.00, 22.00, 25.00, 30.00, 35.00, 40.00, 50.00.
                                </p>
                            </div>
                        </div>
                        <div className={style.block_two}>
                            <h3
                                style={{
                                    textAlign: "center",
                                    marginBottom: "5px",
                                    fontSize: "20px",
                                }}
                            >
                                Термоусадочная
                            </h3>
                            <hr class="hr" />
                            <div className={style.deray_flex}>
                                <div className={style.deray_one}>
                                    <h3>
                                        "Deray-IAKT" серия
                                        <br />
                                        (клеевая)
                                    </h3>
                                    <table className={style.table_IAKT}>
                                        <tr>
                                            <th>Наим.(Усадка 3:1)</th>
                                        </tr>
                                        <tr>
                                            <td>Deray-IAKT-3,0*/1,0**</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-IAKT-4,5/1,5</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-IAKT-6,0/2,0</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-IAKT-9,0/3,0</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-IAKT-12,0/4,0</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-IAKT-19,0/6,0</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-IAKT-24,0/8,0</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-IAKT-40,0/13,0</td>
                                        </tr>
                                    </table>
                                    <table className={style.table_IAKT}>
                                        <tr>
                                            <th>Наим.(Усадка 4:1)</th>
                                        </tr>
                                        <tr>
                                            <td>Deray-IAKT-4,0*/1,0**</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-IAKT-8,0/2,0</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-IAKT-12,0/3,0</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-IAKT-16,0/4,0</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-IAKT-24,0/6,0</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-IAKT-32,0/8,0</td>
                                        </tr>
                                    </table>
                                    <p>
                                        <b>Цвет:</b> Белый, черный.
                                    </p>
                                </div>
                                <div className={style.deray_two}>
                                    <h3>
                                        "Deray-HB" серия
                                        <br />
                                        (без клеевая)
                                    </h3>
                                    <table className={style.table_HB}>
                                        <tr>
                                            <th>Наим.</th>
                                        </tr>
                                        <tr>
                                            <td>Deray-HB-1,2*/0,6**</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-HB-1,6/0,8</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-HB-2,4/1,2</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-HB-3,2/1,6</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-HB-4,0/1,0</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-HB-4,8/2,4</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-HB-6,4/3,2</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-HB-8,0/2,0</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-HB-9,5/4,8</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-HB-12,7/6,4</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-HB-19,0/9,5</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-HB-25,4/12,7</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-HB-31,8/15,9</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-HB-38,1/19,0</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-HB-50,8/25,4</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-HB-76,0/38,0</td>
                                        </tr>
                                        <tr>
                                            <td>Deray-HB-102,0/51,0</td>
                                        </tr>
                                    </table>
                                    <p>
                                        <b>Цвет:</b> Прозрачный, черный.
                                        <br />
                                        <span>(на заказ: белый, желт.,зел.,кр.,син.)</span>
                                    </p>
                                </div>
                            </div>
                            <div className={style.div2_opis}>
                                <p>
                                    *-{"\u2300"} до усадки.**-{"\u2300"} после усадки.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

export default ModalTubeInfo;
