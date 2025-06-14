"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect } from "react";

export default function RegisterForm() {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
          data
        );
        console.log(response);
        if (response.status === 200 || response.status === 201) {
          Swal.fire({
            title: "Registro exitoso",
            text: "Gracias por registrarte",
            icon: "success",
            confirmButtonText: "Aceptar",
          });
          router.push("/login");
        } else {
          Swal.fire({
            title: "Error",
            text: "No se pudo registrarte",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-muted px-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Registrate</CardTitle>
          </CardHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  rules={{
                    required: "Este campo es obligatorio",
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name">Nombre</FormLabel>
                      <FormControl>
                        <Input id="name" placeholder="Nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                <FormField
                  control={form.control}
                  name="password_confirmation"
                  rules={{
                    required: "Este campo es obligatorio",
                    minLength: {
                      value: 6,
                      message: "Debe tener al menos 6 caracteres",
                    },
                    validate: (value) =>
                      value === form.getValues("password") ||
                      "Las contraseñas no coinciden",
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="password_confirmation">
                        Confirma contraseña
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="password_confirmation"
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
                <Button type="submit" className="w-full cursor-pointer">
                  Registrate
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </>
  );
}
