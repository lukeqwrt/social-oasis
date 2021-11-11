const searchInput = document.querySelector('#searchInput')
const placeholder = document.querySelector('.placeholder')


// window.addEventListener('click', function(e){   
//     if (document.getElementById('searchInput').contains(e.target)){
//         placeholder.style.display = "none"
//     } else{
//         placeholder.style.display = "flex"
//         searchInput.value = ""
//     }
// });

const links = document.querySelectorAll('[data-tab-target]')
// console.log(links)
links.forEach(i => {
    i.addEventListener('click', () => {
        links.forEach(link => {
            link.classList.remove('active')
        })
        i.classList.add('active')
    })
})
window.addEventListener("scroll", function(){
    let mydiv = document.getElementById('mydiv')
    mydiv.classList.toggle("sticky", window.scrollY > 290)
})

// theme modal
const themebtn = document.querySelector('#themeBtn')
const themeContainer = document.querySelector('.theme-modal-container')
const theme = document.querySelector('.theme')


themebtn.addEventListener('click', () => {
    themeContainer.classList.add('activeModal')    
})
themeContainer.addEventListener('click', (e) => {
    e.stopPropagation();
    if(e.target.classList.contains('theme-modal-container')){
        themeContainer.classList.remove('activeModal')
    }
    
})
const back = document.getElementById('back')
back.addEventListener('click', () => {themeContainer.classList.remove('activeModal')  } )
const done = document.getElementById('done')
done.addEventListener('click', () => { themeContainer.classList.remove('activeModal') })

// fonts
const fontsBtn = document.querySelectorAll('.click-dot')
fontsBtn.forEach(i => {
    i.addEventListener('click', (e) => {
        const allfonts = document.querySelectorAll('[data-font]')
        const bigfonts = document.querySelector('[data-font-big]')
        if(e.target.classList.contains('xsmall')){
            document.querySelector('.xsmall').classList.add('active')
            document.querySelector('.spanxsmall').classList.add('activespan')
            // remove
            document.querySelector('.small').classList.remove('active')
            document.querySelector('.medium').classList.remove('active')
            document.querySelector('.large').classList.remove('active')
            document.querySelector('.xlarge').classList.remove('active')

            document.querySelector('.spansmall').classList.remove('activespan')
            document.querySelector('.spanmedium').classList.remove('activespan')
            document.querySelector('.spanlarge').classList.remove('activespan')
            document.querySelector('.spanxlarge').classList.remove('activespan')
            allfonts.forEach(font => {
                let fontSize = window.getComputedStyle(font, null).getPropertyValue("font-size")
              
                fontSize = parseFloat(fontSize)
                bigfonts.style.fontSize = ""
                font.style.fontSize = "";
                document.querySelector('#modalThemep').style.fontSize = ""
                document.querySelector('#customize').style.fontSize = ""
            })
        }else if (e.target.classList.contains('small')){
            document.querySelector('.xsmall').classList.add('active')
            document.querySelector('.small').classList.add('active')
             document.querySelector('.spanxsmall').classList.add('activespan')
             document.querySelector('.spansmall').classList.add('activespan')
             // remove
             document.querySelector('.medium').classList.remove('active')
             document.querySelector('.large').classList.remove('active')
             document.querySelector('.xlarge').classList.remove('active')
             
             document.querySelector('.spanmedium').classList.remove('activespan')
             document.querySelector('.spanlarge').classList.remove('activespan')
             document.querySelector('.spanxlarge').classList.remove('activespan')
             allfonts.forEach(font => {
                bigfonts.style.fontSize = "27px"
                font.style.fontSize = "17px";
                document.querySelector('#modalThemep').style.fontSize = "15px"
                document.querySelector('#customize').style.fontSize = "20px"
              
            })
        }else if (e.target.classList.contains('medium')){
            document.querySelector('.xsmall').classList.add('active')
            document.querySelector('.small').classList.add('active')
            document.querySelector('.medium').classList.add('active')
            document.querySelector('.spanxsmall').classList.add('activespan')
            document.querySelector('.spansmall').classList.add('activespan')
            document.querySelector('.spanmedium').classList.add('activespan')
              // remove
              document.querySelector('.large').classList.remove('active')
              document.querySelector('.xlarge').classList.remove('active')

              document.querySelector('.spanlarge').classList.remove('activespan')
              document.querySelector('.spanxlarge').classList.remove('activespan')

              allfonts.forEach(font => {
                bigfonts.style.fontSize = "28px"
                font.style.fontSize = "18px";
                document.querySelector('#modalThemep').style.fontSize = "16px"
                document.querySelector('#customize').style.fontSize = "21px"
              
            })
        }else if(e.target.classList.contains('large')){
            document.querySelector('.xsmall').classList.add('active')
            document.querySelector('.small').classList.add('active')
            document.querySelector('.medium').classList.add('active')
            document.querySelector('.large').classList.add('active')

            document.querySelector('.spanxsmall').classList.add('activespan')
            document.querySelector('.spansmall').classList.add('activespan')
            document.querySelector('.spanmedium').classList.add('activespan')
            document.querySelector('.spanlarge').classList.add('activespan')
            // remove
            document.querySelector('.xlarge').classList.remove('active')
            document.querySelector('.spanxlarge').classList.remove('activespan')
            allfonts.forEach(font => {
                bigfonts.style.fontSize = "29px"
                font.style.fontSize = "19px";
                document.querySelector('#modalThemep').style.fontSize = "17px"
                document.querySelector('#customize').style.fontSize = "22px"
              
            })
            
        }else if(e.target.classList.contains('xlarge')){
            document.querySelector('.xsmall').classList.add('active')
            document.querySelector('.small').classList.add('active')
            document.querySelector('.medium').classList.add('active')
            document.querySelector('.large').classList.add('active')
            document.querySelector('.xlarge').classList.add('active')

            document.querySelector('.spanxsmall').classList.add('activespan')
            document.querySelector('.spansmall').classList.add('activespan')
            document.querySelector('.spanmedium').classList.add('activespan')
            document.querySelector('.spanlarge').classList.add('activespan')
            document.querySelector('.spanxlarge').classList.add('activespan')
            allfonts.forEach(font => {
                bigfonts.style.fontSize = "30px"
                font.style.fontSize = "20px";
                document.querySelector('#modalThemep').style.fontSize = "18px"
                document.querySelector('#customize').style.fontSize = "23px"
              
            })
        }
    })
})


