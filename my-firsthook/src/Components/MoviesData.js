import React from 'react';
import ReactPlayer from'react-player';

<link rel="stylesheet" href="/css/video-react.css" />
const MoviesData = [
  
    {
        id: Math.random(),
        name:'Joker',
        image:'https://resize-elle.ladmedia.fr/rcrop/1098,768/img/var/plain_site/storage/images/loisirs/cinema/news/5-bonnes-raisons/joker-la-naissance-de-la-violence-3822009/91106438-1-fre-FR/Joker-la-naissance-de-la-violence.jpg',
        date: '(2019)',
        rating: '5',
        description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
        trailer:<ReactPlayer url="https://www.youtube.com/watch?app=desktop&v=RumjcP_9vuo"/> ,
    },
    {
        id: Math.random(),
        name:'Mandy',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71egN6jfIoL._AC_SY550_.jpg',
        date: '(2018)',
        trailer:<ReactPlayer url="https://www.youtube.com/watch?v=rI054ow6KJk"/>  ,
        rating: '4',
        description: 'Mandy is a midnight movie of mythic madness. Director Panos Cosmatos’s wickedly deviant and humorous follow-up to 2011’s Beyond the Black Rainbow concerns a woodsman named Red (Nicolas Cage) whose wife, Mandy (Andrea Riseborough), is taken hostage at their secluded forest home by cultists led by crazed guru Jeremiah Sand (Linus Roache). '},

    {
        id: Math.random(),
        name:'the lord of the rings',
        image:'https://wallpapercave.com/wp/wp4119913.jpg',
        date: '(2002)',
        trailer:<ReactPlayer url="https://www.youtube.com/watch?v=LbfMDwc4azU"/>,
        rating: '3',
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.'},
    {
        id: Math.random(),
        name:'Maleficient',
        image:'https://fr.web.img4.acsta.net/pictures/19/09/23/11/24/3125098.jpg',
        trailer:<ReactPlayer url="https://www.youtube.com/watch?v=cAM-Gsl9vnE"/>,
        date: '(2019)',
        rating: '5',
        description: 'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies and dark new forces at play.', 
    },
]

export default MoviesData