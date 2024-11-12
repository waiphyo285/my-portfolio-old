import React from "react";

function MapEmbedComponent({ src }) {
    return (
        <div className="mapouter shadow-sm mt-4">
            <div className="gmap_canvas">
                <iframe
                    width="100%"
                    scrolling="no"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    className="gmap_iframe p-3"
                    src={src}
                ></iframe>
                <a href="https://kokagames.com/">FNF</a>
            </div>
        </div>
    );
}

export default MapEmbedComponent;
