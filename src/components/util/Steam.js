let accesToken
let steamUri = "https://api.steampowered.com"
const interfaceUri = "ISteamUser"
const method = "GetFriendList"
const version = "v0001"
const key = "E678A1001EB268A0A202897BD621EFA9"
const steamId = "76561198066830869"

// : http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&steamid=76561197960435530&relationship=friend

const Steam = {
    getAccessToken() {
        return fetch(`${steamUri}/${interfaceUri}/${method}/${version}/?key=${key}&steamid=${steamId}&relationship=friend`)
        .then(response => {
            return response.json()
        })
        .then(jsonResponse => {
            return jsonResponse;
        })
    }
}

export default Steam