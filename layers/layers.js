var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PARCELA_1 = new ol.format.GeoJSON();
var features_PARCELA_1 = format_PARCELA_1.readFeatures(json_PARCELA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARCELA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARCELA_1.addFeatures(features_PARCELA_1);
var lyr_PARCELA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PARCELA_1, 
                style: style_PARCELA_1,
                interactive: true,
                title: '<img src="styles/legend/PARCELA_1.png" /> PARCELA'
            });
var format_ARBOLES_2 = new ol.format.GeoJSON();
var features_ARBOLES_2 = format_ARBOLES_2.readFeatures(json_ARBOLES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARBOLES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARBOLES_2.addFeatures(features_ARBOLES_2);
var lyr_ARBOLES_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ARBOLES_2, 
                style: style_ARBOLES_2,
                interactive: true,
                title: '<img src="styles/legend/ARBOLES_2.png" /> ARBOLES'
            });
var format_MADRES_RIEGO_3 = new ol.format.GeoJSON();
var features_MADRES_RIEGO_3 = format_MADRES_RIEGO_3.readFeatures(json_MADRES_RIEGO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MADRES_RIEGO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MADRES_RIEGO_3.addFeatures(features_MADRES_RIEGO_3);
var lyr_MADRES_RIEGO_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MADRES_RIEGO_3, 
                style: style_MADRES_RIEGO_3,
                interactive: true,
                title: '<img src="styles/legend/MADRES_RIEGO_3.png" /> MADRES_RIEGO'
            });
var format_GOTEO_SECTOR_3_4 = new ol.format.GeoJSON();
var features_GOTEO_SECTOR_3_4 = format_GOTEO_SECTOR_3_4.readFeatures(json_GOTEO_SECTOR_3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GOTEO_SECTOR_3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GOTEO_SECTOR_3_4.addFeatures(features_GOTEO_SECTOR_3_4);
var lyr_GOTEO_SECTOR_3_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GOTEO_SECTOR_3_4, 
                style: style_GOTEO_SECTOR_3_4,
                interactive: true,
                title: '<img src="styles/legend/GOTEO_SECTOR_3_4.png" /> GOTEO_SECTOR_3'
            });
var format_GOTEO_SECTOR_2_5 = new ol.format.GeoJSON();
var features_GOTEO_SECTOR_2_5 = format_GOTEO_SECTOR_2_5.readFeatures(json_GOTEO_SECTOR_2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GOTEO_SECTOR_2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GOTEO_SECTOR_2_5.addFeatures(features_GOTEO_SECTOR_2_5);
var lyr_GOTEO_SECTOR_2_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GOTEO_SECTOR_2_5, 
                style: style_GOTEO_SECTOR_2_5,
                interactive: true,
                title: '<img src="styles/legend/GOTEO_SECTOR_2_5.png" /> GOTEO_SECTOR_2'
            });
var format_GOTEO_SECTOR_1_6 = new ol.format.GeoJSON();
var features_GOTEO_SECTOR_1_6 = format_GOTEO_SECTOR_1_6.readFeatures(json_GOTEO_SECTOR_1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GOTEO_SECTOR_1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GOTEO_SECTOR_1_6.addFeatures(features_GOTEO_SECTOR_1_6);
var lyr_GOTEO_SECTOR_1_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GOTEO_SECTOR_1_6, 
                style: style_GOTEO_SECTOR_1_6,
                interactive: true,
                title: '<img src="styles/legend/GOTEO_SECTOR_1_6.png" /> GOTEO_SECTOR_1'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_PARCELA_1.setVisible(true);lyr_ARBOLES_2.setVisible(true);lyr_MADRES_RIEGO_3.setVisible(true);lyr_GOTEO_SECTOR_3_4.setVisible(true);lyr_GOTEO_SECTOR_2_5.setVisible(true);lyr_GOTEO_SECTOR_1_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_PARCELA_1,lyr_ARBOLES_2,lyr_MADRES_RIEGO_3,lyr_GOTEO_SECTOR_3_4,lyr_GOTEO_SECTOR_2_5,lyr_GOTEO_SECTOR_1_6];
lyr_PARCELA_1.set('fieldAliases', {'Id': 'Id', 'Layer': 'Layer', 'Longitud': 'Longitud', });
lyr_ARBOLES_2.set('fieldAliases', {'Id': 'Id', 'Layer': 'Layer', 'Longitud': 'Longitud', });
lyr_MADRES_RIEGO_3.set('fieldAliases', {'Id': 'Id', 'Layer': 'Layer', 'Longitud': 'Longitud', });
lyr_GOTEO_SECTOR_3_4.set('fieldAliases', {'Id': 'Id', 'Layer': 'Layer', 'Longitud': 'Longitud', });
lyr_GOTEO_SECTOR_2_5.set('fieldAliases', {'Id': 'Id', 'Layer': 'Layer', 'Longitud': 'Longitud', });
lyr_GOTEO_SECTOR_1_6.set('fieldAliases', {'Id': 'Id', 'Layer': 'Layer', 'Longitud': 'Longitud', });
lyr_PARCELA_1.set('fieldImages', {'Id': 'TextEdit', 'Layer': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_ARBOLES_2.set('fieldImages', {'Id': 'TextEdit', 'Layer': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_MADRES_RIEGO_3.set('fieldImages', {'Id': 'TextEdit', 'Layer': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_GOTEO_SECTOR_3_4.set('fieldImages', {'Id': 'TextEdit', 'Layer': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_GOTEO_SECTOR_2_5.set('fieldImages', {'Id': 'TextEdit', 'Layer': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_GOTEO_SECTOR_1_6.set('fieldImages', {'Id': 'TextEdit', 'Layer': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_PARCELA_1.set('fieldLabels', {'Id': 'no label', 'Layer': 'no label', 'Longitud': 'no label', });
lyr_ARBOLES_2.set('fieldLabels', {'Id': 'no label', 'Layer': 'no label', 'Longitud': 'no label', });
lyr_MADRES_RIEGO_3.set('fieldLabels', {'Id': 'no label', 'Layer': 'no label', 'Longitud': 'no label', });
lyr_GOTEO_SECTOR_3_4.set('fieldLabels', {'Id': 'no label', 'Layer': 'no label', 'Longitud': 'no label', });
lyr_GOTEO_SECTOR_2_5.set('fieldLabels', {'Id': 'no label', 'Layer': 'no label', 'Longitud': 'no label', });
lyr_GOTEO_SECTOR_1_6.set('fieldLabels', {'Id': 'header label', 'Layer': 'header label', 'Longitud': 'header label', });
lyr_GOTEO_SECTOR_1_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});