var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Ortomosaico_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ortomosaico<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Ortomosaico_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-3873818.114056, -798017.289231, -3873470.881801, -797630.468915]
        })
    });
var format_FotosRV360_3 = new ol.format.GeoJSON();
var features_FotosRV360_3 = format_FotosRV360_3.readFeatures(json_FotosRV360_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FotosRV360_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FotosRV360_3.addFeatures(features_FotosRV360_3);
var lyr_FotosRV360_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FotosRV360_3, 
                style: style_FotosRV360_3,
                popuplayertitle: 'Fotos RV 360°',
                interactive: true,
                title: '<img src="styles/legend/FotosRV360_3.png" /> Fotos RV 360°'
            });
var format_VideoRV360_4 = new ol.format.GeoJSON();
var features_VideoRV360_4 = format_VideoRV360_4.readFeatures(json_VideoRV360_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VideoRV360_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VideoRV360_4.addFeatures(features_VideoRV360_4);
var lyr_VideoRV360_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VideoRV360_4, 
                style: style_VideoRV360_4,
                popuplayertitle: 'Video RV 360°',
                interactive: true,
                title: '<img src="styles/legend/VideoRV360_4.png" /> Video RV 360°'
            });
var format_Inciodovdeo_5 = new ol.format.GeoJSON();
var features_Inciodovdeo_5 = format_Inciodovdeo_5.readFeatures(json_Inciodovdeo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inciodovdeo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inciodovdeo_5.addFeatures(features_Inciodovdeo_5);
cluster_Inciodovdeo_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Inciodovdeo_5
});
var lyr_Inciodovdeo_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Inciodovdeo_5, 
                style: style_Inciodovdeo_5,
                popuplayertitle: 'Início do vídeo',
                interactive: true,
                title: '<img src="styles/legend/Inciodovdeo_5.png" /> Início do vídeo'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Ortomosaico_2.setVisible(true);lyr_FotosRV360_3.setVisible(true);lyr_VideoRV360_4.setVisible(true);lyr_Inciodovdeo_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_Ortomosaico_2,lyr_FotosRV360_3,lyr_VideoRV360_4,lyr_Inciodovdeo_5];
lyr_FotosRV360_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'longitude': 'longitude', 'latitude': 'latitude', 'altitude': 'altitude', 'azimuth': 'azimuth', 'date_time': 'Data hora', 'path': 'path', 'fabricante': 'fabricante', 'modelo': 'modelo', 'url': 'url', 'HTML 360': 'HTML 360', });
lyr_VideoRV360_4.set('fieldAliases', {'fid': 'fid', 'Descrição': 'Descrição', 'URL': 'URL', 'Video360': 'Video360', 'QRCode': 'QRCode', });
lyr_Inciodovdeo_5.set('fieldAliases', {'fid': 'fid', 'Descrição': 'Descrição', 'URL': 'URL', 'Ver360': 'Ver360', 'QRCode': 'QRCode', });
lyr_FotosRV360_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'altitude': 'TextEdit', 'azimuth': 'Range', 'date_time': 'TextEdit', 'path': 'ExternalResource', 'fabricante': 'TextEdit', 'modelo': 'TextEdit', 'url': 'TextEdit', 'HTML 360': 'TextEdit', });
lyr_VideoRV360_4.set('fieldImages', {'fid': 'TextEdit', 'Descrição': 'TextEdit', 'URL': 'TextEdit', 'Video360': 'TextEdit', 'QRCode': 'TextEdit', });
lyr_Inciodovdeo_5.set('fieldImages', {'fid': 'TextEdit', 'Descrição': 'TextEdit', 'URL': 'TextEdit', 'Ver360': 'TextEdit', 'QRCode': 'TextEdit', });
lyr_FotosRV360_3.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'altitude': 'hidden field', 'azimuth': 'hidden field', 'date_time': 'no label', 'path': 'hidden field', 'fabricante': 'hidden field', 'modelo': 'hidden field', 'url': 'hidden field', 'HTML 360': 'no label', });
lyr_VideoRV360_4.set('fieldLabels', {'fid': 'hidden field', 'Descrição': 'inline label - always visible', 'URL': 'hidden field', 'Video360': 'no label', 'QRCode': 'no label', });
lyr_Inciodovdeo_5.set('fieldLabels', {'fid': 'hidden field', 'Descrição': 'header label - visible with data', 'URL': 'hidden field', 'Ver360': 'no label', 'QRCode': 'no label', });
lyr_Inciodovdeo_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});