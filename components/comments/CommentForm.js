import { useEffect, useRef, useState } from "react";


const CommentForm = (props) => {
  const [isInputValid, setIsInputValid] = useState(true);
  

  const emailRef = useRef();
  const nameRef = useRef();
  const commentRef = useRef();

 

  const commentHandler = (event) => {
    event.preventDefault();
    const emailVal = emailRef.current.value;
    const nameVal = nameRef.current.value;
    const commentVal = commentRef.current.value;
    //validation
    if (
      !emailVal.includes("@") ||
      !nameVal ||
      nameVal.trim() === "" ||
      !commentVal ||
      commentVal.trim() === ""
    ) {
      setIsInputValid(false);
      return;
    }
    else{
    //calling function in parent component Comment
    props.onComment(emailVal, nameVal, commentVal);
    setIsInputValid(true);
    emailRef.current.value = "";
    nameRef.current.value = "";
    commentRef.current.value = "";
    }
  };

  return (
    <form onSubmit={commentHandler}>
      {!isInputValid && (
        <h2 className="text-center my-2 text-red-500">
          *Please verify filled data,there are errors!
        </h2>
      )}
      <div className="flex mb-4">
        <div className="w-1/2 bg-gray-400 h-8 mx-[2px]">
          <input
            type="email"
            ref={emailRef}
            placeholder="Your Email"
            className="border-b-2 border-cyan-500 h-8 w-full focus:outline-none p-1 mr-4 shadow-md"
          />
        </div>
        <div className="w-1/2 bg-gray-500 h-8 mx-[2px]">
          <input
            type="text"
            ref={nameRef}
            placeholder="Your Name"
            className="border-b-2 border-cyan-500 h-8 w-full focus:outline-none p-1 mr-4 shadow-md"
          />
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-full bg-gray-500 h-20">
          <textarea
            placeholder="Your Comment"
            ref={commentRef}
            className=" w-full h-full border-b-2 border-cyan-500 focus:outline-none p-1 mr-4 shadow-md"
          ></textarea>
        </div>
      </div>
      <div className="flex mb-4 justify-center">
        <button
          type="submit"
          className="bg-cyan-400 focus:outline-none focus:bg-cyan-600 p-1 rounded-md shadow-md text-gray-500 text-lg  w-36 focus:text-gray-100"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
