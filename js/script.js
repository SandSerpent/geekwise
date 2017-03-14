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
      console.log(fullName);
      console.log(email);
      console.log(subBtn);
});

var footer = document.querySelector('footer'),
    infinity = document.querySelector('footer span'),
    astro = document.querySelector('footer i');
    console.log(astro);

footer.addEventListener('mouseover', function(){
  astro.classList.add('floating');
  infinity.style.textContent = 'to infinity';
})
footer.addEventListener('mouseout', function(){
  astro.classList.remove('floating');
})
