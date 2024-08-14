export async function  getAllCategoryFromApi(){
   let url='https://dummyjson.com/products/category-list';
   let resp=await fetch(url,{method:'GET'});
   let data=await resp.json();
   return data;

}
export async function  getAllProductsFromApi(){
   let url='https://dummyjson.com/products';
   let resp=await fetch(url,{method:'GET'});
   let data=await resp.json();
   return data;

}
