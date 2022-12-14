import React from 'react';
import s from './MainPage.module.scss'
import {MainPageLayout} from "./components/MainPageLayout/MainPageLayout";
import {ListItem} from "./components/ListItem/ListItem";

export const MainPage = ({items}: {items: any}) => {
    return (
        <MainPageLayout>
            <div className={s.top}>
                <span>
                    Строительно-монтажные работы
                </span>
            </div>
            <div className={s.listWrapper}>
                <div className={s.header}>
                    <p className={s.title}>Уровень</p>
                    <p className={s.title}>Наименование работ</p>
                    <p className={s.title}>Основная з/п</p>
                    <p className={s.title}>Оборудование</p>
                    <p className={s.title}>Накладные расходы</p>
                    <p className={s.title}>Сметная прибыль</p>
                </div>
                <div className={s.stringList}>
                    {items.map((item: any) => (
                        <ListItem item={item} />
                        )
                    )}
                </div>
            </div>
        </MainPageLayout>
    );
};
