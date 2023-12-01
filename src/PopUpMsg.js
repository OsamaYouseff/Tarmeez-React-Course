import { useState } from "react";
import "./PopUpMsg.css";

export default function PopUpMsg({ isVisible, isError = true, children }) {
    if (isVisible) {
        return (
            <>
                <div className="popup-bg">
                    <div className="popup-container">
                        <span
                            className="msg"
                            style={{ color: isError ? "red" : "green" }}
                        >
                            {children}
                        </span>
                    </div>
                </div>
            </>
        );
    } else {
        return <></>;
    }
}
