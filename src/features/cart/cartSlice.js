import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

// Automatically generates pending  ,fullfilment and rejected actkion types
const initialStateCart={arrCart:[]}
const cartSlice=createSlice({
    name:'cart',
    initialState:initialStateCart,
    reducers:{
        addItemToCart:(state,action)=>{
            debugger;
           let cartObject=action.payload;
          let obj= JSON.parse(JSON.stringify(state.arrCart)).find(e=>e.product.id==cartObject.product.id);
          if(obj){
            obj.quantity++;
          }
          else{
            state.arrCart.push(cartObject);
          }
        },
        removeItemFromCart:(state,action)=>{
          let cartObject=action.payload;
          let index= JSON.parse(JSON.stringify(state.arrCart)).findIndex(e=>e.product.id==cartObject.product.id);
          if(index!=-1){
            state.arrCart.splice(index,1);

          }
           
        },
        increaseQuantityOfItem:(state,action)=>{
          let cartObject=action.payload;
          let obj= JSON.parse(JSON.stringify(state.arrCart)).find(e=>e.product.id==cartObject.product.id);
          if(obj){
            obj.quantity++;
          }
           
        },
        decreaseQuantityOfItem:(state,action)=>{
          let cartObject=action.payload;
          let obj= JSON.parse(JSON.stringify(state.arrCart)).find(e=>e.product.id==cartObject.product.id);
          let index= JSON.parse(JSON.stringify(state.arrCart)).findIndex(e=>e.product.id==cartObject.product.id);
          if(obj){
            if(obj.quantity>=1){
            obj.quantity--;
          }
          
          else{
            state.arrCart.splice(index,1);
          }
           
        }
      }
    },
  
    
});
export default cartSlice;

