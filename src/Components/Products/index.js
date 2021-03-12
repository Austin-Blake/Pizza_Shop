import React, { useContext, useEffect } from 'react';
import MyContext from '../../Context/MyContext';
import {productData} from './data'

import {
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductsElements';

export const Products = ({ heading, data }) => {
    const myContext = useContext(MyContext);
    const { getProducts, loading, products } = myContext;

    useEffect(() => {
    // getProducts();
    }, []);

    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt}/>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>Add to Cart</ProductButton>
                            </ProductInfo>
                        </ProductCard>  
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}
