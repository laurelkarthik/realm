var i;
// (function ()
// {

 
// }());




 // Initialize Firebase
	
 
  // Initialize Firebase


 var config={apiKey:"AIzaSyAqlo3qJ-if4BeffG6_DwDJrWr0IaJrbiI",
    authDomain: "radius-cdc32.firebaseapp.com",
    databaseURL: "https://radius-cdc32.firebaseio.com",
    storageBucket: "radius-cdc32.appspot.com",
    messagingSenderId: "45589152517"
  };
  firebase.initializeApp(config);
 

var btnlogin =document.getElementById('loginbtn');

var gFirebaseUser ;
  //
  btnlogin.addEventListener('click',e =>
  {
    
var email=document.getElementById('emailtext').value;
var pass=document.getElementById('pwdtext').value;

	var auth=firebase.auth();
	  //signinbtn
	var promise=auth.signInWithEmailAndPassword(email,pass);
  //promise.catch(e => console.log(e.message))
  //promise.resolve(v => console.log("validuser"));
  promise.then(function onresolve(r){
    console.log(r);
    window.location="index.html";
  },function onreject(){console.log("invaliduser")});
  
  //console.log(promise);
  
//   firebase.auth().onAuthStateChanged(firebaseUser =>
// {
//   gFirebaseUser = firebaseUser;

// 	if(firebaseUser)
// 	{
// 		console.log(firebaseUser);

// 		//window.location="index.html";
    
//    i=1; 
  	
// 	}
// 	else
// 	{
// 		console.log('not loggrd in');
// 		btnsignout.classList.add('hide');
// 	}

 
// });
	  
});

