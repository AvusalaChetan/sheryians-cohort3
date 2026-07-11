import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('users')) || []
  })

  const deleteCard = (id) => {
    let filterCards = users.filter((user, i) => i !== id);
    console.log(filterCards)
    setUsers(filterCards)
    localStorage.setItem('users',JSON.stringify(filterCards))
  }



   return (
    <>
      <main className=" h-screen w-screen bg-black/30 text-white overflow-x-hidden">
        <Navbar setToggle={setToggle} />
        {toggle ? (
          <div className="flex flex-wrap  items-center  justify-between ">
            {
              users.map((user, index) => (
                  <UserCard key={index} user={user} index={index} deleteCard={deleteCard} />
              ))
            }

          </div>
        ) : (
          <div>
            <Form setUsers={setUsers} users={users} setToggle={setToggle} />
          </div>
        )}
      </main>
    </>
  );
};

export default App;
