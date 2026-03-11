AOS.init();

particlesJS("particles-js",{

particles:{

number:{value:80},

color:{value:"#00f7ff"},

shape:{type:"circle"},

opacity:{value:0.5},

size:{value:3},

line_linked:{

enable:true,
distance:150,
color:"#00f7ff",
opacity:0.4,
width:1

},

move:{

enable:true,
speed:3

}

}

});

document.getElementById("contactForm").addEventListener("submit", async function(e){

e.preventDefault()

const name = document.getElementById("name").value
const email = document.getElementById("email").value
const message = document.getElementById("message").value

const res = await fetch("http://localhost:5000/contact",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name:name,
email:email,
message:message
})

})

alert("Message Sent Successfully!")

})