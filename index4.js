/*Arrange in alphabetical order.
Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
function. The program should use the map function to create a new list containing only the titles of the books,
and then pass this new list to the callback function. The callback function should then log the titles to the
console in alphabetical order.
*/


const books = [
    {
        title: "the great gatsby",
        author: "F. scott fitzgerald",
        year: 1925,
    },
    {
        title: "the kill a mockingbrid",
        author: "harper lee",
        year: 1960,
    },
    {
        title: "who are you",
        author: "george Orwell",
        year: 1949,
    },
    {
        title: "pride and prejudice",
        author: "jane austen",
        year: 1813,
    },

];

function logTitles(titles) {
    titles.sort();
    console.log(titles.join(","))
}

function extractTitles(books,callback) {
    const titles = books.map((book) => book.title);
    callback(titles); 
}

extractTitles(books, logTitles);