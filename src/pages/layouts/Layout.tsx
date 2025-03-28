// Routers
import { Outlet } from "react-router-dom";
// Components
import Header from "./components/Header";
import Input from "./components/Input";

export default function Layout() {
  return (
    <>
      <div className="relative h-screen ">
        <div className="h-full flex flex-col justify-between ">
          {/* Header */}
          <Header />
          <Outlet />
          <Input />
        </div>
      </div>
    </>
  )
}
