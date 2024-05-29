<template>

    <UForm :schema="userForm" :state="state" @submit="submit">
        <UFormGroup label="Nome" name="name" class="mb-4">
            <UInput v-model.trim="state.name" type="string" />
        </UFormGroup>
        <UFormGroup label="Email" name="email" class="mb-4">
            <UInput v-model.trim="state.email" type="email" />
        </UFormGroup>
        <UFormGroup label="Senha" name="password" class="mb-4">
            <UInput v-model.trim="state.password" type="password" />
        </UFormGroup>
        <UFormGroup>
            <UButton type="submit">Registrar</UButton>
        </UFormGroup>
    </UForm>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types'

const { register } = useFirebaseAuth()
const toast = useToast()
const userForm = z.object({
    email: z.string().email('Email inválido'),
    name: z.string(),
    password: z.string().min(6, 'senha deve ter no mínimo 6 caracteres')

})


type UserSchema = {
    name: string
    email: string
    password: string
}
const state = ref({
    name: undefined,
    email: undefined,
    password: undefined
})

async function submit(event: FormSubmitEvent<UserSchema>) {

    const {name, email, password} = event.data
    try {
        const res = await register(name, email, password)
        toast.add({
            title: 'Usuário Criado',
            timeout: 2500,
            callback: async ()=> {
                await navigateTo('/login')
            }
        })
    } catch (error) {
        console.error(error)
    }
}

</script>