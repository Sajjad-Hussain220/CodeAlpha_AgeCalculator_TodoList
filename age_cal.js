let remove_dob_head = () => {
    if (
        dateCheck.style.display == 'block') {
        dateCheck.style.display = 'none';
    }
}

let remove_all = () => {
    birthdate.value = "";
    document.querySelector(".years").textContent = "-";
    document.querySelector(".months").textContent = "-";
    document.querySelector(".days").textContent = "-";
    dateCheck.style.display = 'none';

}

let check_dob = () => {
    let today_date = new Date();
    let input_date = new Date(birthdate.value);

    const inputdetail = {
        date: input_date.getDate(),
        month: input_date.getMonth() + 1,
        year: input_date.getFullYear(),
    }

    const todaydetail = {
        date: today_date.getDate(),
        month: today_date.getMonth() + 1,
        year: today_date.getFullYear(),
    }

    if (birthdate.value != "") {
        if (inputdetail.year > todaydetail.year) {
            alert("Not Born Yet");
        } else {
            dateCheck.style.display = 'none';
            const days_dob = calculate_age(inputdetail, todaydetail);
            document.querySelector(".years").textContent = days_dob.years;
            document.querySelector(".months").textContent = days_dob.months;
            document.querySelector(".days").textContent = days_dob.days;
        }
    } else {
        setTimeout(() => {
            dateCheck.style.display = 'block';
        }, 100);
        dateCheck.style.display = 'none';
   
    }
}

let calculate_age = (inputdetail, todaydetail) => {
    let year = Math.abs(inputdetail.year - todaydetail.year);
    let month, day;
    if (inputdetail.month > todaydetail.month) {
        year--;
        month = 12 - Math.abs(inputdetail.month - todaydetail.month);
    } else {
        month = Math.abs(inputdetail.month - todaydetail.month);
    }
    day = Math.abs(inputdetail.date - todaydetail.date);

    let return_value = { days: day, months: month, years: year };
    return return_value;
}

let check = document.getElementById("check");
check.addEventListener("click", check_dob);

let clear = document.getElementById("clear");
clear.addEventListener("click", remove_all);

var birthdate = document.getElementById("birthdate");
birthdate.addEventListener("click", remove_dob_head);

var dateCheck = document.getElementById('date_check');
