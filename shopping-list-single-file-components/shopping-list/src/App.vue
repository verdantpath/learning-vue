<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation">
        <a href="ID" aria-controls="ID" role="tab" data-toggle="tab">TITLE</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane" role="tabpanel" id="ID">
        SHOPPING LIST COMPONENT
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingListComponent from './components/ShoppingListComponent'

export default {
  components: {
    ShoppingListComponent
  },
  data () {
    return {
      shoppinglists: [
        {
          id: 'groceries',
          title: 'Groceries',
          items: [{ text: 'Bananas', checked: true },
                  { text: 'Apples', checked: false }]
        },
        {
          id: 'clothes',
          title: 'Clothes',
          items: [{ text: 'black dress', checked: false },
                  { text: 'all stars', checked: false }]
        }
      ]
    }
  }
}
</script>

<style>
  .container {
    width: 40%;
    margin: 20px auto 0px auto;
  }
  .footer {
    font-size: 0.7em;
    margin-top: 20vh;
  }
</style>
