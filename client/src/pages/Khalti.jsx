import React, { useState } from "react";

function Khalti() {
    const [amount] = useState(1000);

    const handleKhaltiPayment = () => {
        const config = {
            publicKey: "test_public_key_b790acb487f947e18198e1d9abfad599",
            productIdentity: "1234567890",
            productName: "Dragon",
            productUrl: "http://gameofthrones.wikia.com/wiki/Dragons",
            paymentPreference: [
                "KHALTI",
                "EBANKING",
                "MOBILE_BANKING",
                "CONNECT_IPS",
                "SCT",
            ],
            eventHandler: {
                onSuccess(payload) {
                    console.log(payload);
                },
                onError(error) {
                    console.log(error);
                },
                onClose() {
                    console.log("widget is closing");
                },
            },
        };

        const checkout = new window.KhaltiCheckout(config);
        checkout.show({ amount });
    };

    return (
        <div>

                <div className="form-group">
                    <label htmlFor="paymentMethod">Pay:</label>
                </div>

                <button type="button" onClick={handleKhaltiPayment}>
                    Pay with Khalti
                </button>

        </div>
    );
}

export default Khalti;
