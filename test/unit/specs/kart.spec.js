import Vue from 'vue'
import kart from '@/components/cart';
import {mount,shallow} from '@vue/test-utils'
import VueMaterial from 'vue-material'
Vue.use(VueMaterial)



// describe('Cart',()=>{
//     const Constructor = Vue.extend(kart);
//     const kartComponent = new Constructor().$mount();
//     expect(kartComponent.$el.textContent).to.contain('play games');
// })


describe('Cart',()=>{
    const wrapper = shallow(kart);
    const vm=wrapper.vm;
    it('Should read html',()=>{
        expect(wrapper.find('div span').text()).to.equal('0')
    })

    it('Should check for items in cart',()=>{  
        expect(vm.items.cakes.length).to.equal(7)
    })
    it('Should Add items to cart',()=>{
        let item={
            Name:"Balck Current",
                    Price:275,
                    src:"https://www.iyengarsbakery.com/image/cache/data/PASTRY/FC-BC-165x120.jpg",
                    Quantity:5
        }

        vm.addtocart(item);

        expect(vm.cart.length).to.equal(1);
    })
    it('Should Delete itmes from cart',()=>{
        let item={
            Name:"Balck Current",
                    Price:275,
                    src:"https://www.iyengarsbakery.com/image/cache/data/PASTRY/FC-BC-165x120.jpg",
                    Quantity:5
        }

        vm.addtocart(item);
        vm.deleteitem(item);
        expect(vm.cart.length).to.equal(0);

        
    })

    it("Should increment item Quntity if added same item",()=>{
        let item={
            Name:"Balck Current",
                    Price:275,
                    src:"https://www.iyengarsbakery.com/image/cache/data/PASTRY/FC-BC-165x120.jpg",
                    Quantity:5
        }

        vm.addtocart(item);
        vm.addtocart(item);
        expect(vm.cart.length).to.equal(1)
    })
   
})