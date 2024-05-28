const certificateExpand = document.querySelectorAll('certificate');


const expandCertificate = (event) => {
    const element = event.target;
    element.classList.add(
        'h-[500px]',
        'w-[800px]',
        'duration-300'
    );
};


certificateExpand.forEach(cert => {
    cert.addEventListener('click', expandCertificate);
});



