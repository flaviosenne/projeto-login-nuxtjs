import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export default defineNuxtPlugin(nuxtApp => {
    console.log('executa no lado do cliente')
    const firebaseConfig = {
        apiKey: '',
        authDomain: '',
        projectId: '',
        storageBucket: '',
        messagingSenderId: '',
        appId: ''
    }

    const app = initializeApp(firebaseConfig)
    // const auth = getAuth(app)
    const auth = {}
    return {
        provide: {
            auth
        }
    }
})
