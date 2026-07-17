import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <main className="bg-gray-300 h-screen w-screen overflow-x-hidden ">
        <Navbar />
        <main>
          <aside className="w-1/2">
            <Form/>
           </aside>
          <div>
            <h3></h3>
            <p></p>
          </div>
        </main>
      </main>
    </>
  );
};

export default App;
