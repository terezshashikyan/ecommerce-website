import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

interface PayPalButtonProps {
  amount?: number;
  onSuccess: () => void;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ amount, onSuccess }) => {
  const paypalOptions = {
    'clientId': 'AWnQPKBKuuokhh9Rc7W0p3jjS2y04diPZ7ZPM4lPDTCXdZMaxzpG69uD05A_YSvrXXnWwbZzaLfNF9st', // Replace with your PayPal client ID
    currency: 'USD',
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount?.toFixed(2) || '', // Convert to string with 2 decimal places
                },
              },
            ],
          });
        }}
        onApprove={ async (data, actions) => {
          // Capture the funds and complete the transaction
          const order = await actions?.order?.capture()
          onSuccess();
        }
    
    }
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
