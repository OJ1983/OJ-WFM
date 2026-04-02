document.querySelectorAll('.segment').forEach(seg => {
  seg.addEventListener('click', () => {
    alert(`You clicked segment ${seg.textContent}!`);
  });
});
