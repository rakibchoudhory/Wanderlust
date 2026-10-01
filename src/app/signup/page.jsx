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
  Separator,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const singUpPage = () => {
  const onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    const { data, error } = await authClient.signUp.email({
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


  const handleGoogleSignIn =async () => {
    const data = await authClient.signIn.social({
    provider: "google",
  });
  }


  return (
    <div className="my-10 mx-w-7x mx-auto border rounded-2xl">
      <Card>
        <Form onSubmit={onsubmit} className="flex w-110  flex-col gap-4 py-5">
          <h1 className="font-bold text-center text-2xl">
            Create Your Account
          </h1>

          {/* name */}
          <TextField isRequired name="name" type="text">
            <Label>Full Name</Label>
            <Input placeholder="Enter your full name" />
            <FieldError />
          </TextField>

          {/* image url */}
          <TextField name="image" type="url">
            <Label>Image Url</Label>
            <Input placeholder="Enter your image url" />
            <FieldError />
          </TextField>

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
            <Button className={"w-full rounded-none bg-cyan-500"} type="submit">
              Create Account
            </Button>
          </div>
        </Form>
        <div className="flex items-center ">
              <Separator className="flex-1"/>
             <div className="whitespace-nowrap  ">Or sign up with</div>
            <Separator className="flex-1"/>   
            </div>
         
          <div >
            <Button onClick={handleGoogleSignIn} variant="outline" className={'w-full rounded-none'}><FcGoogle /> Sign Up With Google</Button>
          </div>
          <div className="flex justify-center gap-1">
            <p >Already have an account?</p> <Link className="text-cyan-600" href={'/login'}>Sign In</Link>
          </div>
      </Card>
    </div>
  );
};

export default singUpPage;
