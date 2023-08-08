<!-- @eslint-disble max-len -->
<template>
  <div class="flex flex-col mx-auto max-w-screen-sm overflow-y-hidden">
    <div class="border-dashed border-b-2 border-191919 border-opacity-50 py-2 font-bold">
      <ul class="whitespace-nowrap">
        <li>• Помощь поступает</li>
        <li>• Тут я ее фиксирую</li>
        <li>• Фиксирую без имен/никнеймов</li>
      </ul>
    </div>

    <div class="flex flex-col overflow-y-auto py-4">
      <Shared.UI.TitleBlock class="pb-3" title="Cпасибо" />

      <ul class="list-disc list-inside pb-6">
        <li>
          Я планирую оставить свой манифест.
          <router-link to="/i-need-help">Прочтите его</router-link>
        </li>

        <li>Каждый из heroes сам в своем приключении, но все равно стремится помочь чем может</li>
        <li>Но я не могу "деанонить" людей после таких своих заявлений</li>
        <li>Но я могу запомнить их. И быть безмерно благодарным</li>
        <li>Теперь я обязан выгрести. Чтобы быть в состоянии так же помогать</li>
      </ul>

      <Shared.UI.TitleBlock class="pb-3" title="08.08.23" />

      <ul class="list-disc list-inside pb-6">
        <li class="font-bold">2 heroes</li>
        <li>Есть подработка, первые 50 баксов через +-10 дней</li>
        <li>Возможно так подрабатывать и в будущем</li>
      </ul>

      <ul class="list-disc list-inside pb-6">
        <li class="font-bold">1 hero</li>
        <li>Перевел на рублевый счет 10 000 рублей</li>
      </ul>

      <ul class="list-disc list-inside pb-6">
        <li class="font-bold">1 hero</li>
        <li>Предложение заехать в свою квартиру и поделить пополам квартплату и коммуналку</li>
        <li>Целый список полезных телеграм каналов с вакансиями, которых у меня не было, хотя список у меня не маленький</li>
      </ul>
      
      <ul class="list-disc list-inside pb-6">
        <li class="font-bold">1 hero</li>
        <li>Одна самая вкусная шаурма xD</li>
      </ul>
      
      <ul class="list-disc list-inside pb-6">
        <li class="font-bold">1 hero</li>
        <li>У этого hero действительно крутые приключения</li>
        <li>Этот человек сейчас "махается со своим драконом"</li>
        <li>Пообещал крепко помочь, если надает своему дракону по сусалам</li>
        <li>А пока занят поделился знаниями касательно фриланса</li>
        <li>Я утрирую, но впечатление такое =)</li>
        <li>Удачи тебе замечательный человек</li>
      </ul>

      <ul class="list-disc list-inside pb-6">
        <li class="font-bold">1 hero</li>
        <li>Еще один hero поделился своим опытом в новом для меня айтишном стеке</li>
      </ul>

      <Shared.UI.TitleBlock class="pb-3" title="xx.08.23" />
    </div>

    <div class="border-dashed border-t-2 border-191919 border-opacity-50">
      <Widgets.ContactToMe />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Widgets } from '@widgets';
import { Shared } from '@shared';
</script>