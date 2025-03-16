document.addEventListener("DOMContentLoaded", () => {
    // Grab the form and task list elements
    const taskForm = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    // Add event listener to handle task submission
    taskForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Stop the page from refreshing when submitting
  
      // Get the task input value and remove any extra spaces
      const taskInput = document.getElementById("new-task-description");
      const taskText = taskInput.value.trim();
  
      // Only add the task if the input field is not empty
      if (taskText !== "") {
        // Create a new list item for the task
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
  
        // Create a delete button for removing tasks
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌"; // X icon for delete
        deleteBtn.style.marginLeft = "10px"; // Add spacing for better UI
        deleteBtn.style.cursor = "pointer"; // Make it look clickable
  
        // Add event listener to remove the task when delete button is clicked
        deleteBtn.addEventListener("click", function () {
          taskItem.remove(); // Remove the task from the list
        });
  
        // Attach the delete button to the task item
        taskItem.appendChild(deleteBtn);
  
        // Add the new task to the task list
        taskList.appendChild(taskItem);
  
        // Clear the input field after adding the task
        taskInput.value = "";
      }
    });
  });
  