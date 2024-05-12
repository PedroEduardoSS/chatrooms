<template>
  <div>
    <User />
    <form @submit.prevent="submit">
      <p>Senha: <input v-model="senha" type="text" /></p>
      <button type="submit">testar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
  const senha = useState('senha', () => '')

  async function submit() {
    const action = await $fetch('/senha', {
      method: "POST",
      body: {
        senha: senha.value
      }
    })
  }
</script>