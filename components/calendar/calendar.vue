<template>
  <section class="banner-area relative" id="home">
    <div class="overlay overlay-bg"></div>
    <div class="container">
      <div class="row fullscreen d-flex align-items-center justify-content-between">
        <div class="banner-content col-lg-9 col-md-12">
        </div>
      </div>
    </div>
  </section>
  <div class="calendar">
    <div class="col leftCol">
      <div class="content">
        <h1 class="date">{{ currentWeekday }}<span>{{ formattedDate }}</span></h1>
        <div class="notes">
          <p>
            <input type="text" v-model="newNote" placeholder="новая заметка" />
            <a href="#" title="Добавить заметку" class="addNote animate" @click.prevent="addNote">+</a>
          </p>
          <ul class="noteList">
            <li v-for="(note, index) in notes" :key="index">
              {{ note }}
              <a href="#" title="Удалить заметку" class="removeNote animate" @click.prevent="removeNote(index)">x</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col rightCol">
      <div class="content">
        <h2 class="year">{{ currentYear }}</h2>
        <ul class="months">
          <li v-for="(month, index) in months" :key="index">
            <a href="#" title="месяц" :class="{ selected: index + 1 === currentMonth }" @click.prevent="selectMonth(index + 1)">
              {{ month }}
            </a>
          </li>
        </ul>
        <div class="clearfix"></div>
        <ul class="weekday">
          <li v-for="(day, index) in weekdays" :key="index">
            <a href="#" title="день">{{ day }}</a>
          </li>
        </ul>
        <div class="clearfix"></div>
        <ul class="days">
          <li v-for="(day, index) in daysInCurrentMonth" :key="index" :style="{ marginLeft: day.marginLeft }">
            <a href="#" :class="{ selected: day.date === currentDay, event: events.includes(day.date) }" @click.prevent="selectDay(day.date)">
              {{ day.date }}
            </a>
          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const currentYear = ref(new Date().getFullYear());
const currentMonth = ref(new Date().getMonth() + 1);
const currentDay = ref(new Date().getDate());

const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
const weekdays = ['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Суб'];

const events = ref([8, 10, 27]); // Пример дат событий
const notes = ref<string[]>([]);
const newNote = ref('');

const selectMonth = (month: number) => {
  currentMonth.value = month;
  currentDay.value = 1;
};

const selectDay = (day: number) => {
  currentDay.value = day;
};

const addNote = () => {
  if (newNote.value.trim()) {
    notes.value.push(newNote.value);
    newNote.value = '';
  }
};

const removeNote = (index: number) => {
  notes.value.splice(index, 1);
};

const daysInCurrentMonth = computed(() => {
  const days = [];
  const firstDayOfMonth = new Date(currentYear.value, currentMonth.value - 1, 1).getDay();
  const numberOfDays = new Date(currentYear.value, currentMonth.value, 0).getDate();

  // Добавление пустых элементов для выравнивания первого дня месяца
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push({ date: '', marginLeft: '' });
  }

  // Добавление дней месяца
  for (let date = 1; date <= numberOfDays; date++) {
    days.push({
      date: date,
      weekday: weekdays[(firstDayOfMonth + date - 1) % 7],
      marginLeft: date === 1 ? `${firstDayOfMonth * 55}px` : ''
    });
  }

  return days;
});

const currentDate = computed(() => {
  return new Date(currentYear.value, currentMonth.value - 1, currentDay.value);
});

const currentWeekday = computed(() => {
  return weekdays[currentDate.value.getDay()];
});

const formattedDate = computed(() => {
  const month = months[currentDate.value.getMonth()];
  const day = currentDate.value.getDate();
  return `${month} ${day}`;
});

</script>

<style scoped>
/* not required */
*,:active {
  outline: none;
}
* {
  padding: 0px;
  margin: 0px;
}

body {
  margin: 20px;
  background-color: #EEEDE9;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-size: 96.5%;
  font-family: Helvetica, Arial, sans-serif;
}

input {
  font-family: Helvetica, Arial, sans-serif;
}

h1, h2, h3, h4, h5, p {
  margin-bottom: 10px;
}

p {
  line-height: 20px;
}

a {
  text-decoration: none;
  color: rgba(4, 9, 30, 0.9);
}

.clearfix {
  clear: both;
}

.animate {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

/* required */
.calendar {
  position: absolute;
  border-radius: 4px;
  overflow: hidden;
  width: 1000px;
  height: 650px;
  left: 50%;
  margin-left: -500px;
  margin-top: -325px;
  top: 50%;
  background-color: #ffffff;
  color: #333333;
}

.calendar h1, .calendar h2 {
  font-weight: 300;
  font-size: 38px;
  line-height: 28px;
  text-transform: uppercase;
  margin: 0px 0px 20px 0px;
}

.calendar h1 span {
  display: block;
}

.calendar .col {
  position: relative;
  float: left;
  height: 100%;
}

.calendar .col .content {
  padding: 40px;
}

.calendar ul {
  margin: 0px;
}

.calendar ul li {
  list-style: none;
}

.calendar .leftCol {
  width: 40%;
  background-color: rgba(4, 9, 30, 0.5);
}

.calendar .noteList li {
  color: #ffffff;
  margin-bottom: 10px;
}

.calendar .notes p,
.calendar .notes input,
.calendar .noteList li {
  font-weight: 300;
  font-size: 14px;
}

.calendar .notes p {
  border-bottom: solid 1px rgba(255,255,255,0.4);
}

.calendar .notes input {
  background-color: rgba(4, 9, 30, 0.5);
  color: #ffffff;
  border: none;
  width: 200px;
}

.calendar .addNote,
.calendar .removeNote {
  float: right;
  color: rgba(255,255,255,0.4);
  font-weight: bold;
  margin-left: 20px;
}

.calendar .addNote:hover,
.calendar .removeNote:hover {
  color: #ffffff;
}

.calendar .addNote {
  font-size: 16px;
}

.calendar .leftCol h1 {
  color: #ffffff;
  margin-bottom: 40px;
}

.calendar .rightCol {
  width: 60%;
}

.calendar .rightCol h2 {
  color: rgba(4, 9, 30, 0.9);
  text-align: right;
  margin-bottom: 70px;
}

.calendar .months li,
.calendar .weekday li,
.calendar .days li {
  float: left;
  text-transform: uppercase;
}

.calendar .months li a,
.calendar .weekday li a,
.calendar .days li a {
  display: block;
  color: rgba(4, 9, 30, 0.9);
}

.calendar .months li a {
  font-size: 10px;
  color: #C7BEBE;
  text-align: center;
  width: 40px;
  margin-bottom: 20px;
}

.calendar .months li .selected {
  font-weight: bold;
  color: rgba(4, 9, 30, 0.3);
}

.calendar .weekday li a {
  width: 70px;
  text-align: center;
  margin-bottom: 20px;
  font-size: 12px;
}

.calendar .days li {
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.calendar .days li a {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  margin-bottom: 10px;
}

.calendar .days li a:hover {
  background-color: #EEEDE9;
}

.calendar .days li .selected {
  background-color: rgba(4, 9, 30, 0.6)!important;
  color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.calendar .days li .event {
  color: rgba(4, 9, 30, 0.6);
}

/* placeholder color */
::-webkit-input-placeholder {color: #ffffff; }
:-moz-placeholder {color: #ffffff; }
::-moz-placeholder {color: #ffffff; }
:-ms-input-placeholder {color: #ffffff; }
</style>