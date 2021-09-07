import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import { CLEAR_CART, GET_TOTALS } from '../actions'


const CartContainer = ({ cart = [], total, dispatch }) => {

    useEffect(() => {
        dispatch({ type: GET_TOTALS })
    }, [cart, dispatch])

    if(cart.length === 0) {
        return (
            <main className="cart-container">
                <h2 className="main-title">Your Bag</h2>
                <p className="empty-cart-text">is currently empty</p>
            </main>
        )
    }

    return (
        <main className="cart-container">
            <h2 className="main-title">Your Bag</h2>
            <section className="cart">
                {
                    cart.map(item => {
                        return <CartItem key={item.id} {...item} />
                    })
                }
            </section>
            <footer>
                <div className="total-section">
                    <h4>Total</h4>
                    <h4>${total}</h4>
                </div>
                <button 
                    className="clear-button" 
                    onClick={() => dispatch({ type: CLEAR_CART })}
                >
                    Clear Cart
                </button>
            </footer>
        </main>
    )

}


const mapStateToProps = (state) => {

    const { cart, total } = state

    return { cart, total }

}


export default connect(mapStateToProps)(CartContainer)