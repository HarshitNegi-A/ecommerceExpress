const getAllProducts=()=>{
    return "Fetching all products"
}

const getProductById=(id)=>{
    return `Fetching product with ID: ${id}`
}

const addProduct = () => {
    return "Adding a new product.";
};

const updateProduct = () => {
    return "Put request called";
};

const deleteProduct = () => {
    return "Delete request called";
};


module.exports={
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}