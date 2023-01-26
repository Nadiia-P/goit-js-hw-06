// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const allCategories = document.querySelectorAll('.item');
console.log(allCategories);
console.log(`Number of categories: ${allCategories.length}`);


allCategories.forEach((category) => {
    const categoryTitleText = category.querySelector('h2').textContent;
    const categoryItemsQuantity = category.querySelectorAll('li').length;
    console.log(`\nCategory: ${categoryTitleText}\nElements: ${categoryItemsQuantity}`);
})
