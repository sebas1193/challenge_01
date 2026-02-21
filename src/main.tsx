import React from "react";
import ReactDOM from "react-dom/client";
import Loader from "../components/loader";
import ListContacts from "../components/list_contacts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <h1>Challenge 01</h1>
      <Loader />
      <img src="/img1.jpg" alt="imagen principal" width={200} />
      <ListContacts />
    </div>
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => console.log("Service Worker registrado"))
      .catch((err) => console.log("Error:", err));
  });
}