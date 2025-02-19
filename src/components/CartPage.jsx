import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        let price = parseFloat(item.price.toString().replace(/,/g, ""));
        let quantity = Number(item.quantity) || 1;
        if (isNaN(price) || price <= 0) price = 0;
        return total + price * quantity;
      }, 0)
      .toFixed(2);
  };

  const handleWhatsAppPay = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const totalAmount = calculateTotal(); // Get total price

    // Replace with your actual UPI ID
    const upiID = "your-upi-id@bank"; // Example: xyz@upi
    const message = `Hello, I want to buy these products from your store. \nTotal Amount: ₹${totalAmount} \nPlease make payment via this UPI link: upi://pay?pa=${upiID}&pn=YourName&mc=0000&tid=123456789&tr=123456789&tn=OrderPayment&am=${totalAmount}&cu=INR`;

    // Redirect to WhatsApp
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-60 object-contain"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-lg mt-2">
                    <span className="line-through text-red-500 text-sm">
                      ₹{item.pPrice}
                    </span>
                    <span className="font-bold text-blue-600">
                      {" "}
                      ₹{item.price}
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4 pb-4">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-gray-300 text-lg px-4 py-2 rounded-full transition hover:bg-gray-400"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-300 text-lg px-4 py-2 rounded-full transition hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="w-full bg-red-500 text-white py-3 text-lg font-semibold rounded-b-xl transition hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="text-right text-2xl font-bold mt-8 text-gray-800">
            Total: ₹{calculateTotal()}
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={handleWhatsAppPay}
              className="bg-green-600 text-white px-6 py-3 text-lg font-semibold rounded-lg transition hover:bg-green-700"
            >
              Buy Now via WhatsApp Pay
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
