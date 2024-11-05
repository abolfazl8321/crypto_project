const Data=require('./Database');

class AuthControll{
    static async insertUser(username,email,password,country){
        const [newUser]=await Data.query(`insert into 
            users(username,email,password,country) values(?,?,?,?)`,
            [username,email,password,country]);
            return newUser;
    }
    static async getUserByEmail(email){
        const [result]=await Data.query(`select * from users where email=?`,[email]);
        return result[0];
    }
}
module.exports=AuthControll;