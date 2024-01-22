console.log('Vue OK', Vue);

const { createApp } = Vue;

const app = createApp({
    name: 'VueCarousel',
    data: () => ({
        pictures
    })
});

app.mount('#root');