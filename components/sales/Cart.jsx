import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function Cart() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-bold">Carrito de compras</h1>

        {/* Producto en carrito */}
        <Card className="flex items-center gap-4 p-4">
          <img
            src="https://www.gonvill.com.mx/imagenes/9786074/978607453362.JPG"
            alt="Producto"
            className="w-20 h-20 object-cover rounded"
          />
          <div className="flex flex-col flex-grow">
            <div className="text-lg font-semibold">Café Premium</div>
            <div className="text-sm text-muted-foreground">Cantidad: 2</div>
            <div className="text-sm">Precio unitario: $120</div>
          </div>
          <div className="text-right font-medium">$240</div>
        </Card>
         <Card className="flex items-center gap-4 p-4">
          <img
            src="https://www.gonvill.com.mx/imagenes/9786074/978607453362.JPG"
            alt="Producto"
            className="w-20 h-20 object-cover rounded"
          />
          <div className="flex flex-col flex-grow">
            <div className="text-lg font-semibold">Café Premium</div>
            <div className="text-sm text-muted-foreground">Cantidad: 2</div>
            <div className="text-sm">Precio unitario: $120</div>
          </div>
          <div className="text-right font-medium">$240</div>
        </Card>

        {/* Total */}
        <div className="flex justify-between items-center border-t pt-4">
          <div className="text-lg font-semibold">Total</div>
          <div className="text-lg font-bold">$480</div>
        </div>

        {/* Botones */}
        <div className="flex justify-end gap-4">
          <Button variant="secondary">Seguir comprando</Button>
          <Button>Finalizar compra</Button>
        </div>
      </div>
    </>
  );
}
