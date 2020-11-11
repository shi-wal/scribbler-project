var no=document.getElementById('nodelete');
function deletemodal(){
    var modal = document.getElementById('deleteModal');
    modal.style.display = "block";
    no.onclick = function(){
        modal.style.display = "none"; 
    }
}