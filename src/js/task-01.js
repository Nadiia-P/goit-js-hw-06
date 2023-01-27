const allCategoriesArr = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategoriesArr.length}`);


allCategoriesArr.forEach((category) => {
    const categoryTitleText = category.querySelector('h2').textContent;
    const categoryItemsQuantity = category.querySelectorAll('li').length;
    console.log(`\nCategory: ${categoryTitleText}\nElements: ${categoryItemsQuantity}`);
})
