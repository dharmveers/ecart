import React from 'react'

export const Cart = ({product}) => {
    return (
        <div className="col-md-4" key={product.id}>
            <div className="card">
                <div className="card-body">
                    <img src={`/assets/images/${product.image}`} alt="" className='card-img-top p-1' style={{ maxHeight: "250px", width: "auto", maxWidth: "100%" }} />
                    <h6 className="card-title">{product.name}</h6>
                    <p className="card-text">{(product.description).substring(0, 50)}...<span className='btn btn-info btn-sm'>more</span></p>
                    <p className="card-text">₹ {product.actualPrice}/-
                        <small className="text-muted">
                            <span className="discount-lbl"> {product.price}</span>
                        </small>
                        <small className="text-success"> {product.descount}% off</small>
                    </p>
                    <div className="card-footer">
                        <button className='m-1 btn-warning'>Buy Now</button>
                        <button className='m-1 btn-primary'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
