import { UserCrontroller } from "./controllers/controllers.user.js";

const URL_Users:string = "http://190.147.64.47:5155"
const form = document.querySelector("form") as HTMLFormElement
const email = document.getElementById("email") as HTMLInputElement
const password = document.getElementById("password") as HTMLInputElement

form.addEventListener("submit", async(e:Event)=>{
    e.preventDefault();
    const crudUser =  new UserCrontroller(URL_Users)
    const respuesta = await crudUser.login(email,password)

    const token: string | null= respuesta.data.token

    if(token){
        localStorage.setItem('authToken', token)
        window.location.href = "books.html"
        
    }else{
        console.log("login fallo");
    }
    form.reset()

})