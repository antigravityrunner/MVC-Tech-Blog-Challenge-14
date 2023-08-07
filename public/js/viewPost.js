const updatePostHandler = async (event) => {
  event.preventDefault();

  const commentBody = document.querySelector("#commentBody").value.trim();

  const postId = document.querySelector("#postId").value.trim();

  console.log(postId);

  if (commentBody && postId) {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ commentBody, postId }),
      headers: { "Content-Type": "application/json" },
    });

    const responseData = await response.json();

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to update post");
    }
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", updatePostHandler);
