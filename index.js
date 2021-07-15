const axios = require('axios').default;

class Inventory {

    steam = {};

    constructor(steam) {
        this.steam = steam;
    }
    
    async get () {
        try {
            const { data } = await axios.get(`http://steamcommunity.com/inventory/${this.steam.userid}/${this.steam.appid}/${this.steam.contextid}?l=${this.steam.language}&count=${this.steam.count}`);
            return data;
        } catch (error) {
            console.log(error)    
        }
    }
}

// example
const inventory = new Inventory({
    userid: '76561198086790407', // id user
    appid: 730, //steam id csgo
    contextid: 2, // inventory
    language: 'english', // language items
    count: '5000' // max quantity items
})
await inventory.get();
