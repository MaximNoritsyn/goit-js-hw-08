import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');

const LOCAL_STORAGE_KEY = 'feedback-form-state';

let formData = {};

const onFormInput = event => {
    const target = event.target;
    formData[target.name] = target.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
};

const onFormSubmit = event => {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
    event.currentTarget.reset();
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    formData = {};
}

const populateForm = () => {
    const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (savedData) {
        Object.keys(savedData).forEach(name => {
            formData[name] = savedData[name];
            form.elements[name].value = savedData[name];
        });
    }
}

form.addEventListener('input', throttle(onFormInput, 500));

form.addEventListener('submit', onFormSubmit);

populateForm();