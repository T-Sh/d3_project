let user_path = document.querySelector('#chart').querySelector('svg').querySelector('path');

svg.append("temp_path")
    .datum(points)
    .attr("id", "new_spiral")
    .attr("d", spiral)
    .attr("visibility", "hidden");

let right_path = document.querySelector('#chart').querySelector('svg').querySelector('temp_path');

if (user_path != null) {
    let check = user_path.getAttribute("id") === "spiral"
        && user_path.getAttribute("d") === right_path.getAttribute("d");
    if (check) {
        window.top.increase_task_num();
        window.top.change_task();
    }
}