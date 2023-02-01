import { Component } from 'react';
import {VictoryChart, VictoryLine,VictoryTheme }from 'Victory';
import { Div } from "atomize";
import {React } from "react";
const LineData = [
  ['x', 'dogs', 'cats'],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
]
const LineChartOptions = {
  hAxis: {
    title: 'Time',
  },
  vAxis: {
    title: 'Popularity',
  },
  series: {
    1: { curveType: 'function' },
  },
}
class Graph extends Component {
  render() {
    return (
      <Div>
      <VictoryChart
  theme={VictoryTheme.material}
>
  <VictoryLine
    style={{
      data: { stroke: "#ff9b00" },
      parent: { border: "1px solid #ccc"}
    }}
    data={[
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 4 },
      { x: 5, y: 7 }
    ]}
  />
   <VictoryLine
    style={{
      data: { stroke: "green" },
      parent: { border: "1px solid #ccc"}
    }}
    data={[
      { x: 1, y: 5 },
      { x: 2, y: 3 },
      { x: 3, y: 6 },
      { x: 4, y: 3 },
      { x: 5, y: 7 }
    ]}
  />
   <VictoryLine
    style={{
      data: { stroke: "yesllow" },
      parent: { border: "1px solid #ccc"}
    }}
    data={[
      { x: 1, y: 3 },
      { x: 2, y: 5 },
      { x: 3, y: 4 },
      { x: 4, y: 7 },
      { x: 5, y: 4 }
    ]}
  />
</VictoryChart>
      </Div>
    )
  }
}
export default Graph