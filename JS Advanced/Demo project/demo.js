function test(){
    let a  = 10;
    let b = () => {
        console.log(this);
    }
    b()
}
test()(b)