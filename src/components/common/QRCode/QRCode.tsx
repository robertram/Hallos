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
    <div>
      <QRCode
        size={256}
        style={{ height: 'auto', maxWidth: 'auto', width: '100%' }}
        value={hash}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default QRCodeComponent;