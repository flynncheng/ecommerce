import { Toaster } from "sonner";
import Footer from "./footer";
import Nav from "./nav";
import Header from "./header";

type Props = {
  children?: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <Nav />
      <main className="flex-auto">{children}</main>
      <Toaster />
      <Footer />
    </>
  );
}
