import Vue from 'vue'
import FormValidation from '@/components/FormValidation'
import { mount ,shallow} from '@vue/test-utils'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)



describe('FormValidation.Vue',()=>{

    it('Should Check for all variable to null on load',()=>{
const wrapper=mount(FormValidation);
const vn=wrapper.vm;
        const Constructor = Vue.extend(FormValidation)
        // const vm = new Constructor().$mount()
        // let Name=wrapper.data().Name;
        // let Email=wrapper.data().Email;
        // let Username=wrapper.data().Username;
        // let Password=wrapper.data().Password;
        // let cPasssword=wrapper.data().ConfirmPassword;
        expect(vn.Name).to.be.equal('');
        expect(vn.Email).to.be.equal('');
        expect(vn.Username).to.be.equal('');
        expect(vn.Password).to.be.equal('');
        expect(vn.ConfirmPassword).to.be.equal('');


    })

    it('Should validate Form for all empty values',()=>{
        const wrapper=shallow(FormValidation); 
       
        const vm=wrapper.vm;
    
        vm.Email='';
        // vm.$validator.validate();
        vm.onSubmit1();
         expect(vm.onSubmit1()).to.equal(undefined)
        })
})