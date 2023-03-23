

const inp=document.querySelector(".inputText")
const listIteam =document.querySelector(".bigList")
inp.addEventListener("input",filterList)
function filterList(){
    const searchInput=document.querySelector("input")
    const filter=searchInput.value.toLocaleLowerCase()
    const listIteam =document.querySelectorAll(".list_iteam")
    listIteam.forEach((elem)=>{

        let text=elem.textContent
        console.log(text);
        if(text.includes(filter.toLowerCase())){
            elem.style.display=""
        }else{
            elem.style.display="none"
        }
    })
}











