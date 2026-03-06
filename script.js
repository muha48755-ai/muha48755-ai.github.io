// Mobile nav toggle and small niceties
document.addEventListener('DOMContentLoaded',function(){
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  toggle.addEventListener('click', ()=> nav.classList.toggle('open'));

  // set current year
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
        if(nav.classList.contains('open')) nav.classList.remove('open');
      }
    });
  });

  // Replay name animation on click
  const nameEl = document.querySelector('.name-anim');
  const replayName = ()=>{
    if(!nameEl) return;
    const chars = nameEl.querySelectorAll('.char');
    chars.forEach((c, i)=>{
      c.style.animation = 'none';
      // force reflow
      // eslint-disable-next-line no-unused-expressions
      c.offsetHeight;
      c.style.animation = `pop .7s cubic-bezier(.2,.9,.3,1) ${0.05 + i*0.07}s both`;
    });
  };
  if(nameEl){
    nameEl.addEventListener('click', replayName);
  }
});