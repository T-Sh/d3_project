const initialData = [
    `var width = ,
    height = ,
    start = 0,
    end = 2.25,
    numSpirals = ,
    margin = {top:50,bottom:50,left:50,right:50};`,

    'var svg = ',

    '',

    '\n\nsvg = svg.append("g")\n' +
    '    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");\n\n' +
    'var color = d3.scaleOrdinal(d3.schemeCategory10);\n\n' +
    'var r = d3.min([width, height]) / 2 - 40;\n\n' +
    'var radius = d3.scaleLinear()\n' +
    '    .domain([start, end])\n' +
    '    .range([40, r]);\n\n' +
    'var points = d3.range(start, end + 0.001, (end - start) / 1000);\n\n' +
    'var theta = function(/*Не забудьте параметр!*/) {\n\n' +
    '};\n\n' +
    'var spiral = d3.radialLine()\n' +
    '    .curve(d3.curveCardinal)\n' +
    '    .angle(theta)\n' +
    '    .radius(radius);',

    '\n\nvar path = ',

    '',

    '',

    '',

    ''
];

const initialHTML = `
<!DOCTYPE html>
<html lang="eng">
  <head title="D3">
    <style>
      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0;
      }
      svg {
        width: 90%;
        height: 99%;
      }
    </style>
    <script src="lib/d3/d3.js"></script>
  </head>
  <body>
    <div id="chart"></div>
  </body>
</html>
`;

const initialStyle = `
    body {
    font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', sans-serif;
}

.axis path {
    fill: none;
    stroke: #999;
    stroke-dasharray: 2 3;
}
.axis text {
    font-size: 13px;
    stroke: #222;
}
text.title {
    font-size: 24px;
}
circle.tick {
    fill: #f3f3f3;
    stroke: #999;
    stroke-dasharray: 2 3;
}
path.spiral {
    fill: none;
    stroke: #ee8d18;
    stroke-width: 3px;
}

.tooltip {
    background: #eee;
    box-shadow: 0 0 5px #999999;
    color: #333;
    font-size: 12px;
    left: 10px;
    padding: 10px;
    position: absolute;
    text-align: center;
    top: 10px;
    z-index: 10;
    display: block;
    opacity: 0;
}

::-webkit-scrollbar-corner {
  background-color: inherit;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #f89c43, #c1554f);
  border-radius: 10px;
}`;

let tasks = [
    'Установим начальные значения. Они пригодятся нам в дальнейшем.<br>Установите высоту и ширину равными 500, количество спиралей: 3.',

    'Переходим на вкладку Script. Добавим svg на форму с <u>id = chart</u>. С помощью d3 это делается следующим образом:<br> ' +
    '<u>d3.select("элемент").append("название создаваемого тэга")</u>.<br>Сохраним svg в соответствующей переменной.',

    'Теперь необходимо задать атрибуты svg. Это делается так:<br><u>элемент.attr("название атрибута", значение)</u>.<br>' +
    'Добавим высоту и ширину svg. Они соответственно складываются из высоты и ширины из пункта 1 и правого и левого отступов ' +
    '(например, <u>margin.left</u>).',

    'Введем некоторые промежуточные переменные. Практически готово, вам осталось только дописать функцию theta.<br>' +
    'Она должна получать параметр и возвращать значение:<br>' +
    '<u>&pi; * количество спиралей * параметр</u>.',

    'Настало время нарисовать спираль. Добавим в svg элемент <u>path</u>, как делали раньше.<br>' +
    'Поместим данные <u>points</u> методом <u>datum</u>:<br>' +
    '<u>элемент.datum(points)</u>.<br>' +
    'Зададим атрибуты <u>id: "spiral"</u> и <u>d: spiral</u>.',

    'Кажется, это не совсем спираль. Стилизуем ее соответсвующе. Добавим <u>path</u> стили <u>fill: none</u> и <u>stroke: цвет</u>:<br>' +
    '<u>элемент.style("название", "значение")</u>.',

    'Конец)',
];

window.initialCode = {
    initialData,
    initialHTML,
    initialStyle,
    tasks
};