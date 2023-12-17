import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import api from '../Helpers/AxiosConfig'
import Invoicecalc from './Invoicecalc'
import './invoicecal2.css'

const Invoicecal2 = () => {
    const router = useNavigate();
    const [viewInVoiceData, setviewInVoiceData] = useState([]);


    useEffect(() => {
        async function getinvoicedata() {
            try {
                const { data } = await api.get('/test/get-all-invoice-data');

                if (data.success) {
                    setviewInVoiceData(data.invoice)
                }
            } catch (error) {
                toast.error(error.data.message)
            }
        }
        getinvoicedata()
    })


    console.log(viewInVoiceData, "...................")

    const addRows = (data) => {
        const totalStudents = viewInVoiceData.length;
        data.id = totalStudents + 1;
        const updatedStudentData = [...viewInVoiceData];
        updatedStudentData.push(data);
        setviewInVoiceData(updatedStudentData);
    };

    return (
        <div>

            <Invoicecalc func={addRows} />
            <table className="table table-stripped viewinvoicedata" style={{ margin: "auto", marginTop: "30px" }}>
                <thead>
                    <tr>
                        <th className='viewinvoicedata'>Quantity</th>
                        <th className='viewinvoicedata'>Cost Price</th>
                        <th className='viewinvoicedata'>Margin %</th>
                        <th className='viewinvoicedata'>Margin</th>
                        <th className='viewinvoicedata'>Sales Price</th>
                        <th className='viewinvoicedata'>Total Sales</th>
                        <th className='viewinvoicedata'>Discount %</th>
                        <th className='viewinvoicedata'>Discount </th>
                        <th className='viewinvoicedata'>Tax %</th>
                        <th className='viewinvoicedata'>Tax</th>
                        <th className='viewinvoicedata'>Final Sales Price</th>

                    </tr>
                </thead>

                <tbody>
                    {viewInVoiceData.map((item) => (
                        <tr>
                            <td className='viewinvoicedata'>{item.quantity}</td>
                            <td className='viewinvoicedata'>{item.cost_price}</td>
                            <td className='viewinvoicedata'>{item.margin}</td>
                            <td className='viewinvoicedata'>{item.cost_price * item.quantity * (item.margin / 100)}</td>
                            <td className='viewinvoicedata'>{(item.cost_price) + (item.cost_price * item.quantity * (item.margin / 100))}</td>
                            <td className='viewinvoicedata'>{(item.quantity) * ((item.cost_price) + (item.cost_price * item.quantity * (item.margin / 100)))}</td>
                            <td className='viewinvoicedata'>{item.discount}</td>
                            <td className='viewinvoicedata'>{((item.quantity) * ((item.cost_price) + (item.cost_price * item.quantity * (item.margin / 100)))) * item.discount / 100}</td>
                            <td className='viewinvoicedata'>{item.tax}</td>
                            <td className='viewinvoicedata'>{((item.quantity) * ((item.cost_price) + (item.cost_price * item.quantity * (item.margin / 100)))) * (item.tax / 100)}</td>
                            <td className='viewinvoicedata'>{((item.quantity) * ((item.cost_price) + (item.cost_price * item.quantity * (item.margin / 100)))) - (((item.quantity) * ((item.cost_price) + (item.cost_price * item.quantity * (item.margin / 100)))) * item.discount / 100) + (((item.quantity) * ((item.cost_price) + (item.cost_price * item.quantity * (item.margin / 100)))) * (item.tax / 100))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Invoicecal2

