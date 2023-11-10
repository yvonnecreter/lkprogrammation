import React from "react";
import vehicles from "./vehicles.json";

//Technically both components could be put together, but I'll leave it at that for future design possiblities
function Service({ brand, model }: { brand: string; model: string }) {
    let c = false;
    for (let item of vehicles.vehicles) {
        if (item.brand === brand && item.model === model) {
            c = true;
        }
    }
    if (c) {
        return (
            <div>
                <p>Brand: {brand}</p>
                <p>Model: {model}</p>
            </div>
        );
    }
    else return (<div>Vehicle not found</div>);
}

function Brand({ brand }: { brand: string; }) {
    let c = false;
    for (let item of vehicles.vehicles) {
        if (item.brand === brand) {
            c = true;
        }
    }
    if (c) {
        return (
            <div>
                <p>Brand: {brand}</p>
            </div>
        );
    }
    else return (<div>Brand not found</div>);
}

export { Service, Brand };