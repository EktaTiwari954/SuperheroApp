async function fetchImage()
{
        
        var Name=document.querySelector("#Names").value;
        const url='https://www.superheroapi.com/api.php/1927701114032828/search/'+Name;
        /*fetching the Api and collecting the response in res*/
        const res= await fetch(url);
        /*getting json from the response in resp*/
        const resp=await res.json();
        /*extracting all the information needed for about page from json*/
        var img=resp.results[0].image.url;
        var name=resp.results[0].name;
        var power=resp.results[0].powerstats.power;
        var speed=resp.results[0].powerstats.speed;
        var durability=resp.results[0].powerstats.durability;
        var intelligence=resp.results[0].powerstats.intelligence;
        var strength=resp.results[0].powerstats.strength;
        var combat=resp.results[0].powerstats.combat;
        var aliases=resp.results[0].biography.aliases;
        var alignment=resp.results[0].biography.alignment;
        var alteregos=resp.results[0].biography[4];
        var firstappearance=resp.results[0].biography.firstappearance;
        var fullname=resp.results[0].biography.full-name;
        var placeOfBirth=resp.results[0].biography.placeofbirth;
        var publisher=resp.results[0].biography.publisher;

        /*Adiing all information of about page to localstorage of browser*/

        localStorage.setItem('imageurl',img);
        localStorage.setItem('name',name);
        localStorage.setItem('power',power);
        localStorage.setItem('speed',speed);
        localStorage.setItem('durability',durability);
        localStorage.setItem('intelligence',intelligence);
        localStorage.setItem('strength',strength);
        localStorage.setItem('combat',combat);
        localStorage.setItem('aliases',aliases);
        localStorage.setItem('alignment',alignment);
        localStorage.setItem('alteregos',alteregos);
        localStorage.setItem('firstappearance',firstappearance);
        localStorage.setItem('fullname',fullname);
        localStorage.setItem('placeOfBirth',placeOfBirth);
        localStorage.setItem('publisher',publisher);
        /*setting url for image after search*/
        var homeimg=document.getElementById("super");
        homeimg.src=img;
        document.getElementById("next").style.display='flex';
        
}

/*calling fetchImage function when search superhero btn is clicked*/
     document.querySelector("#btn").addEventListener('click',fetchImage);


/*adding image to favourites*/
var favimages=new Array();
function addToFavourite()
{
        
        alert("Successfully! added to favourites")
        if(localStorage['favimges']==null)
        {      
                favimages.push(localStorage.getItem('imageurl'));
                console.log(favimages)
                localStorage.setItem("favimges",JSON.stringify(favimages));
        }
        else
        {
                var array=JSON.parse(localStorage['favimges']);
                array.push(localStorage.getItem('imageurl'));
                localStorage.setItem("favimges",JSON.stringify(array));
        }
}
document.getElementById("btn1").addEventListener('click',addToFavourite);
console.log(document.getElementById("btn1"));


/*calling addToFavourite function when add favourite btn is clicked*/










