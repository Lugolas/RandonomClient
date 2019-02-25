export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function fetchNames(){
    return fetch('https://randonomserver.azurewebsites.net/api/names')
    .then(response => response.json());
}

export async function addName(formData){
  return await fetch('https://randonomserver.azurewebsites.net/api/names',  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: formData
  })
  .then(response => {
    console.log(response);
  });
}