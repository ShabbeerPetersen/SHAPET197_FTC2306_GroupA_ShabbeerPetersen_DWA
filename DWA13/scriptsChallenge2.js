const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "coffee", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const exerciseResults = []; // Initialize an array to store exercise results

products.forEach((product) => {
  exerciseResults.push(product.product); // Push each product name into the exerciseResults array
});

console.log(
  "Product Names\n",
  exerciseResults.join(", "), // Log the product names
  "\n\nProducts with Names 5 Characters or Less\n",
  products.filter((product) => product.product.length <= 5), // Filter products with names of 5 characters or less
  "\n\nCombined Price of Products with Numeric Prices\n",
  products
    .filter(
      (product) =>
        typeof product.price === "string" && product.price.trim() !== ""
    ) // Filter products with numeric prices (eliminating empty strings)
    .map((product) => ({
      ...product,
      price: parseFloat(product.price), // Convert prices to numbers
    }))
    .reduce((total, product) => total + product.price, 0), // Calculate the sum of prices
  "\n\nConcatenated Product Names\n",
  products.reduce((concatenated, product) => {
    if (concatenated !== "") {
      concatenated += ", "; // Concatenate product names with commas
    }
    return concatenated + product.product;
  }, ""),
  "\n\nHighest and Lowest-Priced Items\n",
  products
    .filter(
      (product) =>
        typeof product.price === "string" && product.price.trim() !== ""
    ) // Filter products with valid prices
    .reduce(
      (result, product) => {
        const price = parseFloat(product.price);
        if (!isNaN(price)) {
          if (price > result.highest.price) {
            result.highest = { name: product.product, price }; // Identify the highest-priced item
          }
          if (price < result.lowest.price) {
            result.lowest = { name: product.product, price }; // Identify the lowest-priced item
          }
        }
        return result;
      },
      {
        highest: { name: "", price: Number.NEGATIVE_INFINITY },
        lowest: { name: "", price: Number.POSITIVE_INFINITY },
      }
    ),
  "\n\nRecreated Object with Modified Keys\n",
  Object.entries(products[0]).reduce((acc, [key, value]) => {
    const keyMappings = {
      product: "name",
      price: "cost",
    };
    const newKey = keyMappings[key] || key;
    acc[newKey] = value; // Recreate the object with modified keys
    return acc;
  }, {})
);
