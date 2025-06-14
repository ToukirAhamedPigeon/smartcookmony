'use client';

import { useState } from 'react';
import currency from 'currency.js';
import { useUsdRateOnToggle } from '@/hooks/useUsdRateOnToggle';
import { formatCurrency } from '@/lib/helper';

export default function CurrencyToggle({ amountInBDT }: { amountInBDT: number }) {
  const [currencyType, setCurrencyType] = useState<'BDT' | 'USD'>('BDT');
  const { rate, fetchUsdRate } = useUsdRateOnToggle();
  const [loading, setLoading] = useState(false);
  const [usdAmount, setUsdAmount] = useState<number | null>(null);

  const toggleCurrency = async () => {
    if (currencyType === 'BDT') {
      setLoading(true);
      const currentRate = await fetchUsdRate();
      setUsdAmount(amountInBDT / (currentRate || 0));
      setCurrencyType('USD');
      setLoading(false);
    } else {
      setCurrencyType('BDT');
    }
  };

  const display = currencyType === 'BDT'
  ? formatCurrency({ amount: amountInBDT, currency: 'BDT', locale: 'bn-BD' })
  : usdAmount !== null
    ? formatCurrency({ amount: usdAmount, currency: 'USD', locale: 'en-US' })
    : 'Loading...';

  return (
    <div>
      <div>Price: {loading ? 'Loading...' : display}</div>
      <button onClick={toggleCurrency} disabled={loading}>
        Switch to {currencyType === 'BDT' ? 'USD' : 'BDT'}
      </button>
    </div>
  );
}
