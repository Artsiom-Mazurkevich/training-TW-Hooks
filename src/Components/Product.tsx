import React from 'react';
import {IProduct} from "../data/products";


interface ProductProps {
    product: IProduct
}


const Product = ({product}: ProductProps) => {

    const [opened, setOpened] = React.useState(false)

    const btnBgClassName = opened ? 'bg-yellow-400' : 'bg-blue-400'

    const btnClasses = ['px-2 py-4 border', btnBgClassName]

    return (
        <div className={'border px-2 py-4 rounded flex flex-col items-center mb-2'}>
            <img src={product.image} className={'w-1/6 '} alt={product.title}/>
            <p>{product.title}</p>
            <span className={'font-bold'}>{product.price}</span>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setOpened((prev) => !prev)}>
                {opened ? 'Hide Details' : 'Show Details'}
            </button>
            {
                opened &&
                <div>
                    <p>{product.description}</p>
                </div>
            }
        </div>
    );
};

export {Product};