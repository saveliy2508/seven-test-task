import s from './ListItem.module.scss';
import BlueDirIcon from '../../../../shared/assets/icons/blue-dir-icon.svg';
import GreenDirIcon from '../../../../shared/assets/icons/green-dir-icon.svg';
import FileIcon from '../../../../shared/assets/icons/file-icon.svg';

const icon = (nestingLevel: number) => {
    switch (nestingLevel) {
        case 0:
            return <img src={BlueDirIcon} alt=""/>
        case 1:
            return <img src={GreenDirIcon} alt=""/>
        case 2:
            return <img src={FileIcon} alt=""/>
        default:
            return <img src={FileIcon} alt=""/>
    }
}

export const ListItem = ({item}: { item: any }) => {
    return (
        <div className={s.ListItem}>
            <div style={{marginLeft: `${12 * item.nestingLevel}px`}} className={s.item}>
                <div className={s.controlsWrapper}>
                    {icon(item.nestingLevel)}
                </div>
            </div>
            <div className={s.item}>{item.rowName}</div>
            <div className={s.item}>{item.salary}</div>
            <div className={s.item}>{item.equipmentCosts}</div>
            <div className={s.item}>{item.overheads}</div>
            <div className={s.item}>{item.estimatedProfit}</div>
        </div>
    );
};