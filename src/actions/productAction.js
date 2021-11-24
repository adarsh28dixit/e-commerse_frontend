import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../constants/productConstant'
import axios from '../axios'

export const listProduct = () => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_LIST_REQUEST
        })
        const { data } = await axios.get('/api/product');
        dispatch({
            type: PRODUCT_LIST_SUCCESS, payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL, payload: error.message
        })
    }
};

export const detailsProduct = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST
        })
        const { data } = await axios.get(`/api/product/${id}`);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS, payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL, payload: error.message
        })
    }

};
