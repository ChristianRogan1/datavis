var vg_1 = "visualisations/cropProductionLineChart.json";
var vg_2 = "visualisations/co2ProductionChoropleth.json";
var vg_3 = "Visualisations/cropTypeBarChart.json";


vegaEmbed("#line_chart", vg_1).then(function(result) {
}).catch(console.error);

vegaEmbed("#choropleth_map", vg_2).then(function(result) {
}).catch(console.error);

vegaEmbed("#bar_chart", vg_3).then(function(result) {
}).catch(console.error);