import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addUser, fetchUsers } from '../userApi';
// import { addUser, fetchUsers } from '../userApi';
interface User {
   id: number,
   name: string,
   email: string,
}

interface userStateInterface {
    users: User[],
    loading: boolean,
    error: string | null
}

const initialState: userStateInterface = {
    users:[],
    loading: false,
    error: null,
}

export const fetchUserAsync = createAsyncThunk (
    'user/fetchUser', //Name of the action
    async () => {
        const user = await fetchUsers();
        return user; // Return the data (when it passed to fullfilled case)
    }
)

export const addUserAsync = createAsyncThunk (
    'user/addUser',
    async(user: {name: string; email: string}) =>{
        const newUser = await addUser(user);
        return newUser;
    }
)
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserAsync.pending,(state) => {
          state.loading = true;
          state.error = null; //Clear previous error
        });
        builder.addCase(fetchUserAsync.fulfilled,(state, action) => {
           state.users = action.payload;
           state.loading = false;
        });
        builder.addCase(fetchUserAsync.rejected,(state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch users ';
         });
         builder.addCase(addUserAsync.pending,(state,action) => {
           state.loading=true;
           state.error=null;
         });
         builder.addCase(addUserAsync.fulfilled,(state,action)=> {
            state.users.push(action.payload);
            state.loading = false;
         });
         builder.addCase(addUserAsync.rejected,(state,action) => {
            state.loading = false;
            state.error = action.error.message || 'failed to add User';
         });
    }
})

export default userSlice.reducer;