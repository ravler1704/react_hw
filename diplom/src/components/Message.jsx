import React from "react";

const Message = ({ type, message }) => {
    if (!message) return null;
    return (
        <p className={`'message' ${type}`}>{message}</p>
    );
};


export default Message;