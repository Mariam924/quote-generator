import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRandomQuote = createAsyncThunk("quote/fetchRandom",
  async function () {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return data;
  }
);

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: "",
  },
  
  extraReducers: (builder) => {
    builder.addCase(fetchRandomQuote.fulfilled, (initState, action) => {
      initState.quote = action.payload;
      })
     
  }
});

export default quoteSlice.reducer;