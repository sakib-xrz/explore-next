export async function getMenCloth() {
    const response = await fetch(
        "https://fakestoreapi.com/products/category/men's%20clothing"
    );
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
}

export async function getWomenCloth() {
    const response = await fetch(
        "https://fakestoreapi.com/products/category/women's%20clothing"
    );
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
}

export async function getJewelry() {
    const response = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
    );
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
}

export async function getElectronics() {
    const response = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
    );
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
}

export async function getProductByCategory(category) {
    const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
}

export async function getAllProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
}

export async function getSingleProduct(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
}
