// let total = 0;

// function addToCart(price) {
//     total += price;
//     document.getElementById("total").innerText = total;
// }

// function checkout() {
//     if (total == 0) {
//         alert("Cart is empty!");
//     } else {
//         alert("Order placed! Total: ₹" + total);
//         total = 0;
//         document.getElementById("total").innerText = total;
//     }
// }

// function validateForm() {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;

//     if (name == "" || email == "") {
//         alert("Please fill all fields!");
//         return false;
//     }

//     alert("Form submitted successfully!");
//     return true;
// }
// let total = 0;

// function addToCart(price) {
//     total += price;
//     document.getElementById("totalAmount").innerText = total;
// }

// function checkout() {
//     alert("Total amount is: " + total);
// }
let total = 0;

function addToCart(price) {
    total += price;
    document.getElementById("total").innerText = total;
}

function checkout() {
    alert("Total amount is ₹" + total);
    total = 0;
    document.getElementById("total").innerText = total;
}

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        return false;
    }

    alert("Form submitted successfully  \u2705");
    return false;
}