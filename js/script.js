console.log('Vue OK', Vue);

const { createApp } = Vue;

const app = createApp({
    name: 'VueCarousel',
    data: () => ({
        pictures,
        currentIndex: 0
    }),
    computed: {
        lastElementIndex() {
            return this.pictures.length - 1
        },

        isFirstIndex() {
            return this.currentIndex === 0;
        },

        isLastIndex() {
            return this.currentIndex === this.lastElementIndex;
        }
    },
    methods: {
        setCurrentIndex(target) {
            if (target === 'next') {
                if (this.isLastIndex) this.currentIndex = 0;
                else this.currentIndex++;
            } else if (target === 'prev') {
                if (this.isFirstIndex) this.currentIndex = this.lastElementIndex;
                else this.currentIndex--;
            } else {
                this.currentIndex = target;
            }
        }
    }
});

app.mount('#root');