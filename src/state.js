import {writable} from "svelte/store";
import {browser} from "$app/environment";
import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";


let initial = new Set();
if (browser) {
    let item = localStorage.getItem("selected_events");
    if (item !== null) {
        initial = new Set(JSON.parse(item));
    }
}

export const selected_events = writable(initial);

if (browser) {
    selected_events.subscribe((value) => {
        localStorage.setItem("selected_events", JSON.stringify([...value]));
    });
}

const firebaseConfig = {
    apiKey: "AIzaSyA8tRU9rZQ9oECUvTYrZjyfNJui1ED8pQI",
    authDomain: "mad3pwa.firebaseapp.com",
    databaseURL: "https://mad3pwa-default-rtdb.firebaseio.com",
    projectId: "mad3pwa",
    storageBucket: "mad3pwa.appspot.com",
    messagingSenderId: "546507112835",
    appId: "1:546507112835:web:1e75047623e35c45bc36b6"
}

initializeApp(firebaseConfig)
export const db = getDatabase()