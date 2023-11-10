let inputs = document.querySelectorAll('input'),
    label = document.querySelectorAll('label'),
    ps = document.querySelectorAll('p'),
    spans = document.querySelectorAll('span'),
    button = document.querySelector('button');
    
button.addEventListener('click', () => {
    let num0 = inputs[0].value || 1, //day input
        num1 = inputs[1].value || 1, //month input
        num2 = inputs[2].value; //year input
    let yearRegex = /^(1[8-9][0-9][0-9]|20[0-9][0-9])$/, // years from 1800 to 2099
        monthRegex =  /^(0?[1-9]|1[1-2])$/,  // months from 1 to 12
        dayRegex = /^(0?[1-9]|[1-2][0-9]|3[0-1])$/; // days fron 1 tO 31
    if (yearRegex.test(num2) && monthRegex.test(num1) && dayRegex.test(num0)) {
        let birthDate = new Date(num2, num1-1, num0); // the birthay of user
        let today = new Date(); // this time
        if (today >= birthDate) {
            let ageMS = today - birthDate; // age in MS
            let years = ageMS / (1000 * 3600 * 24 * 365); // years
            let month = (years - Math.floor(years)) * 12; // months
            let day = (month - Math.floor(month)) * 31; // days
            // push the age in the spans
            spans[0].innerHTML = `<span>${Math.floor(years)}</span>`;
            spans[1].innerHTML = `<span>${Math.floor(month)}</span>`;
            spans[2].innerHTML = `<span>${Math.floor(day)}</span>`;
            // clear input value
            inputs.forEach(inp => inp.value = '');
        }else{
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].classList.add('error')
                label[i].classList.add('error')
                ps[i].classList.add('error')
            }
        }
    }else{
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.add('error')
            label[i].classList.add('error')
            ps[i].classList.add('error')
        }
    }
});

//remove error class
inputs.forEach(inpt => {
    inpt.onkeyup = ()=>{
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove('error')
            label[i].classList.remove('error')
            ps[i].classList.remove('error')
        }
    }
});

