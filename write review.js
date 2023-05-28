function adjustReviewBox() {
    var reviewTextarea = document.getElementById("review-textarea");
    reviewTextarea.style.height = "auto"; // Reset the height to auto
    reviewTextarea.style.height = reviewTextarea.scrollHeight + "px"; // Set the height based on the content
  }
  
  function editReview() {
    var reviewTextarea = document.getElementById("review-textarea");
    var sendButton = document.getElementById("send-button");
    var editButton = document.getElementById("edit-button");
  
    reviewTextarea.disabled = false;
    sendButton.disabled = false;
    editButton.style.display = "none";
  
    adjustReviewBox(); // Adjust the review box height after enabling
  }
  
  document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var reviewTextarea = document.getElementById("review-textarea");
    var sendButton = document.getElementById("send-button");
    var editButton = document.getElementById("edit-button");
  
    reviewTextarea.disabled = true;
    sendButton.disabled = true;
    editButton.style.display = "inline-block";
  
    // You can perform your submission logic here, like sending the review to a server
  
    // Clear the review box after submission
    
    reviewTextarea.style.height = "auto"; // Reset the height to auto
  });
  
  document.getElementById("edit-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default button behavior
  
    editReview();
  });
  
  // Adjust the review box height initially
  adjustReviewBox();
  