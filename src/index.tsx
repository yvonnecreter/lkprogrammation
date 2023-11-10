import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Booking from './Booking';
import Services from './Services';
import Contact from './Contact';
import TopNavBar from './TopNavBar';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';
import {
  createBrowserRouter, createRoutesFromElements,
  Route, useParams, RouterProvider
} from "react-router-dom";
import vehicles from "./vehicles.json";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} />
      <Route path="booking" element={< Booking />} />
      <Route path="contact" element={< Contact />} />
      <Route path="services" element={< Services />} />
      <Route path="service/:brand/:model" element={<Service />} />
      <Route path="service/:brand" element={<Brand />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TopNavBar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();



function Service() {
  let { brand, model } = useParams();
  let c = false;
  for (let item of vehicles.vehicles) {
    if (item.brand === brand && item.model === model) {
      c = true;
    }
  }
  if (c) {
    return (
      <div>
        <p>Brand: {brand}</p>
        <p>Model: {model}</p>
      </div>
    );
  }
  else return (<div>Vehicle not found</div>);
}

function Brand() {
  let { brand } = useParams();
  let c = false;
  for (let item of vehicles.vehicles) {
    if (item.brand === brand) {
      c = true;
    }
  }
  if (c) {
    return (
      <div>
        <p>Brand: {brand}</p>
      </div>
    );
  }
  else return (<div>Brand not found</div>);
}