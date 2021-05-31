const inputFirstName = document.querySelector("#first-name")
const inputLastName = document.querySelector("#last-name")
const inputEmail = document.querySelector("#email")
const inputPassword = document.querySelector("#password")
const buttonClaim = document.querySelector("#contact-form")

buttonClaim.addEventListener("submit", (event) => {
    if (inputFirstName.value == "" || inputLastName.value == "" || inputEmail.value == "" || inputPassword.value == "") {
        event.preventDefault()
        document.querySelector(".modal-error").classList.add("active")
    }
})

document.querySelector("#ok").addEventListener("click", () => {
    document.querySelector(".modal-error").classList.remove("active")
}) 