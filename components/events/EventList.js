import EventItem from "./EventItem";

const EventList = ({eventItems}) => {
    return <div className="p-2 justify-items-center grid grid-cols-1 gap-2 sm:grid-cols-1 sm:gap-3 lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 xl:gap-4">
        {eventItems?.map(eItem=><EventItem key={eItem.id} eventItem={eItem}/>)}
    </div>
}

export default EventList;