//home page
import Head from 'next/head'
import EventList from '../components/events/EventList'
import LoadingScreen from '../components/events/LoadingScreen'
import { getAllEvents } from '../utils/api-utils/getAllEvents'
import NewsLetter from '../components/newsletter/NewsLetter'

const Home=(props)=> {

  //const [featuredEvents,setFeaturedEvents]=useState();
  //const [loading,setLoading]=useState(true);

  // useEffect(()=>{
  //   const events=getFeaturedEvents();
  //   setFeaturedEvents(events);
  //   setLoading(false);
  //   console.log('efct');
  // },[getFeaturedEvents])
  
  // if(loading){
  //   return <LoadingScreen/>
  // }

  return (
    <div className="flex flex-col w-full bg-gray-200 min-h-screen">
      <Head>
        <title>Events-Home</title>
        <link rel="icon" href="/NxtLogo.ico" />
      </Head>
      <NewsLetter/>
      <div className="m-auto flex flex-col mt-1 w-[90%] items-center">
        <EventList eventItems={props.filteredEvents}/>
      </div>

      
    </div>
  )
}

export default Home;

//static generation of index page with featured events pulled from firebase
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps(context) {
  
  const events= await getAllEvents();
  // if (!data) {
  //   return {
  //     notFound: true,
  //   }
  // }

  const filteredEvents=events.filter((event)=>event.isFeatured);

  return {
    props: { filteredEvents }, // will be passed to the page component as props
    revalidate:1800
  }
}
