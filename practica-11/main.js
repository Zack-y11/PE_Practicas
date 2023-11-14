const songs = [
    {title: 'AKARI', artist: 'soushi akiyama', src: 'music/Akari.mp3', cover: 'img/akari.webp'},
    {title: 'Ambivalent', artist: 'Eve', src: 'music/Ambivalent.mp3', cover: 'img/Ambivalent.webp'},
    {title: 'Memories Of The Starry Sky', artist: 'Sayaka Kanda', src: 'music/Memories.mp3', cover: 'img/memories.webp'},
    {title: 'shelter', artist: 'Porter Robinson', src: 'music/Shelter.mp3', cover: 'img/shelter.webp'},
    {title: 'Stay With Me', artist: 'Miki Matsubara', src: 'music/StayWithMe.mp3', cover: './img/staywithMe.webp'},
]

let currentSongIndex = 0

let isPlaying = false;

let audio;
//Funcion para cargar y reproducir la cancion actual
function playCurrentSong (){
    //Deten la reproduccion si hay una istancia de audio previa
    if (audio){
        audio.stop()
    }
//Crea una nueva instancia de reoridyccuib de aydui con la cancion actual
    audio = new Howl({
        src:[songs[currentSongIndex].src],
        autoplay: isPlaying,
        volume: volumeSlider.value,
        onend: function(){
            //Cuando la cacion actual termina, reproduce la siguiente
            playNextSong()
        }
    })
    //Actualiza la informacion de la cancion en la interfaz
    updateSongInfo();
}

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const volumeSlider = document.getElementById('volume');
const songTitle = document.getElementById('songTitle')
const songArtist = document.getElementById('songArtist')
const albumCover = document.querySelector('.card-image-top')

playButton.addEventListener('click', () =>{
    isPlaying = true
    playCurrentSong()
})

pauseButton.addEventListener('click', ()=>{
    isPlaying = false
    audio.pause()
})

nextButton.addEventListener('click', ()=>{
    playNextSong()
})

prevButton.addEventListener('click', () =>{
    if (audio.seek()> 5){
        audio.seek(0)
    }else{
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        playCurrentSong()
    }
})

volumeSlider.addEventListener('input', () => {
    audio.volume(volumeSlider.value)
});

function updateSongInfo(){
    songTitle.textContent = songs[currentSongIndex].title;
    songArtist.textContent = songs[currentSongIndex].artist;
    albumCover.src = songs[currentSongIndex].cover
}

function playNextSong (){
    currentSongIndex = (currentSongIndex + 1) % songs.length
    playCurrentSong()
}

playCurrentSong()

















































// const arrayObjetos = [
//     {
//         nombre: 'David',
//         edad: 24,
//         comidaFavorita: 'Hamburguesa'
//     },
//     {
//         nombre: 'Sally',
//         edad: 22,
//         comidaFavorita: 'Shawarna'
//     },
//     {
//         nombre: 'Steven',
//         edad: 29,
//         comidaFavorita: 'Pizza'
//     }
// ]

// for(let i = 0; i < arrayObjetos.length; i++){
//     console.log('Nombre: ' + arrayObjetos[i].nombre);
//     console.log('edad: ' + arrayObjetos[i].edad);
//     console.log('Comida Favorita: ' + arrayObjetos[i].comidaFavorita);
// }

// const objetoConArray = {
//     nombre: 'objero con array',
//     array: ['hola', 'hello', 'Konichiwa']
// }

// objetoConArray.array.forEach(item =>{
//     console.log(item + " te saludo");
// })