  // function checkForm1(form) {
  //   var nome = form.querySelector('input[type="text"]').value.toLowerCase();
  
  //   if (nome === "mayara viali de deus") {
  //     form.parentElement.classList.add('hidden');
  //     form.parentElement.nextElementSibling.classList.remove('hidden');
  //   } else if (nome === "may" || nome === "mamay" || nome === "mayara") {
  //     var popup = createPopup1("Existem outras pessoas com esse mesmo nome, poderia especificar um pouco mais?");
  //     document.body.appendChild(popup);
  //   } else if(nome === "mayara viali"){
  //     var popup = createPopup2("Você só vai entrar com o nome completo, macaquinha 🙈");
  //     document.body.appendChild(popup);
  //   } else {
  //     var popup = createPopup("Este lugar não é destinado a você, por favor SAIA IMEDIATAMENTE");
  //     document.body.appendChild(popup);
  //   }
  
  //   return false;
  // }
  
  // function checkForm2(form) {
  //   var telefone = form.querySelector('input[type="text"]').value;
  
  //   if(telefone === "5181672008"){
  //       document.getElementById("form2-container").classList.add('hidden');
  //       document.getElementById("form3-container").classList.remove('hidden');
  //   } else{
  //       var popup = createPopup("Sinto muito, mas aparentemente ou você não lembra ou você não é a Mayara Viali de Deus que eu conheço. SAIA");
  //       document.body.appendChild(popup);
  //   }

  //   return false;
  // }
  
  // function checkForm3(form) {
  //   var cidade = form.querySelector('input[type="text"]').value.toLowerCase();
  
  //   if (cidade === "porto alegre") {
  //     document.getElementById("form3-container").classList.add('hidden');
  //     document.getElementById("form4-container").classList.remove('hidden');
  //   } else{
  //       var popup = createPopup("Sinto muito, mas aparentemente ou você não lembra ou você não é a Mayara Viali de Deus que eu conheço. SAIA");
  //       document.body.appendChild(popup);
  //   }
  
  //   return false;
  // }
  
  // function checkForm4(form) {
  //   var valor = form.querySelector('input[type="text"]').value;
  
  //   if (valor === "25") {
  //     document.getElementById("form4-container").classList.add('hidden');
  //     document.getElementById("form5-container").classList.remove('hidden');
  //   } else {
  //       var popup = createPopup("Sinto muito, mas aparentemente ou você não lembra ou você não é a Mayara Viali de Deus que eu conheço. SAIA");
  //       document.body.appendChild(popup);
  //   }
  //   return false;
  // }
  
  // function checkForm5(form) {
  //   var senha = form.querySelector('input[type="text"]').value;
  
  //   if (senha === "6CO26H2OC6H12O66O2") {
  //     document.title = "Coração de Juliano Paulo III";
  //     document.body.innerHTML = "<div style='text-align: center; font-size: 36px; margin-top: 100px;'>Olá</div>";
  //     document.querySelector('link[rel="icon"]').setAttribute('href', 'img/heart-icon.png?v=1');
  //   } else{
  //       var popup = createPopup("Sinto muito, mas aparentemente ou você não lembra ou você não é a Mayara Viali de Deus que eu conheço. SAIA");
  //       document.body.appendChild(popup);
  //   }
  
  //   return false;
  // }
  




  function enviarLogParaFormspree(log) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/xdoryjdn"); // Substitua com o seu endpoint do Formspree
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("Enviado com sucesso!");
        } else {
            console.error("Erro ao enviar:", xhr.statusText);
        }
    };

    xhr.send(JSON.stringify({log: log}));
}

function checkForm1(form) {
  event.preventDefault(); // Impede o envio padrão do formulário
  var nome = form.querySelector('input[type="text"]').value.toLowerCase();
  var log = `Log do Formulário 1:\nNome: ${nome}`;

  if (nome === "mayara viali de deus") {
      form.parentElement.classList.add('hidden');
      form.parentElement.nextElementSibling.classList.remove('hidden');

      // Envia o log para o Formspree
      enviarLogParaFormspree(log);
  } else if (nome === "may" || nome === "mamay" || nome === "mayara") {
      var popup = createPopup1("Existem outras pessoas com esse mesmo nome, poderia especificar um pouco mais?");
      document.body.appendChild(popup);
  } else if(nome === "mayara viali"){
      var popup = createPopup2("Você só vai entrar com o nome completo, macaquinha 🙈");
      document.body.appendChild(popup);
  } else {
      var popup = createPopup("Este lugar não é destinado a você, por favor SAIA IMEDIATAMENTE");
      document.body.appendChild(popup);
  }

  // Adiciona o log local
  console.log(log);

  return false;
}

