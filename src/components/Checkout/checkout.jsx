import React from 'react'
import './checkout.css'
import Hero from '../../assets/Images/banner1.png'
import { toast, ToastContainer } from 'react-toastify'
const Checkout = () => {
    return (
        <div class="mainscreen">
            <div class="checkout-card">
                <div class="leftside">
                    <img src={Hero} class="product"
                        alt="Shoes" />
                </div>
                <div class="rightside">
                    <form action=""  onSubmit={() => {
                            
                            toast.success("Payemnt Successful!, Your order has been recieved");
                        }}>
                        <p>Cardholder Name</p>
                        <input type="text" class="inputbox form-control" name="name" required />
                        <p>Card Number</p>
                        <input type="number" class="inputbox form-control" name="card_number" id="card_number" required />

                        <p>Card Type</p>
                        <select class="inputbox form-control" name="card_type" id="card_type" required>
                            <option value="">--Select a Card Type--</option>
                            <option value="Visa">Visa</option>
                            <option value="RuPay">RuPay</option>
                            <option value="MasterCard">MasterCard</option>
                        </select>
                        <div class="expcvv">

                            <p class="expcvv_text">Expiry</p>
                            <input type="date" class="inputbox form-control" name="exp_date" id="exp_date" required />

                            <p class="expcvv_text2">CVV</p>
                            <input type="password" class="inputbox form-control" name="cvv" id="cvv" required />
                        </div>
                        <p></p>
                        <button  type="submit" class="button">CheckOut</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Checkout