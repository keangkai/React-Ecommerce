import axios from "axios"
import { logout } from './userAction'
import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL } from "../constants/orderConstants"

export const createOrder = (order) => async(dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `keangkai ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(`/orders`, order, config)

        dispatch({
                type: ORDER_CREATE_SUCCESS,
                payload: data,
            })
            // dispatch({
            //     type: CART_CLEAR_ITEMS,
            //     payload: data,
            // })
        localStorage.removeItem('cartItems')
    } catch (error) {
        const message =
            error.response && error.response.data.message ?
            error.response.data.message :
            error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: message,
        })
    }
}

export const getOrderDetails = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_DETAILS_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `keangkai ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`/orders/${id}`, config)

        dispatch({
                type: ORDER_DETAILS_SUCCESS,
                payload: data,
            })
            // dispatch({
            //     type: CART_CLEAR_ITEMS,
            //     payload: data,
            // })
        localStorage.removeItem('cartItems')
    } catch (error) {
        const message =
            error.response && error.response.data.message ?
            error.response.data.message :
            error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: message,
        })
    }
}