const savePostBtn = document.querySelector(".save-blogPost");


async function savePost(e) {
  e.preventDefault();
  const blogTopic = document.querySelector(".blogTopic-textarea").value;
  const blogText = document.querySelector(".blogPost-textarea").value;

  const response = await fetch("/api/users/saveblogpost", {
    method: "POST",
    body: JSON.stringify({
      blogText,
      blogTopic,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to add post");
  }
};

savePostBtn.addEventListener("click", savePost);