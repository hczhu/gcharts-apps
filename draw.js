function drawLines(title, formats, names, rawData, div, vformat, hformat, vname) {
  if (rawData.length == 0) {
    throw "Empty data array";
  }
  var dim = names.length;
  if (rawData[0].length != dim) {
    throw "data dimension " + rawData[0].length + " doesn't match name dimension " + dim;
  }
  while (formats.length < dim) {
    formats.push('number');
  }
  var data = new google.visualization.DataTable();
  for (var i = 0; i < dim; ++i) {
    data.addColumn(formats[i], names[i]);
  }
  data.addRows(rawData);
  var options = {
    interpolateNulls: true,
    title: title,
    crosshair: {
      color: '#800080',
      trigger: 'selection',
    },
    chartArea: {
      // left: 80,
      // right:50, // !!! works !!!
      // bottom:50,  // !!! works !!!
      top: 50,
      // height: "100%",
      // width: "100%"
    },
    height: 800,
    width: '100%',
    lineWidth: 2,
    pointSize: 3,
    legend: { position: 'right' },
    hAxis: {
             title: names[0],
             gridlines: { count: -1 },
             format: hformat,
    },
    vAxis: {
             title: vname,
             gridlines: { count: -1 },
             format: vformat,
    },
    explorer: {
                actions: ['dragToZoom', 'rightClickToReset'],
                axis: 'horizontal',
                keepInBounds: true,
                maxZoomIn: 0.1,
    }
  };
  
  var chart = new google.visualization.LineChart(div);
  chart.draw(data, options);
}
