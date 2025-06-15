"use client";
import { useShoppingCart } from "@/store/shoppingCart";
import { Minus, Plus, Trash } from "lucide-react";

export default function Cart() {
  const {
    items,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
    clearCart,
    _hasHydrated,
  } = useShoppingCart();

  if (!_hasHydrated) return null;

  return (
    <>
      <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">🛒 Carrito de compras</h2>

        {items.length > 0 && (
          <div className="flex justify-end border-t pt-4 mb-4">
            <div className="text-right">
              <button
                className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
                onClick={clearCart}
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {items.length === 0 && (
            <div className="text-center">
              <p className="text-gray-500">Tu carrito está vacío</p>
            </div>
          )}
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.product.image}
                  alt="Camiseta blanca"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="font-semibold">{item.product.title}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => decreaseQuantity(item.product.id)}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => increaseQuantity(item.product.id)}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">
                  Precio unitario: ${item.product.price}
                </p>
                <p className="font-semibold">
                  Total: ${item.product.price * item.quantity}
                </p>
                <button
                  className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
                  onClick={() => removeItem(item.product.id)}
                >
                  <Trash className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total General */}
        {/*           <div className="text-left mt-6 border-t pt-4">
            eliminar todo
          </div> */}
        <div className="mt-2 flex justify-end border-t pt-4">
          <div className="text-right">
            <p className="text-lg font-semibold">
              Total general: ${getTotalPrice()}
            </p>
            <button className="mt-3 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer">
              Proceder al pago
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
