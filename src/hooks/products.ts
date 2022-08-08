import React, {useEffect} from "react";
import {IProduct} from "../data/products";
import axios, {AxiosError} from "axios";

export const useProducts = () => {
    const [product, setProduct] = React.useState<IProduct[]>([])
    const [loading, setLoading] = React.useState<boolean>(false)
    const [error, setError] = React.useState<string>('')

    async function fetchProducts () {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=10')
            setLoading(false)
            setProduct(response.data)
            console.log(response)
        }
        catch (e) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }


    useEffect(() => {
        console.log('effect')
        fetchProducts()
    }, [])

    return {product, loading, error}
}