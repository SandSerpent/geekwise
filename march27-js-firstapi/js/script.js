(function(){
  getReq('env.json', setVars);
}());

var myVars;

function getReq(url, callback){
  var req = new XMLHttpRequest();
  req.open('GET', url);
  req.onload = function(){
    if(req.readyState === 4 && req.status === 200){
      callback(JSON.parse(req.responseText));
    }else{
      console.log('error', req.statusText);
    }
  }
  req.send(null);
}

function setVars(data){
  myVars = envVars();
  myVars.setID('client_id='+data.client_id);
  myVars.setSecret('client_secret='+data.client_secret);

  setSearch();
}

function envVars(){
  var url = 'https://twitter.com/', id, secret;
  return {
    setID: function(data){
      id = data;
    },
    setSecret: function(data){
      secret = data;
    },
    getID: function(){
      return id;
    },
    getSecret: function(){
      return secret;
    },
    getUrl: function(){
      return url;
    }
  };
}

function setSearch(){
  var url = myVars.getUrl();
  var auth = myVars.getID()+'&'+myVars.getSecret();

  var searchInput = document.querySelector('nav input[type="search"]'),
      searchSubmit = document.querySelector('nav input[type="submit"]');

    searchSubmit.addEventListener('click', function(evt){
      evt.preventDefault();
      getReq(url+'search/users?q='+searchInput.value+'&'+auth, getUsers);
    });
}

function getUsers(users){
  console.log(users);
  var main = document.querySelector('main'),
      ul = document.createElement('ul'), li, img, a;
  main.innerHTML = '';
  ul.id = 'userArr';
  main.appendChild(ul);

  users.items.forEach(function(e, i){
    li = document.createElement('li');
    img = document.createElement('img');
    a = document.createElement('a');

    img.src = e.avatar_url;
    a.href = '#'+e.login;
    a.setAttribute('alt', e.login);

    a.appendChild(img);
    li.appendChild(a);
    ul.appendChild(li);
  });
  setUsers();
}

function setUsers(){
  var url = myVars.getUrl();
  var auth = myVars.getID()+'&'+myVars.getSecret();

  var users = document.querySelectorAll('#userArr li');
  users.forEach(function(e, i){
    e.addEventListener('click', function(){
      getReq(url+'users/'+this.firstChild.getAttribute('alt')+'?'+auth, viewUser);
    });
  });
}
