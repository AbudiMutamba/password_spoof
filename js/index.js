let onSubmit = () => {
    const EMAIL = document.getElementById("exampleInputEmail1").value
    const PASSWORD = document.getElementById("exampleInputPassword").value
    const MESSAGE = document.getElementById("exampleInputMessage").value
    const FORM = document.getElementById("form")

    if(PASSWORD == "" || EMAIL == "" || MESSAGE == ""){
        alert("All fields are required")
        return false
    }
    
    console.log(EMAIL,MESSAGE)
    let info = {
        "email" : EMAIL,
        "password" : PASSWORD,
        "message": MESSAGE
    }
    
    let infoJSON = JSON.stringify(info)
 
    let json_Array = []

    json_Array.push(infoJSON)

    let spoof_file = new Blob([json_Array],{type:"text"});

    let anchor = document.createElement("a");

    anchor.href = URL.createObjectURL(spoof_file);

    anchor.download = "spoof_file.text";

    anchor.click();
    return true;

    // localStorage.setItem( 'user',infoJSON)

    alert("Invalid login")
    document.getElementById("form").reset();
    // let info = [];
    // info.push(EMAIL);
    // info.push(PASSWORD);
    // info.push(MESSAGE);

    // let data_string = JSON.stringify(info);

    // let spoof_file = new Blob([data_string],{type:"text"});

    // let anchor = document.createElement("a");
    // anchor.href = URL.createObjectURL(spoof_file);
    // anchor.download = "spoof_file.text";
    // anchor.click();
    // return true;
    
 }

