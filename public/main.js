

    new Vue ({
        el: '#datalist',
            data:{
            title: 'data',
                datas: [
                    { name: 'Thanida Wichaidit'},
                    { name: 'Apichaya Chuenjit'},
                    { name: 'Nutcha Puttacoat'},
                ]
            },
        
        methods:{
            newItem: function() {
                if(!this.datas.name){
                    return
                }
                this.datas.push({ 
                    name: this.datas.name,
                    del: ''
                });
                this.datas.name ="";        
            },
            delItem: function(data){
                this.datas.splice(this.datas.indexOf(data),1)
            }
        }
    
    })