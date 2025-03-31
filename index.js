const express = require('express');
const app = express();

const fruits = [
  { id: 1, name: 'Apple', color: 'Red', taste: 'Sweet' },
  { id: 2, name: 'Banana', color: 'Yellow', taste: 'Sweet' },
  { id: 3, name: 'Orange', color: 'Orange', taste: 'Citrusy' },
  { id: 4, name: 'Grapes', color: 'Purple', taste: 'Sweet' },
  { id: 5, name: 'Lemon', color: 'Yellow', taste: 'Sour' },
  { id: 6, name: 'Watermelon', color: 'Green', taste: 'Sweet' },
  { id: 7, name: 'Mango', color: 'Yellow', taste: 'Sweet' },
  { id: 8, name: 'Pineapple', color: 'Brown', taste: 'Tangy' },
  { id: 9, name: 'Strawberry', color: 'Red', taste: 'Sweet' },
  { id: 10, name: 'Kiwi', color: 'Brown', taste: 'Tart' }
];

app.get("/", (req, res) => {
  res.send("I like fruits");
});

app.get("/fruits", (req, res) => {
  res.json(fruits);
});

module.exports = app;
