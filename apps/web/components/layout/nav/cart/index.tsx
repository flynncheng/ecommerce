import { retrieveCart } from "@/lib/data/cart";
import CartTemplate from "./CartTemplate";

export default async function Cart() {
  const data = await retrieveCart();

  return <CartTemplate cart={data} />;
}
