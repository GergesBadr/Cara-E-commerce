import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  shipping: 25,
};

// The API does not provide a quantity property for each product object, So, that's what I did here.
initialState.cart = initialState.cart.map((product) => ({
  ...product,
  quantity: 1,
}));

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productInCart = state.cart.find(
        (product) => product.id === action.payload.id,
      );
      if (productInCart) {
        toast("Product already in cart.");
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        state.cart.push(newProduct);
        toast.success("Product added to cart!");
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },

    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id,
      );
      toast.success("Product deleted successfully!");
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    incrementQuantity: (state, action) => {
      console.log(state.cart);
      const product = state.cart.find(
        (product) => product.id === action.payload,
      );
      product.quantity++;
      toast.success("Incremented!");
    },

    decrementQuantity: (state, action) => {
      const product = state.cart.find(
        (product) => product.id === action.payload,
      );
      if (product.quantity === 1) {
        toast.error("Product quantity can not be less than 1");
      } else {
        product.quantity--;
        toast.success("Decremented!");
      }
    },

    clearCart: (state) => {
      state.cart = [];
      toast.success("Cart cleared successfully!");
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export function cartTotalPrice(state) {
  return state.cart.cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );
}

export function cartTotalQuantity(state) {
  return state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);
}

export default cartSlice.reducer;
