// ------------- Questions ----------------

// 1. Its in the name, all it does is prevent the default action from happening, in the lab it prevents the webpage fromm loading.
// 2. The value is the type of data that it is inputted.
// 3. Template literals make it easier so you dont have to use concatenation.


const form = document.getElementById("contactname");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const color = document.getElementById("color").value;

    result.innerHTML = `
      <h3>Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
});