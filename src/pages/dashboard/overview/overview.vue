<template>
  <Shared.UI.Layout.Section is-fluid>
    <pre class="text-16">
My name is Aleksei.
I'm a front-end developer.
<router-link to="/me">
  Look for details
</router-link>
[Relative experience]
7+ years

[Skills]
<Widgets.Skills />

[Languages]
• English  -> A1-A2
• Russian  -> Native
• Armenian -> work in progress

[Notes]
• I live in Armenia.
• I'm not ready to relocate now.
• I prefer remote work.
</pre>
  </Shared.UI.Layout.Section>
</template>

<script lang="ts" setup>
import { Shared } from '@shared';
import { Widgets } from '@widgets';
</script>
