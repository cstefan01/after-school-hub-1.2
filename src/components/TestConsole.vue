<template>
  <div class="test-console container-fluid p-0 m-0">
    <div class="console-title col-12">
        <h2>Test Console</h2>
    </div>

    <div class="tests-panel col-12">
        <div class="tests col-6">
            <h3>Database API Tests</h3>
            <button>Create a Product</button>
            <a target="_blank" :href="apiEndpoint">API Lessons Endpoint</a>
        </div>
        <div class="tests col-6">
            <h3>Cache Tests</h3>
            <button>Delete All Caches</button>
            <button>Reload Page</button>
        </div>
    </div>

    <div class="tests-panel col-12">
        <div class="tests col-12">
            <h3>Service Workers</h3>
            <button>Unregister Service Workers</button>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    name: "TestConsole",
    props:{
        apiEndpoint: {type: String, required: true, default: ""}
    } 

}
</script>

<style scoped>
.console-title{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    background: #ffffff;
    font-size: 1.2em;
    font-weight: bold;
}
.test-console {
    display: flex;
    background: #d81919;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    min-height: 200px;
    flex-direction: column;
}

.test-console button, a{
    border: none;
    padding: 5px;
    width: 165px;
    text-align: start;
    background: #BF4C41;
    color: #ffffff;
    min-height: 50px;
    text-decoration: none;
    font-weight: bold;
}

.test-console a{
    display: flex;
    justify-content: start;
    align-items: center;
    



}

.tests-panel{
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    background: #fff;
    min-height: 180px;
    padding: 10px;
}

.tests{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
}

</style>