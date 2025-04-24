function searchByTag(tagName) {
    // Get all elements with the specified tag name
    const elements = document.getElementsByTagName(tagName);

    // Convert the HTMLCollection to an array for easier manipulation
    const elementsArray = Array.from(elements);

    // Return the array of elements
    return elementsArray;
}
  const searchInput = document.getElementById('search');
  const items = document.querySelectorAll('#itemList li');

  searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? 'list-item' : 'none';
    });
  });

// Example usage:
// const results = searchByTag('div');
// console.log(results);