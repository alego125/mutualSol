const d = document;
export default function comunicados(){
    const $comunicado1Info = d.querySelector(".com1_container"),
        $comunicado2Info = d.querySelector(".com2_container");

    d.addEventListener("click",(e)=>{
        if(e.target.matches(".com1_b")){
            console.log("a");
            $comunicado1Info.classList.remove("ocultar");
        }
        if(e.target.matches(".com2_b")){
            console.log("b");
            $comunicado2Info.classList.remove("ocultar");        
        }
        if(e.target.matches(".salirCom")){
            $comunicado1Info.classList.add("ocultar");
            $comunicado2Info.classList.add("ocultar");
        }        
    });
}