import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import LoadingScreen from "../../components/events/LoadingScreen";
import { getFilteredEvents } from "../../dummy-data";
import ErrorEvent from "../../components/events/ErrorEvent";
import EventList from "../../components/events/EventList";
import ResultTitle from "../../components/events/eventslug/ResultTitle";
import { getAllEvents } from "../../utils/api-utils/getAllEvents";

const FilteredEvents = (props) => {

  if(props.hasError){
    return <ErrorEvent/>
  }
  const { filteredEvents, year, month } = props;

  if (!filteredEvents) {
    return <LoadingScreen />;
  }
  if (filteredEvents.length <= 0) {
    return <ErrorEvent />;
  }

  const filteredDate = new Date(year, month - 1);
  const readableDate = new Date(filteredDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex bg-gray-200 min-h-screen">
      <Head>
        <title>Events-{readableDate}</title>
        <link rel="icon" href="/NxtLogo.ico" />
      </Head>

      <div className="m-auto flex flex-col mt-[5%] w-[90%] items-center">
        <ResultTitle title="Events in" content={readableDate} />
        <EventList eventItems={filteredEvents} />
      </div>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const slug = context.params.slug;

  //?? conditionaly checking, extract slug value if it is available
  const year = Number((slug ?? [])[0]);
  const month = Number((slug ?? [])[1]);

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  // Fetch data from external API
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  if (!filteredEvents) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  // Pass data to the page via props
  return { props: { filteredEvents, year, month } };
}
export default FilteredEvents;
