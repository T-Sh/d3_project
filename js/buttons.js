const workspace = document.querySelector('.workspace');

// Смена темы
const btn_theme = document.querySelector('.btn_theme');
btn_theme.onclick = function() {
    const menu = document.querySelector('.main-menu');
    const task = document.querySelector('.task');
    const modal = document.querySelector('.modal');
    if (workspace.classList.contains('dark_back')) {
        workspace.classList.remove('dark_back');
        menu.classList.remove('grey_back');
        jsEditor.setTheme("ace/theme/chrome");
        jsInputs.setTheme("ace/theme/chrome");
        task.classList.remove('grey_back');
        modal.classList.remove('grey_back');
        const styles = document.head.getElementsByTagName('style');
        document.head.removeChild(styles[styles.length-1]);
    } else {
        workspace.classList.add('dark_back');
        menu.classList.add('grey_back');
        jsEditor.setTheme("ace/theme/twilight");
        jsInputs.setTheme("ace/theme/twilight");
        task.classList.add('grey_back');
        modal.classList.add('grey_back');
        const style = document.createElement('style');
        style.textContent = '::-webkit-scrollbar-track {\n' +
            '  background-color: #141414;\n' +
            '}\n' +
            '\n' +
            '::-webkit-scrollbar {\n' +
            '  width: 10px;\n' +
            '  background-color: #141414;\n' +
            '}' +
            '::-webkit-scrollbar-corner {\n' +
            '  background-color: #141414;\n' +
            '}';
        document.head.appendChild(style);
    }
};

// Очищение поля
const btn_clear = document.querySelector('.btn_clear');

// Сохранение скрипта
const  btn_save = document.querySelector('.btn_save');
btn_save.onclick = function () {
    console.log(document.querySelector('.js-preview'));
        const data = document.querySelector('.js-frame').innerHTML;
        console.log(data);
        this.href = 'data:html/javascript;charset=utf-8,'
            + encodeURIComponent(data);
        this.target = '_blank';
        this.download = 'spiral.html';
};

const task = document.querySelector('.task');
const overlay = document.querySelector('.overlay');

// Закрыть модальное окно
const btn_close_task = document.querySelector('.task');
btn_close_task.onclick = function () {
    task.classList.add('task_close');
    overlay.classList.add('task_close');
};
overlay.onclick = btn_close_task.onclick;