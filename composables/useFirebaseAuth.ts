import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

// criar função fake simulando comportamento do firebase para criação de usuário
const createUserWithEmailAndPasswordFake = async (auth, email, password) => {
    return { user: {email, password} }
}

// criar função fake simulando comportamento do firebase para login do usuário
const signInWithEmailAndPasswordFake = async (auth, email, password) => {
    return { user: {email, password} }
}

export const useFirebaseAuth = () => {
    const { $auth } = useNuxtApp()

    const register = async (email: string, password: string) => {
        try {
            const userCredentials = await createUserWithEmailAndPasswordFake($auth, email, password)
            const user = userCredentials.user
            return user
        } catch (error) {
            console.error(error)
        }
    }
    
    const login = async (email: string, password: string) => {
        const userCredentials = await signInWithEmailAndPassword($auth, email, password)

    }

    return {
        register, login
    }
}