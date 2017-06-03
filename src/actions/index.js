import axios from 'axios'
import { RECEIVING } from '../constants/ActionsTypes'


export const receivingData = () => {
    return dispatch => dispatch(receivingFind())
};

const receivingFind = () => {
    return dispatch =>
        axios.post('https://backend.yukon.to/rpc/project/find', {
            "method":"project.search-list",
            "params":{"query":{}},
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
                    "size":20
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