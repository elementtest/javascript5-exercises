const getTheTitles = function() {
const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }]
const mappp = books.map(whateveryouwant => whateveryouwant.title);
return mappp
//VERY DIFFICULT EXERCISE... have an array called books.  inside you have objects which are the individual books with the titles and the authors in value key pairs.  you declare a const variable mappp with 3 ps.  equal it to the array name DOT map method then put parentheses place whatever you want kind of a paramater and then it will retrieve that from the title in the two objects.  
}
// Do not edit below this line
module.exports = getTheTitles;
