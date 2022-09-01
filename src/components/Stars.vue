<template>
    <a target="_blank" href="https://github.com/mahdiyarghd/laravel-cheat-sheet" class="stars-container noselect">
        <div class="star-count">
            {{ stars }}
        </div>
        
        <div class="star-bar"></div>
        
        <div class="star-text">
            <span>ستاره</span> 
            <svg class="star-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title></title><g id="icomoon-ignore"></g><path d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769zM256 376.749l-111.731 58.74 21.338-124.415-90.393-88.111 124.92-18.152 55.866-113.198 55.868 113.198 124.918 18.152-90.394 88.111 21.339 124.415-111.731-58.74z"></path></svg>
        </div>
        
    </a>
</template>

<script>
export default {
    name: 'Stars',
    data() {
        return {
            stars: 0
        }
    },
    
    methods: {
        async fetchStars() {
            const response = await fetch("https://api.github.com/repos/mahdiyarghd/laravel-cheat-sheet")
            const data = await response.json()
            this.stars = data.stargazers_count
        }
    },
    
    mounted() {
        this.fetchStars();
    },
}
</script>