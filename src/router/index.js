import Vue from 'vue'
import Router from 'vue-router'
import JsonSchemaEditor from '@/components/JsonSchemaEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: JsonSchemaEditor
    }
  ]
})
