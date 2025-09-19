// pages/index.js
export default function Home() {
    return (
        <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
            <h1>Device API</h1>
            <p>Your API is running!</p>
            <p>
                <strong>API Endpoint:</strong> <br />
                <code>/api/device</code>
            </p>
            <p>
                <a href="/api/device" style={{ color: '#0070f3', textDecoration: 'none' }}>
                    Click here to test your API
                </a>
            </p>
        </div>
    );
}