/*asigning text to the about page*/
document.querySelector('#img1').src=localStorage.getItem('imageurl');
/* Storing the information of the superhero in variables*/
var name=localStorage.getItem('name');
var power=localStorage.getItem('power');
var speed=localStorage.getItem('speed');
var durability=localStorage.getItem('durability');
var intelligence=localStorage.getItem('intelligence');
var strength=localStorage.getItem('strength');
var combat=localStorage.getItem('combat');
var aliases=localStorage.getItem('aliases');
var alignment=localStorage.getItem('alignment');
var alteregos=localStorage.getItem('alteregos');
var firstappearance=localStorage.getItem('firstappearance');
var fullname=localStorage.getItem('fullname');
var placeOfBirth=localStorage.getItem('placeOfBirth');
var publisher=localStorage.getItem('publisher');



/*asigning text to the about page*/

/*Superhero name*/
 var name1=document.querySelector(".name");
 name1.append(name);


 /*powerstats*/
 var power1=document.querySelector("#power");
 power1.append(power);
 var combat1=document.querySelector("#combat");
 combat1.append(combat);
 var durability1=document.querySelector("#durability");
 durability1.append(durability);
 var intelligence1=document.querySelector("#intelligence");
 intelligence1.append(intelligence);
var speed1=document.querySelector("#speed");
speed1.append(speed);
var strength1=document.querySelector("#strength");
strength1.append(strength);


/*biography*/

var fullname1=document.querySelector("#fullname");
fullname1.append(fullname);
var placeOfBirth1=document.querySelector("#placeOfBirth");
placeOfBirth1.append(placeOfBirth);
var firstappearance1=document.querySelector("#firstappearance");
firstappearance1.append(firstappearance);
var publisher1=document.querySelector("#publisher");
publisher1.append(publisher);
var aliases1=document.querySelector("#aliases");
aliases1.append(aliases);
var alteregos1=document.querySelector("#alteregos");
alteregos1.append(alteregos);
var alignment1=document.querySelector("#alignment");
alignment1.append(alignment);