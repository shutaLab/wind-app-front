import React, { ReactNode } from "react";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center">
      <div className="w-full max-w-md bg-white min-h-screen shadow-lg flex flex-col">
        {/* メインコンテンツ */}
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
