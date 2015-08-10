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
 {
    "name": {
      "value": "Fresh Paint",
      "type": "String"
    },
    "company": {
      "value": "Microsoft Corporation",
      "type": "String"
    },
    "icon": {
      "value": "@{Microsoft.FreshPaint_3.0.15204.0_x86__8wekyb3d8bbwe?ms-resource://Microsoft.FreshPaint/Files/Assets/square44x44logo.png}",
      "location": "C:/Programs Files/WindowsApps/Microsoft.FreshPaint_3.0.15204.0_x86__8wekyb3d8bbwe",
      "uri": "ms-resource://Microsoft.FreshPaint/Files/Assets/square44x44logo.png",
      "type": "resource"
    },
    "description": {
      "value": "Fresh Paint",
      "type": "String"
    },
    "aumid": {
      "value": "Microsoft.FreshPaint_8wekyb3d8bbwe!Microsoft.FreshPaint",
      "type": "String"
    },
    "launch": {
      "normal": {
        "cmd": "\"C:\\Windows\\explorer.exe\" shell:AppsFolder\\Microsoft.FreshPaint_8wekyb3d8bbwe!Microsoft.FreshPaint",
        "startDir": "\"C:\\Windows\\\""
      },
      "streamable": {
        "cmd": "\"C:\\Windows\\System32\\cmd.exe\" /K explorer.exe shell:AppsFolder\\Microsoft.FreshPaint_8wekyb3d8bbwe!Microsoft.FreshPaint & echo \"Close Me to Exit: Type 'exit' and press enter\"",
        "startDir": "\"C:\\Windows\\System32\\\""
      }
    }
  }
```
The `aumid` stands for **AppUserModelID**.

The `streamable` section within `launch` is intended for use with Steam In-Home Streaming.
