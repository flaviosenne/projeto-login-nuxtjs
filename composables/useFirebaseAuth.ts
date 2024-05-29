import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

// criar função fake simulando comportamento do firebase para criação de usuário
const createUserWithEmailAndPasswordFake = async (auth: any, name: string, email: string, password: string) => {
    return { user: {name, email, password} }
}

// criar função fake simulando comportamento do firebase para login do usuário
const signInWithEmailAndPasswordFake = async (auth: any, email: string, password: string) => {
    return { user: {email, password} }
}

export const useFirebaseAuth = () => {
    const { $auth } = useNuxtApp()

    const register = async (name: string, email: string, password: string) => {
        try {
            const userCredentials = await createUserWithEmailAndPasswordFake($auth, name, email, password)
            const user = userCredentials.user
            return user
        } catch (error) {
            console.error(error)
        }
    }
    
    const login = async (email: string, password: string) => {
        const userCredentials = await signInWithEmailAndPasswordFake($auth, email, password)

    }

    return {
        register, login
    }
}