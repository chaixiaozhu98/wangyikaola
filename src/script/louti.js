class Feah {
    constructor() {
        this.center = $('.center_left')
        this.cen = $('.center_right')
    }
    init() {
        $(window).on('scroll', () => {

            let $top = $(window).scrollTop();
            if ($top > 600) {
                console.log($top);

                this.center.css({ "position": "fixed", "top": "60px" })
                this.cen.css({ "position": "fixed", "top": "60px" })

            } else {
                this.center.css({ "position": "absolute", "top": "0px" })
                this.cen.css({ "position": "absolute", "top": "0px" })
            }
        });
    }
}
export {
    Feah
}