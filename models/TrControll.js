const Data = require('./Database');

class TrControll {
    static async insertDeposit(deposit) {
        const [newDeposit] = await Data.query(`insert into orders (deposit,wealth) values(?,?)`, [deposit,deposit]);
        return newDeposit;
    }
    static async getAccuont(id){
        const [account]=await Data.query(`select wealth,withdraw,deposit from orders where=?`,[id]);
        return account;
    }
    static async updatewithdraw(withdraw,id){
        const [result]=await Data.query(`update orders set withdraw=? where order_id=?`,[withdraw,id]);
        return this.getAccuont(id);
    }
}
module.exports=TrControll;