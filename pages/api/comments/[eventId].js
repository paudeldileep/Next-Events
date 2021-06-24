function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { userEmail, userName, userComment } = req.body;

    if (
      !userEmail.includes("@") ||
      !userName ||
      userName.trim() === "" ||
      !userComment ||
      userComment.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid user Input!" });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email: userEmail,
      name: userName,
      comment: userComment,
    };

    res.status(201).json({ message: "success", newComment });
  } else if (req.method === "GET") {
    const data = [
      {
        id: "2021-06-23T05:53:52.123Z",
        email: "abc@gmail.com",
        name: "abc",
        comment: "test comment\n",
      },
      {
        id: "2021-06-23T05:54:14.485Z",
        email: "jkl@gmail.com",
        name: "abc",
        comment: "test comment 2",
      },
      {
        id: "2021-06-23T05:59:32.246Z",
        email: "xyz@gmail.com",
        name: "xyz",
        comment: "test commnet 3",
      },
      {
        id: "2021-06-23T06:09:48.720Z",
        email: "random@gmail.com",
        name: "Random One",
        comment: "last one",
      },
    ];
    res.status(201).json({ message: "Got Data",comments:data });
  } else {
    res.status(500).json({ message: "Error:No route found!" });
  }
}

export default handler;
