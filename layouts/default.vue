<template>
  <Sidebar :items="[
    {
      href: '',
      icon: '_nuxt/static/icons/filter.svg',
      text: 'Фильтр',
    }, {
      href: '#',
      icon: '',
      text: 'Спорт',
    },  {
      href: '#',
      icon: '',
      text: 'Знание',
    },  {
      href: '#',
      icon: '',
      text: 'Искуство',
    }, {
      href: '#',
      icon: '_nuxt/static/icons/calendar-event.svg',
      text: 'Событие',
    }, {
      href: '',
      icon: '_nuxt/static/icons/hammer.svg',
      text: 'Услуги',
    },  {
      href: '#',
      icon: '',
      text: 'Page 1',
    },  {
      href: '#',
      icon: '',
      text: 'Page 2',
    }, {
      href: '#',
      icon: '',
      text: 'Page 3',
    }, {
      href: '#',
      icon: '_nuxt/static/icons/bell.svg',
      text: 'Объявление',
    }, {
      href: '#',
      icon: '_nuxt/static/icons/phone.svg',
      text: 'Контакты',
    },
  ]"/>

  <div id="wrapper" collapsed>
    <div>
      <Navbar/>
    </div>
    <main>
      <div>
        <nuxt-page/>
      </div>
    </main>

  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>
