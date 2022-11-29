import {E_ID} from "../constants/eId";

export const endpoints = {
    items: {
        getList: `/v1/outlay-rows/entity/${E_ID}/row/list`,
        createString: `/v1/outlay-rows/entity/${E_ID}/row/create`,
        updateString: (rID: number) => `/v1/outlay-rows/entity/${E_ID}/row/${rID}/update`,
        deleteString: (rID: number) => `/v1/outlay-rows/entity/${E_ID}/row/${rID}/delete`,
    },
}