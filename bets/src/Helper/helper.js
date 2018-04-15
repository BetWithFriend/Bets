 export default {
    getItem (key) {
        return localStorage.getItem(key);
    },

    setItem (key, value)  {
        localStorage.setItem(key, JSON.stringify(value));
    },

    removeItem (key)  {
        localStorage.removeItem(key);
    }
 }
