"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { XCircle } from "lucide-react";

const CencelBookig = ({ booking }) => {
  //    console.log(booking,'booking');

  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();

    const res = await fetch(`${process.env.Next_Public_Server_URL}/booking/${booking.userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData.token}`,
      },
    });
    const data = await res.json();
    console.log("after delete", data);
  };

  return (
    <div>
      <AlertDialog>
        <Button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-white-500 transition-all duration-300 hover:-translate-y-0.5 bg-red-500 hover:shadow-sm "
        >
          <XCircle className="h-4 w-4" />
          Cancel
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
                  This will permanently delete{" "}
                  <strong>{booking.destinationName}</strong> and all of its
                  data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={handleDelete} slot="close" variant="danger">
                  Delete Destination
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default CencelBookig;
