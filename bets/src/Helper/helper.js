 export default {
    getItem (key) {
        return localStorage.getItem(key);
    },

    setItem (key, value)  {
        localStorage.setItem(key, JSON.stringify(value));
    },

    removeItem (key)  {
        localStorage.removeItem(key);
    },

    getName (key) {
        let user = JSON.parse(this.getItem(key));
        return user.name;
    },
    getEmail (key) {
        let user = JSON.parse(this.getItem(key));
        return user.email;
    },
    getUserId (key) {
        let user = JSON.parse(this.getItem(key));
        return user.uid;
    }
 }
