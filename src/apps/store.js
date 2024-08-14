import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../features/category/categorySlice";
import productSlice from "../features/products/productSlice";
import cartSlice from "../features/cart/cartSlice";
const store=configureStore({
    reducer:{
        category:categorySlice.reducer,
        product:productSlice.reducer,
        cart:cartSlice.reducer,
    }
});
export default store;