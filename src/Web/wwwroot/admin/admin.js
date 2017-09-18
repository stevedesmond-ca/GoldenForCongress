Vue.config.devtools = true;

new Vue({
    el: "#gfc-admin",
    data: {
        route: [],
        current_section: {},
        media: [],
        current_media: {},
        action: 'loading'

    },
    methods: {
        displayDate: function (date) {
            return moment(date).format('l');
        },
        displayMediaType: function (type) {
            switch (type) {
                case 0: return 'Audio';
                case 1: return 'Video';
                case 2: return 'Image';
                case 3: return 'Text';
            }
        },
        sortedRoute: function (route) {
            return route.sort(function (a, b) {
                return a.day < b.day
                    ? -1
                    : a.day > b.day
                        ? 1
                        : a.date < b.date
                            ? -1
                            : 1;
            });
        },
        sortedMedia: function (media) {
            return media.sort(function (a, b) {
                return a.date < b.date
                    ? -1
                    : a.date > b.date
                        ? 1
                        : 0;
            });
        },
        getRoute: function () {
            const app = this;
            axios.get('/route')
                .then(function (response) {
                    app.route = app.sortedRoute(response.data);
                });
        },
        addSection: function () {
            this.current_section = {};
            this.action = 'route-form';
        },
        editSection: function (section) {
            this.current_section = section;
            this.action = 'route-form';
        },
        submitSection: function () {
            const app = this;
            app.action = 'loading';
            axios.post('/route', app.current_section)
                .then(function (response) {
                    app.route = app.sortedRoute(response.data);
                    app.action = 'route-list';
                });
        },
        updateRouteCache: function () {
            const app = this;
            app.action = 'loading';
            axios.get('/route/cache')
                .then(function (response) {
                    app.route = app.sortedRoute(response.data);
                    app.action = 'route-list';
                });
        },
        deleteSection: function (section) {
            if (confirm('Are you sure you want to delete this section?')) {
                const app = this;
                app.action = 'loading';
                axios.delete('/route/' + section.id)
                    .then(function (response) {
                        app.route = app.sortedRoute(response.data);
                        app.action = 'route-list';
                    });
            }
        },

        getMedia: function () {
            const app = this;
            axios.get('/media')
                .then(function (response) {
                    app.media = app.sortedMedia(response.data);
                });
        },
        updateMediaCache: function () {
            const app = this;
            app.action = 'loading';
            axios.get('/media/cache')
                .then(function (response) {
                    app.media = app.sortedMedia(response.data);
                    app.action = 'media-list';

                });
        },
        addMedia: function () {
            this.current_media = {};
            this.action = 'media-form';
        },
        editMedia: function (media) {
            this.current_media = media;
            this.action = 'media-form';
        },
        submitMedia: function () {
            const app = this;
            app.action = 'loading';
            axios.post('/media', app.current_media)
                .then(function (response) {
                    app.media = app.sortedMedia(response.data);
                    app.action = 'media-list';
                });
        },
        deleteMedia: function (media) {
            if (confirm('Are you sure you want to delete this media?')) {
                const app = this;
                app.action = 'loading';
                axios.delete('/delete/' + media.id)
                    .then(function (response) {
                        app.media = app.sortedMedia(response.data);
                        app.action = 'media-list';
                    });
            }
        }
    },
    mounted: function () {
        this.getRoute();
        this.getMedia();
        this.action = 'menu';
    }
});