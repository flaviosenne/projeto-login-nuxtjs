<template>
    <div>
        <h1>Registro</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="email" v-model="email" />
            <input type="password" placeholder="password" v-model="password" />
            <button type="submit">Registrar</button>
        </form>
    </div>
</template>

<script setup lang="ts">

const { register } = useFirebaseAuth()
const email = ref('')
const password = ref('')

const handleSubmit = async () => {
    try {
        const res = await register(email.value, password.value)
        console.log('resultado na tela register ', res)
    } catch (error) {
        console.error(error)
    }
}

</script>