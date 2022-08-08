import React from 'react';
import {Product} from "./Components/Product";
import {useProducts} from "./hooks/products";
import {ErrorMessage} from "./Components/ErrorMessage";
import {Loader} from "./Components/Loader";
import {Modal} from "./Components/Modal";
import {CreateProduct} from "./Components/CreateProduct";

function App() {


  const {product,loading,error} = useProducts()

  return (
    <div className={'container mx-auto max-w-2xl pt-5'}>
      {loading && <Loader/>}
      {error && <ErrorMessage error={error}/>}
      {product.map(p => <Product key={p.id} product={p}/>)}
      {/*<Product product={products[0]}/>*/}
      {/*<Product product={products[1]}/>*/}
      <Modal title={'Creating product'}>
           <CreateProduct/>
      </Modal>
    </div>
  );
}

export default App;
