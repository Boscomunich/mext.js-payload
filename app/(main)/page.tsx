import Summary from "./components/dashboard/summary";
import Payment from "./components/dashboard/payment";
import Doctor from "./components/dashboard/doctor";

export default function Home() {
  return (
    <div className="mt-[150px] mb-[30px] absolute left-[370px] h-auto overflow-y-auto no-scrollbar  w-[calc(100%-410px)]">
      <Summary/>
      <div className="flex justify-center gap-[10px]">
        <Payment/>
        <Doctor/>
      </div>
    </div>
  );
}
