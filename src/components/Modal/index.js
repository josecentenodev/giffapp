import React from "react";

export default function Modal({ children, onClose }) {
    return (
        <div className="">
            <div className="">
                <button className="bg-green-400 p-1 rounded mt-5 w-full" onClick={onClose}>❎</button>
            </div>
        </div>
    );
}
