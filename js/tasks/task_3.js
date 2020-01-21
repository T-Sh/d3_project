let right_svg = document.querySelector('#chart').querySelector('svg');
if (right_svg.getAttribute("width") == width + margin.left + margin.right &&
    right_svg.getAttribute("height") == height + margin.left + margin.right) {
    window.top.increase_task_num();
    window.top.change_task();
}