  // seleção de pacotes
    const packEls = Array.from(document.querySelectorAll('.pack'))
    const packs = document.getElementById('packs')
    let selectedPack = null

    packEls.forEach(el=>{
      el.addEventListener('click',()=>{
        packEls.forEach(p=>p.classList.remove('active'))
        el.classList.add('active')
        selectedPack = el.dataset.value
      })
    })

    // ano no rodapé
    document.getElementById('year').textContent = new Date().getFullYear()
    
   // botão continuar envia para WhatsApp 
   document.getElementById('continuar').addEventListener('click',()=>{ 
    const game = document.getElementById('game').value 
    const id = document.getElementById('player').value.trim() 
    if(!id){ 
      alert('Informe o ID do jogador.') 
      return 
    } 
    if(!selectedPack){ alert('Selecione um pacote.') 
    return 
  } const pay = (document.querySelector('input[name="pay"]:checked')||{}).value 
   // montar mensagem 
   const mensagem = `📌 Nova solicitação de recarga\n\n` + `🎮 Jogo: ${game}\n` + `🆔 ID do jogador: ${id}\n` + `💎 Pacote: ${selectedPack} Diamantes\n` + `💳 Pagamento: ${pay}\n\n` + `Por favor, confirme o pedido.` 
   const numero = "244957334842" 
   const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}` 
   window.open(url, "_blank") }) 

