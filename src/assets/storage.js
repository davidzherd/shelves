
function saveToLocalStorage(key, value) {
    try {
        const data = JSON.stringify(value);
        localStorage.setItem(key, data);
        console.log(`Data saved to local storage under key: ${key}`);
    } catch (error) {
        console.error('Error saving to local storage:', error);
    }
}

function readFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error reading from local storage:', error);
        return null;
    }
}

function deleteFromLocalStorage(key) {
    try {
        localStorage.removeItem(key);
        console.log(`Data deleted from local storage under key: ${key}`);
    } catch (error) {
        console.error('Error deleting from local storage:', error);
    }
}

export { saveToLocalStorage, readFromLocalStorage, deleteFromLocalStorage };
