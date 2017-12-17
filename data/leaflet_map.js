db.layercollection.insert({
    "type": "MultiPoint",
    "name": "points",
    "color": "#0000ff",
    "style": {
        "radius": 8,
        "fillColor": "#00ce00",
        "color": "#008c00",
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 1
    },
    "coordinates": [
        [-73.9580, 40.8003],
        [-73.9498, 40.7968],
        [-73.9737, 40.7648],
        [-73.9814, 40.7681]
    ]
})

db.layercollection.insert({
    "type": "MultiLineString",
    "name": "lines",
    "style": {
        "color": "#ff46b5",
        "weight": 10,
        "opacity": 0.85
    },
    "coordinates": [
        [[-73.96943, 40.78519], [-73.96082, 40.78095]],
        [[-73.96415, 40.79229], [-73.95544, 40.78854]],
        [[-73.97162, 40.78205], [-73.96374, 40.77715]],
        [[-73.97880, 40.77247], [-73.97036, 40.76811]]
    ]
})

db.layercollection.insert({
    "type": "FeatureCollection",
    "name": "polygons",
    "features":
        [{
            "type": "Feature",
            "properties": {"style": "Orange", "name": "Orange"},
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [-73.9814, 40.7681], [-73.958, 40.8003], [-73.9737, 40.7648], [-73.9814, 40.7681]
                ]]
            }
        }, {
            "type": "Feature",
            "properties": {"style": "Blue", "name": "Blue"},
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [-73.958, 40.8003], [-73.9498, 40.7968], [-73.9737, 40.7648], [-73.958, 40.8003]
                ]]
            }
        }]
})