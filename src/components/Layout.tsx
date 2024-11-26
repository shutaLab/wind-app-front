import React, { ReactNode } from "react";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center relative">
      <div className="w-full max-w-md bg-white min-h-screen shadow-lg flex flex-col">
        {children}
        <div className="fixed bottom-0 w-full z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
