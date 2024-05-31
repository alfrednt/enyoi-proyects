const certificateExpand = document.querySelectorAll('[certificate]');

const expandCertificate = (event) => {
    const element = event.target;
    element.classList.toggle('h-[500px]');
    element.classList.toggle('w-[900px]');
    element.classList.toggle('duration-300');
};

certificateExpand.forEach(cert => {
    cert.addEventListener('click', expandCertificate);
});

const menu_mobile = document.getElementById('menu_mobile');
const menuShow = document.getElementById('menuShow');
const  menuBarra = document.querySelectorAll('[menuBarra]')
let isMenuOpen = false;
const displayMenu = () => {
   isMenuOpen = !isMenuOpen
    menuShow.classList.toggle('flex');
    if (isMenuOpen){
        menuShow.classList.remove('hidden');
        return
    }
    menuShow.classList.add("hidden");
};
menu_mobile.addEventListener('click', displayMenu);

menuBarra.forEach(menuB => {
    menuB.addEventListener('click', displayMenu);
});