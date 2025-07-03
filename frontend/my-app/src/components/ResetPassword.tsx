"use client";

import Link from "next/link";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const signInSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please must enter your email"),
  password: yup
    .string()
    .min(6, "Please enter atleast  6 characters long password")

    .required("Please enter your password"),
});

type SignInFormData = yup.InferType<typeof signInSchema>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInSchema),
    mode: "onChange",
  });

  const onSubmit = async (formData: SignInFormData) => {
    console.log("formData", formData);
    //backend input value ywuuldag hvseltee bichix
  };
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Log in</CardTitle>
        <CardDescription className="text-muted-foreground">
          Log in to enjoy your favorite dishes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              id="email"
              placeholder="Enter your email address"
              className={`${errors.email ? "border-red-600" : " "}`}
            />
            {errors.email && (
              <p className="text-[red] text-sm  ">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              {...register("password")}
              id="password"
              type="password"
              placeholder="Password"
              className={`${errors.password ? "border-red-600" : " "}`}
            />
          </div>
          {errors.password && (
            <p className="text-[red] text-sm ">{errors.password.message}</p>
          )}
          <div className="flex justify-start">
            <Link
              href="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button className="w-full" type="submit">
            {"Let's Go"}
          </Button>
          <div className="text-center text-sm text-muted-foreground">
            {"Don't have an account?"}
            <Link href={"/signup"} className=" text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
