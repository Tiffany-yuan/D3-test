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
    .domain([d3.min(dataset),d3.max(dataset)])
    .rangeRound([0,500])
liner(3)
liner(33.6)

// 序数比例尺
var index = [0, 1, 2, 3, 4];
var color = ["red", "blue", "green", "yellow", "black"];
var ordinal = d3.scale.ordinal()
    .domain(index)
    .range(color);

ordinal(0); //返回 red
ordinal(2); //返回 green
ordinal(4); //返回 black