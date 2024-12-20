function menuHidden () {
  const menuList = document.querySelector('.menu-list');
  if (menuList.style.display == 'block')
    menuList.style.display = 'none';
  else
    menuList.style.display = 'block'
}

document.querySelector('.burger').onclick = menuHidden;

