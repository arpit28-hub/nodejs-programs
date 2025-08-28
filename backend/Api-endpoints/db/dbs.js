const products = [
  { id: 1, name: "Wireless Bluetooth Headphones", price: 2499, categoryId: 1, inStock: true },
  { id: 2, name: "Running Shoes - Men", price: 1799, categoryId: 2, inStock: false },
  { id: 3, name: "Smartwatch Series 5", price: 5999, categoryId: 1, inStock: true },
  { id: 4, name: "Backpack 35L - Waterproof", price: 1299, categoryId: 3, inStock: true },
  { id: 5, name: "Gaming Keyboard RGB", price: 3499, categoryId: 4, inStock: true }
];
const users = [
  { id: 101, name: "Arpit Kumar", email: "arpit@example.com" },
  { id: 102, name: "Aryan Sharma", email: "aryan@example.com" }
];

const orders = [
  {
    orderId: 5001,
    userId: 101,
    items: [
      { productId: 1, quantity: 1 },
      { productId: 4, quantity: 2 }
    ],
    totalAmount: 5097,
    status: "shipped"
  },
  {
    orderId: 5002,
    userId: 102,
    items: [{ productId: 3, quantity: 1 }],
    totalAmount: 5999,
    status: "processing"
  }
];

const carts = [
  {
    userId: 101,
    items: [
      { productId: 5, quantity: 1 },
      { productId: 2, quantity: 2 }
    ]
  }
];

const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Footwear" },
  { id: 3, name: "Accessories" },
  { id: 4, name: "Computer Accessories" }
];

module.exports={users,products,orders,carts,categories};