<template>
    <div id="root">

        <ul v-if="posts.length">
            <li v-for="elem in posts" :key="elem.id">
                {{ elem.name }}
                <span v-if="elem.category">
                    {{ elem.category.name }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>



export default {
    name: "App",

    components: {

    },
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        this.getPosts();
    },
    beforeUpdate() {

    },
    methods: {
        getPosts() {
            axios.get('http://127.0.0.1:8000/api/posts')
                .then((res) => {
                    console.log(res.data);
                    this.posts = res.data
                })
        }
    },
};
</script>
