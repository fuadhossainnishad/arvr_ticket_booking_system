// import Signup from "../components/Signup";
// import CreateEvent from "../components/CreateEvent";
// import EditEvent from "../components/EditEvent";
// import DeleteEvent from "../components/DeleteEvent";
// import BookingComponent from "../components/BookingComponent";
import Body from "../components/Body";
import Events from "@/components/Events";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
// import CreateEvent from "@/components/CreateEvent";
export default function Home() {
  return (
    <main suppressHydrationWarning className="">
      <Body />
      <Events />
      <AboutUs />
      <Contact />
      {/* <CreateEvent /> */}
      {/* <Signup />
      <EditEvent eventId={1} />
      <DeleteEvent eventId={1} />
      <BookingComponent eventId={1} /> */}
    </main>
  );
}
