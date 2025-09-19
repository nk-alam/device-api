// pages/api/device.js
export default function handler(req, res) {
    const devices = [
        {
            "device_id": "18b33d41e5556451",
            "username": "rahul",
            "password": "123",
            "expirydate": "20-10-2025",
            "Allowoffline": true
        },
        {
            "device_id": "18b33d41e5556451",
            "username": "user53",
            "password": "53",
            "expirydate": "20-09-2025",
            "Allowoffline": true
        }
    ];

    res.status(200).json(devices);
}
