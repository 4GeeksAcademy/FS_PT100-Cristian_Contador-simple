import React from "react";

export const Count = (props) => {
    return (
        <div className="marco">
        <div className="clock bg-dark text-white">
            <p className="fs-1">
                {props.countValue}
            </p>
        </div>
        </div>
    );
};