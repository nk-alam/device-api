// pages/api/device.js
export default function handler(req, res) {
    const device = {
        "device_id": "9d3726a1629a4e63",
        "username": "rahul",
        "password": "123",
        "expirydate": "30-10-2025",
        "Allowoffline": true
    };

    res.status(200).json(device);
}