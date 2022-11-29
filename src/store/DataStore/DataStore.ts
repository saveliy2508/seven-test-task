import {makeAutoObservable, runInAction} from "mobx";
import {fetchGetList} from "../../shared/api/requests/items";
import {treeToList} from "../../shared/utils/treeToList";

class DataStore {
    data = []
    isLoading = false

    constructor() {
        makeAutoObservable(this);
    }

    getDataAsync() {
        this.isLoading = true
        this.data = []

        const response = fetchGetList()
            .then((res) => {
                runInAction(() => {
                    this.data = res.data;
                })
                console.log(res.data)
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
                this.isLoading = false
            })
    }
}

export default new DataStore();
