(function(){
  getReq('https://www.udacity.com/public-api/v0/courses', init);
}())

function getReq(url, cb){
  var req = new XMLHttpRequest();
  req.open('GET', url);
  req.onload = function(){
    if(req.readyStatus === 4 && req.status === 200){
      cb(JSON.parse(req.responseText));
    }else{
      console.log('error', req.statusText);
    }
    req.send(null);
}
}
function init(data){
  console.log(data.tracks);
  var main = document.querySelector('main'),
      ul = document.createElement('ul'), li, div, img, homepage, required_knowledge;

  main.appendChild(ul);

  data.tracks.forEach(function(e, i){
    li = document.createElement('li'),
    div = document.createElement('div'),
    img = document.createElement('img'),
    homepage = document.createElement('a'),
    required_knowledge = document.createElement('p');

    expected_learning.textContent = e.expected_learning;
    homepage.href = e.homepage;
    homepage.textContent = 'Learn More...';
    homepage.target = '_blank';
    if(e.image){
      image.src = e.image;
    }else{
      image.src = 'http://placehold.it/1000x600';
    }
    required_knowledge.innerHTML = e.required_knowledge;

    li.append(image, required_knowledge, expected_learning, homepage);
    ul.appendChild(li);
  })
}
