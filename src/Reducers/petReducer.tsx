// store/slices/petsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../Utils/constants/index.tsx';

const fetchPetsApi = `${BASE_URL}pets`;
const fetchCustomersApi = `${BASE_URL}customers`;
const fetchMorePetsApi = `${BASE_URL}pets?type=more`;

export const fetchPets = createAsyncThunk('pets/fetchPets', async () => {
  const response = await axios.get(fetchPetsApi);
  return response.data;
});

export const fetchCustomers = createAsyncThunk("pets/fetchCustomers", async () => {
  const response = await axios.get(fetchCustomersApi);
  return response.data;
});

export const fetchMorePets = createAsyncThunk("pets/fetchMorePets", async () => {
  const response = await axios.get(fetchMorePetsApi);
  return response.data;
});
interface Pet {
  image: string;
  name: string;
  sku: string;
  breed: string;
  gender: 'Male' | 'Female';
  age: string;
  size: 'Small' | 'Medium' | 'Large' | 'Extra Large';
  vaccinated: boolean;
  additional_info: string;
  price: string;
}
  
interface Customer {
  id: number;
  customer_image: string;
}

interface PetState {
  pets: Pet[];
  morePets: Pet[];
  customers: Customer[];
  petsStatus: "idle" | "loading" | "succeeded" | "failed"; // Separate status for pets
  morePetsStatus: "idle" | "loading" | "succeeded" | "failed"; // Separate status for more pets
  customersStatus: "idle" | "loading" | "succeeded" | "failed"; // Separate status for customers
  error: string | null;
}

// Initial state
const initialState: PetState = {
  pets: [],
  morePets: [],
  customers: [],
  petsStatus: "idle",
  morePetsStatus: "idle",
  customersStatus: "idle",
  error: null,
};


const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPets.pending, (state) => {
        state.petsStatus = "loading";
      })
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.petsStatus = "succeeded";
        state.pets = action.payload;
      })
      .addCase(fetchPets.rejected, (state, action) => {
        state.petsStatus = "failed";
        state.error = action.error.message || "Failed to fetch pets";
      })
      .addCase(fetchMorePets.pending, (state) => {
        state.morePetsStatus = "loading";
      })
      .addCase(fetchMorePets.fulfilled, (state, action) => {
        state.morePetsStatus = "succeeded";
        state.morePets = action.payload;
      })
      .addCase(fetchMorePets.rejected, (state, action) => {
        state.morePetsStatus = "failed";
        state.error = action.error.message || "Failed to fetch more pets";
      })
      .addCase(fetchCustomers.pending, (state) => {
        state.customersStatus = "loading";
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.customersStatus = "succeeded";
        state.customers = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.customersStatus = "failed";
        state.error = action.error.message || "Failed to fetch customers";
      });
  },
});


export default petsSlice.reducer;
