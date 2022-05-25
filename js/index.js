"use strict";

let numberOfFilms;

function start (){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ' ');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ' ');
    }
}

start();

function countOfFilms(){
    if (numberOfFilms < 10){
        console.log('Посмотрено довольно мало фильмов');
    }else if (10 <= numberOfFilms <= 30){
        console.log('Вы классический зритель');
    }else if (numberOfFilms > 30){
        console.log('Вы киноман');
    }else {
        console.log('Произошла ошибка');
    }
}

countOfFilms();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

function rememberMyFilms (){
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените этот фильм?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        }else{
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

console.log(personalMovieDB);