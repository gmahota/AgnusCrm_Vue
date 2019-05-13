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
import axios from "axios";
import Vue from "vue";

export default {
  name: "details",
  data() {
    return {
      proId: this.$route.params.Pid,
      title: "details",
      products: [
        {
          productTitle: "ABCN",
          image: require("../assets/images/product1.png"),
          desc: "ABCN",
          productId: 1
        },
        {
          productTitle: "KARMA",
          image: require("../assets/images/product2.png"),
          desc: "KARMA",
          productId: 2
        },
        {
          productTitle: "Tino",
          image: require("../assets/images/product3.png"),
          desc: "Tino",
          productId: 3
        },
        {
          productTitle: "EFG",
          image: require("../assets/images/product4.png"),
          desc: "Eu amo isto",
          productId: 4
        },
        {
          productTitle: "MLI",
          image: require("../assets/images/product5.png"),
          desc: "Eu amo isto",
          productId: 5
        },
        {
          productTitle: "Banans",
          image: require("../assets/images/product6.png"),
          desc: "Come tu",
          productId: 6
        }
      ]
    };
  },

  mounted() {
    const baseURI =
	  "https://api.sandbox.vm.co.mz:18353/ipg/v1x/queryTransactionStatus/";
	
    Vue.auth.mpesaSetToken();

    var reqData = {
      params: {
        input_ThirdPartyReference: "11114",
        input_QueryReference: "5C1400CVRO",
        input_ServiceProviderCode: "171717"
      }
    };

    var reqHeaders = {
      headers: {
        "Content-Type": "'application/json;charset=UTF-8",
        "Authorization":Vue.auth.getToken(), //the token is a variable which holds the token
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Credentials": false,
		"Allow-Origin": "*"
      }
	};
	
	axios
		.get(baseURI,Object.assign( reqData, reqHeaders))
      	.then(response => {
        	console.log(response);
      	})
		.catch(error => {
			console.log(error);
			this.errored = true;
		})
		.finally(() => (this.loading = false));
},
  methods: {
    test: function() {

    }
  }
};
</script>

