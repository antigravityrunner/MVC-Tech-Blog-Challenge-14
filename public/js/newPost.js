const loginFormHandler = async (event) => {
  event.preventDefault();

  const postTitle = document.querySelector("#postTitle").value.trim();
  const postBody = document.querySelector("#postBody").value.trim();

  if (postTitle && postBody) {
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ postTitle, postBody }),
      headers: { "Content-Type": "application/json" },
    });

    const responseData = await response.json();

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create post");
    }
  }
};

document
  .querySelector(".newPost-form")
  .addEventListener("submit", loginFormHandler);
