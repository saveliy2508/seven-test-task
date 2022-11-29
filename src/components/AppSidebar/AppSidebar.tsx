import React from 'react';
import s from './AppSidebar.module.scss'
import MenuArrowIcon from "../../shared/assets/icons/menu-icon.svg";
import {SidebarItem} from "./SidebarItem/SidebarItem";

export const AppSidebar = () => {
    const menuConfig = [
        {id: 1, name: 'По проекту'},
        {id: 2, name: 'Объекты'},
        {id: 3, name: 'РД'},
        {id: 4, name: 'МТО'},
        {id: 5, name: 'СМР', active: true},
        {id: 6, name: 'График'},
        {id: 7, name: 'Мим'},
        {id: 8, name: 'Рабочик'},
        {id: 9, name: 'Капвложения'},
        {id: 10, name: 'Бюджет'},
        {id: 11, name: 'Финансирование'},
        {id: 12, name: 'Панорамы'},
        {id: 13, name: 'Камеры'},
        {id: 14, name: 'Поручения'},
        {id: 15, name: 'Контрагенты'},
    ]

    return (
        <div className={s.AppSidebar}>
            <div className={s.sidebarHeader}>
                <div>
                    <p className={s.title}>Название проекта</p>
                    <p className={s.subtitle}>Аббревиатура</p>
                </div>
                <div className={s.menuIcon}>
                    <img src={MenuArrowIcon} alt=""/>
                </div>
            </div>
            <div className={s.sidebarList}>
                {menuConfig.map(item => <SidebarItem key={item.id} item={item}/>)}
            </div>
        </div>
    );
};
