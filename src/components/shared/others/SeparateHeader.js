import React from "react";

function SeparateHeaderComponent({ headerName }) {
    return (
        <>
            <div className="row my-4">
                <div className="col-md-12">
                    <div className="separator">
                        <div className="line"></div>
                        <h4>{headerName}</h4>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SeparateHeaderComponent;
