import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export default defineNuxtPlugin(nuxtApp => {
    console.log('executa no lado do cliente')
    const runTimeConfig = useRuntimeConfig()
    const { apiKey, authDomain, projectId, storageBucket,
        messagingSenderId, appId } = runTimeConfig.public

    const firebaseConfig = {
        apiKey,
        authDomain,
        projectId,
        storageBucket,
        messagingSenderId,
        appId
    } as any

    const app = initializeApp(firebaseConfig)
    // const auth = getAuth(app)
    const authFake = {}
    return {
        provide: {
            auth: authFake
        }
    }
})
