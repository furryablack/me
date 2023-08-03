<template>
  <div class="contact-to-me p-2">
    <ul>
      <li class="contact-to-me__contact">
        <span class="contact-to-me__contact-identity">linkedin</span>

        <span>
          <Widgets.UserLinks.Linkedin />
        </span>
      </li>

      <li class="contact-to-me__contact">
        <span class="contact-to-me__contact-identity">email</span>

        <span>
          <Widgets.UserLinks.EMail />
        </span>
      </li>

      <li class="contact-to-me__contact">
        <span class="contact-to-me__contact-identity">skype</span>

        <span>
          <Shared.UI.NativeLink href="skype:big2bear4?chat">big2bear4</Shared.UI.NativeLink>
        </span>
      </li>

      <li class="contact-to-me__contact">
        <span class="contact-to-me__contact-identity">phone</span>

        <span>
          <Widgets.UserLinks.Phone />
        </span>
      </li>

      <li class="contact-to-me__contact">
        <span class="contact-to-me__contact-identity">whatsapp</span>

        <span>
          <Shared.UI.NativeLink href="https://wa.me/37494789476">+374 094 789476</Shared.UI.NativeLink>
        </span>
      </li>

      <li class="contact-to-me__contact">
        <span class="contact-to-me__contact-identity">telegram</span>

        <span>
          <Shared.UI.NativeLink href="https://t.me/furryablack">t.me/furryablack</Shared.UI.NativeLink>
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { Shared } from '@shared';
import { Widgets } from '@widgets';
</script>

<style lang="less">
.contact-to-me {
  @apply flex flex-col;
  @apply text-13 xs:text-14;

  &__contact {
    @apply block xs:flex xs:flex-row xs:justify-start;
  }

  &__contact-identity {
    @apply block xs:flex xs:justify-center xs:items-center relative xs:w-28;
    @apply font-semibold xs:text-right;
    @apply text-191919 text-opacity-75 xs:text-opacity-100;
    
    &:not(:last-child) {
      @apply mb-0 xs:mb-1;
    }
  }

  &__contact-identity {
    &:after {
      @media (min-width: theme('screens.xs')) {
        transform: translateY(calc(50% + 1px));
        display: block;
        background: rgba(0, 0, 0, .4);
        height: 1px;
        width: 100%;
        content: " ";
        margin: 0 6px;
      }
    }
  }
}
</style>
