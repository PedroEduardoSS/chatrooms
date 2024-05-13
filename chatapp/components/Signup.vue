<template>
    <button onclick="document.getElementById('SignupModel').style.display='block'" class="w3-button w3-black">Sign Up</button>
    <div id="SignupModel" class="modal is-align-content-center">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="control has-icons-left mb-4">
                <input class="input" type="text" placeholder="Name" />
                <span class="icon is-small is-left">
                    <i class="material-icons">person</i>
                </span>
            </div>
            <div class="control has-icons-left mb-4">
                <input class="input" type="password" placeholder="Password" />
                <span class="icon is-small is-left">
                    <i class="material-icons">key</i>
                </span>
            </div>
            <button class="button is-success">Sign Up</button>
        </div>
        
        <button class="modal-close is-large" onclick="document.getElementById('SignupModel').style.display='none'"></button>
    </div>

</template>

<script setup lang="ts">
</script>