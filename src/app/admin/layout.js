import Sidebar from "@/components/admin/Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Sidebar/>
      {children}
    </>
  )
}