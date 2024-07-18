export interface BodyRequestLogin {
    email: string,
    password: string
  }

export interface BodyResponseLogin{
    mesaage:string
    data:Record<string,string>
}