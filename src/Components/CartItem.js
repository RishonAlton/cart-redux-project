import React from 'react'
import { FaChevronUp, FaChevronDown } from "react-icons/fa"
import { connect } from 'react-redux'
import { REMOVE_ITEM, CHANGE_AMOUNT } from '../actions'


const CartItem = ({ id, title, price, image, amount, remove, changeAmount }) => {

    return (
        <article className="cart-item">
            <img src={image} alt="" className="item-image" />
            <div className="item-info">
                <h4 className="item-name">{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button 
                    className="remove-button"
                    onClick={remove}
                >
                    remove
                </button>
            </div>
            <div className="item-amount-container">
                <button 
                    className="change-amount-button increase-amount"
                    onClick={() => changeAmount('increase')}
                >
                    <FaChevronUp />
                </button>
                <p className="item-amount">{amount}</p>
                <button 
                    className="change-amount-button decrease-amount"
                    onClick={() => {
                        if(amount === 1) {
                            remove()
                        }
                        else {
                            changeAmount('decrease')
                        }
                    }}
                >
                    <FaChevronDown />
                </button>
            </div>
        </article>
    )

}


const mapDispatchToProps = (dispatch, ownProps) => {

    const { id } = ownProps

    return {
        remove: () => dispatch({ type: REMOVE_ITEM, payload: {id} }),
        changeAmount: (type) => dispatch({ type: CHANGE_AMOUNT, payload: {id, type} })
    }

}


export default connect(null, mapDispatchToProps)(CartItem)  