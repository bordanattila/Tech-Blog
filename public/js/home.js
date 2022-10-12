const newPostHandler = async (event) => {
    event.preventDefault();
    document.location.replace("/newblogpost")
  };
  
  document
    .querySelector("#newPost")
    .addEventListener("click", newPostHandler);