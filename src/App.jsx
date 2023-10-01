import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import VisibleList from "./components/VisibleList";
import ShowNotification from "./components/Notification";

const App = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen px-24">
        <Menu />
        <ShowNotification />
        <VisibleList />
      </main>
    </>
  );
};

export default App;
