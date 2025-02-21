"use client";

type Props = {
  children?: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <main className="w-full flex flex-col px-6 pb-12 max-w-md mx-auto">
      {children}
    </main>
  );
}
