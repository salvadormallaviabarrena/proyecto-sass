document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menuDesplegable = document.getElementById('menu-desplegable');
  
    menuIcon.addEventListener('click', () => {
      menuDesplegable.classList.toggle('show'); // Muestra u oculta el menú desplegable
    });
  });
  