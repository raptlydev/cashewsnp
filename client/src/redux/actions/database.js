import axios from 'axios';
import { SET_DATABASE_DATA } from '../../constants/actionTypes';
import { notification } from 'antd';
import intlUni from 'react-intl-universal';
const baseURL = process.env.REACT_APP_API_HOST;
const duration = parseInt(process.env.REACT_APP_NOTIFICATION_DURATION);
const successStatusCode = parseInt(process.env.REACT_APP_SUCCESS_STATUS_CODE);

export function setDatabaseData(content) {
    return {
        type: SET_DATABASE_DATA,
        content
    };
}

export function getPositionData() {
    return (dispatch) => {
        return axios.get(baseURL + 'api/getPositionData').then((response) => {
            if (response.status === successStatusCode) {
                dispatch(setDatabaseData({
                    positionData: response.data
                }));
                return response.data;
            } else {
                notification.error({
                    message: 'Error',
                    description: response.data.message,
                    duration
                });
                return false;
            }
        }).catch((error) => {
            console.log(error);
            notification.error({
                message: 'Error',
                description: intlUni.get('something.went.wrong'),
                duration
            });
            return false;
        });
    }
}

export function updateDatabaseData(obj) {
    return (dispatch) => {
        return dispatch(setDatabaseData(obj));
    };
}

export function getCashewSnpData(obj) {

    return (dispatch) => {
        return axios.post(baseURL + 'api/getCashewSnpData', obj).then((response) => {
            if (response.status === successStatusCode) {
                dispatch(setDatabaseData({
                    cashewSnpData: response.data.data,
                    totalRecords: response.data.totalRecords,
                    pageNo: response.data.page
                }));
                notification.success({
                    message: 'Success',
                    description: response.data.message,
                    duration
                });
            }
        }).catch((error) => {
            console.log(error);
        });
    };
}

export function handleDownload(obj) {

    return (dispatch) => {
        return axios.post(baseURL + 'api/download', obj, { responseType: "blob" }).then((response) => {
            if (response.status === successStatusCode) {
                notification.success({
                    message: 'Success',
                    description: response.data.message,
                    duration
                });
                return response;
            }
        }).catch((error) => {
            console.log(error);
        });
    };
}