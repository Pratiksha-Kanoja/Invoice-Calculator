import React, { useState } from 'react'
import api from '../Helpers/AxiosConfig'
import toast from 'react-hot-toast'

const Invoicecalc = () => {

    const [invoice, setInvoice] = useState({ quantity: "", cost_price: "", margin: "", discount: "", tax: "" })

    const handleChange = (event) => {
        setInvoice({ ...invoice, [event.target.name]: event.target.value })
    }

    const handlesubmit = async (event) => {
        event.preventDefault();
        if (invoice.quantity > 0 && invoice.cost_price > 0 && invoice.margin > 0 && invoice.discount > 0 && invoice.tax > 0) {
            try {
                const { data } = await api.post('/test/add-invoice-data', { quantity: invoice.quantity, cost_price: invoice.cost_price, margin: invoice.margin, discount: invoice.discount, tax: invoice.tax })
                if (data.success) {
                    toast.success(data.message)
                    setInvoice({ quantity: "", cost_price: "", margin: "", discount: "", tax: "" })
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            toast.error("All fields are mandtory and price must be greater than 0.")
        }
    }


    

    return (
        <div className='invoice_container'>
            <form onSubmit={handlesubmit}>
                <h1>Invoice Calculator</h1> <br /> <br />
                <label htmlFor="quantity">Quantity :</label>
                <input type="number" name='quantity' onChange={handleChange} value={invoice.quantity}/> <br /> <br />

                <label htmlFor="cost_price">Cost price :</label>
                <input type="number" name='cost_price' onChange={handleChange} value={invoice.cost_price}/> <br /> <br />

                <label htmlFor="margin" >Margin % :</label>
                <input type="number" name='margin' onChange={handleChange} value={invoice.margin}/> <br /> <br />

                <label htmlFor="discount">Discount % :</label>
                <input type="number" name='discount' onChange={handleChange} value={invoice.discount}/> <br /> <br />

                <label htmlFor="tax">Tax % :</label>
                <input type="number" name='tax' onChange={handleChange} value={invoice.tax}/> <br /> <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Invoicecalc

