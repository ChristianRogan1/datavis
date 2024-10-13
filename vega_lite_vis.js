var vg_1 = "visualisations/cropProductionLineChart.json";
var vg_2 = "visualisations/co2ProductionChoropleth.json";
var vg_3 = "visualisations/cropTypeBarChart.json";
var vg_4 = "visualisations/IrragationAccessChoropleth.json";
var vg_5 = "visualisations/economicImpactExtremeWeather.json"



vegaEmbed("#line_chart", vg_1).then(function(result) {
}).catch(console.error);

vegaEmbed("#choropleth_map", vg_2).then(function(result) {
}).catch(console.error);

vegaEmbed("#bar_chart", vg_3).then(function(result) {
}).catch(console.error);

vegaEmbed("#irrigation_choropleth_map", vg_4).then(function(result) {
}).catch(console.error);

vegaEmbed("#Economic_line_chart", vg_5).then(function(result) {
}).catch(console.error);