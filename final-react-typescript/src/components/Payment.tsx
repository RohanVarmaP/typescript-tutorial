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
                <div>
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
            <div>
                <p>Total cost without Tax:</p>
                <span>${centsToDollars(costWithoutTax)}</span>
            </div>
            <div>
                <p>Tax:</p>
                <span>${centsToDollars(tax)}</span>
            </div>
            <div>
                <p>Total:</p>
                <span>${centsToDollars(total)}</span>
            </div>
        </>
    )
}

export default Payment
