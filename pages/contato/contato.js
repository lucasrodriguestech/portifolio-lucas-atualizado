function enviarMensagem() {
    const nomeInput = document.getElementById('nome').value;
    const emailInput = document.getElementById('email').value;
    const assuntoInput = document.getElementById('assunto').value;
    const mensagemInput = document.getElementById('mensagem').value;

    console.log(nomeInput, emailInput, assuntoInput, mensagemInput);

    fetch('http://localhost:3000/contato', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome: nomeInput, email: emailInput, assunto: assuntoInput, mensagem: mensagemInput })
    });
    alert('Mensagem enviada com sucesso');
    mensagens();
}

function dropDown() {
    const linksContainer = document.querySelector('.menu-container');


    const dropDownContainer = document.createElement('div');
    dropDownContainer.classList.add('dropdown-container');
  
    const linkHome = document.createElement('a');
    linkHome.classList.add('textDropdown');
    linkHome.innerText = 'Home';
    linkHome.href = '../../index.html';

    const linkPortifolio = document.createElement('a');
    linkPortifolio.classList.add('textDropdown');
    linkPortifolio.innerText = 'Portifólio';
    linkPortifolio.href = '../portifolio/index.html'  
  
    
    linksContainer.appendChild(dropDownContainer);
    dropDownContainer.appendChild(linkHome);
    dropDownContainer.appendChild(linkPortifolio);

    document.body.appendChild(dropDownContainer);

    document.addEventListener('click', (event) => {
        if (!dropDownContainer.contains(event.target) && event.target !== linksContainer) {
            dropDownContainer.remove();
        }
    })
  }

  