function checkForm2(form) {
  event.preventDefault(); // Impede o envio padrão do formulário
  var telefone = form.querySelector('input[type="text"]').value;
  var log = `Log do Formulário 2:\nTelefone: ${telefone}`;

  if(telefone === "5181672008"){
      document.getElementById("form2-container").classList.add('hidden');
      document.getElementById("form3-container").classList.remove('hidden');

      // Envia o log para o Formspree
      enviarLogParaFormspree(log);
  } else{
      var popup = createPopup("Sinto muito, mas aparentemente ou você não lembra ou você não é a Mayara Viali de Deus que eu conheço. SAIA");
      document.body.appendChild(popup);
  }

  // Adiciona o log local
  console.log(log);

  return false;
}

function checkForm3(form) {
  event.preventDefault(); // Impede o envio padrão do formulário
  var cidade = form.querySelector('input[type="text"]').value.toLowerCase();
  var log = `Log do Formulário 3:\nCidade: ${cidade}`;

  if (cidade === "porto alegre") {
      document.getElementById("form3-container").classList.add('hidden');
      document.getElementById("form4-container").classList.remove('hidden');

      // Envia o log para o Formspree
      enviarLogParaFormspree(log);
  } else{
      var popup = createPopup("Sinto muito, mas aparentemente ou você não lembra ou você não é a Mayara Viali de Deus que eu conheço. SAIA");
      document.body.appendChild(popup);
  }

  // Adiciona o log local
  console.log(log);

  return false;
}

function checkForm4(form) {
  event.preventDefault(); // Impede o envio padrão do formulário
  var valor = form.querySelector('input[type="text"]').value;
  var log = `Log do Formulário 4:\nValor: ${valor}`;

  if (valor === "25") {
      document.getElementById("form4-container").classList.add('hidden');
      document.getElementById("form5-container").classList.remove('hidden');

      // Envia o log para o Formspree
      enviarLogParaFormspree(log);
  } else {
      var popup = createPopup("Sinto muito, mas aparentemente ou você não lembra ou você não é a Mayara Viali de Deus que eu conheço. SAIA");
      document.body.appendChild(popup);
  }

  // Adiciona o log local
  console.log(log);

  return false;
}

function checkForm5(form) {
  event.preventDefault(); // Impede o envio padrão do formulário
  var senha = form.querySelector('input[type="text"]').value;
  var log = `Log do Formulário 5:\nSenha: ${senha}`;

  if (senha === "6CO26H2OC6H12O66O2") {
      document.title = "Coração de Juliano Paulo III";
      document.body.innerHTML = "<div style='text-align: center; font-size: 36px; margin-top: 100px;'>Olá</div>";
      document.querySelector('link[rel="icon"]').setAttribute('href', 'img/heart-icon.png?v=1');

      // Envia o log para o Formspree
      enviarLogParaFormspree(log);
  } else{
      var popup = createPopup("Sinto muito, mas aparentemente ou você não lembra ou você não é a Mayara Viali de Deus que eu conheço. SAIA");
      document.body.appendChild(popup);
  }

  // Adiciona o log local
  console.log(log);

  return false;
}




















  function createPopup(message) {
    var popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
      <div class="popup-content">
      <img class="imgaiming" src="img/me-aiming.png" alt="">
        <span class="close-popup" onclick="closePopup()">X</span>
        <p>${message}</p>
      </div>
    `;
    setTimeout(function() {
      document.body.removeChild(popup);
    }, 500000);
    return popup;
  }
  
  function closePopup() {
    var popup = document.querySelector('.popup');
    if (popup) {
      popup.parentNode.removeChild(popup);
    }
  }

  function createPopup1(message) {
    var popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
      <div class="popup-content">
      <img class="imgaiming" src="img/pensativo.png" alt="">
        <span class="close-popup" onclick="closePopup()">X</span>
        <p>${message}</p>
      </div>
    `;
    setTimeout(function() {
      document.body.removeChild(popup);
    }, 500000);
    return popup;
  }
  
  function closePopup() {
    var popup = document.querySelector('.popup');
    if (popup1) {
      popup.parentNode.removeChild(popup);
    }
  }

  function createPopup2(message) {
    var popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
      <div class="popup-content">
      <img class="imgaiming" src="img/zoi.png" alt="">
        <span class="close-popup" onclick="closePopup()">X</span>
        <p>${message}</p>
      </div>
    `;
    setTimeout(function() {
      document.body.removeChild(popup);
    }, 500000);
    return popup;
  }
  
  function closePopup() {
    var popup = document.querySelector('.popup');
    if (popup) {
      popup.parentNode.removeChild(popup);
    }
  }