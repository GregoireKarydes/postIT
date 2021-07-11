// Déclarationd des variables du scope global

let  colorChoisie;
let sizeChoisie;
let menuSize = document.getElementById('sizeChoice');
let postItUpdate = document.querySelector('.postIt');
let textArea = document.querySelector('.txtOfPost');

// Déclaration des tailles S, M, L
let smallSizeText = {
    width : "140px" ,
    height : "120px"
}

let smallSizePost = {
    width : "100px" ,
    height :  "100px"
}

let mediumSizeText = {
    width : "190px" ,
    height : "170px"
}

let mediumSizePost = {
    width : "150px" ,
    height :  "150px"
}


let largeSizeText = {
    width : "240px" ,
    height : "220px"
}

let largeSizePost = {
    width : "200px" ,
    height :  "200px"
}


//function pour choisir les couleurs et lancer le menu lors de la création d'un new post-it
function colorChoice() {
     

        let colorChoice = document.getElementById('colorChoice');
        colorChoice.style.display = "block";

        let green = document.getElementById('greenUpdate');
        let blue = document.getElementById('blueUpdate');
        let yellow = document.getElementById('yellowUpdate');
        let pink = document.getElementById('pinkUpdate');
        let violet = document.getElementById('violetUpdate');


        green.addEventListener('click', () => {
            colorChoice.style.display = "none";
            nameOfPostIt.color = "#51ff91";
            sizeChoice();
        })

        blue.addEventListener('click', () => {
            colorChoice.style.display = "none";
            nameOfPostIt.color = "powderblue";
            sizeChoice();
        })

        yellow.addEventListener('click', () => {
            colorChoice.style.display = "none";
            nameOfPostIt.color = "#F9EFAF";
            sizeChoice();
        })

        
        pink.addEventListener('click', () => {
            colorChoice.style.display = "none";
            nameOfPostIt.color = "palevioletred";
            sizeChoice();
        })

        violet.addEventListener('click', () => {
            colorChoice.style.display = "none";
            nameOfPostIt.color = "#b2a8d5";
            sizeChoice();
        })

    }


//function pour choisir la size et lancer le menu lors de la création d'un new post-it
function sizeChoice() {

    menuSize.style.display = "block";

    let small=  document.getElementById('small');
    let medium=  document.getElementById('medium');
    let large=  document.getElementById('large');

    small.addEventListener('click', () => {
        menuSize.style.display = "none";
        nameOfPostIt.sizePost = smallSizePost;
        nameOfPostIt.sizeText = smallSizeText;
        nameOfPostIt.addAtPage()
        document.getElementById(`${nameOfPostIt.name}`).style.backgroundColor = nameOfPostIt.color; 
        document.getElementById(`${nameOfPostIt.name}`).style.width = nameOfPostIt.sizeText.width;
        document.getElementById(`${nameOfPostIt.name}`).style.height = nameOfPostIt.sizeText.height;
        document.querySelector('.postIt').style.height = nameOfPostIt.sizePost.height;
        document.querySelector('.postIt').style.width = nameOfPostIt.sizePost.width;
    })

    medium.addEventListener('click', () => {
        menuSize.style.display = "none";
        nameOfPostIt.sizePost = mediumSizePost;
        nameOfPostIt.sizeText = mediumSizeText;
        nameOfPostIt.addAtPage()
        document.getElementById(`${nameOfPostIt.name}`).style.backgroundColor = nameOfPostIt.color; 
        document.getElementById(`${nameOfPostIt.name}`).style.width = nameOfPostIt.sizeText.width;
        document.getElementById(`${nameOfPostIt.name}`).style.height = nameOfPostIt.sizeText.height;
        document.querySelector('.postIt').style.height = nameOfPostIt.sizePost.height;
        document.querySelector('.postIt').style.width = nameOfPostIt.sizePost.width;
    })

    large.addEventListener('click', () => {
        menuSize.style.display = "none";
        nameOfPostIt.sizePost = largeSizePost;
        nameOfPostIt.sizeText = largeSizeText;
        nameOfPostIt.addAtPage()
        document.getElementById(`${nameOfPostIt.name}`).style.backgroundColor = nameOfPostIt.color; 
        document.getElementById(`${nameOfPostIt.name}`).style.width = nameOfPostIt.sizeText.width;
        document.getElementById(`${nameOfPostIt.name}`).style.height = nameOfPostIt.sizeText.height;
        document.querySelector('.postIt').style.height = nameOfPostIt.sizePost.height;
        document.querySelector('.postIt').style.width = nameOfPostIt.sizePost.width;
    })
}
        
class PostIt {

        constructor(name, yourName, sizeText=smallSizeText, sizePost=smallSizePost, color='#F9EFAF', text= "Hi write here :)", positionX = '50%', positionY = '50%') {
            this.name = name,
            this.author = yourName,
            this.class = "postIt",
            this.sizeText =sizeText,
            this.sizePost =sizePost,
            this.color = color,
            this.text = text,
            this.positionX = positionX,
            this.positionY= positionY,
            this.html = `<h5> by ${this.author} </h5><textarea class="txtOfPost"  id="${this.name}" style="background-color: ${this.color}; width : ${this.sizeText.width}; height : ${this.sizeText.height};">${this.text}</textarea> 
            <p id="delete"> X</p>`,
            this.content = document.createElement("div"),
            this.content.className = this.class,
            this.content.innerHTML = this.html;

            }


