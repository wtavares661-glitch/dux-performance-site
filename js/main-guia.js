// progresso de leitura
  var bar = document.getElementById('progress');
  function upd(){
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
  }
  document.addEventListener('scroll', upd, {passive:true});
  window.addEventListener('resize', upd);
  upd();

  // abas windows/mac
  document.querySelectorAll('.tabs').forEach(function(group){
    var panes = group.parentElement;
    group.querySelectorAll('button').forEach(function(btn){
      btn.addEventListener('click', function(){
        group.querySelectorAll('button').forEach(function(b){ b.setAttribute('aria-selected','false'); });
        btn.setAttribute('aria-selected','true');
        panes.querySelectorAll('.tabpane').forEach(function(p){ p.classList.remove('on'); });
        var target = panes.querySelector('#' + btn.dataset.tab);
        if (target) target.classList.add('on');
      });
    });
  });

  // copiar prompts
  document.querySelectorAll('.copybtn').forEach(function(btn){
    btn.addEventListener('click', function(){
      var txt = btn.closest('.prompt').querySelector('pre').innerText;
      navigator.clipboard.writeText(txt).then(function(){
        var old = btn.textContent;
        btn.textContent = 'Copiado!';
        setTimeout(function(){ btn.textContent = old; }, 1600);
      }).catch(function(){
        btn.textContent = 'Selecione e copie';
      });
    });
  });

  // checklist persistente
  document.querySelectorAll('.check input').forEach(function(inp, i){
    var key = 'setup-check-' + i;
    try {
      if (localStorage.getItem(key) === '1') inp.checked = true;
      inp.addEventListener('change', function(){
        localStorage.setItem(key, inp.checked ? '1' : '0');
      });
    } catch(e) {}
  });