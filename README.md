## Requirements

Learning is fun! :broken_heart: :no_mouth: :dizzy: :anger: :dash:
practice makes perfume. that's why this repo is created.

- pnpm
- node >= 14

## Installation

```
$ pnpm install

$ pnpm run dev
```

## Create Web Component

### Creating folder and file.

- For every component that we create we must have folder
- If we create **Web Component** we must add `index.ts` inside the folder
- Web Component must have `.ce.vue` for extenstion [filename].ce.vue
- Root folder should same name with Web Component name
- Component name use `kebab-case`
  ```
  ├── link
  │   ├── index.ts
  │   └── link.ce.vue
  └── ...
  ```


- If we have multiple language inside the component, we can create dictionary file with format `lang-[component name].ts`
- If we have many interface, we can in seperate file too, with format `type-[component name].ts`
  ```
  ├── card-hotel
  │   ├── card-hotel.ce.vue
  │   ├── index.ts
  │   ├── lang-card-hotel.ts
  │   └── type-card-hotel.ts
  └── ...
  ```


- For vue file, as usual, the extension just `.vue` and for the proper name we can use format `[web component name]-[vue component name].vue`
  ```
  ├── card-section
  │   ├── card-section-header-default.vue
  │   ├── card-section-header-flahsale.vue
  │   ├── card-section.ce.vue
  │   └── ...
  └── ...
  ```


### Use Localization

- To use localization use `ma-i18n-host` component with props `languange`
- Props `languange` can fill `id` or `en`
  ```
  <!-- index.html -->
  <ma-i18n-host languange="id">
    <ma-card-section
      :data="JSON.stringify(store.data.sectionHotelFlashsale)"
      type="flashsale"
      full-background
    >
      ...
    </ma-card-section>
  </ma-i18n-host>
  ```

### Use Web Component inside another Web Component

```js
// src/libs/molecules/card-section/card-section.ce.vue
// line 13-15

<ma-link :to="data.url">
  {{ t('see_all') }}
</ma-link>
```

### Color Palette

**Usage**

```scss
// import color pallete
@use "@/styles/utils/colors";

// background-color: colors.$neutral-0;
// color: colors.$primary;
```

> For all **`Color`** style attribute please use this Palette

```scss
// src/styles/utils/colors.scss

$neutral-0: #ffffff;
$neutral-100: #f6f7f8;
$neutral-300: #dfe2e7;
$neutral-500: #c5cad3;
$neutral-700: #657085;
$neutral-900: #3d4151;

$success-100: #eaf2eb;
$success-500: #2e7d32;
$warning-100: #fffbeb;
$warning-500: #fdd835;
$failed-100: #f9eaea;
$failed-500: #c62828;

$primary: #f5f7ff; // $blue-500
$primary-lightest: #2f4095; // $blue-100
$primary-darkest: #1f2a61; // $blue-700

$secondary: #fdece9; // $red-500
$secondary-lightest: #e64325; // $red-100
$secondary-darkest: #a3301a; // $red-700
```

### Use Element Plus Library

Coming Soon ...

## Folder Structure

> We are follow [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/) to craft interface design systems.

- **Atoms**: If atoms are the basic building blocks of matter, then the atoms of our interfaces serve as the foundational building blocks that comprise all our user interfaces. These atoms include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional.
- **Molecules**: In chemistry, molecules are groups of atoms bonded together that take on distinct new properties. In interfaces, molecules are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule.
- **Organisms**: Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface.
- **Templates**: Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure. To build on our previous example, we can take the header organism and apply it to a homepage template.
- **Pages**: Pages are specific instances of templates that show what a UI looks like with real representative content in place. Building on our previous example, we can take the homepage template and pour representative text, images, and media into the template to show real content in action.

    ```
    .
    ├── ...
    ├── data                  # Json file for dummy data based on API response
    ├── dist                  # Distribution folder, is dynamically generated when using the vite build commands
    ├── public                # Directory contains your un-compiled assets such as image
    ├── src
    │   ├── libs              # All vue Component
    │   │   ├── atoms         # Likes button, label, checkbox, radio, etc.
    │   │   ├── molecules     # Likes card, newsletter, login-banner, etc.
    │   │   ├── organisms     # Likes header, footer
    │   │   ├── templates
    |   |   └── pages         # It's special case for specific product only likes
    │   ├── styles            # All sytling based on Vue Component booking-confirmation, booking-detail, etc.
    │   │   ├── atoms
    │   │   ├── molecules
    │   │   ├── organisms
    │   │   ├── templates
    |   |   └── pages
    │   ├── utils             # Helper functions that maybe used
    |   └── ...
    └── ...
    ```

# First thing first

This is the default readme. I put it here so it look like i'm doing something with docs.
This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.

2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
