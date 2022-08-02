import React from 'react';
import './OurProduct.css';
import productLogo1 from '../../../assets/our-product/jobPortal-icon.svg';
import productLogo2 from '../../../assets/our-product/Internship-icon.svg';
import productLogo3 from '../../../assets/our-product/affilitatePortal-icon.svg';
import productLogo4 from '../../../assets/our-product/halloffame-icon.svg';
import productLogo5 from '../../../assets/our-product/blog-icon.svg';
const OurProduct = () => {
  return (
    <div className='product__container'>
      <h2>Our Products</h2>
      <div className='product-row-1'>
        <div className='blog'>
          <img src={productLogo1} alt='' />
          <h4>Job Portal</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quo
            velit obcaecati.
          </p>
        </div>
        <div className='blog'>
          <img src={productLogo2} alt='' />
          <h4>Job Portal</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quo
            velit obcaecati.
          </p>
        </div>
        <div className='blog'>
          <img src={productLogo3} alt='' />
          <h4>Job Portal</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quo
            velit obcaecati.
          </p>
        </div>
      </div>
      <div className='product-row-2'>
        <div className='blog'>
          <img src={productLogo4} alt='' />
          <h4>Job Portal</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quo
            velit obcaecati.
          </p>
        </div>
        <div className='blog'>
          <img src={productLogo5} alt='' />
          <h4>Job Portal</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quo
            velit obcaecati.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
