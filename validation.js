// validaton codes 
if (workflow.user_phoneno) {
    const ph_no = workflow.user_phoneno;
    let lengthof = ph_no.toString().length;
    console.log(lengthof);
    if (lengthof === 10) {
        console.log("Number Saved to cloud ");
        
    } else {
        let fail_mess = "Invalid Number, Please Ensure the number is 10 Digits";
        console.log(fail_mess);
        workflow.failur_message = fail_mess
        workflow.failure_phno = workflow.failur_message;
    }
} else {
    console.log("Error: Phone number is undefined.");
}
