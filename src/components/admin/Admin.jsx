import React, { useState } from 'react';
import '../admin/style.css';
import { Button, Modal, ModalBody } from 'react-bootstrap';

const Admin = () => {
    const [showModel, setShowModel] = useState(false);
    const [showCat,setShowCat]= useState(false);
    return (
        <div className='container admin'>
            <div className="row pt-4">
                <div className="col-md-4">
                    <div className="card bg-success">
                        <div className="card-body">
                            <img src={'/assets/images/users.png'} alt="" className='img-fluid' style={{ maxHeight: "130px" }} />
                            <h4>34395</h4>
                            <h1>Users</h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card bg-info">
                        <div className="card-body">
                            <img src={'/assets/images/categories.png'} alt="" className='img-fluid bg-white rounded-circle' style={{ maxHeight: "130px" }} />
                            <h4>83443</h4>
                            <h1>Categories</h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card bg-secondary">
                        <div className="card-body">
                            <img src={'/assets/images/product.png'} alt="" className='img-fluid bg-white rounded-circle' style={{ maxHeight: "130px" }} />
                            <h4>87874</h4>
                            <h1>Products</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-md-6">
                    <div className="card bg-primary" onClick={() => setShowCat(true)}>
                        <div className="card-body">
                            <img src={'/assets/images/add-to-cart.png'} alt="" className='img-fluid rounded-circle bg-white' style={{ maxHeight: "130px" }} />
                            <h4>56783</h4>
                            <h1>Add Categories</h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card bg-warning" onClick={() => setShowModel(true)}>
                        <div className="card-body">
                            <img src={'/assets/images/add-product.png'} alt="" className='img-fluid rounded-circle bg-white' style={{ maxHeight: "130px" }} />
                            <h4>56783</h4>
                            <h1>Add Products</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showModel}>
                <Modal.Header className='bg-primary'>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="floating-label-content">
                                <input type="text" className='floating-input' name='name' placeholder=''/>
                                <label className="floating-label">Product Name*</label>
                        </div>
                        <div className="floating-label-content">
                                <input type="text" className='floating-input' name='desc' placeholder=''/>
                                <label className="floating-label">Product Description*</label>
                        </div>
                        <div className="floating-label-content">
                                <input type="text" className='floating-input' name='price' placeholder=''/>
                                <label className="floating-label">Product Price*</label>
                        </div>
                        <div className="floating-label-content">
                                <input type="text" className='floating-input' name='discount' placeholder=''/>
                                <label className="floating-label">Product Discount*</label>
                        </div>
                        <div className="floating-label-content">
                                <input type="text" className='floating-input' name='quantity' placeholder=''/>
                                <label className="floating-label">Quantity*</label>
                        </div>
                        <div className="floating-label-content">
                            <select className='floating-input'>
                                <option>2</option>
                                <option>3</option>
                            </select>
                            <label className='floating-label'>Select Category*</label>
                        </div>
                        <div className="floating-label-content">
                            <input type="file" className="floating-input" />
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModel(false)}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* category model */}
            <Modal show={showCat}>
                <Modal.Header className='bg-primary'>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <form>
                    <div className="floating-label-content">
                        <input className='floating-input'
                            type="text"
                            name="username"
                            placeholder='' />
                        <label className="floating-label">Category Title*</label>
                    </div>
                    <div className="floating-label-content">
                        <input className='floating-input'
                            type="text"
                            name="username"
                            placeholder='' />
                        <label className="floating-label">Category Description*</label>
                    </div>
                        
                    </form>
                </ModalBody>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCat(false)}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                 </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Admin