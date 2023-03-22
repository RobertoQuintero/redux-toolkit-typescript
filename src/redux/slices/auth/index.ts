import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type AxiosError, type AxiosResponse } from 'axios';
import { axiosInstance } from '../../../utils/axios';
import { type Thunk } from '../../store';

export interface Login {
  email: string;
  password: string;
}

export interface AuthState {
  accessToken: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  isLoading: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setAccessToken, setIsLoading } = authSlice.actions;

export const login =
  (data: Login): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const response: AxiosResponse = await axiosInstance.post('/login', data);
      dispatch(setAccessToken(response.data.token));
      return response;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };
