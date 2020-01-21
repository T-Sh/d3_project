var right_theta = function(r) {
    return numSpirals * Math.PI * r;
};

let check = true;

for (let i = 0; i < 5; i++) {
    let temp = Math.random();
    check = (Math.round(right_theta(temp)*1000 / 1000)) === (Math.round(theta(temp) * 1000 / 1000));
    if (!check) {
        break;
    }
}

if (check) {
    window.top.increase_task_num();
    window.top.change_task();
}