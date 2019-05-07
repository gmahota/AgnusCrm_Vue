<template>
	<div class="details">
		<div class="container">
			<div class="row">
				<div class="col-md-12" v-for="(product,index) in products" :key="index"> 
					<div v-if="proId == product.productId">
						<h1>{{product.productTitle}}</h1>
						<img :src="product.image" class="img-fluid">
                        
                        <p>{{product.desc}}</p>
                        <button class="btn btn-primary" @click="test">Encomenda</button>
                    </div>
				</div>
			</div>
		</div>
	</div>

	
</template>
<script>
	export default{
		name:'details',
		data(){
			return{
				proId:this.$route.params.Pid,
				title:"details",
				products:[
				{
				productTitle:"ABCN",
				image       : require('../assets/images/product1.png'),
                desc: "ABCN",
                productId:1
				},
				{
				productTitle:"KARMA",
				image       : require('../assets/images/product2.png'),
                desc: "KARMA",
                productId:2
				},
				{
				productTitle:"Tino",
				image       : require('../assets/images/product3.png'),
                desc: "Tino",
                productId:3
				},
				{
				productTitle:"EFG",
				image       : require('../assets/images/product4.png'),
                 desc: "Eu amo isto",
                productId:4
				},
				{
				productTitle:"MLI",
				image       : require('../assets/images/product5.png'),
                desc: "Eu amo isto",
                productId:5
				},
				{
				productTitle:"Banans",
				image       : require('../assets/images/product6.png'),
                desc: "Come tu",
                productId:6
				}
				]
				 
			}
		},
		methods: {
			test: function () {
				const baseURI = 'https://api.sandbox.vm.co.mz:18353/ipg/v1x/queryTransactionStatus/'
				
				const publicKey= 'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAmptSWqV7cGUUJJhUBxsMLonux24u+FoTlrb+4Kgc6092JIszmI1QUoMohaDDXSVueXx6IXwYGsjjWY32HGXj1iQhkALXfObJ4DqXn5h6E8y5/xQYNAyd5bpN5Z8r892B6toGzZQVB7qtebH4apDjmvTi5FGZVjVYxalyyQkj4uQbbRQjgCkubSi45Xl4CGtLqZztsKssWz3mcKncgTnq3DHGYYEYiKq0xIj100LGbnvNz20Sgqmw/cH+Bua4GJsWYLEqf/h/yiMgiBbxFxsnwZl0im5vXDlwKPw+QnO2fscDhxZFAwV06bgG0oEoWm9FnjMsfvwm0rUNYFlZ+TOtCEhmhtFp+Tsx9jPCuOd5h2emGdSKD8A6jtwhNa7oQ8RtLEEqwAn44orENa1ibOkxMiiiFpmmJkwgZPOG/zMCjXIrrhDWTDUOZaPx/lEQoInJoE2i43VN/HTGCCw8dKQAwg0jsEXau5ixD0GUothqvuX3B9taoeoFAIvUPEq35YulprMM7ThdKodSHvhnwKG82dCsodRwY428kg2xM/UjiTENog4B6zzZfPhMxFlOSFX4MnrqkAS+8Jamhy1GgoHkEMrsT5+/ofjCx0HjKbT5NuA2V/lmzgJLl3jIERadLzuTYnKGWxVJcGLkWXlEPYLbiaKzbJb2sYxt+Kt5OxQqC1MCAwEAAQ=='
				const apiKey ='gy740fcr3gv5g6v5jbgyrjg0q38azduv'
				const token = 'EzEWnCG/pzLMXlc13xn8mBMrGv2SwV7tH9dj2MxXJ3z2aLgFXTyr55StwEGj2zOy1JA/AMoM7psZ+9mWQy8M5pe1ogHpv8qoLlNngZWylSEMYGaL+oNwtyUlhz++igI22r1KJDp7pO5+B82bhJavrHTHI6lKfqi3SeAHOOZbscrzv1SB/DxvM5N/MniSXlIutEdFhjyR/n1Qmef2nI4Rzb59QhuPKOspnH7PRrkENm+pPY4yJi/b++Se3h1Zni+vjrbjPR9R6rqrAYnrTiKlXv/mncvJ069mxEGTS2zrqL5JLotHOIJBxczULYyBZCuy9D57DVFSEUL9ZEtoOtzLGCfSGzSfHlSFVTa0ZuILpHL6iBGxNJ2ErJlc8JtZlBnVAHrY3mCb2K3kHkglw9BtyEU7PDTa2UEXZS5zEE5lHSnb0cIIf7n7be8dgw3YyJ/M9AmSQABwv/3yQysqPm5u8OFnI9Pee4+Pcf+GY1sqWXIk/Mol3vq0GKkON8X5dzO3TGYyTbWvCWcoTIIa9pwdI+fdpYsAXfU61QIs05HQwpGHy91p9SASVh4u8Oe67RimlrTIW8I/Os7SBGzaxXsTl7ucV/uJXHEDUC17M4krHvXoUaJTNfdXqLFrj+nYINDJz0vsg11+ihcYQatesr8SZ8ahzmTmnVoWH9tMh77wlWA='

				var reqData = 
				{
					'params':{
							input_ThirdPartyReference: '11114',
							input_QueryReference:"5C1400CVRO",
							input_ServiceProviderCode:'171717'

					}
				}

				var reqHeaders ={
					'headers': {
							"Content-Type": "'application/json;charset=UTF-8",
							"Authorization": 'Bearer ' + token, //the token is a variable which holds the token
							"Origin":"*",
							"Access-Control-Allow-Origin": "*",
						}
				}

				this.$http.get(baseURI,Object.assign( reqData, reqHeaders))
				.then((result) => {
					alert(result.data)
				})

			}
		}

		
	}

	/*  axios.defaults.headers = {
        'Content-Type': 'application/json',
        Authorization: 'myspecialpassword'
    }

   axios.post('https://myapi.com', { data: "hello world" })
        .then(response => {
            console.log('Response', response.data)
        })
        .catch(e => {
            console.log('Error: ', e.response.data)
        }) */
</script>

