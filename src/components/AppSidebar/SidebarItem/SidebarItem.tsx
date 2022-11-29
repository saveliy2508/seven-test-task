import s from "./SidebarItem.module.scss";
import MenuItemIcon from "../../../shared/assets/icons/item-icon.svg";
import React from "react";
import cn from "classnames";

export const SidebarItem = ({item}: { item: { id: number, name: string, active?: boolean}}) => {
    return (
        <div className={cn(s.SidebarItem, {[s.active]: item.active})}>
            <img className={s.img} src={MenuItemIcon} alt="icon"/>
            <p className={s.text}>{item.name}</p>
        </div>
    )
}