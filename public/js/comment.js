const saveCommentBtn = document.querySelector(".save-comment");
const addCommentBtn = document.querySelector(".add-comment");
const textArea = document.querySelector(".comment-textarea")
const label = document.querySelector(".textArea-label");
// Show an element
const show = (elem) => {
  elem.style.visibility = "visible";
};

// Hide an element
const hide = (elem) => {
  elem.style.visibility = "hidden";
};

async function saveComment (e) {
  e.preventDefault();
  const commentText = document.querySelector(".comment-textarea").value;
  const response = await fetch("/api/users/savecomment", {
    method: "POST",
    body: JSON.stringify({
      commentText,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to add comment");
  }
};

const addComment = (e) => {
    e.preventDefault();
    show(label)
    show(textArea)
    show(saveCommentBtn)
    saveCommentBtn.addEventListener("click", saveComment);
};

addCommentBtn.addEventListener("click", addComment);

hide(saveCommentBtn);
hide(textArea);
hide(label)
addComment();