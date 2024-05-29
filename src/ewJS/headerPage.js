function updateTemplate() {
    const selectElement = document.getElementById('page-select');
    const selectedOption = selectElement.options[selectElement.selectedIndex].text === "--Please choose an option--" ? "Pagina 1" : selectElement.options[selectElement.selectedIndex].text;
    document.getElementById('pages-header').innerHTML = `<h1 style="text-align: center;">${selectedOption}</h1>`;
}