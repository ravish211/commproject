export interface SignUp{
    name:string,
    password:string,
    email:string
}

export interface login{
    email:string
    password:string
    
}
export interface product{
    name:string,
    price:number,
    category:string,
    color:string,
    description:string,
    image:string,
    id:number
}
// console.warn("service called");
    //npm install -g json-server
    //json-server --watch db.json