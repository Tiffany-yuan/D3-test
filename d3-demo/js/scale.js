//append()
d3.select('body')
    .append('p')
    .text('append lalala')

//insert()
d3.select('body')
    .insert('p')
    .text('insert lalala')

// 线性比例尺
var dataset = [1, 4, 3, 78, 2, 33.6, 67.2];
var liner = d3.scale.linear()
    .domain([0,10])
    .rangeRound([0,500])
liner(3)
liner(33.6)

// 序数比例尺 --- 将离散的domain values array映射为离散的range values array
var index = [0, 1, 2, 3, 4];
var color = ["red", "blue", "green", "yellow", "black"];
    var ordinal = d3.scale.ordinal()
    .domain(index)
    .range(color);

ordinal(0); //返回 red
ordinal(2); //返回 green
ordinal(4); //返回 black

// quantize --- 将输入的连续的domain值映射为离散的值
var index = [0, 1, 2, 3, 4];
var color = ["red", "blue", "green", "yellow", "black"];
var quantize = d3.scale.quantize()
    .domain(index)
    .range(color);

quantize(0.3)  // red
quantize(2.5)  // yellow
/*
*  u < 0.8          red
*  0.8 <= u < 1.6   blue
*  1.6 <= u < 2.4   green
*  2.4 <= u < 3.2   yellow
*  3.2 <= u         black
* */
