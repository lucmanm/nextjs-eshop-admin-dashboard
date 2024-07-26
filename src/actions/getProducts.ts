
export async function getProducts() {
    try {
        const response = await fetch(`${process.env.PUBLIC_DUMMY_ECOMMERCE_API}`)
        if (!response.ok) {
            throw new Error("FAILED_FETCH_PRODUCTS");
        }

        const result = await response.json()
        return result.products

    } catch (error) {
        console.log("ERROR_GET_PRODUCTS", error);

    }
}