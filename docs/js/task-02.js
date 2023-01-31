const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUlItem = document.querySelector('#ingredients');

const ingredientsLiItems = ingredients.map(ingredient => {
  const liItem = document.createElement('li');
  liItem.textContent = ingredient;
  liItem.classList.add('item')
  return liItem
});

ingredientsUlItem.append(...ingredientsLiItems);