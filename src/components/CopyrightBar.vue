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
        siteName: {type: String, required: true, default: ""},
        year: {type: Number, required: true, default: 0}
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
    text-align: center;
    z-index: 10;
}
/* ------------ End of Footer ------------- */
</style>