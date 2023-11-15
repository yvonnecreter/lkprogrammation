import React from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";


function Contact() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                "styles": {
                    "branding": { "brandColor": "#B5121B" }
                },
                "hideEventTypeDetails": false,
                "layout": "month_view"
            });
        })();
    }, [])
    return (
        <div className="body">
            <img src="images/bg-4.jpg" alt="Interior of Car" className="imageHeader" />
            <div className="contactContainer" style={{ margin: "200px 0px 300px 0px" }}>
                <h2 style={{ textAlign: "center" }}>Contactez-Nous</h2>
                <div className="contactPanel">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                    <br />
                    <a className="contactDetails" href="tel: 0771072309">
                        <span className="material-symbols-outlined">
                            call
                        </span>
                        0771072309
                    </a>
                    <a className="contactDetails" href="mailto: contact@lkreprogrammation.fr">
                        <span className="material-symbols-outlined">
                            mail
                        </span>
                        contact@lkreprogrammation.fr
                    </a>
                    <a className="contactDetails" href="https://www.facebook.com/profile.php?id=61550872804595">
                        <span className="material-symbols-outlined">
                            public
                        </span>
                        Facebook
                    </a>
                </div>
            </div>
        </div>)

}

export default Contact;