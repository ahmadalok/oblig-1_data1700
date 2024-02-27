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
        tickets.push(ticket);
        form.reset();
        displayTickets();
    } else {
        alert('Vennligst fyll ut alle feltene med gyldig informasjon.');
    }
}

function slettAlleBilletter() {
    tickets = [];
    displayTickets();
}



// used to showing the tickets that have been bought,
function displayTickets() {
    const ticketList = document.getElementById('ticketList');
    ticketList.innerHTML = '';
    tickets.forEach(function(ticket) {
        const ticketItem = document.createElement('li');
        ticketItem.textContent = `Film: ${ticket.film}, Antall: ${ticket.antall}, Navn: ${ticket.fornavn} ${ticket.etternavn}, Telefon: ${ticket.telefonnr}, Epost: ${ticket.epost}`;
        ticketList.appendChild(ticketItem);
    });
}