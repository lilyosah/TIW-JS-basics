'use strict';
// Helps avoid a lot of weird errors! Always include this line
// To run via command line: $ node myScript.js

const listInteractivity = () => {
    const form = document.querySelector("#add-form");
    form.addEventListener("submit", (e) => {
        // Stops page from refreshing
        e.preventDefault();
        // Get value from input
        const value = e.target[0].value;
        const list = document.querySelector("#my-list");
        // Create p tag
        const newItem = document.createElement("p");
        newItem.appendChild(document.createTextNode(value));
        // Create li tag
        const listItem = document.createElement("li");
        // Put p tag inside li tag
        listItem.appendChild(newItem);
        // Add items to list
        list.appendChild(listItem);
    });
}

listInteractivity();