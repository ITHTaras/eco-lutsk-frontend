import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const url = "https://3d0c-31-128-76-162.eu.ngrok.io";

// Get categories
export const getCategories = createAsyncThunk(
  "categories/get",
  async (_, thunkAPI) => {
    try {
      return await fetch(url, {
        method: "GET",
        //Request Type
      })
        .then((response) => response.json())
        //If response is in json then in success
        .then((responseJson) => {
          //Success
          //console.log(responseJson);
          return responseJson;
        })
        //If response is not in json then in error
        .catch((error) => {
          //Error
          console.error(error);
        });
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  categories: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    resetErrors: (state) => {
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.categories = payload;
    },
    [getCategories.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.message = payload;
    },
  },
});

export default categorySlice.reducer;
export const { resetErrors } = categorySlice.actions;
