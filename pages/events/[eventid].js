import { useRouter } from "next/router";
import Head from 'next/head'
import ErrorEvent from "../../components/events/ErrorEvent";
import EventDetails from "../../components/events/eventid/EventDetails";
import LoadingScreen from "../../components/events/LoadingScreen";
import { getAllEvents } from "../../utils/api-utils/getAllEvents";

const EventDetail = (props) => {
  const router = useRouter();

  //checking fallback
  if (router.isFallback) {
    return <LoadingScreen />;
  }

  //get currentEvent from props passed from getstaticprops function
  const { currentEvent } = props;

  //if event empty return no event found page
  if (!currentEvent) {
    return <ErrorEvent />;
  }

  return (
    <div className="min-h-screen bg-blueGray-200 flex flex-col w-full">
      <Head>
        <title>{currentEvent.title}</title>
        <link rel="icon" href="/NxtLogo.ico" />
      </Head>

      <h2 className="text-center mt-12 text-4xl text-emerald-800 font-bold">
        {currentEvent.title}
      </h2>
      <div className="w-4/5 max-h-full h-5/6 bg-gradient-to-br from-gray-500 to-cyan-100 flex flex-col rounded-lg m-auto p-3">
        <div className="h-96 flex justify-center w-full">
          <img
            src={"/" + currentEvent.image}
            className="h-full w-auto rounded-md shadow-lg transform transition hover:scale-105"
          />
        </div>
        <div className="-mt-12 mb-4  mx-3 z-10 text-center bg-blueGray-300 rounded-lg shadow-xl py-2">
          <EventDetails
            desc={currentEvent.description}
            date={currentEvent.date}
            loc={currentEvent.location}
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetail;

export async function getStaticPaths() {
  return {
    // Only `/events/e1` and `/events/e2` are generated at build time
    paths: [{ params: { eventid: "e1" } }, { params: { eventid: "e2" } }],
    // Enable statically generating additional pages
    // For example: `/events/e3`
    fallback: true,
  };
}
//static generation of individual event data

export async function getStaticProps(context) {
  const events = await getAllEvents();

  const id = context.params.eventid;
  const currentEvent = events.find((event) => event.id === id);

  if (currentEvent) {
    return {
      props: { currentEvent }, // will be passed to the page component as props
      revalidate: 60, //regenerate at every 60 sec // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 60 seconds
    };
  } else {
    return {
      notFound: true,
    };
  }
}
