type ExchangeRate = {
    rate: number;
    lastUpdated: number;
  };
  
  let cachedRate: ExchangeRate | null = null;
  
  const SIX_HOURS = 6 *60 * 60 * 1000;
  
  export async function getOrUpdateUsdRate(): Promise<number> {
    const now = Date.now();
  
    const shouldRefresh = !cachedRate || now - cachedRate.lastUpdated > SIX_HOURS;
  
    if (shouldRefresh) {
      console.log('📦 Fetching new USD rate...');
      const res = await fetch('https://v6.exchangerate-api.com/v6/d96ccb9b65c961d11dff5e7b/latest/USD');
      const data = await res.json();
  
      const rate = data.conversion_rates?.BDT;
      console.log('📦 New USD rate:', rate);
      if (!rate) throw new Error('Invalid exchange rate response');
  
      cachedRate = {
        rate,
        lastUpdated: now
      };
    }
  
    return cachedRate!.rate;
  }
  