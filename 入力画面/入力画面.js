
document.getElementById("form").onsubmit = function(event){
    event.preventDefault();
    const registername = document.getElementById('form').name.value;
    const registerage = document.getElementById('form').age.value;
    document.getElementById('output').textContent = `${registername},　${registerage}歳`;


};
