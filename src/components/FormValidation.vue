<template>
<div>
   

<!-- navbar-1.vue -->
<md-toolbar class="bg-danger navbar navbar-expand-lg">
 <b class="navbar-brand" href="#">Navbar</b>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <b class="nav-link" href="#">Home <span class="sr-only">(current)</span></b>
      </li>
      <li class="nav-item">
        <b class="nav-link" href="#">Features</b>
      </li>
      <li class="nav-item">
        <b class="nav-link" href="#">Pricing</b>
      </li>
      <li class="nav-item">
        <b class="nav-link" href="#">About</b>
      </li>
    </ul>
   
  </div>
</md-toolbar>

<div class="row">
   <div class="col-md-3"></div>
    <div class="col-md-6 col-sm-12 col-sm-0 col-0 col-xl-0" style="min-height:3cm;">
        <md-card class="p-4">
    <b-form @submit.prevent="onSubmit1" >
    
<label for="name"><b>Name:</b></label>
      <input class="form-control" placeholder="Enter Your Name.." v-model="Name" :class="{'border-danger':errors.first('name')}" type="text" name="name"  v-validate="{required:true,min:4,alpha:true}" />
<small class="text-danger">{{ errors.first('name') }}</small>
<br>
      <label for="email"><b>Email:</b></label>
      <input class="form-control" placeholder="Enter Your Email.." v-model="Email" :class="{'border-danger':errors.first('email')}" name="email"  v-validate="{required:true,email:true}" />
      <small class="text-danger">{{ errors.first('email') }}</small>
<br>

      <label for="email"><b>UserName:</b></label>
      <input class="form-control" placeholder="Enter Your Username.." :class="{'border-danger':errors.first('Username')}" name="Username"  type="text" v-model="Username"  v-validate="{required:true,min:4,max:30,regex:/^[a-zA-Z0-9]+$/}"  />
      <small :class="{'text-danger':errors.first('Username'),'text-muted':!errors.first('Username')}">{{ errors.first('Username')|| 'Username Should not contain any speical chartcter'  }}</small>

<br>
<br>
      <label for="email"><b>Password:</b></label>
      <input class="form-control" placeholder="Enter Your Password.."   :class="{'border-danger':errors.first('Password')}" name="Password"  type="password" v-model="Password" v-validate="{required:true,min:4,regex:/(?=.*[A-Z])/}"  />
      <small :class="{'text-danger':errors.first('Password'),'text-muted':!errors.first('Password')}">{{ errors.first('Password') || 'Password Should Conatain atleast 1 Uppercase' }}</small>

<br>
      <label for="email"><b>ConfirmPassword:</b></label>
      <input class="form-control" placeholder="Enter Your Password.." :class="{'border-danger':errors.first('ConfirmPassword')}" name="ConfirmPassword" type="password" v-model="ConfirmPassword"  v-validate="{required:true,min:4,confirmed:Password}"  />
      <small class="text-danger">{{ errors.first('ConfirmPassword') }}</small>
     <br>
     <br>
          
      <button type="button"  @click="onSubmit1" class="btn btn-primary submit">Submit</button>
    
    </b-form>
  </md-card>
    </div>
    <div class="col-lg-0 col-md-3">
         
    </div>
    </div>

   
</div>

</template>
<script>
export default {
    name:"FormValidation",
    data(){
        return {
          Name:'',
          Email:'',
          Username:'',
          Password:'',
          ConfirmPassword:'',
          err:false

        }
    },
    methods:{
        onSubmit1(){
this.$validator.validate().then(result => {
       
      });
    }
  
        }
    
}
</script>
<style  scoped>

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: rgba(90, 86, 87, 0.856);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12px;
}
::-moz-placeholder { /* Firefox 19+ */
 color: rgba(90, 86, 87, 0.856);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12px;
}
:-ms-input-placeholder { /* IE 10+ */
  color: rgba(90, 86, 87, 0.856);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12px;
}
:-moz-placeholder { /* Firefox 18- */
  color: rgba(90, 86, 87, 0.856);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12px;  
}
@media (min-width: 746px ){
    .col-lg-0{
        display: none;
    }
}

</style>

