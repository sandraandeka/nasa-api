//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=yfcXxHLplKZaLqxg9Hpgqa8IrivVlglemNeQAqpj&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
         document.querySelector('h2').textContent=data.title
        document.querySelector('h3').innerText=data.explanation
          if(data.media_type==='image'){
            const img = document.querySelector('img').src=data.hdurl||data.url;
             img.style.maxWidth ='100%'
          }else if(data.media_type==='video'){
            document.querySelector('video').src=data.url
          }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    }