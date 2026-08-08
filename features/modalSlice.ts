import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
    stateModal: boolean;
}

const initialState: ModalState = {
    stateModal: false
};

  
export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    
    reducers: {
        dispatch_toogleModal: (state, action) => {
            state.stateModal = !state?.stateModal
        },
    }
});

export const { dispatch_toogleModal } = modalSlice.actions; // action générée automatiquement
export default modalSlice.reducer; 