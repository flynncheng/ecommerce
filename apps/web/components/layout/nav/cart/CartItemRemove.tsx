import { Loader2 } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@workspace/ui/components/button";
import { deleteLineItem } from "@/lib/data/cart";
import { HttpTypes } from "@medusajs/types";

export default function CartItemRemove({
  cartItem,
}: {
  cartItem: HttpTypes.StoreCartLineItem;
}) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (id: string) => {
    setIsDeleting(true);
    await deleteLineItem(id).catch((err) => {
      console.error("Error deleting line item:", err);
      setIsDeleting(false);
    });
  };
  return (
    <Button
      onClick={() => handleDelete(cartItem.id)}
      className="ml-4 mr-auto h-auto w-[50px] p-0 text-gray-500 hover:bg-white hover:text-gray-700"
      variant="ghost"
    >
      {isDeleting ? (
        <Loader2 className="size-5 animate-spin text-gray-500" />
      ) : (
        "Remove"
      )}
    </Button>
  );
}
