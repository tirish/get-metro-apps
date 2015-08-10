
var _ = require('lodash');
var BPromise = require('bluebird');
var winreg  = require('winreg');
var mapper = require('./mapper');

function wrap(obj, func){
    return function(){
        return new BPromise(function(resolve,reject) {
            obj[func](function (err, items) {
                if (err) {
                    reject(err);
                } else {
                    resolve(items);
                }
            });
        });
    };
}

function promisify(reg){

    return {
        key: reg.key,
        value: reg.value,
        keys: wrap(reg,'keys'),
        values: wrap(reg,'values')
    };

}

var regKey = new winreg({
    hive: winreg.HKCU,
    key:'\\Software\\Classes'
});

module.exports = function() {
    return promisify(regKey).keys().then(function (items) {

        items = _.filter(items, function (item) {
            return item.key.indexOf('AppX') >= 0;
        });

        return BPromise.map(items, function (item) {
            return promisify(item).keys().then(function (sub_keys) {

                sub_keys = _.filter(sub_keys, function (subItem) {
                    return subItem.key.indexOf('Application') >= 0;
                });

                return BPromise.map(sub_keys, function (subItem) {

                    return promisify(subItem).values().then(function (values) {

                        var data = {};
                        _.forEach(values, function (val) {
                            data[val.name] = val.value;
                        });
                        return data;

                    });

                });

            });
        });

    }).then(function (applicationArray) {

        return _.map(applicationArray,mapper);

    });

};