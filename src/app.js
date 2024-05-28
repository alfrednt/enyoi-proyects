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
