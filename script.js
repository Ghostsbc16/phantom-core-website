document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseover', () => {
    btn.style.boxShadow = "0 0 20px #00faff";
  });
  btn.addEventListener('mouseout', () => {
    btn.style.boxShadow = "none";
  });
});
