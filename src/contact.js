function loadContact() {
    const middle = document.querySelector('#middle');
    middle.replaceChildren();

    const contact = document.createElement('div');
    contact['id'] = 'contact';
    middle.appendChild(contact);

    contact.appendChild(addContactMethod('Phone','555-555-5555'));
    contact.appendChild(addContactMethod('Email','top@restaurant.com'));
    contact.appendChild(addContactMethod('Address','somewhere'));    
}

function addContactMethod (method, description) {
    const contactMethod = document.createElement('h3');
    contactMethod.classList = 'method';
    contactMethod.textContent = `${method}: ${description}`;
    return contactMethod;
}

export default loadContact;