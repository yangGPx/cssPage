// 涟漪按钮事件
document.querySelector('.ripple-button').addEventListener('click', function(e) {
  // if (e.target.querySelectorAll('.ripple').length > 0) {return}
  // 这里应该加一个锁定  如果有元素 就不再添加元素 
  const position = e.target.getBoundingClientRect()
  const x = e.clientX - position.x;
  // const x = e.clientX - e.target.offsetTop;
  const y = e.clientY - position.y;
  const el = document.createElement('span'); 
  el.className = 'ripple';
  el.style.top = `${y}px`;
  el.style.left = `${x}px`;
  e.target.appendChild(el);
  setTimeout(() => {
    el.remove()
  }, 1000);
})