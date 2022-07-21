const postFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector("#post-title").value.trim();
    const content = document.querySelector("#post-content").value.trim();
    const postId = document.location.pathname.split("/")[2];
  
    console.log(title, content, postId);
  
    if (title && content) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/posts/${postId}`, {
        method: "PUT",
        body: JSON.stringify({ title, content}),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector("form")
    .addEventListener("submit", postFormHandler);
  