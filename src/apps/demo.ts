
import * as Vue from 'vue'

import HelloComponent from '@/components/Hello.vue'
const view = new Vue({
  template: `
    <div>

        Name1111: <input v-model="name" type="text">
        <hello-component :name="name" :msg="'5'" />
    </div>
    `,
  data: { name: 'World' },
  components: {
    HelloComponent
  }
})
view.$mount('#root')
