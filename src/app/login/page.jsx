"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Card,
} from "@heroui/react";
import { redirect } from "next/navigation";

const LoginPage = () => {

  const onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    const { data, error } = await authClient.signIn.email({
      email:user.email,
      image:user.image,
      name:user.name,
      password: user.password
    });
    console.log(data, error );
    if(data){
      redirect('/')
    }
    if(error){
      alert('Error')
    }
  };

  return (
    <div className="my-10 mx-w-7x mx-auto border rounded-2xl">
      <Card>
        <Form onSubmit={onsubmit} className="flex w-110  flex-col gap-4 py-5">
          <h1 className="font-bold text-center text-2xl">
           Login Your Account
          </h1>

          {/* email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          {/* password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex justify-center ">
            <Button className={"w-full rounded-none"} type="submit">
             Login
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
