// initial state
const state = {
  nav_items: [
    {
      name: "General",
      sub_items: [
        {
          name: "Layout",
          route: {
            name: 'layout',
          }
        },

        {
          name: "Typography",
          route: {
            name: 'typography',
          }
        },
      ]
    },
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
