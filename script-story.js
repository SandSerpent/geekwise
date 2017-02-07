var wrong = "It's safe to assume you do not need medical attention"
var painResp = confirm("Are you in pain?");
if(painResp){
  alert('Continue');
}else {
  alert(wrong);
  alert("go on, leave.");
  alert("go or by the power invested in me, I will find you. If you misclicked the first time, continue")
}

var bad = confirm("Is your pain bad?");
if(bad){
  alert('Continue to seek medical attention.');
}else {
  alert('Double check your pain, to make sure you need medical attention. Otherwise, ' + wrong);
}

var press = alert('Press on spot of pain');

var badPain = [5, 6, 7, 8, 9, 10];
var tolPain = [0, 1, 2, 3, 4, 5];

var scale = confirm('On a scale of one to ten, is your pain higher than a 5?');
if(scale){
  alert('Call 911 Immediately');
  var patient = "There seems to be trouble"
}else{
  alert(wrong + " However, if the pain persists, call 911.")
  var patient = wrong + ". You seem to be fine";
}
