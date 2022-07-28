import {getFirestore, doc, getDoc, collection, getDocs, query, where, addDoc} from 'firebase/firestore'
import React from "react";
import "./Order.css";
import Swal from "sweetalert2";



const Order = ({order, getTotal}) => {
    const db = getFirestore();
    const collectionReference = collection(db, "orders");

    const date = new Date().toLocalString + "";
    const orderList = {
        buyer: {
            name: "Ignacio Vizcay",
            email: "ignacio@hotmail.com",
            phone: 42342353294,
            address: "dsjfksdifsd"
        },
        items: order.map((element) => ({
            id: element.id,
            quantity: element.quantity,
            price: element.price,
            name: element.name,
        })),
        date: date,
        total: getTotal(),
    };
    const checkOutHandler = () => {
        addDoc(collectionReference, orderList).then((response) =>{
            console.log(response);
            Swal.fire({
                icon: "success",
                title: "Your order is confirmed",
                text: "Your order ID is " + response.id, 
            });
        });
    };
    
    return (
        <div className="all-container">
            <h2>Do you want to confirm your order?</h2>

            {order.map((element) => (
                <div className="order-item-container" key={element.id}>
                    <p>{element.name}</p>
                    <span>${element.price}</span>
                    <br/>
                    <span>Quantity: {element.quantity}</span>
                    <hr></hr>
                </div>
            ))}

            <h4> Total: ${getTotal()}</h4>

            <button onClick={checkOutHandler}> Confirm</button>
        </div>
    );
};

export default Order;