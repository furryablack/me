<!-- @eslint-disble max-len -->
<template>
  <div class="flex flex-col mx-auto max-w-screen-sm overflow-y-hidden">
    <div class="border-dashed border-b-2 border-191919 border-opacity-50 py-2 font-bold">
      <ul class="whitespace-nowrap">
        <li>- Привет. Я Алексей.</li>
        <li>- Что происходит? Зачем я тут?</li>
        <li>- Постараюсь все обьяснить.</li>
      </ul>
    </div>

    <div class="flex flex-col overflow-y-auto py-4">
      <Shared.UI.TitleBlock class="pb-3" title="Короче, need help" />

      <ul class="list-disc list-inside pb-6">
        <li>И теперь по традиции ты закрываешь страницу и идешь по своим делам.</li>
        <li>Я понимаю, и сам так часто делал. А сейчас оказался вот по эту сторону.</li>
        <li>Прости, мне трудно просить помощь. Никогда этого не делал.</li>
      </ul>

      <Shared.UI.TitleBlock class="pb-3" title="В чем дело?" />

      <div class="pb-6">
        Я безработный front-end дэв который не может найти работу. Да. Я есть.
      </div>

      <div class="pb-2">
        Разреши еще раз представиться. Я Алексей. Мне 33 года. Не служил. Категория В в военнике. WorkPermit до января
        2024.
        Договор аренды квартиры истекает в сентябре 2023.
        Приехал в Армению 24.09.22 (сентябрь, суббота) в 00.00 — 01.00 и ночевал в аэропорту.
      </div>

      <div class="pb-6">
        Еще до вылета из РФ уже работал на
        <Shared.UI.NativeLink href="https://koniglabs.ru">
          koniglabs
        </Shared.UI.NativeLink>
        на офис в Армении. Работал сначала как наемный рабочий, потом по
        ГПХ (бессрочный).
        Сейчас уже не работаю, потому что санкции, потому что отвалились заказчики, потому что владельцы стали делить
        компанию.
      </div>

      <Shared.UI.TitleBlock class="pb-3" title="О какой помощи речь?" />

      <div class="pb-6">
        <p class="first-letter:font-bold first-letter:underline pb-2">
          Работа. Мне нужна работа. Чтобы покрывать хотя бы свои расходы.
        </p>

        <p class="first-letter:font-bold first-letter:underline pb-2">
          Сейчас я не в состоянии даже заплатить за интернет (9 000 amd).
        </p>

        <p class="first-letter:font-bold first-letter:underline pb-2">
          Нужна помощь с деньгами и работой. Вот
          <Shared.UI.NativeLink
            href="https://docs.google.com/spreadsheets/d/1Ctfz6GXLS4k8cnpluUfKVjbLKJOlo4RqNi3lCsPRFlU/edit?usp=sharing">
            табличка моих аплаев на гугл доках</Shared.UI.NativeLink>. Я и до июля был в поиске, но в июле включил
          "aggressive mode" образно говоря.
        </p>

        <p class="first-letter:font-bold first-letter:underline pb-2">
          <Shared.UI.NativeLink href="https://furryablack.github.io/me">
            Мое CV/резюме</Shared.UI.NativeLink>.
          Работал со сложными формами на Angular в
          <Shared.UI.NativeLink href="https://webbankir.ru">
            webbankir.ru</Shared.UI.NativeLink>, с видео в
          <Shared.UI.NativeLink href="https://ottofeller.com/projects">
            Ottofeller
          </Shared.UI.NativeLink> на проекте
          <Shared.UI.NativeLink href="https://reach.live">
            reach.live
          </Shared.UI.NativeLink> (который решил "прилечь", но
          проект реальный).
          Там же зацепил супер дупер секретный крипто стартап.
        </p>

        <p class="first-letter:font-bold first-letter:underline pb-2">
          Могу показать куски кода с прошлых проектов. Только куски (NDA). Весь код в приват репах на гитлабе, не на
          гитхабе.
        </p>

        <p class="first-letter:font-bold first-letter:underline pb-2">
          Готов менять стек, направление профессии, учиться, переучиваться. Главное - работа.
        </p>

        <p class="first-letter:font-bold first-letter:underline pb-2">
          Есть счет в инеко банке, есть workpermit, есть квартира и интернет. Монитор и мощный ноутбук. Есть игровая
          гарнитура. Только вебка встроенная.
        </p>

        <p class="first-letter:font-bold first-letter:underline pb-2">
          Могу в офисе, могу из дома, могу подстроится под time span команды в любом поясе. Умею разделять дом и работу.
        </p>

        <p class="first-letter:font-bold first-letter:underline pb-2">
          Есть счет в сбере. Но статус замозанятого закрыт уже. А <Shared.UI.NativeLink href="https://www.diadoc.ru/">
            диадок
          </Shared.UI.NativeLink> уже просрочился.
          Так что на юр. лицо в РФ работать официально я не смогу.
          Готов работать по ГПХ/найму на армянскую компанию. Планирую сделать ИП, благо <Shared.UI.NativeLink
            href="https://am-banking-and-immigration.notion.site/am-banking-and-immigration/Deel-0f4b9b11cce84e6681d0333568587377">
            есть актуальный FAQ</Shared.UI.NativeLink>, но оно хоть и стоит не дорого, но я сейчас просто на мели.
          А так, планы открыть ИП и в идеале работать через <Shared.UI.NativeLink href="https://www.deel.com/">
            deel.com</Shared.UI.NativeLink> или аналоги.
        </p>
      </div>

      <Shared.UI.TitleBlock class="pb-3" title="И это Все?" />

      <div class="pb-6">
        <p class="first-letter:font-bold first-letter:underline pb-2">
          Нет, помимо работы, мне нужна помощь банально с деньгами.
          Я уже просрочил платеж за август по квартире (80 000 amd). Но владелец пошел на встречу.
          И в сентябре я уже должен 2 месячные оплаты (160 000 amd).
          Это только оплата аренды.
        </p>

        <p class="first-letter:font-bold first-letter:underline pb-2">
          Дома у меня давно нет, продал перед отъездом из РФ. Прописки тоже нет.
          Родные фанаты Путина, в то время как я донатил одному украинцу через <Shared.UI.NativeLink
            href="https://diaka.ua">
            diaka.ua
          </Shared.UI.NativeLink>
          (<Shared.UI.NativeLink href="https://youtube.com/@CenturionStream">
            @CenturionStream или Игорь
          </Shared.UI.NativeLink>) из отеля в Ванадзоре на ПК и генератор.
          Помочь родные не захотят. Да и не смогут. Сами все без денег. Игоря даже просить не буду, это "наши" ракеты
          летят к "ним" домой.
        </p>

        <p class="first-letter:font-bold first-letter:underline pb-2">
          В РФ это пожизненное за гос. измену. Если вменят гос. измену. Да и 20ка, 15шка, 10ка, сроки тоже, приличные, мне
          хватит.
        </p>

        <p class="first-letter:font-bold first-letter:underline pb-2">
          Я не планирую возвращаться в РФ. Уезжая ФСБ перед погран контролем проверяло меня - есть ли я в списках на
          мобилизацию.
          Как оказалось - не было. Есть ли сейчас не знаю.
        </p>

        <p class="first-letter:font-bold first-letter:underline pb-2">
          На вопросы ФСБ-шника честно ответил, что уезжаю потому что не нравится действия моей страны и планирую в Армении
          осесть на долго,
          если не навсегда.
        </p>

        <p class="first-letter:font-bold first-letter:underline pb-2">
          Такой у меня характер. Если я вернусь, то не буду чистить телефон. Или врать на погран контроле.
          Если пронесет на погран контроле. Буду выходить с плакатиком, пока не посадят.
        </p>
      </div>

      <Shared.UI.TitleBlock class="pb-3" title="Теперь без 'воды', что надо?" />

      <div class="pb-6">
        <p class="first-letter:font-bold first-letter:underline pb-2">
          <span class="block font-bold pb-2">Этот месяц (август, 08.2022), в порядке критичности:</span>

          <span class="block whitespace-nowrap pb-2">• работа</span>

          <span class="block whitespace-nowrap">• 9 000 amd</span>
          <span class="block text-14 pb-2">7 - 21 августа, интернет</span>

          <span class="block whitespace-nowrap">• до 20 000 amd</span>
          <span class="block text-14 pb-2">
            10 - 20 августа, комуналка, я никогда не платил столько, в прошлый раз было 15 000 с копейками, когда
            то 12 000, когда то даже 18 000
          </span>

          <span class="block whitespace-nowrap">• 80 000 amd</span>
          <span class="block text-14 pb-2">
            конец августа, это то что я должен был оплатить в конце июля
          </span>

          <span class="block whitespace-nowrap">• 80 000 amd</span>
          <span class="block text-14 pb-2">
            за сентябрь в конце августа, залог за него был, но владелец пошел мне "навстречу" зная что мне некуда
            идти, и просто "продал" мне отстрочку за 80 000 сверху, хотя я уже второй полугодовой договор "доживаю"
            без нареканий
          </span>
        
          <span class="block whitespace-nowrap">• 2 700 amd</span>
          <span class="block text-14 pb-2">
            моб. инет, не критично если в рамках работы мне не нужно выходить в город
          </span>

          <span class="block font-bold">Итог - 189 000 amd</span>
          <span class="block text-14 pb-2">
            с моб. инетом 191 700
          </span>
        </p>
      </div>

      <div class="pb-6">
        <p class="first-letter:font-bold first-letter:underline pb-2">
          По подсчетам, в обычный месяц нужно 111 700 amd (выкидываем "лишние" 80 000 amd).
        </p>

        <p class="first-letter:font-bold first-letter:underline pb-2">
          Я планирую и дальше продлять на полгода договор аренды. Не уверен на кого нарвусь и куда заеду если буду менять жилье.
          Да и не в том я положении чтобы заниматься переездом.
        </p>
        
        <p class="first-letter:font-bold first-letter:underline pb-2">
          Если я продляю договор аренды, это уже в конце сентября, то нужно внести за первый и последний месяц, это опять 80 000 amd + 80 000 amd.
        </p>
        
        <p class="first-letter:font-bold first-letter:underline pb-2">
          То есть опять октябрь стоит 191 700, и потом уже ноябрь и так далее 111 700 amd. 
          <span class="underline">Позарез нужна работа.</span>
        </p>
      </div>

      <div class="pb-6">
        <p class="first-letter:font-bold first-letter:underline pb-2">
          Это я еще не упомянул расходы на банальную еду и прочее. 
          Хорошо я не курю и употребляю алкоголь - пришлось бы бросать в экстренном порядке.
          Но это я уж переживу.
        </p>
      </div>
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