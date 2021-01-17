//<script type="text/javascript">
const signUp = e => {
    let formData = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        
        pnumber: document.getElementById('pnumber').value,
        pcode: document.getElementById('pcode').value,
        pwd: document.getElementById('pwd').value
    }
    localStorage.setItem('formData',JSON.stringify(formData));
    //console.log(localStorage.getItem('formData'));
    dispData();
    e.preventDefault();
}

// add even lisatner
 fname.addEventListener('submit', checking1)
 lname.addEventListener('submit', checking2)
 email.addEventListener('submit', checking3)
 pnumber.addEventListener('submit', checking4)
 pcode.addEventListener('submit', checking5)
 pwd.addEventListener('submit', checking6)

function checking1(e){
    let firstname = document.querySelector('#fname').value
    let reg1 = /^([a-zA-Z ]){2,30}$/
    if(firstname === '') {
        alert('empty field!')
    }
    else {
        if(reg1.test(firstname)){
            alert("Your first name is valid")
        }
        else{
            alert("your first name is not valid(please use only letter)")
        }
    }
    document.querySelector('#fname').value = '';

    e.preventDefault();

}



function checking2(e){
    let lastname = document.querySelector('#lname').value
    let reg1 = /^([a-zA-Z ]){2,30}$/
    if(lastname === '') {
        alert('empty field!')
    }
    else {
        if(reg1.test(lastname)){
            alert("Your last name is valid")
        }
        else{
            alert("your first name is not valid(please use only letter)")
        }
    }
    document.querySelector('#lname').value = '';

    e.preventDefault();

}

function checking3(e){
    let email1 = document.querySelector('#email').value
    let reg1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(email1 === '') {
        alert('empty field!')
    }
    else {
        if(reg1.test(email1)){
            alert("Your email is valid")
        }
        else{
            alert("You has entered an invalid email address!")
        }
    }
    document.querySelector('#email').value = '';

    e.preventDefault();

}


function checking4(e){
    let number1 = document.querySelector('#pnumber').value
    let reg1 = /^01[0-9]{9}$/
    if(number1 === '') {
        alert('empty field!')
    }
    else {
        if(reg1.test(number1)){
            alert("Your number is valid")
        }
        else{
            alert("You has entered an invalid number!")
        }
    }
    document.querySelector('#pnumber').value = '';

    e.preventDefault();

}

function checking5(e){
    let postcode1 = document.querySelector('#pcode').value
    let reg1 = /^01[0-9]{4}$/
    if(postcode1 === '') {
        alert('empty field!')
    }
    else {
        if(reg1.test(postcode1)){
            alert("Your postcode is valid")
        }
        else{
            alert("You has entered an invalid postcode!")
        }
    }
    document.querySelector('#pcode').value = '';

    e.preventDefault();

}

function checking6(e){
    let password1 = document.querySelector('#pwd').value
    let reg1 = /^[A-Za-z]\w{7,14}$/
    if(password1 === '') {
        alert('empty field!')
    }
    else {
        if(reg1.test(postcode1)){
            alert("Your password is valid")
        }
        else{
            alert("To check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter")
        }
    }
    document.querySelector('#pwd').value = '';

    e.preventDefault();

}


function dispData(){
    //console.log(JSON.parse(localStorage.getItem('formData')));
    if(localStorage.getItem('formData')){
        let {fname, lname, email, pcode, pnumber, pwd} = JSON.parse(localStorage.getItem('formData'));
        var output = document.getElementById('output');
    output.innerHTML=`
     <table>
        <tbody>
            <tr>
                <td>First Name</td>
                <td>${fname}</td>   
            </tr>
            <tr>
                <td>Last Name</td>
                <td>${lname}</td>   
            </tr>
            <tr>
                <td>Email Address</td>
                <td>${email}</td>   
            </tr>
            <tr>
                <td>Phone Number</td>
                <td>${pnumber}</td>   
            </tr>
            <tr>
                <td>Post Code</td>
                <td>${pcode}</td>   
            </tr>
            <tr>
                <td>Password</td>
                <td>${pwd}</td>   
            </tr>

        </tbody>
     </table>
    `;
}


}
dispData();
