import { MoonPayBuyWidget } from '@moonpay/moonpay-react';

export default function Home() {
  return (
    <>
      {/* ... autres composants */}
      <MoonPayBuyWidget
        variant="overlay"
        baseCurrencyCode="eur"
        baseCurrencyAmount="50"
        defaultCurrencyCode="eth"
        onLogin={async () => console.log("Customer logged in!")}
        visible
      />
      {/* ... autres composants */}
    </>
  );
}
