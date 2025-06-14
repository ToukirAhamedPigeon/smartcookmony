import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrencyState {
  usdRate: number | null;
  lastFetched: number | null; // timestamp (ms)
}

const initialState: CurrencyState = {
  usdRate: null,
  lastFetched: null
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setUsdRate(state, action: PayloadAction<{ rate: number; timestamp: number }>) {
      state.usdRate = action.payload.rate;
      state.lastFetched = action.payload.timestamp;
    }
  }
});

export const { setUsdRate } = currencySlice.actions;
export default currencySlice.reducer;
