// @types.todo.ts

  export type Api= {
    uid:string,
    // updateEmail:any,
    // updatePassword:any
  }

  export type AuthContextType = {
    currentUser:Api
    loading:boolean
    logout:()=>{}
    signup:(name:string,email:any, password:any)=>{}
    login:(email:any, password:any)=>{}
    getLoggedIn:(uid:string)=>{}
    signInWithGoogle :()=> void
    // resetPassword:(email:any)=>{}
    // updateEmail:(email:any)=>{}
    // updatePassword:(password:any)=>{}
  
  }

 


  