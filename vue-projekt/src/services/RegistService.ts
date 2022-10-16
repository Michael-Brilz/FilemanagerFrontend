import axios from 'axios';

const postUrl = 'http://localhost:3000/users';


export default class RegistService{
    // Create Account
    static createAcc(acc: any){
         axios.post(postUrl, acc)
         .then(function( response ){
            console.log(response + 'hat funktionier');
        })
    }
}

