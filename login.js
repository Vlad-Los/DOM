console.log('login');

const refs = {
    form: document.querySelector('.login-form'),
};

const handleSubmit = (event) =>  {
    event.preventDefault();

    const {login,password} = event.target.elements;


    const loginValue = login.value;
    const passwordValue = password.value;
    
    console.log(loginValue);
    console.log(passwordValue);
};


// _________ event listeners___________

refs.form.addEventListener('submit',handleSubmit);