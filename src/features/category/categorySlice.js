import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const initialStateCategory={
    loading:false,
    arrCategory:[],
    error:'',
    selectedCategory:'laptop'
}
// Automatically generates pending  ,fullfilment and rejected actkion types
export var fetchCategory=createAsyncThunk('category/fetchCategory',()=>{
   
   return axios.get('https://dummyjson.com/products/category-list').then((response)=>{
    debugger;
        return response.data;
    })

});
const categorySlice=createSlice({
    name:'category',
    initialState:initialStateCategory,
    reducers:{
        changeCategory:(state,action)=>{
            state.selectedCategory=action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCategory.pending,(state,action)=>{
            debugger;
            state.loading=true;
        })
        builder.addCase(fetchCategory.fulfilled,(state,action)=>{
            debugger;
            state.loading=false;
            state.arrCategory=action.payload;
        })
        builder.addCase(fetchCategory.rejected,(state,action)=>{
            debugger;
            state.loading=false;
            state.error=action.payload
        })

    }
});
export default categorySlice;

