"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { MdDelete } from "react-icons/md";

export function DeleteAlert({ destination }) {
  const {
    destinationName,
    _id,
  } = destination;

  const handleDelete = async (_id) => {
   const { data: tokenData } = await authClient.token();
  //  console.log(tokenData.token);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${_id}`, {
      method: "DELETE" ,
     headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${tokenData.token}`
      },
    });
    const data = await res.json();
    console.log("after delete", data);
    redirect('/destinations')
  };

  return (
    <AlertDialog>
      <Button
        variant="outline"
        className="flex gap-1 items-center my-3 rounded-xl border-2 border-red-500 px-6 py-6 font-semibold text-red-600 transition-all duration-300 hover:bg-red-500 hover:text-white cursor-pointer"
      >
        <MdDelete /> Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={()=>handleDelete(_id)} slot="close" variant="danger">
                Delete Destination
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
