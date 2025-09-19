// pages/api/device.js
export default function handler(req, res) {
    const device = {
        "device_id": "1a008b775b6b5398",
        "username": "rahul",
        "password": "123",
        "expirydate": "30-10-2025",
        "Allowoffline": true
    };

    res.status(200).json(device);
}
