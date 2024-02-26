<template>
    <!-- Start of Footer Copyright -->
    <div class="copyright container-fluid">
        <span>Copyright &copy; {{ year }}, {{ siteName}} | All Rights Reserved.</span>
    </div>
    <!-- End of Footer Copyright -->
</template>

<script>
export default {
    name: "CopyrightBar",
    props:{
        siteName: String,
        year: Number
    }
}
</script>

<style scoped>
/* ------------ Start of Footer ------------ */
.copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    color: #fff;
    background: #BF4C41;
}
/* ------------ End of Footer ------------- */
</style>