import axios from 'axios'
import { RECEIVING, SEARCH } from '../constants/ActionsTypes'


export const receivingData = (employment=[], text="") => {
    return dispatch => dispatch(receivingFind(employment, text))
};

const receivingFind = (employment, text) => {

    return dispatch =>
        axios.post('https://backend.yukon.to/rpc/project/find', {
            "method":"project.search-list",
            "params":{
                "query":{
                    "employment": employment,
                    "text": `%${text}%`
                }
            },
            "id":512,
            "jsonrpc":"2.0"
        })
            .then(response => dispatch(receivingSearchList(response.data.result.search_id)))

};

const receivingSearchList = search_id => {
    return dispatch =>
        axios.post('https://backend.yukon.to/rpc/project/search-list', {
            "method":"project.find",
            "params":{
                "search_id": search_id,
                "pager":{
                    "page":1,
                    "size":21
                }
            },
            "id":513,
            "jsonrpc":"2.0"
        })
            .then(response => dispatch(receiving(response.data.result.entries)))

};

export const receiving = projects => {
    return {
        type: RECEIVING,
        payload: projects
    }
};
