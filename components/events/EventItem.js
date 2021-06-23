import Image from 'next/image'
import Link from 'next/link'
import { CalendarIcon,LocationMarkerIcon,InformationCircleIcon } from '@heroicons/react/solid';

//custom component with icon and a text
import IconText from './IconText';
import { red } from 'bn.js';


const EventItem = (props) => {

    const { image, date, title, location, id }=props.eventItem;
    const formattedDate= new Date(date).toLocaleDateString('en-US',{
        day:'numeric',month:'long',year:'numeric'
    })
    const formattedLocation=location.split(',',1).join();
    const detailsLink=`/events/${id}`;


    return <div className="border-[1px] max-w-sm rounded-md overflow-hidden shadow-lg bg-gradient-to-br from-gray-500 to-cyan-100">
        
        <Image src={'/'+image} alt={title} width="384" height="200"/>
  
        <div className="p-2 mt-2">
            <div className="flex flex-row justify-between w-full">
                <IconText Icon={CalendarIcon} text={formattedDate}/>
                <IconText Icon={LocationMarkerIcon} text={formattedLocation}/>
            </div>

            <h2 className="mt-4 mb-4 text-3xl font-serif transition duration-150 transform hover:scale-105">{title}</h2>

            <div className="flex flex-row items-end justify-between mb-2 mt-2">
                <div>
                <span className="bg-gray-300 rounded-sm px-2 mr-2"># tag1</span>
                <span className="bg-gray-300 rounded-sm px-2 mr-2"># tag2</span>
                </div>
                <p><Link href={detailsLink}><span className="text-green-400 transition duration-150 transform hover:scale-130 "><InformationCircleIcon className="h-7 hover:cursor-pointer hover:shadow-md rounded-full hover:ring-red-600 hover:ring-1"/> </span></Link></p>
            </div>
            
        </div>
    </div>
}

export default EventItem;