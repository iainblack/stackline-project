
import { Suspense, type ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Header } from "./components/Header";
import { Metadata } from "next";
import "./styles/globals.css";
import LoadingSkeleton from "./components/LoadingSkeleton";

interface Props {
  readonly children: ReactNode;
}

export const metadata: Metadata = {
  title: "Iain's Stackline Project",
};

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={'w-screen overflow-x-hidden'}>
          <Header />
          <Suspense fallback={<LoadingSkeleton />}>
            <main>{children}</main>
          </Suspense>
        </body>
      </html>
    </StoreProvider>
  );
}
