import React, { useState } from 'react';

/*
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

*/


function Main() {
    const [movieName, setMovieName] = useState('');
    const [result, setResult] = useState('');

    const getMovie = (e) => {
        e.preventDefault();
        if (movieName.length <= 0) {
            setResult('<h2 class="featuringweek">Enter a valid movie/series</h2>');
        } else {
            const url = `https://www.omdbapi.com/?t=${movieName}&apikey=f03d0b7`;
            fetch(url)
                .then((resp) => resp.json())
                .then((data) => {
                    if (data.Response === 'True') {
                        
                        setResult(
                            `
        <div class="bigcardcontainers">

            <div class="bigcardcontent">
              <div class="info">
                <img src=${data.Poster} class="poster">
                <div>
                  <h2>${data.Title}</h2>
                  <div class="rating">
                  <div>
                  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="auto" height="40px" viewBox="0 0 576 512"><defs><style>.cls-1{fill:#ffb92a;}</style></defs><path class="cls-1" d="M381.2,150.3l143.7,21.2a32,32,0,0,1,17.8,54.4L438.5,328.1l24.6,146.6a32,32,0,0,1-46.6,33.6L288.1,439.8,159.8,508.3A32.22,32.22,0,0,1,126,506a31.84,31.84,0,0,1-12.8-31.3l24.6-146.6L33.58,225.9a32.15,32.15,0,0,1-7.89-32.8,31.81,31.81,0,0,1,25.73-21.6L195,150.3,259.4,18a32,32,0,0,1,57.5,0Z"/></svg>

                  </div>
                  <div>
                    <svg id ='imdb-svg'version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 575 289.83" width="200px" height="auto"><defs><path d="M575 24.91C573.44 12.15 563.97 1.98 551.91 0C499.05 0 76.18 0 23.32 0C10.11 2.17 0 14.16 0 28.61C0 51.84 0 237.64 0 260.86C0 276.86 12.37 289.83 27.64 289.83C79.63 289.83 495.6 289.83 547.59 289.83C561.65 289.83 573.26 278.82 575 264.57C575 216.64 575 48.87 575 24.91Z" id="d1pwhf9wy2"></path><path d="M69.35 58.24L114.98 58.24L114.98 233.89L69.35 233.89L69.35 58.24Z" id="g5jjnq26yS"></path><path d="M201.2 139.15C197.28 112.38 195.1 97.5 194.67 94.53C192.76 80.2 190.94 67.73 189.2 57.09C185.25 57.09 165.54 57.09 130.04 57.09L130.04 232.74L170.01 232.74L170.15 116.76L186.97 232.74L215.44 232.74L231.39 114.18L231.54 232.74L271.38 232.74L271.38 57.09L211.77 57.09L201.2 139.15Z" id="i3Prh1JpXt"></path><path d="M346.71 93.63C347.21 95.87 347.47 100.95 347.47 108.89C347.47 115.7 347.47 170.18 347.47 176.99C347.47 188.68 346.71 195.84 345.2 198.48C343.68 201.12 339.64 202.43 333.09 202.43C333.09 190.9 333.09 98.66 333.09 87.13C338.06 87.13 341.45 87.66 343.25 88.7C345.05 89.75 346.21 91.39 346.71 93.63ZM367.32 230.95C372.75 229.76 377.31 227.66 381.01 224.67C384.7 221.67 387.29 217.52 388.77 212.21C390.26 206.91 391.14 196.38 391.14 180.63C391.14 174.47 391.14 125.12 391.14 118.95C391.14 102.33 390.49 91.19 389.48 85.53C388.46 79.86 385.93 74.71 381.88 70.09C377.82 65.47 371.9 62.15 364.12 60.13C356.33 58.11 343.63 57.09 321.54 57.09C319.27 57.09 307.93 57.09 287.5 57.09L287.5 232.74L342.78 232.74C355.52 232.34 363.7 231.75 367.32 230.95Z" id="a4ov9rRGQm"></path><path d="M464.76 204.7C463.92 206.93 460.24 208.06 457.46 208.06C454.74 208.06 452.93 206.98 452.01 204.81C451.09 202.65 450.64 197.72 450.64 190C450.64 185.36 450.64 148.22 450.64 143.58C450.64 135.58 451.04 130.59 451.85 128.6C452.65 126.63 454.41 125.63 457.13 125.63C459.91 125.63 463.64 126.76 464.6 129.03C465.55 131.3 466.03 136.15 466.03 143.58C466.03 146.58 466.03 161.58 466.03 188.59C465.74 197.84 465.32 203.21 464.76 204.7ZM406.68 231.21L447.76 231.21C449.47 224.5 450.41 220.77 450.6 220.02C454.32 224.52 458.41 227.9 462.9 230.14C467.37 232.39 474.06 233.51 479.24 233.51C486.45 233.51 492.67 231.62 497.92 227.83C503.16 224.05 506.5 219.57 507.92 214.42C509.34 209.26 510.05 201.42 510.05 190.88C510.05 185.95 510.05 146.53 510.05 141.6C510.05 131 509.81 124.08 509.34 120.83C508.87 117.58 507.47 114.27 505.14 110.88C502.81 107.49 499.42 104.86 494.98 102.98C490.54 101.1 485.3 100.16 479.26 100.16C474.01 100.16 467.29 101.21 462.81 103.28C458.34 105.35 454.28 108.49 450.64 112.7C450.64 108.89 450.64 89.85 450.64 55.56L406.68 55.56L406.68 231.21Z" id="fk968BpsX"></path></defs><g><g><g><use xlink:href="#d1pwhf9wy2" opacity="1" fill="#f6c700" fill-opacity="1"></use><g><use xlink:href="#d1pwhf9wy2" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#g5jjnq26yS" opacity="1" fill="#000000" fill-opacity="1"></use><g><use xlink:href="#g5jjnq26yS" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#i3Prh1JpXt" opacity="1" fill="#000000" fill-opacity="1"></use><g><use xlink:href="#i3Prh1JpXt" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#a4ov9rRGQm" opacity="1" fill="#000000" fill-opacity="1"></use><g><use xlink:href="#a4ov9rRGQm" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#fk968BpsX" opacity="1" fill="#000000" fill-opacity="1"></use><g><use xlink:href="#fk968BpsX" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g></g></g></svg>

                  </div>
                  <div>
                    <h4>${data.imdbRating}</h4>
                    </div>
                  </div>
                  <div class="details">
                    <span>${data.Rated}</span>
                    <span>${data.Year}</span>
                    <span>${data.Runtime}</span>
                  </div>
                  <div class="genre">
                    <div>${data.Genre.split(',').join('</div><div>')}</div>
                  </div>
                </div>
              </div>
              <h3>Plot:</h3>
              <p>${data.Plot}</p>
              <h3>Cast:</h3>
              <p>${data.Actors}</p>
              <a href="https://www.imdb.com/find?q=${data.Title}" target="_blank" rel="noopener noreferrer"><button><span>Read More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width="auto" height="35px" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            </span></button></a>
            </div>

            `
                        );
                    } else {
                        setResult(`<h3 class="msg">${data.Error}</h3>`);
                    }
                })
                .catch(() => {
                    setResult(`<h3 class="msg">Error Occured</h3>`);
                });
        }
    };

    return (

        <div>
            <div class="featuringweek">
                <div class="text">
                    <span></span>
                    <h2>THIS MONTH TOP WATCH</h2>
                </div>
            </div>


            <div class="fullcontainer">

                <div class="card-container">
                    <div class="container">
                        <div class="card">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div class="content">
                                <h2>01</h2>
                                <h3><svg version="1.0" id="succession" xmlns="http://www.w3.org/2000/svg" width="3413.333" height="286.667" viewBox="0 0 2560 215"><path d="M2385 103v102h21l.2-75.6.3-75.7 74.6 78.4c41.1 43.1 75.6 79.3 76.8 80.3l2.1 1.9V8h-21l-.2 77.5-.3 77.5-76.4-81c-42-44.5-76.5-81-76.7-81s-.4 45.9-.4 102zM1427.5 6.1c-35.7 3.4-57 38.1-42 68.5 2.5 5.1 5.3 8.8 9.8 13 8.1 7.5 13.2 10.5 34.7 20.4 9.6 4.4 19.9 9.5 22.9 11.3 7.2 4.3 14 11.2 16.4 16.6 7.5 17-2.2 39-21.3 48.4-8.6 4.3-20.5 5-29.1 1.8-11.4-4.3-20.5-14.4-24.9-27.6-2.2-6.7-2.8-7.1-7.6-5.6-1.6.6-6.1 1.9-10.1 3.1l-7.2 2.1 2 5.2c9 22.9 23.9 37.2 43.9 42.3 9.7 2.5 25.6 2.2 34.5-.6 19.1-6 34.2-20.8 40-39.4 8.3-25.9.5-47.3-22.5-62.2-3.7-2.3-16.7-9.2-29.1-15.3-30.4-14.9-36.2-20.3-36.2-33.3 0-16.7 17.6-30.8 36.8-29.6 11.2.7 19.3 5.6 27.8 16.8l2.6 3.4 8-5.4 7.9-5.5-2.1-3.9c-3.4-6-11.6-14.3-18-18-9.3-5.5-22.7-7.8-37.2-6.5zm252.3 0c-32.2 3.5-52.8 31.1-45.3 60.4 3.2 12.1 11.9 22.6 25.5 30.5 3.7 2.2 13.9 7.2 22.6 11.2 19.6 8.8 26.6 12.9 32.4 18.7 7 7.1 8.5 10.9 8.5 22.1 0 8.8-.3 10-3.3 15.9-4.3 8.1-11.2 15-19.3 19.3-6.1 3.1-6.9 3.3-16.9 3.3-9.4 0-11.1-.3-16.1-2.8-7.6-3.7-15.2-12-19.5-21.2-1.9-4-3.4-8-3.4-8.9 0-.8-.5-1.8-1.1-2.1-1.4-1-21 4.6-21.6 6.1-.7 2 5 14.6 10.1 22.3 11.3 17 29 26.2 50.6 26.4 11.2.1 18-1.3 27.5-5.9 12.9-6.1 22.8-16.3 28.9-29.6 10.1-22 6.8-44-9-59.5-7.6-7.4-17.6-13.5-39.4-23.7-19.1-9-29-15.3-33.4-21.4-2.8-4-3.1-5.1-3.1-12 0-8.9 1.7-13.1 7.6-19 6.3-6.3 15.1-10.4 23.4-11 13-.8 22.4 3.6 31 14.5 2.2 2.8 4.4 5.2 4.8 5.2.7.1 12.3-7.6 15-10 1.3-1.1-5.4-10.8-11-16.1-11.1-10.2-27-14.7-45.5-12.7zm445.1.5c-35.9 6.5-66.3 32.9-78.3 68.2-6 17.6-7.1 41.5-2.7 58.3 10.8 41.5 46.2 70.7 90.9 74.8 30.7 2.8 59.8-7.6 80.9-29.1 9.9-10 14.6-16.6 20.3-28.3 18.7-38.6 12.2-81.6-17.2-113-23.5-25.2-59.8-37.1-93.9-30.9zm44 23.3c27.1 9.2 46.8 30.1 54.2 57.6 4.5 16.6 2.4 38.2-5.1 54.2-9.8 21.1-28.6 37.1-52 44.5-6.4 2-9.6 2.3-22 2.3-16 0-23.2-1.6-35.5-7.7-39-19.6-56.8-66-40.4-105.5 9.9-23.7 33.5-42.7 60-48.3 2.4-.5 10.5-.8 17.9-.6 12.1.3 14.5.6 22.9 3.5zM57.8 7.1c-13 1.4-23.5 6.4-32.3 15.3C7.3 40.6 6.5 68.1 23.6 86c7.8 8.2 14.9 12.5 38.1 23.3 21.9 10.3 26.7 13.2 33.1 20.2 6.1 6.5 7.6 10.5 7.6 20 .1 7-.3 8.9-3.1 14.8-4.2 8.8-11.6 16.5-19.9 20.8-5.6 2.8-7.9 3.4-15.2 3.7-7.2.3-9.7 0-14.5-1.8-11.3-4.3-21.2-15.4-25.4-28.7-.9-2.9-2.1-5.3-2.7-5.3-1.6 0-20 5.2-20.8 5.9-1.2 1 5.4 16.1 9.9 22.7 12 17.5 29.4 26.6 51.3 26.7 17.5 0 31.4-5.6 43.5-17.8 22.3-22.2 24.3-55.1 4.8-75.6-8.1-8.5-15.6-13.2-41.7-25.9-20.2-9.8-23.5-11.8-28.5-16.8-7.9-8-9.6-13.9-6.6-23.9 2.1-7.1 8.9-14.4 17.3-18.5 6.1-3 7.4-3.3 16.2-3.3 13.3.1 19.1 3.1 29.2 15.4l3.6 4.5 7.2-5c4-2.7 7.5-5.5 7.7-6.1.7-1.7-7.8-13.4-12.4-17.3C91.8 9.3 74.8 5.1 57.8 7.1zm569.1 0c-34.5 3.6-65.5 24.1-79.7 52.4-4.1 8.2-7.8 20.4-9.2 30.4-1.8 11.9-.8 33.3 2 43.6 10.9 40.3 46.7 69.9 90 74.4 18.5 2 45.1-4.3 61.3-14.5l5.7-3.6v-12.4c0-6.8-.4-12.4-.8-12.4-.5 0-1.9 1.2-3.3 2.6-7 7.5-25.9 17.2-38.8 20-8.8 1.8-22 1.8-30-.2-8.2-2-20.9-7.8-29.2-13.4-9.5-6.4-23.6-21.2-28.6-30-14.6-26.1-13.4-55.2 3.3-80.6 14.9-22.7 42-37.4 68.6-37.4 5.4 0 13.4.7 17.6 1.5 10.4 2.1 25.9 9.8 34 16.9 3.5 3.1 6.5 5.6 6.8 5.6.2 0 .4-6 .4-13.3V23.3l-9.7-5.1C675.1 11.9 663 8.3 649.2 7c-11.7-1.1-11.3-1.1-22.3.1zm292.6-.5c-21.2 3.1-40.7 11.5-55.9 24-14.4 11.8-24.3 28.2-29.7 49-2 7.7-2.3 11.3-2.3 26.4 0 19.2.9 25 6.5 38.9 12.9 32.3 45.1 56.8 81.8 62.2 20.3 2.9 48.1-3.2 66.4-14.7l5.7-3.6v-12.4c0-6.8-.2-12.4-.5-12.4s-3.6 2.5-7.3 5.6c-7.8 6.5-23.6 14.5-33.7 17-10.7 2.7-26.1 2.5-35.5-.4-29.4-9.3-53.5-32.5-61.9-59.5-5.7-18.6-2.5-42.7 8-60.2 4.5-7.6 15.7-19.5 23.5-25.1 7.8-5.5 20.7-11.6 29.9-14 10.3-2.7 28.4-2.4 38.9.5 10.6 2.9 21.9 8.9 30.5 16.2 3.9 3.2 7.3 5.9 7.6 5.9s.5-5.8.5-13V24l-4.2-2.7c-7.7-4.8-20.3-10.2-28.9-12.3-8.2-2.1-32-3.5-39.4-2.4zM262 79.7c0 79.9-.1 78.7 6.8 91.7 6.4 12.3 19.3 24 33.6 30.5 19 8.7 45.2 8.4 63.3-.7 16.6-8.4 28.7-22.5 34.7-40.4l2.6-7.7V8h-22v70.5c0 48.3-.4 72.1-1.1 75.7-3.4 15.8-16 28-34.4 33.3-7.8 2.3-22.7 1.6-30.5-1.4-11.7-4.5-23.1-14.6-28.3-25l-3.2-6.6-.3-73.2-.3-73.3H262v71.7zm873 26.8V205h102v-19h-80v-78h77V88h-77V29h80V8h-102v98.5zm748 0V205h23V8h-23v98.5z" /></svg></h3>
                                <p>The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company.</p>
                                <div class="weeknr">
                                    <p>This Week: <h2>1</h2></p>
                                </div>
                                <div class="lastweeknr">
                                    <p>Last Week: <h2>2</h2></p>
                                </div>

                                <a href="https://www.imdb.com/title/tt7660850/?ref_=fn_al_tt_1" target="_blank" rel="noopener noreferrer">Read More</a>

                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="card">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div class="content">
                                <h2>02</h2>
                                <h3><svg id="ted_lasso" version="1.0" xmlns="http://www.w3.org/2000/svg" width="1933.333" height="280" viewBox="0 0 1450 210"><path d="M1009.5 2c-16.1 2.6-31.9 8.5-44.2 16.7-14.3 9.4-29.5 27.5-34.7 41.5-7.6 20.2-4.5 43.1 7.4 54.2 8.4 7.8 15.9 10.8 38.8 15.1 19.9 3.8 24.2 6.2 24.2 13.2 0 7.1-7.4 11.5-20.5 12.1-7.8.4-10.1.1-17-2.3-8.9-2.9-16.7-7.4-24.9-14.1l-5.5-4.4-9.9 17.6c-5.5 9.6-10.2 17.2-10.5 16.7s-7.6-36.6-16.1-80.3C888 44.3 880.5 7.5 880 6.2L879 4h-38.7c-22.1 0-39.4.4-40.3 1-1.7 1.1-102.9 199.2-102.3 200.3.2.4 17.2.7 37.7.7 28.7 0 37.6-.3 38.3-1.3.6-.6 2.7-5.7 4.7-11.1 2-5.5 4.2-10.8 4.7-11.8.9-1.7 2.6-1.8 29.2-1.6l28.2.3.7 7c.4 3.8 1 9.4 1.3 12.2l.6 5.3H921l-1.1-2.6c-.5-1.5-.8-2.8-.6-3.1.2-.2 5.3.8 11.3 2.3 22.6 5.3 30.3 6.6 42.9 7.1 25.7 1 50.1-5.8 69-19.2 8.3-5.8 19.5-17.9 24.3-26.1 14.1-23.9 13.1-54.9-2.2-68.1-8.9-7.6-17.3-11.2-39.8-16.9-15.1-3.7-17-4.5-20.5-7.7-2.9-2.6-2.9-5.7-.1-9.2 6.8-8.7 24.2-8.7 42.6 0 4.1 1.9 8.6 4.4 10.2 5.5 2.2 1.6 3 1.7 3.7.8.4-.7 6.7-12.1 14-25.3l13.2-24-5.2-3.2c-7.5-4.7-18.6-9.1-28.5-11.4-10.1-2.3-35.2-3.3-44.7-1.9zM833.9 102.1c1 16.7 1.7 30.7 1.4 31.1-.2.5-7.1.8-15.3.8s-15.1-.3-15.3-.8c-.7-1.2 22.8-61.3 24.4-62.2.7-.5 1.8-.5 2.2-.1.5.5 1.7 14.5 2.6 31.2z" /><path d="M1160.2 2.5c-34.1 6.2-59.3 24.1-73.6 52.3-6.1 12-8.4 31-5.2 43 3.7 13.6 13.7 23 29.6 27.6 3 .9 11.8 2.7 19.5 4.2 20.9 3.8 26.2 6.9 23.5 13.5-1.6 3.8-7.2 8.7-12.9 11.2-7 3.1-18.3 2.1-28.3-2.5-8.7-4.1-15.4-8.5-21.6-14.2-2.3-2.1-4.4-3.7-4.6-3.5-.9.9-30.6 55.1-30.6 55.8 0 .4 4.4 2.6 9.8 4.8 48.4 20.3 95.3 18.8 127.8-4.2 8.7-6.2 21.1-19.9 26.8-29.4 2.6-4.6 5.2-7.9 5.5-7.4.4.4 1.7 3.1 2.8 5.9 10.6 26.3 38 44.3 73.4 48.5 45.9 5.3 93-12.6 119.6-45.6 17.5-21.7 25.6-42.6 26.9-69.5 1.3-26.1-8.8-52.2-26.2-67.8-17-15.2-37.9-22.8-66.4-23.9-45.1-1.8-84.9 16.6-109.3 50.6-10.1 13.9-17 28.8-23.3 49.9-.2.8-1.6-.2-3.6-2.5-10-11.6-18.8-16.3-36.9-19.8-22.4-4.4-23.1-4.6-26.1-7.5-3.4-3.4-3.6-6.8-.6-10.5 8.1-10.4 31.2-8.3 52.3 4.8l4 2.5 13.8-24.1c7.6-13.3 13.9-24.7 13.9-25.2.2-1.7-13.1-8.2-24.2-11.9-19.2-6.4-38.8-8.2-55.8-5.1zM1355 70.1c12.1 5.6 19 16.5 19 29.8 0 21.7-17.3 42.3-38.8 46.2-17.9 3.4-35.1-8.3-38.8-26.3-3.3-15.8 5.4-35.5 19.9-45.1 12.3-8.2 27.2-9.9 38.7-4.6zM176.4 5.3c-1 2.7-31.3 199.1-30.8 199.9.3.4 30.8.8 67.8.8 52.7 0 67.6-.3 68.3-1.2.9-1.2 8.3-47 8.3-51.1 0-1.6-2.2-1.7-31.5-1.7-24.5 0-31.5-.3-31.5-1.3 0-2.2 2.9-17.7 3.5-18.7.4-.6 11.5-1 28.6-1 15.3 0 27.9-.1 27.9-.3 0-.1 1.6-11.4 3.5-25 1.9-13.7 3.5-25.3 3.5-25.8s-11.9-.9-28-.9c-16.4 0-28-.4-28-.9 0-2.9 4.4-18.7 5.3-19.3.7-.4 14.6-.8 30.9-.8h29.7l.6-3.3c1.5-9 7.5-48.2 7.5-49.4 0-1.9-134.8-2-135.6 0zM325 4.1c-.1.2-7.2 45.7-15.8 101l-15.7 100.7 52.5-.3c58.1-.4 61.2-.6 80.8-7 36.5-11.8 61.1-35.5 72.2-69.4 4.8-14.7 6.3-26.7 5.8-46.4-.4-15.5-.7-18-3.2-25.2-7.9-23.1-24.8-37.9-53.4-46.9-16.9-5.3-22.9-5.8-74.9-6.3-26.6-.3-48.3-.4-48.3-.2zm87 66c12.1 5.6 18 14.4 18.8 27.9 1.3 22.4-11 39.3-33.6 46-7.7 2.3-21.8 3.3-21.6 1.5.1-.6 3-18.5 6.5-39.9l6.4-38.8 9 .4c6.9.3 10.3 1 14.5 2.9zM10.6 6.2c-.3.7-1.6 9.8-3.1 20.3C6 36.9 4 50.6 2.9 56.9S1.2 68.5 1.4 68.7c.2.3 9.3-.1 20.1-.7 10.7-.7 19.8-1 20.1-.7s-4.2 30.8-10 67.8c-5.8 37.1-10.6 68-10.6 68.6 0 1 7.9 1.3 36 1.3 24.2 0 36-.3 36-1 0-2 21.2-136.5 21.6-136.9.2-.2 8.9.2 19.5.8 10.5.7 19.4 1 19.7.7s2.7-13.5 5.3-29.3c2.6-15.9 5-30 5.3-31.6L165 5H87.9c-60.7 0-77 .3-77.3 1.2zm564.2 98.5c-8.5 54.9-15.3 100.1-15.1 100.5.6 1.1 132.1 1 132.7-.1.6-.9 9.6-58.9 9.6-61.6 0-1.3-4-1.5-30.5-1.5-16.8 0-30.5-.3-30.5-.6s4.7-30.5 10.5-67.1C657.3 37.8 662 7.2 662 6.4c0-1.2-5.4-1.4-35.8-1.4h-35.8l-15.6 99.7z" /></svg></h3>
                                <p>American college football coach Ted Lasso heads to London to manage AFC Richmond, a struggling English Premier League football team</p>
                                <div class="weeknr">
                                    <p>This Week:<h2>2</h2></p>
                                    <div class="lastweeknr">
                                        <p>Last Week:<h2>1</h2></p>
                                    </div>
                                </div>

                                <a href="https://www.imdb.com/title/tt10986410/?ref_=fn_al_tt_1" target="_blank" rel="noopener noreferrer">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="card">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div class="content">
                                <h2>03</h2>
                                <h3><svg id="last_of_us" version="1.0" xmlns="http://www.w3.org/2000/svg" width="1301.333" height="281.333" viewBox="0 0 976 211"><path d="M447.5 2C439 4.2 434 8.6 431.3 16.4c-1.6 4.4-1.8 8.9-1.8 34.2v29l3.9 7.8c3.2 6.6 5.5 9.5 14.4 18 19.6 18.8 23 22.3 25.1 26.4 1.9 3.8 2.1 5.8 2.1 26 0 23.3-.2 24.2-5 24.2s-5-.8-5-25.2V134h-35v22.7c0 25.4.9 33.6 4.6 40.3 5.4 9.8 14.4 12.5 40.4 11.8 15.1-.3 16.9-.6 21.5-2.8 2.9-1.4 6.3-4.3 8.1-6.6 5-6.6 5.6-12.1 5.2-46l-.3-30-3.7-7.5c-3.8-7.7-10-14.3-27.7-29.8-4.1-3.6-8.7-8.5-10.2-11l-2.9-4.5V50c0-14.7.3-20.9 1.2-21.8 1.6-1.6 6.3-1.5 7.7.1.7.9 1.2 8.6 1.3 21.3l.3 19.9 16.8.3 16.9.2-.4-24.7c-.5-28.3-1.2-31.7-7.8-37.7-6.1-5.5-11.5-6.6-32.4-6.5-10 .1-19.4.5-21.1.9zm188.1 1.5c-6.2 2.2-8.9 4.6-12.1 11l-3 6-.3 40.2c-.3 34-.1 40.3 1.1 40.3 1.4 0 3.7 4 3.7 6.5 0 .9-1 1.5-2.5 1.5H620l.1 26c.1 14.7.5 25.7 1 25.4s.9-1.4.9-2.4c0-2.9 1.1-5 2.6-5 2 0 1.7-1.7-.5-3.9-1.7-1.7-1.8-2.1-.4-4 1.2-1.8 1.6-1.9 2.8-.8.7.8 1.2 2.7 1 4.2-.1 1.6.2 4.2.7 5.9 2.1 6.6 2.6 9.6 1.7 10.2-.5.3-.9.1-.9-.4 0-.6-.9-.8-2-.5s-2 .1-2-.4c0-.6-1-1-2.2-.9-2.1.1-2.3.6-2.5 7.1-.1 4.8.1 6.4.7 5 .5-1.1.9-1.6.9-1 .1.5.6.3 1.1-.5s.7-2.4.4-3.6c-.8-3.1 4.1-5.1 6.7-2.8 1.1.9 1.9 2.2 1.9 2.7 0 .6-.6.3-1.2-.6-.8-1-1.8-1.4-2.6-.8-1 .6-1 1 .2 2 1 .9 1.2 2 .6 4.2-.5 1.7-.5 2.9.1 2.9.5 0 .9 1.1.9 2.5 0 2.9-2.5 3.4-3.2.7-.3-1-1.2-1.9-2.1-1.9s-1.4.4-1.1.9c.3.4-.2.8-1 .8-2.4 0-2.6 1.4-1.5 7.6 1.5 7.9 4.2 12.9 8.9 16.3 6.5 4.7 10.4 5.3 34.5 4.9 22-.3 22-.3 26.7-3.1 6.1-3.5 9.4-9.2 10.8-18.2.7-4.7 1-32.8.8-86-.4-88.7 0-84.3-7.8-92.4-6-6.2-10.5-7.1-34.9-7.1-15.1.1-21.7.5-24.5 1.5zm29.8 26.7c1.4 2 1.6 10.8 1.6 75.5 0 73 0 73.3-2.1 75.4-2.2 2.2-6.6 2-8.1-.4-.4-.7-.8-31.1-.9-67.7-.1-83.7-.1-81.1 1.8-83.3 2.2-2.4 5.9-2.1 7.7.5zM626 133.1c0 1.1-.4 1.7-1 1.4-.5-.3-1-1.3-1-2.1s.5-1.4 1-1.4c.6 0 1 .9 1 2.1zm12 12.3c0 .2-.7.9-1.5 1.6-1.3 1.1-1.4 1-.9-.4s2.4-2.3 2.4-1.2zm-2 5c0 .3-.4.8-1 1.1-.5.3-1 .1-1-.4 0-.6.5-1.1 1-1.1.6 0 1 .2 1 .4zM909.1 3.3c-1.9.6-5.4 2.9-7.7 5.1-7 6.8-7.5 10.2-7.2 44.3l.3 28.8 3.4 6.9c3.4 7 8.2 12.3 27.3 30.2 14.4 13.5 14.8 14.5 14.8 40.6 0 22.2-.4 23.8-5.3 23.8-5.1-.1-5.2-.3-5.7-25.2l-.5-23.3h-33l-.3 25c-.3 27.6.4 32.8 4.8 39.8 5.2 8.2 8.1 9.1 31.9 9.5 13 .3 21.9 0 24.8-.8 8.9-2.2 15.6-10.2 16.9-20.1 1.2-8.9 1.5-53.4.4-59.8-2.2-12.9-9.3-22.7-27.1-37.2-5.5-4.6-11.3-10.4-13.5-13.5l-3.9-5.6-.3-19.9c-.2-13 .1-20.5.8-21.9 1.2-2.3 7.3-2.9 8.7-.8.4.7 1 10.3 1.3 21.3l.5 20 16.3.3 16.3.3-.4-24.8c-.2-15.5-.8-26.2-1.5-28.4-1.9-5.8-5.4-10.2-10.2-12.9-4.4-2.4-5.1-2.5-26.5-2.7-14.4-.1-23.2.2-25.4 1zM939.3 20c-.3 1.1-.9 2-1.4 2-1.3 0-1.1-1.4.3-2.8.9-.9.9-1.2 0-1.2-.7 0-1.2-.5-1.2-1.1 0-.8.4-.8 1.4 0 .8.7 1.2 2.1.9 3.1zM972 190.5c0 .8-.2 1.5-.4 1.5s-.6-.7-1-1.5c-.3-.8-.1-1.5.4-1.5.6 0 1 .7 1 1.5zM2.5 5.8c-.3.7 0 1 .5.7.6-.4 1 1.9 1 6s-.4 6.4-1 6-.7.6-.3 2.7c.7 4 1.3 4.9 1.3 2 0-1.2.4-2.2.9-2.2 1.1 0 2 7 .9 7.6-.4.3-.8-.3-.9-1.3 0-1.6-.1-1.6-.9.2-1.6 3.8-1.2 4.5 2.8 4.3h9.5l5.7.2v175l17.8-.2 17.7-.3.3-87.3L58 32h19V4H64.7c-7.2 0-12.7.4-13.3 1-.8.8-2 .7-4 0-4.3-1.7-44.2-1-44.9.8zM9 9c0 .5-.4 1-.9 1s-.8.8-.6 1.7c.1 1 0 1.2-.2.5-.3-.6-.9-1.2-1.5-1.2s-.6-.6.2-1.5c1.4-1.7 3-2 3-.5zm-1 8.6c0 .8-.4 1.2-1 .9-.5-.3-1-1.3-1-2.1s.5-1.2 1-.9c.6.3 1 1.3 1 2.1zm3 7.4c0 1.3-.5 1.8-1.5 1.4-1.6-.7-1.9-1.7-.8-2.7C9.9 22.4 11 23 11 25zm71 80.5V207l17.8-.2 17.7-.3.2-44 .2-44 5.6-.3 5.5-.3V207l17.8-.2 17.7-.3V4.5l-17.7-.3L129 4l-.2 42.7-.3 42.8H118l-.3-42.5-.2-42.5-17.7-.3L82 4v101.5zM170.5 5.2c-.3.7-.4 46.3-.3 101.3l.3 100h62v-27l-13.2-.3-13.3-.3V118h24V90h-24V32.1l13.3-.3 13.2-.3v-27l-30.8-.3c-24.1-.2-30.9 0-31.2 1zM271 105v101l8.8.1c23.2.1 31.7-.2 32.4-1.4.6-.9.8-.9.8 0 0 1 2.6 1.3 9.5 1.3h9.5v-27h-13.6c-12.6 0-13.6-.1-12.8-1.8.4-.9.9-40.3 1-87.5l.2-85.7H271v101zm84-99.4c0 1.4-2.8 30.1-16.5 167.9-1.4 13.7-2.7 26.7-3 28.8l-.5 3.7h17.5c16 0 17.5-.1 17.5-1.8 0-.9.7-12.2 1.7-24.9l1.7-23.3h17.2l1.9 25 1.8 25h34.6l-.5-3.2c-.2-1.8-2.5-24.6-4.9-50.6-2.5-26.1-4.8-49.3-5-51.5-.3-2.3-2.3-24-4.5-48.2-2.3-24.2-4.3-45-4.6-46.3L409 4h-27c-24.3 0-27 .2-27 1.6zm30.4 80.9c1.5 20.3 2.7 38 2.6 39.2 0 2.1-.5 2.3-6 2.3h-6v-3.8c-.1-7.6 5.4-76.2 6.1-75.4.3.4 1.8 17.3 3.3 37.7zm3.3 16.7c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zM512 17.5v13.4l9.8.3 9.7.3.3 87.3.2 87.2h36V31h19V4h-75v13.5zm197 88V207h35v-88.9l12.3-.3 12.2-.3-.1-13.5-.2-13.5-11.8-.5-11.9-.5v-57l13.3-.3 13.3-.3-.3-13.7-.3-13.7-30.7-.3L709 4v101.5zM805.7 4.6c-.4.4-.7 41.2-.7 90.8 0 102.3-.3 98.4 7.6 106.3 6.7 6.7 11.1 7.5 37.2 7.1l21.9-.3 4.8-3c6.3-3.9 9.2-9.4 10.5-20 .7-5.2 1-38.8.8-94.5l-.3-86.5-17.7-.3L852 4v87.5c0 86.2 0 87.5-2 89.5-2.3 2.3-2.9 2.4-6.4 1l-2.6-.9-.2-88.3-.3-88.3-17.1-.3c-9.3-.1-17.3.1-17.7.4z" /><path d="M625 147.5c0 .8.4 1.5 1 1.5.5 0 .7-.7.4-1.5-.4-.8-.8-1.5-1-1.5s-.4.7-.4 1.5zm-1.5 10.6c-.4.6-.5 1.2-.2 1.5.2.3.7-.2 1-1.1.7-1.7.1-2-.8-.4zm1.1 14.6c-.6 1.4-.5 1.5.5.6.7-.7 1-1.5.7-1.8s-.9.2-1.2 1.2z" /></svg></h3>
                                <p>After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope. Will they survive? ...</p>
                                <div class="weeknr">
                                    <p>This Week:<h2>3</h2></p>
                                </div>
                                <div class="lastweeknr">
                                    <p>Last Week: <h2>3</h2></p>
                                </div>
                                <a className='readmore' href="https://www.imdb.com/title/tt3581920/" target="_blank" rel="noopener noreferrer">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="search-bar"></div>
            <div className='search'>
                <div className='icon-search'>
                    <svg id="search-logo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                </div>

                <div className='inputsearch'>
                    <form onSubmit={getMovie}>
                        <input id="movie-name" className='inputbox' type="text" onChange={(e) => setMovieName(e.target.value)} placeholder='Search here ...' required />
                        <button id="search-btn" type="submit">
                            Search
                        </button>
                    </form>
                </div>


            </div>


            <div class="bigcardfullcontainer">
                <div className='bigcardcontainer'>
                    <div class="bigcard">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div id="result" dangerouslySetInnerHTML={{ __html: result }}></div>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Main;
