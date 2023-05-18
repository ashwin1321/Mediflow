import myKey from "./khaltiKey";
import axios from 'axios';
// import fetch from 'fetch';

const dataa = sessionStorage.getItem('data');
console.log(dataa)

let config = {
    // replace this key with yours
    "publicKey": myKey.publicTestKey,
    "productIdentity": "1554",
    "productName": "test app",
    "productUrl": "https://127.0.0.1:5173",
    "eventHandler": {
        async onSuccess(payload) {
            // hit merchant api for initiating verfication
            // console.log(payload);

            let data = {
                token: payload.token,
                amount: payload.amount
            }

            let config = {
                headers: {
                    Authorization: myKey.secretKey,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'text/plain'
                }
            }

            const response = await fetch("https://khalti.com/api/v2/payment/verify/", {
                method: 'POST',
                mode: 'no-cors',
                // caches: 'no-cache',
                withCredentials: true,
                credentials: 'same-origin',
                body: JSON.stringify(data),
                headers: config.headers
            })
            if (response.status === 0) {

                // alert("Payment Successful")
                console.log(dataa)
                const parsedData = JSON.parse(dataa);
                axios
                    .post("http://localhost:5000/appointments/add-appointment", parsedData)
                    .then((res) => {
                        console.log(res.data)
                        if (res.data.booked) {
                            alert("Appointment booked successfully");
                            window.location.reload();
                        } else {
                            alert(res.data.error);
                        }
                    })
                    .catch((err) => {
                        alert("Something went wrong");
                    });
                console.log('success');
            } else {
                console.log('failed');
                alert("Payment Failed")
            }
        },

        // onError handler is optional
        onError(error) {
            // handle errors
            console.log(error);
        },
        onClose() {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};


export default config;