<template>
    <div class="body-bg">
        <div class="main-logo">Logo</div>
        <div class="main-login">
            <div class="main-sign-in">sign-in</div>
            <div class="main-sign-up">sign-up</div>
        </div>
    </div>
</template>



<style scoped>
.body-bg {
    /* background-image: url("../assets/main.jpg"); */
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background: rgba(255,255,255,.5);
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.main-logo{
    width: 50%;
    height:75%;
    /* top: 10%;
    left: 10%; */
    background-color: grey;
    border-radius: 10px;
    margin: 5% 0 0 10%;
    opacity: 0.9;
}
.main-sign-in {
    /* position: absolute; */
    width: 75%;
    height:45%;
    /* top: 10%;
    right: 10%; */
    background-color: grey;
    border-radius: 10px;
    /* margin: 5% 0 0 10%; */
}
.main-sign-up {
    /* position: absolute; */
    width: 75%;
    height:45%;
    top: 55%;
    right: 10%;
    background-color: grey;
    border-radius: 10px;
    margin-top: 5%;
}
.main-login {
    display: flex;
    flex-direction: column;
    width: 50%;
    height:75%;
    justify-content: space-between;
    margin-left: 5%;
    margin-top: 5%;
    opacity: 0.9;
}
</style>