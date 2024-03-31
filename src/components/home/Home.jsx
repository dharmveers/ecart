import React, { useEffect, useState } from 'react'
import base_url from '../apis/baseUrls';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Cart } from './Cart';
import { toast } from 'react-toastify';

const Home = () => {

    const[products,setProducts] = useState([]);
    const[categories,setCategories] = useState([]);
    const[filterData,setFilterData] = useState([]);
    
    useEffect(()=>{
        //getting all category
        axios.get(`${base_url}/getCategories`)
        .then((response)=>{
            setCategories(response.data);
        })
        .catch(err=>console.log(err));
        //getting all product
        axios.get(`${base_url}/getProducts`)
        .then((response)=>{
            setProducts(response.data);
        })
        .catch(err=>console.log(err));
    },[]);
    function getProductByCatId(categoryId) {
        const filterProduct=products.filter(product=>product.category_id===categoryId);
        if(filterProduct.length>0){
            setFilterData(filterProduct);
        }else{
            toast.error("No item available !!");
        }
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-3">
                    <div className="list-group mt-2">
                        <Link to="/" className='list-group-item list-group-item-action active' onClick={()=>setFilterData([])}> All Category</Link>
                        
                        {categories.length>0 &&
                        categories.map((item)=>
                        <Link 
                              key={item.id}
                              className='list-group-item list-group-item-action'
                              onClick={()=>getProductByCatId(item.id)}
                              > {item.name}</Link>)
                        }
            
                    </div>
                </div>
                <div className="col-md-8 mt-2">
                    <div className="row">
                        {filterData.length<1?
                        products.map((product)=><Cart product={product}/>)
                        :filterData.map((product)=><Cart product={product}/>)
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;