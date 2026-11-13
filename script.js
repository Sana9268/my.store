

//1.FORM SUBMIT EVENT
const form = document.getElementById("feedback-form");

form.addEventListener("submit", function(e) {

    
    e.preventDefault();

    const username =
        document.getElementById("username").value;

    const email =
        document.getElementById("email").value;


    const message =
        document.getElementById("form-message");


    if (username !== "" && email !== "") {

        message.textContent =
            "Thank you for visiting, " +
            username +
            "! We will contact you at " +
            email +
            ".";

    } else {

        message.textContent =
            "Please fill out your name and email.";

    }

});


// 2. TABLE ROW HIGHLIGHTING
const rows =
    document.querySelectorAll("#phone-table tr");


rows.forEach(function(row) {

    row.addEventListener("mouseover", function() {

        row.style.backgroundColor = "lightgray";

    });


    row.addEventListener("mouseout", function() {

        row.style.backgroundColor = "";

    });

});



// 3. LIGHT / DARK MODE

const themeButton = document.getElementById("theme-btn");


themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

});



// 4. ORDER TOTAL CALCULATOR


const phoneItems = document.querySelectorAll(".phone-item");

const total = document.getElementById("total");


phoneItems.forEach(function(item) {

    item.addEventListener("change", function() {

        let price = 0;


        phoneItems.forEach(function(item) {

            if (item.checked) {

                price = price + parseInt(item.value);

            }

        });


        total.textContent =
            "Total: Rs. " + price.toLocaleString();

    });

});



// 5. AGE VERIFICATION

const birthYearInput = document.getElementById("birth-year");


birthYearInput.addEventListener("change", function() {

    const birthYear = parseInt(birthYearInput.value);

    const age =2026 - birthYear;


    const discountMessage =document.getElementById("discount-message");

    if (age >= 60) {

        discountMessage.textContent = "You qualify for a senior discount!";

    }

    else if (age >= 18 && age <= 25) {

        discountMessage.textContent ="You qualify for a student discount!";

    }

    else {

        discountMessage.textContent ="You do not qualify for a special discount.";

    }

});


// 6. READ MORE / READ LESS

const readMoreButton =document.getElementById("read-more-btn");


const extraStory =document.getElementById("extra-story");


readMoreButton.addEventListener("click", function() {

    if (extraStory.style.display === "none") {

        extraStory.style.display = "block";

        readMoreButton.textContent = "Read Less";

    }

    else {

        extraStory.style.display = "none";

        readMoreButton.textContent = "Read More";

    }

});


// 7. CATEGORY FILTER

const filterButtons = document.querySelectorAll(".filter-btn");


const phoneRows =document.querySelectorAll(
        "#phone-table tr[data-category]"
    );


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        
        const selectedCategory = button.getAttribute("data-category");


        phoneRows.forEach(function(row) {

            const rowCategory =
                row.getAttribute("data-category");


            if (selectedCategory === "All") {

                row.style.display = "";

            }

            else if (rowCategory === selectedCategory) {

                row.style.display = "";

            }

            else {

                row.style.display = "none";

            }

        });

    });

});


// 8. DYNAMIC OPENING STATUS



const currentHour =new Date().getHours();


const openingStatus = document.getElementById("opening-status");


if (currentHour >= 8 && currentHour < 22) {

    openingStatus.textContent =
        "We are Open!";

    openingStatus.style.color = "green";

}

else {

    openingStatus.textContent =
        "Closed - Open at 8 AM";

    openingStatus.style.color = "red";

}



// 9. CHARACTER COUNTER


const specialNotes =
    document.getElementById("special-notes");


const characterCount =
    document.getElementById("character-count");


specialNotes.addEventListener("input", function() {

    
    const remaining =
        100 - specialNotes.value.length;


    
    characterCount.textContent =
        remaining + " characters remaining";

});

