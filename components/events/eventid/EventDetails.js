import { CalendarIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import IconTextLarge from "./IconTextLarge";

const EventDetails = ({ desc, date, loc }) => {

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric', month: 'long', year: 'numeric'
    })

    return <>
        <p className="text-xl text-sans p-2 text-blueGray-700">
            {desc}
        </p>
        <div className="flex justify-around text-3xl">
            <IconTextLarge Icon={CalendarIcon} text={formattedDate} />
            <IconTextLarge Icon={LocationMarkerIcon} text={loc} />
        </div>
    </>
}

export default EventDetails;