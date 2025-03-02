// document.getElementById("shop-ease").addEventListener("click", function() {
//     const taskElement = document.getElementById("task-assign").innerText;
//     const taskFinishElement = document.getElementById("task-finish").innerText;
    
//     let task = parseInt(taskElement);
//     task = task - 1;
//     document.getElementById("task-assign").innerText = task;

//     let taskFinish = parseInt(taskFinishElement);
//     taskFinish = taskFinish + 1;
//     document.getElementById("task-finish").innerText = taskFinish;


//     document.getElementById("shop-ease").disabled = true;
//     document.getElementById("shop-ease").style.backgroundColor = "gray-100";
// });
const buttons  = document.getElementsByClassName("ok-btn");
const issues = document.getElementsByClassName("issue");



let i = 0;
for(const button of buttons) {
    const index = i;
    button.addEventListener("click", function() {
        alert("board updated successfully");
        const taskElement = document.getElementById("task-assign").innerText;
        const taskFinishElement = document.getElementById("task-finish").innerText;
        
        let task = parseInt(taskElement);
        task = task - 1;
        document.getElementById("task-assign").innerText = task;

        let taskFinish = parseInt(taskFinishElement);
        taskFinish = taskFinish + 1;
        document.getElementById("task-finish").innerText = taskFinish;


        const now = new Date();
        const time = now.toLocaleTimeString();


        
        

        const historyElement = document.getElementById("history");
        // const newElement = document.createElement("li");
        // newElement.innerText = "Task completed successfully";
        // historyElement.appendChild(newElement);
        historyElement.innerHTML += 
        `
        <p class="bg-slate-100 p-1 text-xs rounded-md">you have compeleted the task ${issues[index].innerText}
        at ${time}</p>
        `;

    
       
        button.disabled = true;
        button.style.backgroundColor = "gray-100";

        

        

        if(task === 0) {
            alert("Congrates!!! You have completed all the current tasks.");
        }

        

    });
    i++;
    
}


document.getElementById("clear-history").addEventListener("click", function() {
    const historyElement = document.getElementById("history");
    historyElement.innerHTML = "";
});


function updateDate() {
    const date = new Date();

    let options = {day: 'numeric', month: 'long', year: 'numeric' };
    let today = date.toLocaleDateString('en-GB', options);
    let weekDay = date.toLocaleDateString('en-GB', {weekday: 'long'});

    
    document.getElementById("weekday").innerText = weekDay;
    document.getElementById("show-date").innerText = today;
}
updateDate();

document.getElementById("theme-btn").addEventListener("click", function() {
    document.body.style.backgroundColor = getBgColor();

});