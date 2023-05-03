function validation(){
    //validate first name
    var value = document.getElementById("useremail").value.trim();
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
    {
        return true;
    }else {
        return false;
    }

}