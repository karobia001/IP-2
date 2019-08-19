 function checkDayOfWeek() {
 var DD = document.getElementById("monthday").value;
 var MM = document.getElementById("month").value;
 var CC = document.getElementById("century").value;
 var YY = document.getElementById("year").value;
// var genders = document.getElementsByName("rads");
// 
var myGenderValue = getGender();
console.log(myGenderValue);
//function dayOfTheWeek() {
    var pickedDay  = Math.round( ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);

//};
//create arrays for male names and day of the week;
var daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
if (myGenderValue == "male"){
    switch(pickedDay) {
                case (1):
                   document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is " + maleNames[1];
                break;
                case (2):
                   document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is " + maleNames[2];
                 break;
                case (3):
                  document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is "+ maleNames[3];
                break;
                case (4):
                  document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is " + maleNames[4];
                break;
                case (5):
                  document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is " + maleNames[5];
                break;
                case (6):
                  document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is " + maleNames[6];
                break;
                case (0):
                document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is " + maleNames[0];
                break;
                default:
                document.getElementById("result").innerHTML = "oops their is a problem somewhere!!!";
              };
}
else if (myGenderValue=="female"){
    switch(pickedDay) {
        case (1):
           document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is " +femaleNames[1];
        break;
        case (2):
           document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is " + femaleNames[2];
         break;
        case (3):
          document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is "+ femaleNames[3];
        break;
        case (4):
          document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is " + femaleNames[4];
        break;
        case (5):
          document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is " + femaleNames[5];
        break;
        case (6):
          document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is " + femaleNames[6];
        break;
        case (0):
        document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is " + femaleNames[0];
        break;
        default:
        document.getElementById("result").innerHTML = "oops their is a problem somewhere!!!";
      };
}
document.getElementById("result")=(pickedDay);
}