// colors
const dataColor = document.querySelectorAll('[data-color]')
const colors = document.querySelectorAll('.color');
colors.forEach(i => {
    i.addEventListener('click', changeColor)
})
dataColor.forEach(data => {
    data.addEventListener('click', () => {
        dataColor.forEach(i => {
            i.classList.remove('colorActive')
        })
        data.classList.add('colorActive')
    })
})

function changeColor(e){
    let color = this.getAttribute('data-color');
    document.documentElement.style.setProperty('--default', color)
  
    let span = document.querySelectorAll('.colorSpan')
    span.forEach(s => {
        let buttonDot = document.querySelectorAll('.click-dot')
        if(color === '#1D9BF0'){
                s.style.background = "rgba(142, 205, 248, 0.5)"
                buttonDot.forEach(button => {
                    button.style.background = "rgba(142, 205, 248, 0.5)"
                })
             
        }else if(color === '#FFD400'){
                s.style.background = "rgba(255, 212, 0, 0.5)"
                buttonDot.forEach(button => {
                    button.style.background = "rgba(255, 212, 0, 0.5)"
                })
        
        }else if(color === '#F91880'){
                s.style.background = "rgba(249, 24, 128, 0.5)"
                buttonDot.forEach(button => {
                    button.style.background = "rgba(249, 24, 128, 0.5)"
                })
             
        }else if(color === '#7856FF'){
            s.style.background = "rgba(120, 86, 255, 0.5)"
            buttonDot.forEach(button => {
                button.style.background = "rgba(120, 86, 255, 0.5)"
            })
        }
        else if(color === '#FF7A00'){
            s.style.background = "rgba(255, 122, 0, 0.5)"
            buttonDot.forEach(button => {
                button.style.background = "rgba(255, 122, 0, 0.5)"
            })
        }
        else if(color === '#00BA7C'){
            s.style.background = "rgba(0, 186, 124, 0.5)"
            buttonDot.forEach(button => {
                button.style.background = "rgba(0, 186, 124, 0.5)"
            })
         
        }
    })
 
}

// background
const backgrounds = document.querySelectorAll('[data-background]')
backgrounds.forEach(bg => {
    bg.addEventListener('click', () => {
        backgrounds.forEach(mybg => {
            mybg.classList.remove('bgactive')
        })
        bg.classList.add('bgactive')
    })
})


const changeBackground = document.querySelectorAll('.background')
changeBackground.forEach(cbg => {
    cbg.addEventListener('click', changeBg)
})
function changeBg() {
    let mybg = this.getAttribute('data-background');
    let bglight = this.getAttribute('data-light');
    document.documentElement.style.setProperty('--background', mybg)
    document.documentElement.style.setProperty('--datalight', bglight)
  
    const searchInput = document.getElementById('searchInput')
    const postInput = document.getElementById('post')
    const list = document.querySelectorAll('[data-tab-target] i')
    if(mybg === "#F7F8FA"){ 
        list.forEach(l => {
            l.style.color = "#000"
        })
        document.body.style.color = "#000";
        searchInput.style.color = "#000";
        postInput.style.color = "#000"
    }
    if(mybg === "#161220"){ 
        list.forEach(l => {
            l.style.color = "#fff"
        })
        document.body.style.color = "#fff";
        searchInput.style.color = "#fff";
        postInput.style.color = "#fff"
    }
    if(mybg === "#18191A"){ 
 
        list.forEach(l => {
            l.style.color = "#fff"
            // console.log(l)
        })
        document.body.style.color = "#fff";
        searchInput.style.color = "#fff";
        postInput.style.color = "#fff"
    }

}

//menu show
const bars = document.getElementById('bars')
const menus = document.getElementById('menus')
bars.addEventListener('click', () => {
    bars.classList.toggle('bar-active')
    menus.classList.toggle('menu-active')
    if(bars.classList.contains('bar-active')){
        bars.classList.remove('fa-bars')
        bars.classList.add('fa-times')
    }else{
        bars.classList.add('fa-bars')
        bars.classList.remove('fa-times')
    }
})
