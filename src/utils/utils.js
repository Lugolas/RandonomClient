export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function fetchNames(){
    fetch('https://randonomserver.azurewebsites.net/api/names')
    .then(response => response.json())
    .then(data => {
      console.log(data);

      return data;

    //   this.setState({
    //     gameHasBegun: true,
    //     randonoms: data,
    //   })
    });
}