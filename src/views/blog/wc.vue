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
      const data = await this.createOrders();
      console.log(data)
      // const orders = await this.getOrders();
      // console.log(orders)
    },
    methods: {
      createOrders()  {
        const data = {
          payment_method: "bacs",
          payment_method_title: "Direct Bank Transfer",
          set_paid: true,
          billing: {
            first_name: "John",
            last_name: "Doe",
            address_1: "969 Market",
            address_2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US",
            email: "john.doe@example.com",
            phone: "(555) 555-5555"
          },
          shipping: {
            first_name: "John",
            last_name: "Doe",
            address_1: "969 Market",
            address_2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US"
          },
          line_items: [
            {
              product_id: 93,
              quantity: 2
            },
            {
              product_id: 22,
              variation_id: 23,
              quantity: 1
            }
          ],
          shipping_lines: [
            {
              method_id: "flat_rate",
              method_title: "Flat Rate",
              total: 10
            }
          ]
        };
        return this.makeRequest("/wc/v3/orders", "POST", data);
      },
      getOrders()  {
        return this.makeRequest("/wc/v3/orders");
      },
      getProducts()  {
        return this.makeRequest("/wc/v3/products");
      },
      makeRequest (endpoint, method = 'GET', data = {}) {
        const oauth = this.getOauth()
        const url = 'http://cuongpm.tk:8002/wp-json'

        const requestData = {
          url: url + endpoint,
          method
        }

        const requestHTTP =
          requestData.url + '?' + jQuery.param(oauth.authorize(requestData))

        switch(method) {
          case 'POST':
            return axios.post(requestHTTP)
          case 'DELETE':
            return axios.delete(requestHTTP)
          default:
            return axios.get(requestHTTP)
        }
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
