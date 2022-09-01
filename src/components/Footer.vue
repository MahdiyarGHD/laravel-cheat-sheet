<template>
    <footer class="col-12">
        <div class="footer-holder col-12"></div>
            <img class="laravel-img noselect" src="../assets/images/laravel.svg" alt="laravel لاراول">
            <div class="header-title-container noselect" @click="$parent.redirect('https://laravelguide.ir')">
                <div class="header-title">
                    راهنمای فارسی لاراول
                </div>
                <div class="header-desc">
                :) اولین راهنمای فارسی لاراول 
                </div>
            </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>