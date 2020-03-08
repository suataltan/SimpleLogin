class User {
	constructor(name, password, email) {
		this.username = name;
		this.password = password;
		this.email = email;
	}
}

function signUp() {
	let un = document.getElementById("username").value;
	let psw = document.getElementById("password").value;
	let mail = document.getElementById("email").value;
	let checkbox = document.getElementById("termsCheck");
	let userinfo = new User(un, psw, mail);
	let taken = false;

	var values = [],
		keys = Object.keys(localStorage),
		i = keys.length;
	let allUserNames = [];
	let allEmails = [];
	while (i--) {
		values.push(JSON.parse(localStorage.getItem(keys[i])));
		allUserNames = values.map(item => item.username);
		allEmails = values.map(item => item.email);
	}
	let n = allUserNames.length;
	while (n--) {
		if (userinfo.username === allUserNames[n]) {
			window.alert("Kullanıcı adı alınmış.");
			taken = true;
		}
		if (userinfo.email === allEmails[n]) {
			window.alert("Email alınmış.");
			taken = true;
		}
	}
	if (userinfo.password.length < 3) {
		window.alert("Şifre çok kısa.");
		taken = true;
	}
  
  if (checkbox.checked==false) {
    window.alert("Üye olmak için Kullanıcı Sözleşmesini kabul etmeniz lazım.");
    taken = true;
  }
	if (taken === false) {
		localStorage.setItem(userinfo.username, JSON.stringify(userinfo));
		window.alert("Kaydedildi");
	}
}

function login() {
	let un = document.getElementById("usernameL").value;
	let psw = document.getElementById("passwordL").value;
	let userinfo = new User(un, psw);
	let basari = false;
	var values = [],
		keys = Object.keys(localStorage),
		i = keys.length;
	let allUserNames = [];
	let allPasswords = [];
	while (i--) {
		values.push(JSON.parse(localStorage.getItem(keys[i])));
		allUserNames = values.map(item => item.username);
		allPasswords = values.map(item => item.password);
	}
	let n = allUserNames.length;
	while (n--) {
		if (userinfo.username === allUserNames[n] && userinfo.password === allPasswords[n]) {
			basari = true;
		}
	}
	if (basari === true) {
		window.alert("Başarılı!");
		window.location.replace("success.html");
	} else {
		window.alert("Başarısız!");
	}
	basari = false;
}

// function allStorage() {
// 	var values = [],
// 		keys = Object.keys(localStorage),
// 		i = keys.length;
// 	var allEmails = [];
// 	while (i--) {
// 		values.push(JSON.parse(localStorage.getItem(keys[i])));
// 		var allUserNames = values.map(item => item.username);
// 		var allEmails = values.map(item => item.email);
// 	}

// 	window.alert(allEmails);
// 	window.alert(allUserNames);
// }
