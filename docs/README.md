📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Bullet Diagramation Component

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

## Description

The Bullet Diagramation Component is a store block that renders a list of bullets with a title, image and link.

![bullets](https://i.imgur.com/H3YzyAk.gif)

## Configuration 

1.  Add the Bullets Diagramation app to your theme's dependencies in the manifest.json, for example:

```json
  dependencies: {
    "{vendor}.bullets-diagramation": "0.x"
  }
 ```

 2. install node modules, go to `react` folder and run `yarn`
 
 3. Add the `list-context` block to your store-theme, for example:
```json
 {
    "flex-layout.row#list__context--bullet-group-global": {
    "title": "list context bullet group global",
    "children": [
      "list-context.bullet-group"
    ],
    "props": {
      "blockClass": "list__context--bullet-group-global",
      "fullWidth": true
    }
  },
  "list-context.bullet-group": {
    "title": "list context bullet group",
    "children": [
      "slider-layout#bullet-group"
    ],
    "props": {
      "bullets": [
        {
          "image": "assets/img/Gorro-Para-Hombre-Vintage-Boy-Cap-Superdry1718.webp",
          "titleBullet": "Gorro Hombre",
          "link": {
            "url": "/Gorro-Para-Hombre-Vintage-Boy-Cap-Superdry1718p"
          }
        }
      ]
    }
  }
 }
   ```

 Block name     | Description                                      |
| -------------- | ----------------------------------------------- |
| `list-context.bullet-group` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)  This is the top-level block that must be declared in a store-theme block to render the bullets by default.   |

### Props

| Prop name    | Type            | Description    | Default Value                                                     |
| ------------ | --------------- | --------------------------------------------------------------------- | ---------- | 
| `bullet`        | `Array`       | Define the bullets to render in the list-context       | `undefined`              |


### bullets props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------- | ---------- | 
| `img`        | `String`       | Define the image to render in the list-context       | `undefined`              |
| `titleBullet`        | `String`       | Define the title to render in the list-context       | `undefined`              |
| `Link`        | `LinkProps`       |  Define the url to render in the list-context       | `undefined`              |


## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles |
| ----------- | 
| `bullet__item` | 
| `bullet__item--title` | 
| `bullet__item--image` | 
| `bullet__item--link` | 

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Heric Olier

---

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
