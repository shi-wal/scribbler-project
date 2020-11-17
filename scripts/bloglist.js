//Function for deleting the post
var no=document.getElementById('nodelete');
function deletemodal(){
    var modal = document.getElementById('deleteModal');
    modal.style.display = "block";
    no.onclick = function(){
        modal.style.display = "none"; 
    }
}

// Function that is setting the data into local storage on clicking 3 dots
function postFunction(c) {
        var heading= document.getElementsByClassName('blogHeading')[c].innerHTML;
        var user= document.getElementsByClassName('username')[c].innerHTML;
        var post= document.getElementsByClassName('blogText')[c].innerHTML;
        localStorage.setItem("heading", heading);
        localStorage.setItem("user", user);
        localStorage.setItem("post", post);
}

