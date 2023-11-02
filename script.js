const pages = document.querySelectorAll('.page');
let currentPage = 0;

document.addEventListener('DOMContentLoaded', () => {
    pages.forEach((page, index) => {
    page.style.transform = `translateX(${index * 100}%)`;
  });
});

document.addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    currentPage = Math.min(currentPage + 1, pages.length - 1);
  } else {
    currentPage = Math.max(currentPage - 1, 0);
  }

  pages.forEach((page, index) => {
    const offset = index - currentPage;
    const translateX = offset * 100;
    page.style.transform = `translateX(${translateX}%)`;
  });
});
