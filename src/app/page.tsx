import Signup from '../components/Signup'
import CreateEvent from '../components/CreateEvent';
import EditEvent from '../components/EditEvent';
import DeleteEvent from '../components/DeleteEvent';
import BookingComponent from '../components/BookingComponent';
import Body from '../components/Body';
export default function Home() {
  return (
    <main className="">
<Body/>
<Signup/>
<CreateEvent/>
<EditEvent eventId={123}/>
<DeleteEvent eventId={123}/>
<BookingComponent eventId={123}/>
    </main>
  );
}
