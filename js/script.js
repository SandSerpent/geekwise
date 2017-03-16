var sec1 = document.querySelector('main section:nth-of-type(1)'),
    rocket = document.querySelector('section:nth-of-type(1) > div > i');

sec1.addEventListener('mouseover', function(){
    rocket.classList.add('blast');
    rocket.classList.add('red');
})
sec1.addEventListener('mouseout', function(){
    rocket.classList.remove('blast');
    rocket.classList.remove('red');
})

var inpName = document.querySelector('input:nth-of-type(1)'),
    inpMail = document.querySelector('input:nth-of-type(2)'),
    inpSub = document.querySelector('input:nth-of-type(3)'),
    bio = document.querySelector('main section:nth-of-type(2) span:nth-of-type(3)');

inpSub.addEventListener('click', function(evt){
  evt.preventDefault();
  var fullName = inpName.value.trim(),
      email = inpMail.value,
      subBtn = inpSub.value;

      alert('Hello ' + fullName + ", welcome to my webpage");
      var contact = prompt('Is ' + email + ' your correct E-mail? If so, type "yes", if not type "no"').toLowerCase();
      console.log(contact);
      if(contact === "yes"){
        alert("Alright! I'll contact you as soon as I can.");
      }else{
        alert("If you would like to contact me, fill in the correct information");
      }
      bio.textContent = " " + fullName;

  var fullName = '',
      email = '',
      subBtn = '',
      contact = '';
});

var footer = document.querySelector('footer'),
    sec2 = document.querySelector('main section:nth-of-type(2)'),
    astro = document.querySelector('footer i');

sec2.addEventListener('mouseover', function(){
  astro.classList.add('floating');
})
sec2.addEventListener('mouseout', function(){
  astro.classList.remove('floating');
})
