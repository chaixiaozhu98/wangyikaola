class Reab {
    constructor() {
        this.$guanggao = $('.guanggao');
        this.$picli = $('.ue li');
        this.$btnli = $('.ol li');
        this.$left = $('#left');
        this.$right = $('#right');
        this.num = 0;
        this.$piclilength = this.$picli.size();
        this.timer = null;
    }
    init() {
        let _this = this
        this.$btnli.on('click', () => {
            this.num = $(this).index();
            tabswitch();
        });

        this.$right.on('click', () => {
            this.num++;
            if (this.num > this.$piclilength - 1) {
                this.num = 0;
            }
            tabswitch();
        });



        this.$left.on('click', () => {
            this.num--;
            if (this.num < 0) {
                this.num = this.$piclilength - 1;
            }
            tabswitch();
        });

        function tabswitch() {
            _this.$btnli.eq(_this.num).addClass('active').siblings('').removeClass('active');
            _this.$picli.eq(_this.num).animate({ opacity: 1 }).siblings('').animate({ opacity: 0 });
        }


        this.timer = setInterval(() => {
            this.$right.click();
        }, 2000);

        this.$guanggao.hover(() => {
            clearInterval(this.timer);
        }, () => {
            this.timer = setInterval(() => {
                this.$right.click();
            }, 2000);
        });


    }
}
export {
    Reab
}