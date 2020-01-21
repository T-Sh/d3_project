var current_task_num = 0;
var all_tasks = 6;

change_task = function() {
    let count = document.querySelector('.count_for_task');
    count.textContent = current_task_num + ' / ' + all_tasks;

    let current_task = document.querySelector('.current_task_main');
    current_task.innerHTML = (current_task_num+1) + '. ' + window.initialCode.tasks[current_task_num];
};

increase_task_num = function() {
    if (current_task_num < all_tasks)
        current_task_num++;
    window.top.setCode(window.initialCode.initialData[current_task_num]);
};

change_task();