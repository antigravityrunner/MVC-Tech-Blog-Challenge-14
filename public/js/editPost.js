const updatePostHandler = async (event) => {
  event.preventDefault();

  const postTitle = document.querySelector("#postTitle").value.trim();
  const postBody = document.querySelector("#postBody").value.trim();

  const postId = document.querySelector("#postId").value.trim();

  if (postTitle && postBody) {
    const response = await fetch("/api/post/" + postId, {
      method: "PATCH",
      body: JSON.stringify({ postTitle, postBody }),
      headers: { "Content-Type": "application/json" },
    });

    const responseData = await response.json();

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update post");
    }
  }
};

document
  .querySelector(".newPost-form")
  .addEventListener("submit", updatePostHandler);

const deletePostHandler = async (event) => {
  event.preventDefault();

  const postId = document.querySelector("#postId").value.trim();

  const response = await fetch("/api/post/" + postId, {
    method: "DELETE",
    body: JSON.stringify({}),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete post");
  }
};

document
  .querySelector(".newPost-form #delete")
  .addEventListener("click", deletePostHandler);
