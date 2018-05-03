var dataset = [30,36,45,132,89,164,43,27]
var width = 400
var height = 400
var padding = {top: 20, right: 20, bottom: 20, left: 50}
var svg = d3.select('body')
    .append('svg')
    .attr('width',width)
    .attr('height',height)

var xScale = d3.scale.ordinal()
    .domain(d3.range(dataset.length))
    .rangeRoundBands([0,width - padding.left - padding.right],0.2)

var yScale = d3.scale.linear()
    .domain([0,d3.max(dataset)])
    .range([height - padding.top - padding.bottom,0])

var xAxis = d3.svg.axis()// d3中坐标轴的组件，能够在svg中生成坐标轴的元素
    .scale(xScale)
    .orient('bottom')

var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient('left')

var rect = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('fill','steelblue')
    .attr('x',function (d,i) {
        return padding.left + xScale(i)
    })
    .attr('y',function (d) {
        return yScale(0) + padding.bottom
    })
    .attr('width',xScale.rangeBand())
    .attr('height',function () {
        return 0
    })
    .transition()
    .delay(function(d,i){
        return i * 200;
    })
    .duration(2000)
    .ease("bounce")
    .attr('y',function (d) {
        return yScale(d) + padding.bottom
    })
    .attr('height',function (d) {
        return height - padding.top - padding.bottom - yScale(d)
    })

var text = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .attr('fill','white')
    .attr('font-size','14px')
    .attr('text-anchor','middle')
    .attr('x',function (d,i) {
        return padding.left + xScale(i)
    })
    .attr('dx', xScale.rangeBand()/2)
    .attr('dy','1em')
    .text(function (d) {
        return d
    })
    .attr('y',function () {
        return yScale(0) + padding.bottom
    })
    .transition()
    .delay(function(d,i){
        return i * 200;
    })
    .duration(2000)
    .ease("bounce")
    .attr('y',function (d) {
        return yScale(d)+ padding.bottom
    })

svg.append('g')
    .attr('class','axis')
    .attr('transform','translate(' + padding.left + ',' + (height - padding.bottom) + ')')
    .call(xAxis)  //d3中的call的参数是一个函数，调用后，将当前的选择集作为参数传递给此函数；svg.append("g").call(xAxis)和xAxis(svg.append("g"))是相等的

svg.append('g')
    .attr('class','axis')
    .attr('transform','translate(' + padding.left + ',' + padding.top + ')')
    .call(yAxis)



// 散点图
var datasetScatter = [[1.1,34],[5.6,67],[2,59],[6,125],[2.7,43]];

var svgScatter = d3.select('body')
    .append('svg')
    .attr('class',svgScatter)
    .attr('width',width)
    .attr('height',height)

var xScaleScatter = d3.scale.linear()
    .domain([0, d3.max(datasetScatter,function (d) {
        return d[0]
    })])
    .range([0, width - padding.left - padding.right])

var yScaleScatter = d3.scale.linear()
    .domain([0, d3.max(datasetScatter,function (d) {
        return d[1]
    })])
    .range([ height - padding.top - padding.bottom , 0])

var xAxisScatter = d3.svg.axis()// d3中坐标轴的组件，能够在svg中生成坐标轴的元素
    .scale(xScaleScatter)
    .orient('bottom')
    .ticks(5)

var yAxisScatter = d3.svg.axis()
    .scale(yScaleScatter)
    .orient('left')

var circle = svgScatter.selectAll('rect')
    .data(datasetScatter)
    .enter()
    .append('circle')
    .attr('fill','steelblue')
    .attr('cx',function (d) {
        return padding.left + xScaleScatter(d[0])
    })
    .attr('cy',function (d) {
        return yScaleScatter(0) + padding.bottom
    })
    .attr('r',0)
    .transition()
    .delay(function(d,i){
        return i * 200;
    })
    .duration(2000)
    .ease("linear")
    .attr('cy',function (d) {
        return yScaleScatter(d[1]) + padding.bottom
    })
    .attr('r',5)

svgScatter.append('g')
    .attr('class','axis')
    .attr('transform','translate(' + padding.left + ',' + (height - padding.bottom) + ')')
    .call(xAxisScatter)  //d3中的call的参数是一个函数，调用后，将当前的选择集作为参数传递给此函数；svg.append("g").call(xAxis)和xAxis(svg.append("g"))是相等的

svgScatter.append('g')
    .attr('class','axis')
    .attr('transform','translate(' + padding.left + ',' + padding.top + ')')
    .call(yAxisScatter)

