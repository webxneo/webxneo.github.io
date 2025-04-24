const target = document.getElementById('hoverTarget');
const box = document.getElementById('hoverBox');
let timeout;

target.addEventListener('mouseenter', () => {
  clearTimeout(timeout);
  box.style.display = 'block';
});

target.addEventListener('mouseleave', () => {
  timeout = setTimeout(() => {
    box.style.display = 'none';
  }, 300); // delay hiding by 300ms
});