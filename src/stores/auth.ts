import { defineStore } from 'pinia'
import { CUSTOMER_API, getRequest, postRequest, putRequest, deleteRequest } from '@/api'
import { Operation } from '@/enums/operation'
import { ref } from 'vue'
import { Customer } from '@/interfaces/customer'
import { SORT_BY_ID, SORT_DIRECTION_ASC } from '@/const'
import { AUTH_API, LOGOUT_API } from '../api'
import { ACCESS_TOKEN_STORAGE_KEY } from '../const'
import router from '../router'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
  const user = ref()
  const loading = ref(false)
  const errorMessage = ref()

  const checkAuth = async (): any => {
    loading.value = true

    const { data, error } = await getRequest(AUTH_API)

    const userData = data?.data?.user;
    user.value = userData;

    if (!userData?.id || error) {
      console.log('clear authToken');
      localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY)

      // location.reload()
      router.push('/login');
    }

    errorMessage.value = error
    loading.value = false
  }

  const logout = async () => {
    // loading.value = true;
  
    try {
      const response = await axios.post(LOGOUT_API, {});
  
      if (response.status === 200) {
        console.log('Logout successful');
        localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY)
  
        location.reload();
      } else {
        console.error('Logout failed:', response.data);
      }
    } catch (err) {
      // error.value = err.response?.data?.message;
      console.error('Login error:', err);
    } finally {
      // loading.value = false;
    }
  }

  return {
    checkAuth,
    errorMessage,
    loading,
    logout,
    user,
  }
})
