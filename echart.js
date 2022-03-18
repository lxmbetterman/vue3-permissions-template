option = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(58,77,233,0.8)'
          },
          {
            offset: 1,
            color: 'rgba(58,77,233,0.3)'
          }
        ])
      },
      type: 'line',
      symbol: 'circle',
      symbolSize: 10,
      lineStyle: {
        color: '#5470C6',
        width: 1
        // type: 'dashed'
      },
      itemStyle: {
        borderWidth: 1,
        borderColor: '#EE6666',
        color: 'yellow'
      }
    }
  ]
}

