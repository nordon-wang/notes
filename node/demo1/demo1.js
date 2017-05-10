const obj = {
    fun1 (){
        return 'fun1';
    },
    name:'nordon',
    fun2 (){
        return this.name;
    }
}

module.exports = obj;