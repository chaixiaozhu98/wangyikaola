class Cs {
    constructor() {
        this.cs = $('#cs');
        this.ce = $('.ce');
    }
    init() {
        $(document).ready(() => {
            this.cs.load("http://localhost/x/wangyikaola/src/toubu.html");
        })
        $(document).ready(() => {
            this.ce.load("http://localhost/x/wangyikaola/src/weibu.html");
        })
    }
}
export {
    Cs
}