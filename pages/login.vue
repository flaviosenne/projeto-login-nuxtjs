<template>
    <UForm :schema="userForm" :state="state" @submit="submit">
        <UFormGroup label="Email" name="email" class="mb-4">
            <UInput v-model.trim="state.email" type="email" />
        </UFormGroup>
        <UFormGroup label="Senha" name="password" class="mb-4">
            <UInput v-model.trim="state.password" type="password" />
        </UFormGroup>
        <UFormGroup>
            <UButton type="submit">Login</UButton>
        </UFormGroup>
    </UForm>
</template>

<script setup lang="ts">

const toast = useToast()

import { ref } from 'vue'
import { z } from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types'

const { login } = useFirebaseAuth()

const userForm = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'senha deve ter no mínimo 6 caracteres')

})

type UserSchema = z.output<typeof userForm>

const state = ref({
    email: undefined,
    password: undefined
})

async function submit(event: FormSubmitEvent<UserSchema>) {
    try {
        const res = await login(event.data.email, event.data.password)
        toast.add({
            title: 'Usuário logado',
            timeout: 2500,
            callback: async ()=> {
                await navigateTo('/admin')
            }
        })
    } catch (error) {
        toast.add({
            title: 'Usuário ou senha inválida',
            timeout: 2000
        })
        console.error(error)
    }
}

</script>