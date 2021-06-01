const rawSites = require('./sites.js');

// GEO JSON specification
// {
//     "type": "Feature",
//     "geometry": {
//       "type": "Point",
//       "coordinates": [125.6, 10.1]
//     },
//     "properties": {
//       "name": "Dinagat Islands"
//     }
//   }

const sites = []

rawSites.forEach((item, index) => {
    site = new Object({
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [item.Longitude, item.Latitude]
        },
        "properties": {
          "name": item.Site_Name,
          "batch": item.Batch,
          "cellid": item.Cell_ID,
          "survey": item.Survey,
          "kabupaten": item.Kabupaten,
          "kecamatan": item.Kecamatan
        }
    });
    if (!site.geometry.coordinates.includes(NaN)) {
        sites.push(site)
    };
});

sites.forEach((site) => {
    console.log(site);
});


