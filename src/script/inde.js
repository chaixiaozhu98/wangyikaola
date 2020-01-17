class Abc {
    constructor() {
        this.xuanfu = $('.xuanfu');
    }
    init() {
        $(window).on('scroll', () => {

            let $top = $(window).scrollTop();
            if ($top >= 80) {

                $('.xuanfu').stop(true).animate({
                    top: 0
                });

            } else {
                $('.xuanfu').stop(true).animate({
                    top: -50
                });
            }
        });
    }
}
export {
    Abc
}