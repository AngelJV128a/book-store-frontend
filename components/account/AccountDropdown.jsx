import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function AccountDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="ml-6 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 bg-gray-800 cursor-pointer rounded-lg"
        >
          Mi cuenta
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48">
        <DropdownMenuItem className="cursor-pointer">
          Perfil
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Mis compras
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Configuraciones
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
