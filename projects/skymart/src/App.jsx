import React from "react";
import Navbar from "./components/Navbar";
import AppRouter from "./routers/AppRouter";

const App = () => {
  return (
    <main className="bg-black w-screen min-h-screen text-white">
      <AppRouter/>
    </main>
  );
};

export default App;
