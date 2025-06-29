const maxGen = 25;
const genList = document.getElementById('generation-list');
if (genList) {
  for (let i = maxGen; i >= 1; i--) {  // 내림차순
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'gen-btn';
    a.href = `members_${i}.html`;
    a.innerHTML = `<span class="wrap"><span>${i}기</span></span>`;
    if (window.location.href.includes(`members_${i}.html`)) a.classList.add('active');
    li.appendChild(a);
    genList.appendChild(li);
  }
}
