function create(words) {
  const content = document.getElementById('content');

  for(let i = 0; i < words.length; i++){
    const div = document.createElementt('div');
    const p = document.createElement('p');
    p.textContent = words[i];
    p.style.display = 'none';
    div.appendChild(p);
    content.appendChild(div);
  }

  content.addEventListener('click', function(e){
    if(e.target.tagName==='DIV' || e.target.tagName==='P'){
      const paragraph = e.target.children[0] || e.target;
      const isVisible = paragraph.style.display === 'block';
      paragraph.style.display = isVisible ? 'none' : 'block';
    }
  })
  
}