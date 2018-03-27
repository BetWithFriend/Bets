<template>
    <div>
        <div class="content-wrapper">
            <span class="title-wrapper">Predictions</span>
            <div class="table-wrapper">
                <div class="table-header">
                    <div class="header-item">Round</div>
                    <div class="header-item">Home</div>
                    <div class="header-item">Prediction</div>
                    <div class="header-item">Away</div>
                </div>
                <div class="table-content"></div>
            </div>
            </div>
        
    </div>
</template>

<script>
export default {
  name: 'Predictions'
}
</script>

<style scoped>
.content-wrapper {
    width: 85vw;
    height:75vh;
    background-color: #e0d7d7;
    border-radius: 5px;
    margin: 5vh auto;
    text-align: center;
}
.title-wrapper {
    font-size: 2.5vh;
    margin-top: 1vh;
    line-height: 5vh
}
.table-wrapper {
    width: 75vw;
    height:65vh;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 0 auto;
    text-align: center;
}
.table-header {
    background: #2f45a8;
    line-height: 5vh;
    display: flex;
    justify-content: space-around;
}
.header-item {
    color:#ffffff;
    font-size: 2vh;
    margin: 0 5% 0 5%;
}
</style>