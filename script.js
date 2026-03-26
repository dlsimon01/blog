/* ── Shared Interactions ── */
function toggleLike(btn) {
  var span = btn.querySelector('span');
  var svg  = btn.querySelector('svg');
  var n    = parseInt(span.textContent);
  
  if (btn.dataset.liked) { 
    span.textContent = n - 1; 
    svg.style.fill = 'none'; 
    delete btn.dataset.liked; 
  } else { 
    span.textContent = n + 1; 
    svg.style.fill = 'currentColor'; 
    btn.dataset.liked = '1'; 
  }
}