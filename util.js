import settings from './settings'
import fetch from 'isomorphic-fetch'

var request = require('request')

export function GetEnvironmentVar(varname, defaultvalue) {
    var result = process.env[varname];
    if (result != undefined)
        return result;
    else
        return defaultvalue;
}

export function makeRequest(uri, data = {}) {

    const url = `http://${settings.api.host}/${settings.api.version}/${uri}`

    data = {
        ...data,
        headers: {
            'Authorization': `ApiKey ${settings.api.user}:${settings.api.token}`,
            ...data.headers,
        },
    }

    return new Promise((resolve, reject) => {
        request({ url, headers: data.headers }, (error, res, body) => {

            if (error) {
                reject(Error(error));
            }
            else if (res && res.statusCode >= 400) {
                reject(Error(`Bad response from server: [${res.statusCode}] ${res}`));
            } else {
                resolve(JSON.parse(body));
            }

        });
    })
}

export function getStorenameFromPath(path) {

    return path.split('/')[1];

}