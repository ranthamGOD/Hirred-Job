// import React from 'react'

import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <footer className="p-10 text-center bg-gray-800">Made with 🤍 by RanthamGOD</footer>
    </div>
  )
}

export default AppLayout;