document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-button');
  
    accordionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const icon = this.querySelector('.accordion-icon i');
  
        // Pequeno delay para aguardar o Bootstrap aplicar 'collapsed'
        setTimeout(() => {
          if (this.classList.contains('collapsed')) {
            icon.classList.remove('bi-x');
            icon.classList.add('bi-plus');
          } else {
            icon.classList.remove('bi-plus');
            icon.classList.add('bi-x');
          }
        }, 150);
      });
    });
  });
  