function openModal(id, count) {
    // Get the modal
    var modal = document.getElementById(id);
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closed")[count];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// when user clicks on sign up hyperlink
var signup = document.getElementById('signup');
signup.addEventListener('click', function () {
    document.getElementById('signInModal').style.display = "none";
    openModal('signUpModal', 1);
})