<template>
  <Shared.UI.Layout.Section
    class="pt-5"
    is-fluid
  >
    <Shared.UI.TitleBlock
      class="max-w-screen-sm"
      title="Experience"
    />

    <Widgets.JobCard
      class="pb-5"
      shadow
      position="Senior front-end developer"
      company="Another cool start-up"
      date="2023 Aug. - 2023 Oct."
      
      :description="[
        `Developed a UI kit (next.js + MUI)`,
      ]"
    />

    <Widgets.JobCard
      class="pb-5"
      position="Middle/Senior front-end developer"
      company="KonigLabs (web development)"
      date="2022 March - 2023 Aug."
      
      :description="[
        `Developed a module for issuing microloans from scratch within an internet banking
        application, including changes to business logic and UX`,
        `Implemented the Future Slice (FSD) approach to refactoring legacy code in the project,
        avoiding the need to rewrite the application from scratch`,
      ]"
    />    

    <Widgets.JobCard
      class="pb-5"
      position="Middle full-stack developer"
      company="Ottofeller (web development)"
      date="2021 Jan. - 2022 March"
      description="Contributed to the development of a streaming platform reach.live"
    />

    <Widgets.JobCard
      class="pb-5"
      position="Middle front-end developer"
      company="Mass Project (web development)"
      date="2019 Oct. - 2021 Jan."
      description="Implemented the FSD approach in application design and integrated unit testing"
    />

    <Widgets.JobCard
      class="pb-5"
      position="Middle front-end developer"
      company="DevHouse (web development)"
      date="2017 Nov. - 2019 Oct."
      
      description="
        Developed an Angular-based cake builder module for a private SaaS
        platform serving a bakery network in Norway (cakeiteasy.no)
      "
    />

    <Widgets.JobCard
      class="pb-5"
      position="Junior/Middle full-stack developer"
      company="Abtronics (digital commerce)"
      date="2017 Jan. - 2017 Nov."
      description="Rewrote the interface of the company's internal CRM using PHP, JavaScript, HTML, and CSS"
    />

    <Widgets.JobCard
      position="System/Network administrator"
      company="Citilink (digital discounter)"
      date="2013 Jan. - 2016 Mar."
      description="Performed tasks related to the maintenance of equipment like cash desks, terminals, CCTV, etc"
    />
  </Shared.UI.Layout.Section>
</template>

<script lang="ts" setup>
import { Shared } from '@shared';
import { Widgets } from '@widgets';
</script>