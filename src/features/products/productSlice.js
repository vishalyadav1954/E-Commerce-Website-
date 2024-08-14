import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const initialStateProduct={
    loading:false,
    arrProduct:[],
    error:''    
}
// Automatically generates pending  ,fullfilment and rejected actkion types
export var fetchProduct=createAsyncThunk('product/fetchProduct',()=>{
   
   return axios.get('https://dummyjson.com/products').then((response)=>{ 
        return response.data;
    })

});
const productSlice=createSlice({
    name:'product',
    initialState:initialStateProduct,
    
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending,(state,action)=>{            
            state.loading=true;
        })
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
           debugger;
            state.loading=false;
            state.arrProduct=action.payload.products;
        })
        builder.addCase(fetchProduct.rejected,(state,action)=>{
            debugger;
            state.loading=false;
            state.error=action.payload
        })

    }
});
export default productSlice;

