import React from 'react'
import { productsType } from '../data/productsData'
import centsToDollars from '../utils';

const Payment = (props: { products: productsType[] }) => {
    let costWithoutTax = 0;
    let tax = 0;
    let total = 0;
    function getItemPriceList() {
        return props.products.map(item => {
            costWithoutTax += item.priceCents
            tax = costWithoutTax / 10
            total = costWithoutTax + costWithoutTax / 10
            return (
                <div key={item.id} className='payment-params'>
                    <p>{item.name}:</p>
                    <span>${centsToDollars(item.priceCents)}</span>
                </div>
            )
        })
    }
    return (
        <>
            <h3>Items({props.products.length})</h3>
            {getItemPriceList()}
            <hr />
            <div className='payment-params'>
                <p>Total cost without Tax:</p>
                <span>${centsToDollars(costWithoutTax)}</span>
            </div>
            <div className='payment-params'>
                <p>Tax:</p>
                <span>${centsToDollars(tax)}</span>
            </div>
            <hr />
            <div className='payment-params'>
                <p>Total:</p>
                <span>${centsToDollars(total)}</span>
            </div>
        </>
    )
}

export default Payment
