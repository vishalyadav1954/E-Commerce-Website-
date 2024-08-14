import React from 'react'
import { getPriceAfterDiscount } from '../utility/common'
import { useDispatch } from 'react-redux';
import cartSlice from '../features/cart/cartSlice';


function FeaturedSingleProduct(props) {
  const dispatch=useDispatch();
  function addTocart_Click(e){
dispatch(cartSlice.actions.addItemToCart({product:props.product,quantity:1}));
    // alert('Item Added Successfully');
  }
  return (
   <>
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
          <div className="product-item bg-light mb-4">
            <div className="product-img position-relative overflow-hidden">
              <img className="img-fluid w-100" src={props.product.thumbnail} alt="" />
              <div className="product-action">
                <div onClick={addTocart_Click} className="btn btn-outline-dark btn-square">
                  <i className="fa fa-shopping-cart" />
                </div>
                <a className="btn btn-outline-dark btn-square" href="">
                  <i className="far fa-heart" />
                </a>
                <a className="btn btn-outline-dark btn-square" href="">
                  <i className="fa fa-sync-alt" />
                </a>
                <a className="btn btn-outline-dark btn-square" href="">
                  <i className="fa fa-search" />
                </a>
              </div>
            </div>
            <div className="text-center py-4">
              <a className="h6 text-decoration-none text-truncate" href="">
                {props.product.title}
              </a>
              <div className="d-flex align-items-center justify-content-center mt-2">
                <h5>{props.product.price}</h5>
                <h6 className="text-muted ml-2">
                  <del>{getPriceAfterDiscount(props.product.price,props.product.discountPercentage)}</del>
                </h6>
                <button onClick={addTocart_Click} className='m-2 btn btn-primary'>Add to Cart</button>
              </div>
              <div className="d-flex align-items-center justify-content-center mb-1">
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small>(99)</small>
              </div>
            </div>
          </div>
        </div>
   </>
  )
}

export default FeaturedSingleProduct