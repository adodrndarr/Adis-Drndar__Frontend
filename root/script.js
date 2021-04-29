const uiService = {
    arrowUpEl: document.querySelector('#arrow-up'),

    registerHandlerForArrowUp: function () {
        this.arrowUpEl.addEventListener('click', this.toTopOfPage);
    },
    toTopOfPage() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },
    registerHandlerForScrollDown() {
        const that = this;
        let userIsScrolling;

        window.addEventListener('scroll', function (event) {
            // clear timeout, don't execute code, while the user scrolls
            window.clearTimeout(userIsScrolling);

            // show arrow if user stops scrolling and arives on half the page
            userIsScrolling = setTimeout(helperService.toogleArrow(that.arrowUpEl), 66);
        }, false);
    },
    registerEventHandlers() {
        this.registerHandlerForArrowUp();
        this.registerHandlerForScrollDown();
    }
};

const helperService = {
    HALF_PAGE: 3200,

    toogleArrow: function (arrowUpEl) {
        const userScrolledDown = document.body.scrollTop > this.HALF_PAGE
                              || document.documentElement.scrollTop > this.HALF_PAGE;

        userScrolledDown
            ? arrowUpEl.style.display = "block"
            : arrowUpEl.style.display = "none";
    }
};

uiService.registerEventHandlers();
