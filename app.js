
document.getElementById('button')
    .addEventListener('click', loadCustomer);

document.getElementById("button2").addEventListener("click", loadCustomers);


    // Load Customer
function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "customer.json", true);

    xhr.onprogress = function () {
      console.log("READYSTATE", xhr.readyState);
    };

    xhr.onload = function () {
      if (this.status === 200) {
        const customer = JSON.parse(this.responseText);
        //parsing address
        const customerAddress = JSON
                                    .stringify(customer.address)
                                    //splice
                                    .split(',')
                                    .join(' ')
                                    .replace(/['"]+/g, '');
        const output = `
        <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Age: ${customer.age}</li>
            <li>Occupation: ${customer.occupation}</li>

            <li>Address: ${customerAddress}</li>

        </ul>`
        document.getElementById('customer').innerHTML = output;
      }
    };

    xhr.send();
}


    // Load Customers
function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "customers.json", true);

    xhr.onprogress = function () {
      console.log("READYSTATE", xhr.readyState);
    };

    xhr.onload = function () {
      if (this.status === 200) {
        const customers = JSON.parse(this.responseText);
        let output = '';
        customers.forEach((customer) => {
            output += `
        <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Age: ${customer.age}</li>
            <li>Occupation: ${customer.occupation}</li>
            <li>Address: ${customer.address}</li>

        </ul>`;
        })
        document.getElementById('customers').innerHTML = output;
      }};

    xhr.send();
}

