import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([])
console.log(users)
  return (
    <>
      <main className=" h-screen w-screen bg-black/30 text-white overflow-x-hidden">
        <Navbar setToggle={setToggle} />
        {toggle ? (
          <div className="flex  items-center gap-4">
            {
              users.map((user) => (
                <>
                  <UserCard user={user} />
                </>
              ))
            }
            
          </div>
        ) : (
          <div>
            <Form setUsers={setUsers} users={users}/>
          </div>
        )}
      </main>
    </>
  );
};

export default App;
