class User {
    // コンストラクター は、class によって生成されるオブジェクトの生成・初期化を行う特別なメソッドです。
    // "constructor" という名前のメソッドは、クラスに 1つしか定義できません。
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName(){
        console.log(this.firstName + ' ' + this.lastName);
    }
}

let user = new User('Taro', 'Yamada');
user.sayName();