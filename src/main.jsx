import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Orders from "./Orders.jsx";
import { Provider } from "react-redux";
import data from "./data";
import { saveState } from "./localstorage";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Kitchens from "./Kitchens.jsx";
import Cashiers from "./Cashiers.jsx";
import store from "./app/store";
import VisibleReceipt from "./components/VisibleReceipt.jsx";

data.forEach((item) =>
  store.dispatch({
    type: "ADD_LISTING",
    item: item,
  })
);

store.subscribe(() =>
  saveState("shoppingCart", store.getState()["shoppingCart"])
);

store.subscribe(() => saveState("orders", store.getState()["orders"]));

const persistor = persistStore(store);

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App itemListing={store.getState()["itemListing"]} />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/dapur",
    element: <Kitchens />,
  },
  {
    path: "/kasir",
    element: <Cashiers />,
  },
  {
    path: "/receipt/:id",
    element: <VisibleReceipt />,
  },
]);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
registerServiceWorker();
