import {makeAutoObservable} from "mobx";

export interface DataStoreProps {
}

class DataStore {

    constructor() {
        makeAutoObservable(this);
    }
}

export default new DataStore();
