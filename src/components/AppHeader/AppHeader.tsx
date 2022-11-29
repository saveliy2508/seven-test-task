import React from 'react';
import s from './AppHeader.module.scss';
import BurgerIcon from '../../shared/assets/icons/burger-icon.svg';
import BackArrow from '../../shared/assets/icons/back-arrow-icon.svg';
import cn from 'classnames';

export const AppHeader = () => {
    return (
        <div className={s.AppHeader}>
            <div className={s.iconContainer}>
                <img className={s.burgerIcon} src={BurgerIcon} alt=""/>
            </div>
            <div className={s.iconContainer}>
                <img className={s.backArrowIcon} src={BackArrow} alt=""/>
            </div>
            <div className={s.links}>
                <div className={cn(s.link, s.active)}>Просмотр</div>
                <div className={s.link}>Управление</div>
            </div>
        </div>
    );
};
