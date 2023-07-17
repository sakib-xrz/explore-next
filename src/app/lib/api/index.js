export async function getMensCloth() {
    const response = await fetch(
        "https://fakestoreapi.com/products/category/men's%20clothing"
    );
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
}
