import React, {useEffect} from 'react';
import {fetchGetList} from "./shared/api/requests/items";
import {MainPage} from "./pages/MainPage/MainPage";
import DataStore from './store/DataStore/DataStore'

function App() {
    useEffect(() => {
        fetchGetList().then(res=> console.log(res))
    }, []);
    return (
        <div className="App">
            <MainPage/>
        </div>
    );
}

export default App;
