import { useRef } from "react";

const NewsLetter = () => {
  const emailRef = useRef();

  const subscriptionHandler = (event) => {
    event.preventDefault();
    const userEmail = emailRef.current.value;
    
    const reqBody=JSON.stringify({email:userEmail});
    //console.log(reqBody);

    fetch('/api/newsletter',{
      
        // Adding method type
        method: "POST",
          
        // Adding body or contents to send
        body: reqBody,
          
        // Adding headers to the request
        headers: {
            "Content-type": "application/json"
        }
  }).then(response=>response.json()
  ).then(data=>console.log(data)
  ).catch(err => 
    // Catch and display errors
    console.log(err))

  }

  return (
    <div className="flex flex-col items-center w-3/4 h-20 p-1 m-auto">
      <h3 className="text-xl font-bold text-gray-600 mb-1">
        Drop your email for event updates
      </h3>
      <div className="flex justify-center w-full mt-1">
        <form onSubmit={subscriptionHandler}>
          <input
            type="email"
            ref={emailRef}
            className="border-b-2 border-cyan-500 h-8 w-80 focus:outline-none p-1 mr-4 shadow-md"
          />
          <button className="bg-cyan-200 focus:bg-cyan-500 focus:outline-none focus:text-gray-200 shadow-md rounded-md p-1 text-gray-600">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
