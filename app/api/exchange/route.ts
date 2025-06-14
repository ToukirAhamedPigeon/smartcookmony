import { NextResponse } from 'next/server';
import { getOrUpdateUsdRate } from '@/lib/exchangeRateCache';

export async function GET() {
  try {
    const rate = await getOrUpdateUsdRate();
    console.log('Rate:', rate); // Log the rate t
    return NextResponse.json({ rate });
  } catch (error) {
    console.error('Failed to get rate:', error);
    return NextResponse.json({ error: 'Exchange rate fetch failed' }, { status: 500 });
  }
}
  