import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import CryptoJS from 'crypto-js';

interface QRCodeComponentProps {
  address: string;
  contractAddress: string;
  tokenId: string;
  selectedTicketId: string;
}

const getDynamicValue = () => {
  return 'dynamic_value';
};

const QRCodeComponent: React.FC<QRCodeComponentProps> = ({ address, contractAddress, tokenId, selectedTicketId }) => {
  const [hash, setHash] = useState('');

  const updateQRCode = async () => {
    const dynamicValue = getDynamicValue();
    const combinedValue = `${dynamicValue}-${address}-${contractAddress}-${tokenId}-${selectedTicketId}`;
    const hashValue = CryptoJS.AES.encrypt(combinedValue, process.env.NEXT_PUBLIC_SCANNER_SECRET ?? '').toString();
    setHash(hashValue);
  };

  useEffect(() => {
    updateQRCode();
  }, [address, contractAddress, tokenId, selectedTicketId]);

  return (
    <div className="relative w-64 h-64 p-3 rounded-3xl bg-gradient-to-br to-[#E24DEB] via-[#7A65FD] from-[#0D80FF]">
      <div className="absolute inset-0 rounded-3xl" />
      <div className="relative h-full w-full flex items-center justify-center p-6 bg-white rounded-2xl">
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={hash}
          bgColor="#FFFFFF"
        />
      </div>
    </div>
  );
};

export default QRCodeComponent;