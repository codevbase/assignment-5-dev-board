document.getElementById("shop-ease").addEventListener("click", function() {
    const taskElement = document.getElementById("task-assign").innerText;
    const taskFinishElement = document.getElementById("task-finish").innerText;
    
    let task = parseInt(taskElement);
    task = task - 1;
    document.getElementById("task-assign").innerText = task;

    let taskFinish = parseInt(taskFinishElement);
    taskFinish = taskFinish + 1;
    document.getElementById("task-finish").innerText = taskFinish;


    document.getElementById("shop-ease").disabled = true;
    document.getElementById("shop-ease").style.backgroundColor = "gray-100";
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