
var appFolder = 'C:/Programs Files/WindowsApps/';

function resolveResource(str){

    var m = str.match(/@{([^@{}]+)\?ms-resource:([^{}]+)}/);

    if(m){
        var dir = m[1];
        var resName = 'ms-resource:'+m[2];

        return {
            value: str,
            location: appFolder + dir,
            uri: resName
        };
    }
    return false;
}

function getProperty(prop){
    var res;

    if(prop && (res = resolveResource(prop))){
        res.type='resource';
    } else {
        res = {
            value: prop,
            type: 'String'
        };
    }
    return res;
}

function mapToComplete(app){

    var appName = getProperty(app.ApplicationName);
    var company = getProperty(app.ApplicationCompany);
    var icon = getProperty(app.ApplicationIcon);
    var description = getProperty(app.ApplicationDescription);
    var aumid = getProperty(app.AppUserModelID);

    var exe = '"C:\\Windows\\explorer.exe" shell:AppsFolder\\'+app.AppUserModelID;
    var streamableExe = '"C:\\Windows\\System32\\cmd.exe" /K explorer.exe shell:AppsFolder\\'+app.AppUserModelID+' & echo "Close Me to Exit: Type \'exit\' and press enter"';

    var startDir = '"C:\\Windows\\"';
    var startDirStreamable = '"C:\\Windows\\System32\\"';

    return {
        name: appName,
        company: company,
        icon: icon,
        description: description,
        aumid: aumid,
        launch:{
            normal: {
                cmd: exe,
                startDir: startDir
            },
            streamable:{
                cmd: streamableExe,
                startDir: startDirStreamable
            }
        }
    };

}


module.exports = mapToComplete;