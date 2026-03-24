import axios from "axios";
import {useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "../orders/OrdersPage.css";
import { OrdersGrid } from "./OrdersGrid";
export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders= async()=>{
      const response = await axios.get("/api/orders?expand=products")
       setOrders(response.data);
    }
    fetchOrders();
   
  }, []);
  return (
    <>
      <title>Orders</title>
      <link rel="icon" href="/orders-favicon.png" type="image/svg+xml" />
      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>
      <OrdersGrid  orders={orders}/>

        
      </div>
    </>
  );
}
