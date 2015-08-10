
var metroApps = require('./lib/get-metro-apps');


metroApps().then(function(apps){

    console.log(JSON.stringify(apps, null, 2));

});
