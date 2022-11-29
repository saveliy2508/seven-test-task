import React, {useEffect, useMemo} from 'react';
import {MainPage} from "./pages/MainPage/MainPage";
import DataStore from './store/DataStore/DataStore'
import {observer} from "mobx-react-lite";
import {treeToList} from "./shared/utils/treeToList";

function App() {
    useEffect(() => {
        DataStore.getDataAsync()
    }, []);

    const dataList = useMemo(() => {
        return DataStore.data.reduce((prev: any, current: any) => {
            let result: any = [];
            if(current.child.length > 0) {
                result = treeToList(current.child)
            }
            return [...prev, {...current, nestingLevel: 0}, ...result]
        }, [])
    }, [DataStore.data]);

    console.log(dataList)

    return (
        <div className="App">
            <MainPage items={dataList}/>
        </div>
    );
}

export default observer(App);
