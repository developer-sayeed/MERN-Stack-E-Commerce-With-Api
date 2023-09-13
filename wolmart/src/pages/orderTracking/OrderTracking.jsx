// OrderTracking.js
import React, { useState } from "react";
import "./OrderTracking.css";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");

  const trackOrder = () => {
    // Simulate order tracking data for demonstration
    setOrderStatus("on Going");
    setDeliveryDate("August 20, 2023");
    setTrackingNumber("ABC123456789");
  };

  return (
    <div className="container">
      <header>
        <h1> Tracking </h1>
      </header>
      <div className="tracking-form">
        <input
          type="text"
          className="tracking-input"
          placeholder="Enter Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <button className="tracking-button" onClick={trackOrder}>
          Track Order
        </button>
      </div>
      {orderStatus && (
        <div className="tracking-results">
          <h2>Order Status: {orderStatus}</h2>
          <p>Estimated Delivery Date: {deliveryDate}</p>
          <p>Tracking Number: {trackingNumber}</p>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
