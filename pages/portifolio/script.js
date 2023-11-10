function dropDown() {
    const linksContainer = document.querySelector('.menu-container');


    const dropDownContainer = document.createElement('div');
    dropDownContainer.classList.add('dropdown-container');
  
    const linkHome = document.createElement('a');
    linkHome.classList.add('textDropdown');
    linkHome.innerText = 'Home';
    linkHome.href = '../../index.html';

    const linkContato = document.createElement('a');
    linkContato.classList.add('textDropdown');
    linkContato.innerText = 'Contato';
    linkContato.href = '../contato/contato.html'  
    

    linksContainer.appendChild(dropDownContainer);
    dropDownContainer.appendChild(linkHome);
    dropDownContainer.appendChild(linkContato);

    document.body.appendChild(dropDownContainer);

    document.addEventListener('click', (event) => {
        if (!dropDownContainer.contains(event.target) && event.target !== linksContainer) {
            dropDownContainer.remove();
        }
    })
  }