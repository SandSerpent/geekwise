var modal = document.getElementById('modal');

function createModal(modalType, modalMsg){
  modal.classList.add('active');
    var modalForm = document.createElement('form'),
    modalMessage = document.createElement('p'),
    modalInput = document.createElement('input'),
    modalDiv = document.createElement('div'),
    modalConfirm = document.createElement('input'),
    modalCancel = document.createElement('input');

    modalMessage.textContent = modalMsg;

  modalInput.type = 'text';
  modalInput.placeholder = 'your response';

  modalConfirm.type = 'submit';
  modalConfirm.value = 'confirm';

  modalCancel.type = 'button';
  modalCancel.value = 'Cancel';

  modalForm.append(modalMessage);
  if(modalType === 'prmopt'){
    modalForm.append(modalInput);
    modalDiv.append(modalCancel);
  }else if (modalType === 'confirm'){
    modalDiv.append(modalCancel);
  }
  modalDiv.append(modalConfirm);
  modalForm.append(modalDiv);

  modal.append(modalForm);

  modalCancel.addEventListener('click', function(){
    modal.removeChild(modalForm);
    modal.classList.remove('active');
  })
  modalConfirm.addEventListener('click', function(evt){
    evt.preventDefault();
    modal.removeChild(modalForm);
    modal.classList.removeChild('active');
    if(modalInput.value){
      var userInput = modalInput.value;
      console.log(userInput);
    }
  })

}

// createModal('prompt', 'hey, how you doing?');
