const initState = {
  posts: [
    { id: 1, title: "hi there im 1st post", body: "hi there im 1st post body" },
    { id: 2, title: "hi there im 2nd post", body: "hi there im 2nd post body" },
    { id: 3, title: "hi there im 3rd post", body: "hi there im 3rd post body" },
  ],
};

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log("post added");
      return state;
    case 'CREATE_POST_ERROR': 
      console.log("post add error", action.err);
      return state;
    default:
      return state;
  }
};

export default postsReducer;
