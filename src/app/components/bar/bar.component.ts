import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import { Interval } from 'src/app/models/interval';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit, OnChanges {
  svg: any;
  margin: number;
  height: number;
  width: number;
  title: string
  @Input() numeroEstratto: number
  @Input() data: Interval[];
  @Input() weel:string

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.svg;
    this.margin = 50;
    this.width = 450 - (this.margin * 2);
    this.height = 400 - (this.margin * 2);
    console.log("changes", changes.data)
    //this.createSvg(); 
    if(!this.svg){
      this.createSvg()
    }
    else{
      this.svg.selectAll("g >*").remove()// remove all the g elements to reset the svg
      this.createSvg()
      this.drawBars(this.data)
    }
    if(changes.data){
      this.drawBars(this.data);
  }
    if (changes.numeroEstratto) {
      this.title = `intervalli del ${this.numeroEstratto} sulla ruota di ${this.weel} fino al ${this.data[this.data.length-1].date}`
    }
  }

  createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")")
    //.text(`intervalli per ${this.numeroEstratto} `);
  }

  private drawBars(data: any[]): void {
    if(data){
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.id))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 150])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.append("path")
      .datum(data).attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function (d) { return x(d['id']) })
        .y(function (d) { return y(d['interval']) })
      )

    //div for text on hover
    var div = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0); // div hidden at start



    // Add dots
    const dots = this.svg.append('g');
    dots.selectAll("dot")
      .data(this.data)
      .enter()
      .append("circle")
      .attr("cx", d => x(d['id']))
      .attr("cy", d => y(d['interval']))
      .attr("r", 5)
      .style("opacity", .5)
      .style("fill", "#69b3a2")
      .on('mouseover', function (d, i) {
        d3.select(this).transition().duration(500)
          .attr('r', 7)
        div.transition()
          .duration(100)
          .style("opacity", 1) // tooltip div is visible
        div.html(`${i['interval']}- ${i['date']}`)
          .style("left", (d.pageX + 10) + "px")
          .style("top", (d.pageY - 15) + "px");
      })
      .on('mouseout', function (d, i) {
        d3.select(this).transition()
          .duration(200)
          .attr('r', 5)
        div.transition()
          .duration(200)
          .style('opacity', 0) // div tooltip hidden
      })

    // Add labels
    /*     dots.selectAll("text")
        .data(this.data)
        .enter()
        .append("text")
        .text(d => d['date'])
        .attr("x", d => x(d['id']))
        .attr("y", d => y(d['interval'])) */

    /* .selectAll("bars")
    .data(this.data)
    .enter()
    .append("rect")
    .attr("x", d => x(d.id))
    .attr("y", d => y(d.interval))
    .attr("width", x.bandwidth())
    .attr("height", (d) => this.height - y(d.interval))
    .attr("fill", "#d04a35"); */
}  }

  ngOnInit() {
    this.svg;
    this.margin = 50;
    this.width = 450 - (this.margin * 2);
    this.height = 400 - (this.margin * 2);

    this.createSvg();
    //this.drawBars(this.data);
  }

}
