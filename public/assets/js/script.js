
	var emailSubmissionButton = document.querySelector("#email-submission-button");
    emailSubmissionButton.addEventListener("click",function(){
        console.log("Hello from client JS");
        location.href = "https://localhost:4541/";
        //redirect back to / the main route

    });