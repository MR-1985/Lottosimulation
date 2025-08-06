function createHeader() {
    const header = document.createElement('header');
    header.className = 'header';
    header.id = 'header';
    header.textContent = 'Welcome to the Lottosimulator';
    document.body.appendChild(header);
}
function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.id = 'footer';
    footer.innerHTML =
        '© 2025 Lottosimulator.<br>' +
        'All rights reserved.<br>' +
        'Developed by Marco Rößler';
    document.body.appendChild(footer);
}