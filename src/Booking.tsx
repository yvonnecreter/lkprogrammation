import React from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";


function Booking() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                "styles": {
                    "branding": { "brandColor": "#B5121B" }
                },
                "hideEventTypeDetails": true,
                "layout": "month_view"
            });
        })();
    }, [])
    return (
        <div className="body">
            <img src="images/bg-4.jpg" alt="Interior of Car" className="imageHeader" />
            <div className="contactContainer">
                <div className="contactPanel">
                    <div style={{ height: "120px" }} />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                    <br />
                    <a className="contactDetails" href="tel: 581-745-8680">
                        <span className="material-symbols-outlined">
                            call
                        </span>
                        581-745-8680
                    </a>
                    <a className="contactDetails" href="https://maps.app.goo.gl/nw9j3ThHh2UnC5sM8">
                        <span className="material-symbols-outlined">
                            location_on
                        </span>
                        60 Rue de Lorraine, <br />Golbey
                    </a>
                    <br />

                </div>

                <div className="contactPanel">
                    <Cal
                        calLink="yvonnecreter/booking"
                        style={{
                            width: "100%", height: "100%",
                            overflow: "scroll",
                            margin: "60px"
                        }}
                        config={{ layout: 'month_view' }}
                    />
                </div>
            </div>
            <div style={{ height: "150px" }} />
        </div>)

}

export default Booking;