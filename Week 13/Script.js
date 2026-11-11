const form = document.getElementById('contractForm');
const outputSection = document.getElementById('outputSection');
const outputData = document.getElementById('outputData');

form.addEventListener('submit', function (event) {
event.preventDefault(); 

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const position = document.getElementById('position').value;
const startDate = document.getElementById('startDate').value;
const workStatus = document.querySelector('input[name="workStatus"]:checked').value;
const experience = document.getElementById('experience').value || "None provided";

outputData.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Position:</strong> ${position}</p>
    <p><strong>Start Date:</strong> ${startDate}</p>
    <p><strong>Status:</strong> ${workStatus}</p>
    <p><strong>Experience:</strong> ${experience}</p>
`;

    outputSection.style.display = 'block';
});