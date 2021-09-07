import { CLEAR_CART, REMOVE_ITEM, CHANGE_AMOUNT, GET_TOTALS } from "./actions"


const reducer = (state, action) => {

    if(action.type === CLEAR_CART) {
        return { ...state, cart: [] }
    }

    if(action.type === REMOVE_ITEM) {
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) }
    }

    if(action.type === CHANGE_AMOUNT) {
        const { id, type } = action.payload
        const newCart = state.cart.map(item => {
            if(item.id === id) {
                if(type === 'increase') {
                    return { ...item, amount: item.amount + 1 }
                }
                if(type === 'decrease') {
                    return { ...item, amount: item.amount - 1 }
                }
            }
            return item
        })
        return { ...state, cart: newCart }
    }

    if(action.type === GET_TOTALS) {
        let { total, amount } = state.cart.reduce((cartTotal, item) => {
            const { amount, price } = item
            const itemTotal = price * amount
            cartTotal.total += itemTotal
            cartTotal.amount += amount
            return cartTotal
        }, { total: 0, amount: 0 })
        total = parseFloat(total.toFixed(2))
        return { ...state, total, amount }
    }

    return state

}


export default reducer