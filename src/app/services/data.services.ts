
export class DataServices { 

    findMovieByTitle(title) {
        const url = `https://www.omdbapi.com/?s=${title}&apikey=3be63580`;
        return fetch(url)
        .then(res => res.json())
        .catch(err =>  console.log("Error! :D", err))
    }
    

}
