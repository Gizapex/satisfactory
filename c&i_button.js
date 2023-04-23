function ChangeImage() {
    var img = document.getElementById('image');
    var form = document.querySelector('form');
    var emailInput = form.querySelector('input[type=email]');
    var passwordInput = form.querySelector('input[type=password]');
    if (emailInput.value !== '' && passwordInput.value !== '') {
      img.src = 'Image/Launch_Stage2.png';
      return true;
    } else {
      img.src = 'Image/Launch_Stage1.png';
      return false;
    }
  }