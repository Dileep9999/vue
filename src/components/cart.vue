<template>
    <div>
  <md-toolbar style="background:#1b1310">
      <img  class="md-title p-3" src="../assets/bklogo.png" />

      <div class="md-toolbar-section-end">
         

        
          
        <md-button class="md-icon-button"  @click="showNavigation=true">
          <md-icon style=" color: white">add_shopping_cart</md-icon>
        </md-button>
        <span class="badge badge-danger" style="margin-top:-1cm;">{{cart.length}}</span>
     
        </div>
    </md-toolbar>

     <md-drawer md-right  :md-active.sync="showNavigation" v-if="showNavigation" style="background:white">
     
      <md-toolbar >
        <span class="md-title"><b>CART ({{cart.length}})</b></span>
      </md-toolbar>

      <md-list>
        <md-list-item v-for="car in cart">
          <span class="md-list-item-text">{{car.Name}} x {{car.Quantity}}</span>
 <div class="md-list-item-text d-inline">Rs: <b class="text-warning">{{car.Price}}</b> /-</div>

          <md-button class="md-icon-button md-list-action" @click="deleteitem(car)">
            <md-icon class="md-primary">delete</md-icon>
          </md-button>
        </md-list-item>

       
      </md-list>
    </md-drawer>







<div class="row" style="margin-left:1cm;">
    <div class="col-0 col-md-2 card  m-2 d-sm-none d-md-flex p-4" style="margin-left:2cm;">
        <md-list>
        <md-list-item class="md-double-line bg-warning">
          <md-avatar>
      <img src="https://www.iyengarsbakery.com/image/cache/data/PASTRY/FC-BC-165x120.jpg" alt="Avatar">
    </md-avatar>
          <span class="md-list-item-text"><b>Cakes</b></span>
        </md-list-item>
<md-divider class="md-inset"></md-divider>
        <md-list-item>
          <md-icon></md-icon>
          <span class="md-list-item-text">Dry Cakes</span>
        </md-list-item>
<md-divider class="md-inset"></md-divider>
        <md-list-item>
          <md-icon></md-icon>
          <span class="md-list-item-text">Bread</span>
        </md-list-item>
<md-divider class="md-inset"></md-divider>
        <md-list-item>
          <md-icon></md-icon>
          <span class="md-list-item-text">Cookies</span>
        </md-list-item>

        

        <md-divider class="md-inset"></md-divider>

        
      </md-list>
    </div>
     <div class="col-0 col-md-8  m-2">
          <div class="row">
         

    <md-card class="col-3 col-md-3 m-4" v-for="item in items.cakes">
     

      <md-card-media>
        <img :src="item.src" alt="People">
      </md-card-media>

      <md-card-content>
      <h5>{{item.Name}}</h5>
       <b class="text-success">Rs: {{item.Price}} /-</b><br>
       <b :class="{'text-danger':item.Quantity<=0}">Available: {{item.Quantity}}</b>
      </md-card-content>

      <md-card-actions>
      
        <md-button :disabled="item.Quantity<=0" @click="addtocart(item)"><b>Add</b> <md-icon style="font-size:4px">add_shopping_cart</md-icon></md-button>
      </md-card-actions>
    </md-card>

          </div>
     </div>
     
</div>
    
</div>

</template>
<script>

export default {
    name:"kart",
    data(){
        return {
            showNavigation:false,
            cart:[],
            items:{
                cakes:[
                    {
                    Name:"Balck Current",
                    Price:275,
                    src:"https://www.iyengarsbakery.com/image/cache/data/PASTRY/FC-BC-165x120.jpg",
                    Quantity:5
                    },
                     {
                    Name:"Balck Forest",
                    Price:300,
                    src:"https://www.iyengarsbakery.com/image/cache/data/PASTRY/FC-BF-165x120.jpg",
                    Quantity:5
                    },
                     {
                    Name:"Blue Berry",
                    Price:375,
                    src:"https://www.iyengarsbakery.com/image/cache/data/CAKE-FC-CHO/CAKE-FC-CHO-3-165x120.jpg",
                    Quantity:5
                    },
                     {
                    Name:"Chocho Chips",
                    Price:250,
                    src:"https://www.iyengarsbakery.com/image/cache/data/CAKE-FC-CHO/CAKE-FC-CHO-3-165x120.jpg",
                    Quantity:5
                    },
                     {
                    Name:"Chocalate Nuts",
                    Price:275,
                    src:"https://www.iyengarsbakery.com/image/cache/data/CAKE-FC-CHO/CAKE-FC-CHO-7-165x120.jpg",
                    Quantity:5
                    },
                     {
                    Name:"Mango",
                    Price:225,
                    src:"https://www.iyengarsbakery.com/image/cache/data/CAKE-FC-CHO/CAKE-FC-CHO-6-165x120.jpg",
                    Quantity:5
                    },
                     {
                    Name:"Pine Apple",
                    Price:275,
                    src:"https://www.iyengarsbakery.com/image/cache/data/PASTRY/FC-PIN-165x120.jpg",
                    Quantity:5
                    }
                ],
                drycakes:[],
                bread:[],
                cookies:[]
                }

        }

    },
    methods:{
      addtocart(item){
        let index=this.cart.findIndex(d=>(d.Name===item.Name));
        if(index==-1){
       let data={
          Name:item.Name,
          Price:item.Price,
          Quantity:1,
          src:item.src
        } 
     
      item.Quantity--
      this.cart.unshift(data);
        }else{
          this.cart[index].Quantity++;
          this.cart[index].Price=this.cart[index].Quantity*item.Price;
          item.Quantity--;
    
        }
       
      },
      deleteitem(item){
        let index=this.cart.findIndex(d=>(d.Name===item.Name));
        this.cart.splice(index,1);
      }
    }
    
}
</script>

<style lang="scss"  scoped>
md-icon{
    color: white
}
.card{
    max-height: 8cm;
}

</style>


