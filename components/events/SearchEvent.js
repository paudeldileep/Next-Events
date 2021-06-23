
import { useRef } from "react";

const SearchEvent = (props) => {

    const yearRef=useRef();
    const monthRef=useRef();

    const searchHandler=(event)=>{
        event.preventDefault();
        const yearValue=yearRef.current.value;
        const monthValue=monthRef.current.value;

        //pass to all events page
        props.onSearch(yearValue,monthValue);
    }


    return <div className="mb-8 w-2/3 bg-gray-300 rounded-md shadow-md py-4">
        <form>
            <div className="flex justify-center">
                <div className="mx-3">
                    <label htmlFor="year">Year:</label>
                    
                    <select id="year" ref={yearRef} className="h-8 pl-3 ml-1 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline">
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                    </select>
                </div>
                <div className="mx-3">
                    <label htmlFor="month">Month:</label>
                    <select id="month" ref={monthRef} className="h-8 pl-3 ml-1 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline">
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option  value="6">June</option>
                        <option  value="7">July</option>
                        <option  value="8">August</option>
                        <option  value="9">September</option>
                        <option  value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
                <button onClick={searchHandler} className="mx-3 inline-flex items-center h-8 px-5 text-indigo-100 transition-colors duration-150 bg-blue-400 rounded-lg focus:shadow-outline focus:border-none hover:bg-cyan-700">Search</button>
                
            </div>
            
        </form>
    </div >
}

export default SearchEvent;