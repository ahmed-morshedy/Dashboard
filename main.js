// iconDeleteTask.forEach((icon) => {
//   icon.addEventListener("click", (e) => {
//     const task = e.target.parentElement;
//     task.remove();
//     const taskDiv = document.querySelectorAll(".task > div");
//     if (taskDiv.length == 0) {
//       const noTask = document.createElement("div");
//       noTask.innerHTML = "No Tasks Available!";
//       noTask.classList.add("no-task");
//       document.body.querySelector(".task").appendChild(noTask);
//     }
//   });
// });

function deleteitem(item, parentDiv, massage) {
  item.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      const task = e.target.parentElement;
      task.remove();
      const parentdiv = document.querySelectorAll(`${parentDiv} div`);
      if (parentdiv.length == 0) {
        const noTask = document.createElement("div");
        noTask.innerHTML = massage;
        noTask.classList.add("no-task");
        document.body.querySelector(`${parentDiv}`).appendChild(noTask);
      }
    });
  });
}

//delete Task
const iconDeleteTask = document.querySelectorAll(" .task .delete");
deleteitem(iconDeleteTask, ".task", "No Tasks Available!");

//detete friend
const aDeleteFriend = document.querySelectorAll(".friend .delete");
deleteitem(aDeleteFriend, ".friends-page", "No Friend Available!");
