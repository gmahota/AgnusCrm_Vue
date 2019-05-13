import crypto,{Certificate }  from 'crypto'


export default {
    install(Vue, options) {
        Vue.auth = Vue.prototype.$auth = {

            decodeToken() {
                return this.getToken() ? Vue.jwtDec.decode(this.getToken().slice(7)) : null;
            },

            setToken(token) {
                localStorage.setItem('token', 'Bearer ' + token)
            },

            getToken() {
                return localStorage.getItem('token')
            },

            destroyToken() {
                localStorage.removeItem('token');
            },

            isAuthenticated() {
                return !!this.getToken();
            },

            mpesaSetToken(){

                //const publicKey =
                //  "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAmptSWqV7cGUUJJhUBxsMLonux24u+FoTlrb+4Kgc6092JIszmI1QUoMohaDDXSVueXx6IXwYGsjjWY32HGXj1iQhkALXfObJ4DqXn5h6E8y5/xQYNAyd5bpN5Z8r892B6toGzZQVB7qtebH4apDjmvTi5FGZVjVYxalyyQkj4uQbbRQjgCkubSi45Xl4CGtLqZztsKssWz3mcKncgTnq3DHGYYEYiKq0xIj100LGbnvNz20Sgqmw/cH+Bua4GJsWYLEqf/h/yiMgiBbxFxsnwZl0im5vXDlwKPw+QnO2fscDhxZFAwV06bgG0oEoWm9FnjMsfvwm0rUNYFlZ+TOtCEhmhtFp+Tsx9jPCuOd5h2emGdSKD8A6jtwhNa7oQ8RtLEEqwAn44orENa1ibOkxMiiiFpmmJkwgZPOG/zMCjXIrrhDWTDUOZaPx/lEQoInJoE2i43VN/HTGCCw8dKQAwg0jsEXau5ixD0GUothqvuX3B9taoeoFAIvUPEq35YulprMM7ThdKodSHvhnwKG82dCsodRwY428kg2xM/UjiTENog4B6zzZfPhMxFlOSFX4MnrqkAS+8Jamhy1GgoHkEMrsT5+/ofjCx0HjKbT5NuA2V/lmzgJLl3jIERadLzuTYnKGWxVJcGLkWXlEPYLbiaKzbJb2sYxt+Kt5OxQqC1MCAwEAAQ==";
                //const Mpesa = "gy740fcr3gv5g6v5jbgyrjg0q38azduv";

                var publicKey = "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAszE+xAKVB9HRarr6/uHYYAX/RdD6KGVIGlHv98QKDIH26ldYJQ7zOuo9qEscO0M1psSPe/67AWYLEXh13fbtcSKGP6WFjT9OY6uV5ykw9508x1sW8UQ4ZhTRNrlNsKizE/glkBfcF2lwDXJGQennwgickWz7VN+AP/1c4DnMDfcl8iVIDlsbudFoXQh5aLCYl+XOMt/vls5a479PLMkPcZPOgMTCYTCE6ReX3KD2aGQ62uiu2T4mK+7Z6yvKvhPRF2fTKI+zOFWly//IYlyB+sde42cIU/588msUmgr3G9FYyN2vKPVy/MhIZpiFyVc3vuAAJ/mzue5p/G329wzgcz0ztyluMNAGUL9A4ZiFcKOebT6y6IgIMBeEkTwyhsxRHMFXlQRgTAufaO5hiR/usBMkoazJ6XrGJB8UadjH2m2+kdJIieI4FbjzCiDWKmuM58rllNWdBZK0XVHNsxmBy7yhYw3aAIhFS0fNEuSmKTfFpJFMBzIQYbdTgI28rZPAxVEDdRaypUqBMCq4OstCxgGvR3Dy1eJDjlkuiWK9Y9RGKF8HOI5a4ruHyLheddZxsUihziPF9jKTknsTZtF99eKTIjhV7qfTzxXq+8GGoCEABIyu26LZuL8X12bFqtwLAcjfjoB7HlRHtPszv6PJ0482ofWmeH0BE8om7VrSGxsCAwEAAQ==";
                var apiKey = "aaaab09uz9f3asdcjyk7els777ihmwv8";

                var resultado = "rfNjFso4uJbzhwl8E9vizqmHEuD7XDmPqfsRx1L62UoTmURGGLAGgJSl9lCPbgy03Q7NwozFYD4r9BFQY5QpvErHximBDU8HE25urVahm0HnB8VyCIobs684XGSN4GjdequePDrG6xUAxxpvmhqZRlGt1tUjUBeBg6kYqp4EnKHsiaBtvd0THGLZbefpT6UaShASQWYNiEPwEon5wtUMaDwnyQEazDu1H2ieN3r8cCVM3hsak59J/1MP07FQjdFbxdCLfA0DuxgpeKpvLs7WrA767WJSB1QZy7hcP1igSGRfd7Zrp6E7gIukdpC0DApqPKa4XsNTo2AMpG4AwiET2WeKvHn539gbwREXf79kZlYdFDCgTc0Zs7OfDx5ZXMCBKHOS/H3tVFJqXTfEfIF5LOzrFU5pPE0HeNBV0Q2vm8qRwQX0RijnvMOGpdcmXb0qoph4oy8Mj+vjRfFRboMAafttDozBhRmWEmeBB3EjYASm1fToQp5ey6ltCiEt8rjL5PlexxB0u3u2LVJQcDzMVNiiq10t1xyw8qtc6BMOyrKVlIANWglRYOKr9saVBVvDFUcCfsghMjUTDeAwHom4A3cSDWmVlNF9Vs/WqCoUzjQCV0BFPDzeAUbQqt7h7OgFno/+D9n5j1eMro0aXbbHNx71u8YmgPJhdixzFhxM1Pw=";
                var text = "-----BEGIN PUBLIC KEY-----\n";
                text += publicKey
                text += "\n-----END PUBLIC KEY-----";

                var aa = crypto.getCiphers();
                
                
                for( var i = 0 ; i < aa.length; i++){
                    var algorithm = aa[i];
              
                    var cipher = crypto.createCipher(algorithm, apiKey)
                    var crypted = cipher.update(text, 'utf8', 'base64')
                    crypted += cipher.final('base64').toString();

                    if (crypted != resultado){
                        console.log(algorithm);
                        console.log(crypted);
                    }
                }
                
            }
        };

    }
};