import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import UserStats from "@/components/UserStats";
import UserTable from "@/components/UserTable";

export default function Home() {
  return (
    <div className="flex p-4  bg-[#081027]">
      <SideBar />
      <main className=" ml-20  text-white min-h-screen p-4 ">
        <Header />
        <UserStats />
        <UserTable />
      </main>
    </div>
  );
}
