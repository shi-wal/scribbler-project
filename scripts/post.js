// Fetching the data from bloglist.js
document.getElementById('blogTitle').innerHTML = localStorage.getItem("heading");
document.getElementById('username').innerHTML = localStorage.getItem("user");
document.getElementById('blogPosts').innerHTML = localStorage.getItem("post");

var editButton = document.getElementById('edit');

// Function for performing the functionalities on clicking edit button
editButton.addEventListener('click', function () {
    if (editButton.innerHTML === 'Edit <i class="fa fa-pencil-square-o"></i>') {
        editButton.innerHTML = 'Save <i class="fa fa-floppy-o"></i>';
        document.getElementById('blogPosts').style.border = "2px solid rgb(182,172,223)";
        document.getElementById('blogTitle').style.border = "2px solid pink";
        document.getElementById('blogPosts').setAttribute('contenteditable', 'true');
        document.getElementById('blogTitle').setAttribute('contenteditable', 'true');
    }
    else {
        editButton.innerHTML = 'Edit <i class="fa fa-pencil-square-o"></i>';
        document.getElementById('blogPosts').setAttribute('contenteditable', 'false');
        document.getElementById('blogPosts').style.border = "none";
        document.getElementById('blogTitle').setAttribute('contenteditable', 'false');
        document.getElementById('blogTitle').style.border = "none";
    }

});


var counts = 0;
// Function for liking the post
function likeFunction() {
    var like = document.getElementById('likeButton');
    var count = document.getElementById('likes');
    counts++;
    like.innerHTML = "<i class='fa fa-thumbs-up'></i>" + " Liked!"
    if (counts === 1) {
        count.innerHTML = counts + " person likes this!";
    }
    else {
        count.innerHTML = counts + " people have liked this!";
    }
}

// Function for adding the Comments
document.getElementById('addComments').addEventListener('click', function () {
    if (document.getElementById('comment').value === "") {
        document.getElementById('userComments').innerHTML += "";
    }
    else {
        var comment = document.getElementById('comment').value;
        document.getElementById('userComments').innerHTML = '<p>' + comment + '</p>' + document.getElementById('userComments').innerHTML;
        document.getElementById('comment').value = "";
    }
});



