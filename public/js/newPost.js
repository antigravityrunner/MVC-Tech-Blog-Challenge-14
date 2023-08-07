const loginFormHandler = async (event) => {
  event.preventDefault();

  const postTitle = document.querySelector("#postTitle").value.trim();
  const postBody = document.querySelector("#postBody").value.trim();

  if (postTitle && postBody) {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ postTitle, postBody }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector(".newPost-form")
  .addEventListener("submit", loginFormHandler);
