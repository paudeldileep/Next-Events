import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

import { useState,useEffect } from "react";

const Comment = (props) => {
  const eventId = props.eventId;
  const [showComments, setShowComments] = useState(false);
  const [commentsData, setCommentsData] = useState();

  useEffect(() => {
    fetch(`/api/comments/${eventId}`)
      .then((response) => response.json())
      .then((data) => setCommentsData(data.comments));
  }, [showComments]);

  function showCommentsHandler() {
    setShowComments((prevState) => !prevState);
  }

  const commentsHandler = (userEmail, userName, userComment) => {
    const reqBody = JSON.stringify({ userEmail, userName, userComment });

    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: reqBody,
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) =>
        // Catch and display errors
        console.log(err)
      );
  };

  return (
    <div className="my-4 self-center">
      <div className="flex justify-center mb-4 mt-4">
        <button
          type="button"
          className="bg-cyan-400 focus:outline-none focus:bg-cyan-600 p-1 rounded-md shadow-md text-gray-500 text-lg  w-36 focus:text-gray-100"
          onClick={showCommentsHandler}
        >
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
      </div>

      {showComments && <CommentForm onComment={commentsHandler} />}
      {showComments && <CommentList comments={commentsData}/>}
    </div>
  );
};

export default Comment;
