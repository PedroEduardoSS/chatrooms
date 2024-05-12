<template>
    <div>

    </div>
</template>

<script setup lang="ts">
    const eventSource = new EventSource('http://localhost:3000/sse')
    
    eventSource.onmessage = (event) => {
      console.log(event.data)
    }
</script>

<style scoped>

</style>