import {ReactNode} from 'react';
import s from './MainPageLayout.module.sass';
import {AppHeader} from "../../../../components/AppHeader/AppHeader";
import {AppSidebar} from "../../../../components/AppSidebar/AppSidebar";

export const MainPageLayout = ({children}: {children: ReactNode}) => {
    return (
        <div className={s.MainPage}>
            <AppHeader/>
            <div className={s.contentWrapper}>
                <AppSidebar/>
                <div className={s.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};