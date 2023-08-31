<!-- @eslint-disble max-len -->
<template>
  <div class="flex flex-col mx-auto max-w-screen-sm overflow-y-hidden">
    <div class="border-dashed border-b-2 border-191919 border-opacity-50 py-2 font-bold">
      <ul class="whitespace-nowrap">
        <li>• Помощь поступила</li>
        <li>• Тут я ее зафиксировал</li>
        <li>• Без имен/никнеймов</li>
        <li>
          <router-link to="../i-need-help">• manifest</router-link>
        </li>
      </ul>
    </div>

    <div class="flex flex-col overflow-y-auto py-4">
      <Shared.UI.TitleBlock
        class="pb-3"
        title="Cпасибо"
      />

      <ul class="list-disc list-inside pb-6">
        <li>
          Я планирую оставить свой манифест.
          <router-link to="../i-need-help">Прочтите его</router-link>
        </li>

        <li>Каждый из heroes сам в своем приключении, но все равно стремится помочь чем может</li>
        <li>Но я не могу "деанонить" людей после таких своих заявлений</li>
        <li>Но я могу запомнить их. И быть безмерно благодарным</li>
        <li>Теперь я обязан выгрести. Чтобы быть в состоянии так же помогать</li>
      </ul>

      <Shared.UI.TitleBlock
        class="pb-3"
        title="08.08.23"
      />

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

      <Shared.UI.TitleBlock
        class="pb-3"
        title="31.08.23"
      />

      <ul class="list-disc list-inside pb-6">
        <li class="font-bold">1 hero</li>
        <li>Дракон побежден</li>
        <li>Спасибо тебе за помощь, основную ее часть оказал мне ты. Не смотря на свои проблемы</li>
      </ul>

      <ul class="list-disc list-inside pb-6">
        <li class="font-bold">heroes</li>
        <li>Я помню всех и каждого кто мне помог. Не забуду вам этого.</li>
        <li>Финансовую помощь верну до конца года. Я знаю цену каждому драму, каждому рублю.</li>
        <li>О да, теперь я знаю им цену очень хорошо.</li>
      </ul>

      <ul class="list-disc list-inside pb-6">
        <li class="font-bold">результаты</li>
        <li>У меня есть работа. На сентябрь точно (проектная занятость).</li>
        <li>У меня есть деньги на пролонгацию аренды (первый + последний месяц).</li>
        <li>Текущий долг по аренде закрыт.</li>
        <li>Есть деньги на прочие расходы (связь, комуналка и тд).</li>
        <li>Короче, проблемы были, их больше нет. НЕТ их больше. С вашей помощью.</li>
        <li>Огромное спасибо. Я обязательно закреплюсь на своих двоих и продолжу ваше дело: ведь есть еще и будут (к моей грусти) люди в нужде.</li>
        <li class="italic">А помогать им никто кроме нас не будет.</li>
      </ul>
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