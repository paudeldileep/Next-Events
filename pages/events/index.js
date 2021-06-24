//All events page; index page within events
import Head from "next/head";
import { useRouter } from "next/router";

import EventList from "../../components/events/EventList";
import LoadingScreen from "../../components/events/LoadingScreen";
import SearchEvent from "../../components/events/SearchEvent";
import { getAllEvents } from "../../utils/api-utils/getAllEvents";

const AllEvents = (props) => {
  const router = useRouter();

  if (!props.allEvents) {
    return <LoadingScreen />;
  }

  const filterEvents = (year, month) => {
    console.log(year + " " + month);

    const urlPath = `/events/${year}/${month}`;

    router.push(urlPath);
  };

  return (
    <div className="flex bg-gray-200 min-h-screen">
      <Head>
        <title>All Events</title>
        <link rel="icon" href="/NxtLogo.ico" />
      </Head>

      <div className="m-auto flex flex-col mt-[5%] w-[90%] items-center">
        <SearchEvent onSearch={filterEvents} />
        <EventList eventItems={props.allEvents} />
      </div>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const allEvents = await getAllEvents();

  if (!allEvents) {
    return {
      notFound: true,
    };
  }

  // Pass data to the page via props
  return { props: { allEvents } };
}

export default AllEvents;
