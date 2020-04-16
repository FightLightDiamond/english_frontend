<template>
  <div>
    cs_18cfdfff72e0cb38fb1ebff39aecb070f92a16fe
  </div>
</template>

<script>
  import axios from 'axios'
  import OAuth from 'oauth-1.0a'
  import CryptoJS from 'crypto-js'
  import jQuery from 'jquery'

  export default {
    name: 'wc',
    async mounted () {
      const data = await this.getProducts();
      console.log(data)
    },
    methods: {
      getProducts()  {
        return this.makeRequest("/wc/v3/products");
      },
      makeRequest (endpoint, method = 'GET') {
        const oauth = this.getOauth()
        const url = 'http://cuongpm.tk:8002/wp-json'

        const requestData = {
          url: url + endpoint,
          method
        }

        const requestHTTP =
          requestData.url + '?' + jQuery.param(oauth.authorize(requestData))

        return axios.get(requestHTTP)
      },

      getOauth () {
        const ck = 'ck_752b8da883ed65df1faa38106d80ee38cfd87eb5'
        const cs = 'cs_9c207d00c8606d755408816d9285b41add33304a'
        return  OAuth({
          consumer: {
            key: ck,
            secret: cs
          },
          signature_method: 'HMAC-SHA1',
          hash_function: function (base_string, key) {
            return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key))
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
