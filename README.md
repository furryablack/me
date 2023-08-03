# Vue 3 Doodle

- vite, vitest, vue-tsc, commitizen
- typescript, less, tailwind
- Feature-Sliced Design, Application Areas

### Feature-Sliced Design (FSD)

- https://feature-sliced.design/
- The module should not depend directly on other modules of the same layer or overlying layers
- Each module must have a declaration of its public API at the top level
- Orientation to business and user needs

### Application Areas

- It's a part of FSD layer app: @app/areas/*
- Implemented over vue-router interface
- Top (external) areas: auth, unauth, maintainance
- Internal areas: user, dashboard, account, cart, etc, ..., anything
- Internal area imports into the one of top-external area
- Each top-external area will be applied to vue router during app's creation
- Auth area for authorized access to internal areas
- Unauth area for unauthorized access to internal areas
- Maintainance area for technical pages like service-unavailable, page-not-found, etc

Every area has base area-frame component looks like:
```vue
<template>
  <router-view />
</template>
```

But you can to change that for a specific area:
```vue
<template>
  <Shared.UI.Layout.Section
    class-name="max-w-md"
    height-full
  >
    <div class="my-auto min-h-75">
      <router-view />
    </div>
  </Shared.UI.Layout.Section>
</template>
``` 

### Tips

- use `./src/viewport.vue` to setup global feature(s) in `<script></script>` section
- use `./scr/app/areas/area-frame` (area-frame for all areas) to setup global feature(s) in `<style></style>` section
- don't use `./src/viewport.vue` or `./scr/app/areas/area-frame` to setup global feature(s) in `<template></template>` section, use another area-frame(s) for that