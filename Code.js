function SendEmails(subject, body, emails,your_name,teacher_names) {
  var teacher_emails = emails;
  var teacher_names2 = teacher_names; 
  var your_name2 = your_name; // Assuming this is your name
  
  for (var i = 0; i < teacher_emails.length; i++) {
    console.log(teacher_emails[i]);
    var messageBody = "Dear " + teacher_names2[i] + ",\n" + body + "\nThanks,\n" + your_name2;
    MailApp.sendEmail(teacher_emails[i], subject, messageBody);
    console.log(messageBody);
    
  }
}

function GetInfo(subject, body, emails, your_name,teacher_names) {
  SendEmails(subject, body, emails,your_name,teacher_names);
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function Start() {
  // Optionally, you can add functionality to this function if needed
}
