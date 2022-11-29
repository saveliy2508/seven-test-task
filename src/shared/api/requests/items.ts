import {api} from "../instance";
import {endpoints} from "../endpoints";

export const fetchGetList = async () => {
    return api.get(endpoints.items.getList)
}

export const fetchCreate = async () => {
    return api.post(endpoints.items.createString, {})
}

export const fetchUpdate = async (id: number) => {
    return api.post(endpoints.items.updateString(id), {})
}

export const fetchDelete = async (id: number) => {
    return api.post(endpoints.items.deleteString(id), {})
}