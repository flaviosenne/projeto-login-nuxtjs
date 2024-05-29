<template>
    <div>
        <h1>Admin (rota protegida)</h1>
        <UButton class="mt-4" @click="logout">Sair</UButton>
    </div>
</template>

<script setup lang="ts">
const { logout } = useFirebaseAuth()
</script>