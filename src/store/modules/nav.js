// initial state
const state = {
  nav_items: [
    {
      name: "Components",
      sub_items: [
        {
          name: "Button",
          route: {
            name: 'button',
          }
        },
        {
          name: "Input",
          route: {
            name: 'input',
          }
        },
        {
          name: "TextArea",
          route: {
            name: 'textarea',
          }
        },
        {
          name: "Select",
          route: {
            name: 'select',
          }
        },
        {
          name: "Tag",
          route: {
            name: 'tag',
          }
        },
        {
          name: "Checkbox",
          route: {
            name: 'checkbox',
          }
        },
      ]
    },
    {
      name: "Typography",
      sub_items: [
        {
          name: "All",
          route: {
            name: 'typography',
          }
        },
      ]
    },
  ],
  nav_active_item: {}
}

// getters
const getters = {
  nav_items: state => state.nav_items,
}

export default {
  state,
  getters,
}
