var vg_1 = "visualisations/cropProductionLineChart.json";
var vg_2 = "visualisations/co2ProductionChoropleth.json";


vegaEmbed("#line_chart", vg_1).then(function(result) {
}).catch(console.error);

vegaEmbed("#choropleth_map", vg_2).then(function(result) {
}).catch(console.error);