"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

export default function LoginForm() {
    const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
          data
        );

        const json = response.data;
        console.log(json);
        Swal.fire({
          title: "¡Sesión iniciada!",
          text: "Ahora puedes acceder a tu cuenta.",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        Cookies.set("token", json.access_token, { expires: 1 / 24 });
        router.push("/");
      } catch (error) {
        Swal.fire({
          title: "Error al iniciar sesión",
          text: "Verifica tus credenciales e inténtalo de nuevo.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        /*         console.error('Error al iniciar sesión:', error); */
      }
    };

    fetchData();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-muted px-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Iniciar sesión</CardTitle>
        </CardHeader>

        {/* Aquí uso el componente Form de shadcn y paso el form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: "Este campo es obligatorio",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Correo inválido",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Correo electrónico</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@correo.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                rules={{
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 6,
                    message: "Debe tener al menos 6 caracteres",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Contraseña</FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>

            <CardFooter className="flex flex-col gap-3 mt-4">
              <Button type="submit" className="w-full">
                Iniciar sesión
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                ¿No tienes cuenta?{" "}
                <Link href="/register" className="text-primary hover:underline">
                  Regístrate
                </Link>
              </p>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
