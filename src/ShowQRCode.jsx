import {useEffect, useState} from "react";
import QRCode from "qrcode";

function ShowQRCode(){
    const [qrCodeUrl, setQrCodeUrl] = useState('');
    const [loading, setLoading] = useState(true);
    let auth = sessionStorage.getItem('auth');

    // Function to handle QR code generation
    const generateQRCode = async (secretKey) => {
        try {
            const url = await QRCode.toDataURL(secretKey); // Generate QR code URL asynchronously
            setQrCodeUrl(url); // Update the QR code URL
            setLoading(false); // Set loading to false once done
        } catch (error) {
            console.error('Error generating QR code', error);
            setLoading(false); // Handle error case
        }
    };

    useEffect(() => {
        if (auth) {
            setLoading(true); // Set loading to true before generating new QR code
            generateQRCode(auth); // Generate the QR code when the component mounts or secretKey changes
        }
    }, [auth]); // Re-run when the `secretKey` prop changes

    return (
        <div>
            {loading ? (
                <p>Loading QR Code...</p> // Show loading message while generating the QR code
            ) : (
                <>
                    <h3>Generated QR Code:</h3>
                    {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
                </>
            )}
        </div>
    );
}

export default ShowQRCode;