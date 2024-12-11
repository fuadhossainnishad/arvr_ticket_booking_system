'use client'
import MyEvent from "@/components/MyEvent";
import UserSignIn from "@/components/UserSignIn";
import { RooteState } from "@/store/store";
import { useSelector } from "react-redux";

export default function Page() {
  const userAuth=useSelector((state:RooteState)=>state.auth.userSignIn)
  if(!userAuth){
    return <UserSignIn/>
  }
  return (
    <main className="max-h-screen">
      <MyEvent />
    </main>
  );
}
