const commentBtn = document.querySelector("#comment-btn");
const commentForm = document.querySelector("#comment-form");
const postId = document.location.pathname.split("/")[2];

commentBtn.addEventListener("click", commentFunc);
commentForm.addEventListener("submit", commentFormSubmit);

function commentFunc(e) {
  e.preventDefault();
  if (commentForm.classList.contains("hide")) {
    commentBtn.classList.add("hide");
    commentForm.classList.remove("hide");
  }
}

async function commentFormSubmit(e) {
  e.preventDefault();
  if (commentForm.classList.contains("hide")) {
    commentBtn.classList.add("hide");
    commentForm.classList.remove("hide");
  } else {
    commentBtn.classList.remove("hide");
    commentForm.classList.add("hide");
  }
  const commentText = document.querySelector("#comment-content").value;

  if (commentText) {
    const response = await fetch(`/api/posts/${postId}/comment`, {
      method: "POST",
      body: JSON.stringify({ commentText }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/post/${postId}`);
    } else {
      alert(response.statusText);
    }
  }
}
