function copyPrompt(btn){
    const txt=btn.closest('.prompt').querySelector('pre').innerText;
    navigator.clipboard.writeText(txt).then(()=>{
      const old=btn.textContent; btn.textContent='Copiado ✓';
      setTimeout(()=>btn.textContent=old,1800);
    });
  }