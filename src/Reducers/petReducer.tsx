// store/slices/petsSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../Utils/constants/index.tsx";

const fetchPetsApi = `${BASE_URL}pets`;

export const fetchPets = createAsyncThunk("pets/fetchPets", async () => {
  const response = await axios.get(fetchPetsApi);
  return response.data;
});

interface Pet {
    image: string;
    name: string;
    sku: string;
    breed: string;
    gender: "Male" | "Female";
    age: string;
    size: "Small" | "Medium" | "Large" | "Extra Large";
    vaccinated: boolean;
    additional_info: string;
    price: string;
}
  

interface PetState {
  pets: Pet[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PetState = {
  pets: [],
  status: "idle",
  error: null,
};

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pets = action.payload;
      })
      .addCase(fetchPets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch pets";
      });
  },
});

export default petsSlice.reducer;
