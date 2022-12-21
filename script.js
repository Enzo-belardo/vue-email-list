const  {createApp} = Vue
createApp({
    data(){
        return{
            email: []
        }
    },

    methods:{
        getRandomEmails(){
            for (let i = 0; i <= 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log(response.data.response)
                    this.email.push(response.data.response)
                })

            }
        }
    },

    created(){
        this.getRandomEmails()
    }

}).mount('#app');