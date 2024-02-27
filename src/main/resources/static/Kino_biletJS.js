let tickets = [];

function kjopBillett(){
    const form = document.getElementById('ticketForm');
    if(form.checkValidity()) {
        const ticket = {
            film: form.film.value,
            antall: form.antall.value,
            fornavn: form.fornavn.value,
            etternavn: form.etternavn.value,
            telefonnr: form.telefonnr.value,
            epost: form.epost.value
        };