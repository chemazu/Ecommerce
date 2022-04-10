// @types.todo.ts

  export type Api= {
    uid:string
  }
  export type AuthContextType = {
    currentUser:{uid:string}
    loading:boolean
    logout:()=>{}
    signup:(name:string,email:any, password:any)=>{}
    login:(email:any, password:any)=>{}
    // resetPassword:(email:any)=>{}
    // updateEmail:(email:any)=>{}
    // updatePassword:(password:any)=>{}
  
  }
 
 


  