import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, getPrecisionNumber, getPriceAfterDiscount, getTotalPriceOfCart } from '../utility/common'
import cartSlice from '../features/cart/cartSlice';

function ShoppingCart() {
    const arrCart=useSelector((state)=>state.cart.arrCart)
    const dispatch=useDispatch();
    function decreaseQuantity_Click(productId) {
      // Find the product in the cart using the provided productId
      let p = arrCart.find(e => e.product.id === productId);
      
      // Check if the product exists in the cart
      if (p) {
          // Dispatch the action to decrease the quantity of the item
          dispatch(cartSlice.actions.decreaseQuantityOfItem(p));
      } else {
          console.error(`Product with id ${productId} not found in the cart.`);
      }
  }
  
  function increaseQuantity_Click(productId) {
      // Find the product in the cart using the provided productId
      let p = arrCart.find(e => e.product.id === productId);
      
      // Check if the product exists in the cart
      if (p) {
          // Dispatch the action to increase the quantity of the item
          dispatch(cartSlice.actions.increaseQuantityOfItem(p));
      } else {
          console.error(`Product with id ${productId} not found in the cart.`);
      }
  }
  
  return (
    <div>
    {/* Breadcrumb Start */}
    <div className="container-fluid">
      <div className="row px-xl-5">
        <div className="col-12">
          <nav className="breadcrumb bg-light mb-30">
            <a className="breadcrumb-item text-dark" href="#">Home</a>
            <a className="breadcrumb-item text-dark" href="#">Shop</a>
            <span className="breadcrumb-item active">Shopping Cart</span>
          </nav>
        </div>
      </div>
    </div>
    {/* Breadcrumb End */}
    {/* Cart Start */}
    <div className="container-fluid">
      <div className="row px-xl-5">
        <div className="col-lg-8 table-responsive mb-5">
          <table className="table table-light table-borderless table-hover text-center mb-0">
            <thead className="thead-dark">
              <tr>
                <th>Products</th>
                <th>Discounted Price</th>
                <th>Actual Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="align-middle">
             {arrCart.map(e=>(
                 <tr>
                 <td className="align-middle"><img src={e.product.thumbnail} alt style={{"width":"50px"}}/> {e.product.title}</td>
                 <td className="align-middle">${getPriceAfterDiscount(e.product.price,e.product.discountPercentage)}</td>
                 <td className="align-middle danger">$<del>{e.product.price}</del></td>
                 <td className="align-middle">
                   <div className="input-group quantity mx-auto" style={{"width":"100px"}}>
                     <div className="input-group-btn">
                       <button onClick={() => decreaseQuantity_Click(e.product.id)} className="btn btn-sm btn-primary btn-minus">
                         <i className="fa fa-minus" />
                       </button>
                     </div>
                     <input type="text" className="form-control form-control-sm bg-secondary border-0 text-center" value={e.quantity} />
                     <div className="input-group-btn">
                       <button onClick={() => increaseQuantity_Click(e.product.id)} className="btn btn-sm btn-primary btn-plus">
                         <i className="fa fa-plus" />
                       </button>
                     </div>
                   </div>
                 </td>
                 <td className="align-middle">{getPriceAfterDiscount(e.product.price,e.product.discountPercentage)*e.quantity}</td>
                 <td className="align-middle"><button className="btn btn-sm btn-danger"><i className="fa fa-times" /></button></td>
               </tr>
             ))}
              
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
          <form className="mb-30" action>
            <div className="input-group">
              <input type="text" className="form-control border-0 p-4" placeholder="Coupon Code" />
              <div className="input-group-append">
                <button className="btn btn-primary">Apply Coupon</button>
              </div>
            </div>
          </form>
          <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Cart Summary</span></h5>
          <div className="bg-light p-30 mb-5">
            <div className="border-bottom pb-2">
              <div className="d-flex justify-content-between mb-3">
                <h6>Subtotal</h6>
                <h6>${getTotalPriceOfCart(arrCart)}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Shipping</h6>
                <h6 className="font-weight-medium">$10</h6>
              </div>
            </div>
            <div className="pt-2">
              <div className="d-flex justify-content-between mt-2">
                <h5>Total</h5>
                <h5>$getPr {getPrecisionNumber((parseFloat(getTotalPriceOfCart(arrCart))+10.0))}</h5>
              </div>
              <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Cart End */}
  </div>
  )
}

export default ShoppingCart