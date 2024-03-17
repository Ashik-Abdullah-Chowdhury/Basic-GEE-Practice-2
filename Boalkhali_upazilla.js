var roi = ee.FeatureCollection("projects/ee-ashikabdullah/assets/bgd_admbnda_adm1_bbs_20180410");
// print(roi)
// print(roi.aggregate_array("ADM3_EN"))
var upzla=roi.filter(ee.Filter.eq("ADM3_EN","Boalkhali"))
var upzla1=roi.filter(ee.Filter.eq("ADM3_EN","Boalkhali")).geometry().area()
print("area of Boalkhali:",upzla1)
var upzla2=roi.filter(ee.Filter.eq("ADM3_EN","Boalkhali")).geometry().perimeter()
print("perimeter of Boalkhali:",upzla2)
var styleParams = {
  fillColor: 'blue',
  color: '00909F',
  width: 1.0,
};
// roi=upzla.style(styleParams);
Map.centerObject(upzla)
Map.addLayer(upzla.style(styleParams),{},"Boalkhali")