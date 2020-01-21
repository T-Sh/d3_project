const jsEditor = ace.edit(document.querySelector('.js-editor'));
jsEditor.session.setMode("ace/mode/javascript");
jsEditor.setTheme("ace/theme/chrome");
jsEditor.setShowPrintMargin(false);

const jsInputs = ace.edit(document.querySelector('.js-inputs'));
jsInputs.session.setMode("ace/mode/javascript");
jsInputs.setTheme("ace/theme/chrome");

const inputHTML = window.initialCode.initialHTML;

setCode = function (text) {
    jsEditor.gotoLine(jsEditor.session.getLength()+1, 0);
    jsEditor.insert(text);
    jsEditor.clearSelection();
};

setInput = function (text) {
    jsInputs.insert(text);
    jsInputs.clearSelection();
};

setInput(window.initialCode.initialData[0]);

const getIframe = () => {
    const frame = document.createElement('iframe');
    frame.classList.add('js-preview');
    return frame;
};

const jsFrame = document.querySelector('.js-frame');

const makeChanges = () => {
    jsFrame.innerHTML = '';
    const frame = getIframe();
    jsFrame.appendChild(frame);
    const doc = frame.contentDocument;
    const script = doc.createElement('script');
    script.textContent = jsEditor.getValue();
    const inputs = doc.createElement('script');
    inputs.textContent = jsInputs.getValue();
    const style = doc.createElement('style');
    style.textContent = window.initialCode.initialStyle;
    doc.write(inputHTML);

    const image_diff = doc.createElement('script');
    const rast = doc.createElement('script');
    if (current_task_num === 5) {
        image_diff.src = 'lib/resemble/resemble.js';
        //image_diff.src = 'lib/js-imagediff/js/imagediff.js';
        rast.src = 'lib/rasterizeHTML.allinone.js';
    }

    const taskScript = doc.createElement('script');
    if (current_task_num < all_tasks) {
        taskScript.src = 'js/tasks/task_' + (current_task_num + 1) + '.js';
    }

    doc.addEventListener('DOMContentLoaded', () => {
        doc.head.appendChild(style);
        doc.body.appendChild(inputs);
        doc.body.appendChild(script);
        if (current_task_num === 5) {
            doc.body.appendChild(image_diff);
            doc.body.appendChild(rast);
        }
        doc.body.appendChild(taskScript);
    });

    change_task();

    doc.close();
};

let interval = null;
const onChange = () => {
    clearInterval(interval);
    interval = setTimeout(() => {
        makeChanges();
    }, 1500);
};
jsEditor.getSession().on('change', onChange);
jsInputs.getSession().on('change', onChange);
onChange();