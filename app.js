(function(){
  const modal = document.createElement('div');
  modal.id='modal';
  Object.assign(modal.style,{
    position:'fixed',inset:'0',display:'none',background:'rgba(0,0,0,.75)',backdropFilter:'blur(2px)',
    alignItems:'center',justifyContent:'center',zIndex:9999,padding:'20px'
  });
  modal.innerHTML=`
    <div style="max-width:960px;width:100%;background:#0f1120;border:1px solid #23263a;border-radius:16px;overflow:hidden">
      <div style="display:flex;justify-content:flex-end;padding:8px">
        <button id="closeModal" style="background:#12142a;border:1px solid #2a2d40;color:#e6e8f5;border-radius:10px;padding:.4rem .6rem">✕</button>
      </div>
      <video id="modalVid" controls style="width:100%;display:block" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGNgAAAAAgAB5SfUoAAAAABJRU5ErkJggg=="></video>
    </div>`;
  document.body.appendChild(modal);
  const mv = modal.querySelector('#modalVid');
  window.openModal = function(src){
    mv.src = src; mv.currentTime=0; mv.play();
    modal.style.display='flex';
  };
  modal.querySelector('#closeModal').onclick = function(){
    mv.pause(); mv.src=''; modal.style.display='none';
  };
  modal.addEventListener('click', (e)=>{ if(e.target===modal){ modal.querySelector('#closeModal').click(); } });
})();
