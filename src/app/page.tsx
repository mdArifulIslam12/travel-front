import Calender from "@/components/ui/Calender";
import Card from "@/components/ui/Card";
import Expereience from "@/components/ui/Expereience";
import Guest from "@/components/ui/Guest";
import Search from "@/components/ui/Search";
import Select from "@/components/ui/Select";
import Select2 from "@/components/ui/Select2";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center">
        <Select></Select>
        <Select2></Select2>
        <Calender></Calender>
        <Guest></Guest>
        <Search></Search>
      </div>
      <Card></Card>
      <Expereience></Expereience>
    </div>
  );
}
