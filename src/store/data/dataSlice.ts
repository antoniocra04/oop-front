import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store.ts';

interface DataState {
	objectList: object[];
	activeTab: string;
}

const initialState: DataState = {
	objectList: [],
	activeTab: 'Items',
};

export const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		setObjects: (state, action: PayloadAction<object[]>) => {
			state.objectList = action.payload;
		},
		setActiveTab: (state, action: PayloadAction<string>) => {
			state.activeTab = action.payload;
		},
	},
});

export const { setObjects, setActiveTab } = dataSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.data;

export default dataSlice.reducer;
