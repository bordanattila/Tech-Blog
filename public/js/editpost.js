// Edit post
async function editBlogPost(e) {
  e.preventDefault();
  const postTopic = document.querySelector(".topic-textarea").value;
  const postContent = document.querySelector(".content-textarea").value;

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/users/dashboard/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      postTopic,
      postContent,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert('Failed to edit post');
  }
};

document.querySelector(".editBtn").addEventListener('click', editBlogPost);

// Delete post
async function editBlogPost(e) {
  e.preventDefault();
  const postTopic = document.querySelector(".topic-textarea").value;
  const postContent = document.querySelector(".content-textarea").value;

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/users/dashboard/${id}`, {
    method: "DELETE",

    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert('Failed to edit post');
  }
};

document.querySelector(".deleteBtn").addEventListener('click', editBlogPost);