import { defineStore } from 'pinia'
import { CUSTOMER_API, getRequest, postRequest, putRequest, deleteRequest } from '@/api'
import { Operation } from '@/enums/operation'
import { ref } from 'vue'
import { Customer } from '@/interfaces/customer'
import { SORT_BY_ID, SORT_DIRECTION_ASC } from '@/const'
import { AUTH_API } from '../api'
import { ACCESS_TOKEN_STORAGE_KEY } from '../const'
import router from '../router'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(0)
  const loading = ref(false)
  const errorMessage = ref()

  const checkAuth = async () => {
    loading.value = true

    const { data, error } = await getRequest(AUTH_API)

    const user = data?.data?.user;
    user.value = user;

    if (!user?.id || error) {
      console.log('clear authToken');
      localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY)

      // location.reload()
      router.push('/login');
    }

    errorMessage.value = error
    loading.value = false
  }

  return {
    checkAuth,
    errorMessage,
    loading,
    user,
  }
})
