import React from "react";

const UserCard = ({ user, index, deleteCard }) => {

    return (
        <div className="rounded-md bg-zinc-800 p-4 w-[30%]">
            <article className=" rounded-md bg-zinc-950 p-3 text-white shadow-lg">
                <div className=" w-full overflow-hidden rounded-md">
                    <img
                        src={user?.image}
                        alt="user"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="mt-3 space-y-1">
                    <h3 className="text-lg font-semibold leading-none text-zinc-100">{user.name}</h3>
                    <p className="text-sm font-semibold text-zinc-400">{user.email}</p>
                </div>

                <div className="mt-4 flex items-center gap-2">
                    <button type="button"
                        className="rounded-sm hover:cursor-pointer bg-amber-700 px-3 py-1.5 text-base font-semibold text-white">
                        Update
                    </button>
                    <button
                        onClick={() => { deleteCard(index) }}
                        type="button" className="rounded-sm bg-red-700 px-3 py-1.5 text-base font-semibold text-white">
                        Delete
                    </button>
                </div>
            </article>
        </div>

    );
};

export default UserCard;
