
/*function createNewSlider() {
    var newSlider = {
        imagesUrls: [],
        showPrevBtn: null,
        showNextBtn: null,
        slideImage: null,
        currentImageIndex: 0,

        start: function (elId) {
            var that = this;

            var elSelector = '#' + elId;
            var el = document.querySelector(elSelector);


            this.showPrevBtn = el.querySelector('.show-prev');
            this.showNextBtn = el.querySelector('.show-next');
            this.slideImage = el.querySelector('.slide-img');


            //subscribe to events
            this.showPrevBtn.addEventListener('click', function (e) {
                that.onShowPrevBtnClick(e);
            });
            this.showNextBtn.addEventListener('click', function (e) {
                that.onShowNextBtnClick(e);
            });

            //create images array
            this.imagesUrls.push('https://im0-tub-ru.yandex.net/i?id=64889da3830bb48f4f5f6b1fdce85d2d&n=13');
            this.imagesUrls.push('https://im0-tub-ru.yandex.net/i?id=d9b7e2e1bc912071c6cf65d9b4a98bf6&n=13');
            this.imagesUrls.push('https://avatars.mds.yandex.net/get-pdb/1567283/0204ea50-6906-4d02-8c1a-cb76396c2c3e/s1200?webp=false');
            this.imagesUrls.push('https://avatars.mds.yandex.net/get-pdb/1754666/4fbed620-c2c5-4550-bb9b-5eae58989501/s1200?webp=false');


            this.slideImage.src = this.imagesUrls[this.currentImageIndex];
            this.showPrevBtn.disabled = true;

        },

        onShowPrevBtnClick: function (e) {
            this.currentImageIndex--;
            this.slideImage.src = this.imagesUrls[this.currentImageIndex];
            this.showNextBtn.disabled = false;

            //disable prev button if need
            if (this.currentImageIndex === 0) {
                this.showPrevBtn.disabled = true;
            }

        },
        onShowNextBtnClick: function (e) {
            this.currentImageIndex++;
            this.slideImage.src = this.imagesUrls[this.currentImageIndex];
            this.showPrevBtn.disabled = false;

            //disable next button if need
            if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
                this.showNextBtn.disabled = true;
            }
        }

    };

    return newSlider;
}