# get-metro-apps
Get promise of details for all installed Metro apps

## Usage
```
npm i get-metro-apps
```

```javascript
var metroApps = require('get-metro-apps');

metroApps().then(function(details){
  console.log(JSON.stringify(details,null,2));
});

```

## Details

The promise returns an array of objects with details about the installed metro apps, as well as some helpful info for launching the apps.

An example of such an object is:
```javascript

```
