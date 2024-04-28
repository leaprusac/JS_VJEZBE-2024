"use strict";


let term = '';
const bool = false
const updateTerm = () => {
    term = document.getElementById('searchTerm').value;


    if (!term || term === '') {      
    } else {
        const url = `https://itunes.apple.com/search?term=${term}`;
        const songContainer = document.getElementById('songs');
        while (songContainer.firstChild) {
            songContainer.removeChild(songContainer.firstChild);
        }
        fetch(url)
            .then((Response) => Response.json())
            .then((data) => {
                
                const artists = data.results;
                if(artists == "") {
                    const message = document.createElement("p1")
                    message.innerHTML = "No result found!"
                    songContainer.append(message)
                }
                    return artists.map(result => {
                    
    
                        const article = document.createElement('article'),
                            artists = document.createElement('p'),
                            song = document.createElement('h4')                    
                        
    
                        artists.innerHTML = result.artistName;
                        song.innerHTML = result.trackName;
    
                        article.appendChild(artists);
                        article.appendChild(song);
                        
                        songContainer.appendChild(article);
                    })
                }  
            )
            .catch(error => console.log('Request failed:', error))
    }
}

$(window).load(function(){ 
    $('#overlay').fadeOut();
   });

