<template>
    <div>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link :to="{ name: 'admin.posts.index' }">Lista Post</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {
        //qui inseriremo i componenti
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
            axios.get('http://127.0.0.1:8000/api/posts').then((res) => {
                console.log(res.data);
                this.posts = res.data
            })
        }
    },
};
</script>
