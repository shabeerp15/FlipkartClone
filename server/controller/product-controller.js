import Product from '../model/productSchema.js'

export const getProducts = async (req,res) => {
    try{
        const products = await Product.find({})
        res.json(products)
    }catch(error){
        console.log("Error : ", error.message)
    }
}