        addAtPage() {
            document.getElementById('restrict').prepend(this.content)
            this.rendreDrag()
            this.delete()
            this.majText()
            this.majPosition()
        }

        menu() {
            document.getElementById('update').style.display = 'block';
                
                document.getElementById('closeUpdate').addEventListener('click', () => {
                    document.getElementById('update').style.display = 'none';
                })
        }

        rendreDrag() {
            $(this.content).draggable({
                containment: '#restrict',
            })
        }

        delete() {
            $('#delete').click(() => {this.content.remove()

                for(let i =0; i<allPostIt.length; i++) {
                     let reserch = allPostIt[i].text  
                    if(reserch == this.text) {
                        allPostIt.splice(i,1)
                    }
                }
            })

        }  

        majPosition() {
            document.querySelector('.postIt').addEventListener('click', (e) => {
                this.positionX = (e.clientX / screen.width *100)+"%";
                this.positionY = (e.clientY / screen.height*100)+13+"%";
            })
        }

        majText() {
            document.getElementById(this.name).addEventListener('input', (e) => {
                this.text= e.target.value;
                this.positionX = (e.clientX / screen.width *100)+"%";
                this.positionY = (e.clientY / screen.height*100)+"%";
            })
        }
}
        
// créer un new post-it      
const btn = $("#new")
let allPostIt = [];
let yourName;
let nameOfPostIt;

btn.click(() => {
    menuSize.style.display = "none";
    do {
        yourName = prompt('Who are you ?');
    } while (yourName == null || yourName=="");
     nameOfPostIt = "myPostIt";
    nameOfPostIt = new PostIt(nameOfPostIt, yourName);
    colorChoice();
    allPostIt.push(nameOfPostIt);
})


// MENU 

document.getElementById('violet').addEventListener('dblclick', () => {
    document.getElementById('violet').textContent = prompt("Purple :")
})

document.getElementById('blue').addEventListener('dblclick', () => {
    document.getElementById('blue').textContent = prompt("Blue :")
})

document.getElementById('yellow').addEventListener('dblclick', () => {
    document.getElementById('yellow').textContent = prompt("Yellow:")
})

document.getElementById('green').addEventListener('dblclick', () => {
    document.getElementById('green').textContent = prompt("Green :")
})

document.getElementById('pink').addEventListener('dblclick', () => {
    document.getElementById('pink').textContent = prompt("Pink :")
})


//save dans le local storage les settings
function save () {

    localStorage.clear();

    for(let i =0; i<allPostIt.length; i++) {
        localStorage.setItem("postIt"+i, JSON.stringify(allPostIt[i]));
    }
    localStorage.setItem("numberOfPostIt", allPostIt.length);
    localStorage.setItem("violet", document.getElementById('violet').textContent);
    localStorage.setItem("blue",  document.getElementById('blue').textContent)
    localStorage.setItem("yellow", document.getElementById('yellow').textContent)
    localStorage.setItem("green",  document.getElementById('green').textContent)
    localStorage.setItem("pink", document.getElementById('pink').textContent)

}

// LOADING SETTINGS
// INIT

    // Charger les légendes sauvergardées dans le local uniquement si elles existent
    if(localStorage.getItem('violet')!==null & localStorage.getItem('violet')!=="") {
        document.getElementById('violet').textContent = localStorage.getItem('violet');
    }
    if(localStorage.getItem('blue')!==null & localStorage.getItem('blue')!=="") {
        document.getElementById('blue').textContent = localStorage.getItem('blue');
    }
    if(localStorage.getItem('green')!==null & localStorage.getItem('green')!=="") {
        document.getElementById('green').textContent = localStorage.getItem('green');
    }
    if(localStorage.getItem('yellow')!==null & localStorage.getItem('yellow')!=="") {
        document.getElementById('yellow').textContent = localStorage.getItem('yellow');
    }
    if(localStorage.getItem('pink')!==null & localStorage.getItem('pink')!=="") {
        document.getElementById('pink').textContent = localStorage.getItem('pink');
    }

    // Charger les post-it

    let nombreDePostItEnLocal = parseInt(localStorage.getItem('numberOfPostIt'));
    
    for(let i =0; i<nombreDePostItEnLocal; i++) {
        let item = JSON.parse(localStorage.getItem('postIt'+i));
        let test =  new PostIt(item.name, item.author, item.sizeText, item.sizePost, item.color, item.text, item.positionX, item.positionY);
        test.addAtPage();
        document.querySelector('.postIt').style.height = test.sizePost.height;
        document.querySelector('.postIt').style.width = test.sizePost.width;
        document.querySelector('.postIt').style.top = test.positionY;
        document.querySelector('.postIt').style.left = test.positionX;
        allPostIt.push(test)
    }

    setInterval("save()",10);




