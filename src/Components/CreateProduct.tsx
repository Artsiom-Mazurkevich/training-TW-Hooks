import React, {useState} from 'react';


const ProductData = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}



const CreateProduct = () => {

    const [value, setValue] = useState('')

    const SubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }


    return (
        <form onSubmit={SubmitHandler}>
            <input value={value} onChange={(e) => setValue(e.currentTarget.value)} type="text" placeholder={'Provide product title...'} className={'border py-2 px-4 mb-2 w-full outline-0'}/>
            <button className={'py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded'} type={'submit'}>Create</button>
        </form>
    );
};

export {CreateProduct};