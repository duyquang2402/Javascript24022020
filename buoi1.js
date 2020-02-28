//1: Khai bao bien
//var a = 10
//a = "hai muoi"
//let b = 20
//const c = 30
//c = 40
//console.log(c)

//2: KIỂU DỮ LIỆU
//Các trường hợp gặp undefined

//TH1: khai báo nhưng không truyền giá trị
// var và let khai báo không truyền giá trị thì undefined nhung const thì không được
//var a
//console.log(a)
//TH2: gọi thuộc tính không tồn tại trong object
//TH3: phương thức không có return hoặc chỉ có từ khóa return thì trả về undefined

//3: KIỂU OBJECT
//var teo = {name : "Nguyen Van Teo", age : 10}
//console.log(teo.name)
//console.log(teo['age']) // js xem object như 1 array

//4: KIỂU ARRAY
//const arrayNumber = [] // dùng const để đảm bảo tính bất biến của đối tượng (immutable)
//arrayNumber[0] = 10
//console.log(arrayNumber)

//5: TOÁN TỬ
// + - * / % ++ --
var a = 5
var b = 6
var c = ++a - --b + ++b + a-- - b++
// 6 - --b + ++b + a-- - b++ ; a : 6 , b : 6
// 6 - 5 + ++b + a-- - b++ ; a : 6 , b : 5
// 6 - 5 + 6 + a-- - b++ ; a : 6 , b : 6
// 6 - 5 + 6 + 6 - 6 ; a : 5 , b : 7
// dap an c = 7
console.log(c)

//7: FUNCTION
//function showName(){
//    return
//}

//8: OBJECT METHOD
const teo = {
    name : "Nguyen Van Teo",
    age : 10,
    getName : function(){
        return this.name
    }
}
console.log(teo.getName())

const rectangle = {
    width : 7,
    height : 5,
    getWidth : function(){
        return this.width
    },
    getHeight : function(){
        return this.height
    },
    getArea : function(){
        return this.width * this.height
    }
}
console.log(rectangle.getArea())
console.log(rectangle.getHeight())
console.log(rectangle.getWidth())