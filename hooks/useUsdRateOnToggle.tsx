'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { setUsdRate } from '@/lib/currencySlice';

export function useUsdRateOnToggle() {
  const dispatch = useDispatch();
  const rate = useSelector((state: RootState) => state.currency.usdRate);

  const fetchUsdRate = async () => {
    try {
      const res = await fetch('/api/exchange');
      const data = await res.json();
      if (data.rate) {
        dispatch(setUsdRate({ rate: data.rate, timestamp: Date.now() }));
        return data.rate;
      }
    } catch (err) {
      console.error('Exchange rate fetch error:', err);
    }
    return rate; // fallback
  };

  return { rate, fetchUsdRate };
}
