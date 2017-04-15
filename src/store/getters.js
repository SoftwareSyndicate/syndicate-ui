export const crumbs = state => {
  let crumbs = []
  switch (state.route.name){
  case "button":
    crumbs.push({name: 'Components', route: {name: ''}});
    crumbs.push({name: 'Button', route: {name: 'button'}});
    break;
  case "input":
    crumbs.push({name: 'Components', route: {name: ''}});
    crumbs.push({name: 'Input', route: {name: 'input'}});
    break;
  case "textarea":
    crumbs.push({name: 'Components', route: {name: ''}});
    crumbs.push({name: 'TextArea', route: {name: 'textarea'}});
    break;
  case "select":
    crumbs.push({name: 'Components', route: {name: ''}});
    crumbs.push({name: 'Select', route: {name: 'select'}});
    break;
  case "tag":
    crumbs.push({name: 'Components', route: {name: ''}});
    crumbs.push({name: 'Tag', route: {name: 'tag'}});
    break;
  case "checkbox":
    crumbs.push({name: 'Components', route: {name: ''}});
    crumbs.push({name: 'Checkbox', route: {name: 'checkbox'}});
    break;
  case "typography":
    crumbs.push({name: 'General', route: {name: ''}});
    crumbs.push({name: 'Typography', route: {name: 'typography'}});
    break;
  case "layout":
    crumbs.push({name: 'General', route: {name: ''}});
    crumbs.push({name: 'Layout', route: {name: 'layout'}});
    break;
  }
  return crumbs
}
