const  {createApp} = Vue
createApp({
    data(){
        return{
            email: null

        }
    },

    methods:{
        getEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(response){
                console.log(response.data.response)
    
            })

        }

    },

    created(){
        this.getEmail()
    }
}).mount('#app');