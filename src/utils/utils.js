export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function fetchNames(){
    return fetch('https://randonomserver.azurewebsites.net/api/names')
    .then(response => response.json());
}