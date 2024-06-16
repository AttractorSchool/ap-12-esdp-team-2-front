<template>
  <Sidebar :items="[
    {
      href: '',
      icon: 'filter',
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
      icon: 'calendar-event',
      text: 'Событие',
    }, {
      href: '',
      icon: 'hammer',
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
      href: '/ads',
      icon: 'bell',
      text: 'Объявление',
    }, {
      href: '#',
      icon: 'phone',
      text: 'Контакты',
    },
  ]"/>

  <Navbar/>
  <nuxt-page/>
  <Footer/>
</template>

<script>
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Sidebar from '@/components/sidebar'

export default {
  components: {
    Navbar,
    Footer,
    Sidebar
  }
}
</script>