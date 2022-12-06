<template>
    <div class="container-fluid main">
        <div class="row presentation">
            <div class="col">
                <img src="../assets/images/eventspage.svg" class="store-img" alt="">
            </div>
            <h2 class="col title text-center">here you can find all of mouvma events you can discover them and add them to your list</h2>
        </div>
        <div class="row">
            <h1 class="text-center title-event">Events</h1>
        </div>
        <div class="row">
            <div v-for="event in events" class="col card-event">
                <eventCard :event="event"></eventCard>
            </div>
        </div>
    </div>
</template>
<script>
import eventCard from '@/components/eventCard.vue';
export default {
    name: 'EvenetsView',
    components: {
        eventCard
    },
    data() {
        return {
            events: [
                {
                    id: 1,
                    event_name: 'movie night : mindinght at paris',
                    describ1: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    describ2: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    describ3: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    describ4: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    presentation: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    poster: require('@/assets/images/event1/movie_poster.jpg'),
                    img1: require('@/assets/images/event1/movie_night_poster.jpg'),
                    img2: require('@/assets/images/event1/movie_pics.jpg'),
                    img3: require('@/assets/images/event1/people_watching_movie.jpg'),
                    img4: require('@/assets/images/event1/women_watching_movie.jpeg'),
                    date: '12/12/2022'
                },
                {
                    id: 2,
                    event_name: 'music concert : yume the duo',
                    describ1: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    describ2: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    describ3: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    describ4: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    presentation: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    poster: require('@/assets/images/event2/yuma.png'),
                    img1: require('@/assets/images/event2/poster.jpg'),
                    img2: require('@/assets/images/event2/people_dancing.jpg'),
                    img3: require('@/assets/images/event2/man_dance.jpg'),
                    img4: require('@/assets/images/event2/concert_event.jpg'),
                    date: '13/12/2022'
                },
                {
                    id: 3,
                    event_name: 'charity day',
                    describ1: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    describ2: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    describ3: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    describ4: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    presentation: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    poster: require('@/assets/images/event3/charity_poster.svg'),
                    img1: require('@/assets/images/event3/poeple_helpnig.jpg'),
                    img2: require('@/assets/images/event3/talk.jpg'),
                    img3: require('@/assets/images/event3/time_to_give.jpg'),
                    img4: require('@/assets/images/event3/voulenteer.jpeg'),
                    date: '14/12/2022'
                },
                {
                    id: 7,
                    event_name: 'movie night : mindinght at paris',
                    describ1: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    describ2: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    describ3: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    describ4: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    presentation: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    poster: require('@/assets/images/event6/poster.jpg'),
                    img1: require('@/assets/images/event6/movie_night_poster.jpg'),
                    img2: require('@/assets/images/event6/movie_pics.jpg'),
                    img3: require('@/assets/images/event6/people_watching_movie.jpg'),
                    img4: require('@/assets/images/event6/women_watching_movie.jpeg'),
                    date: '16/12/2022'
                },
                {
                    id: 5,
                    event_name: 'party day : hallowen party',
                    describ1: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    describ2: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    describ3: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    describ4: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    presentation: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    poster: require('@/assets/images/event5/helloween_poster.jpg'),
                    img1: require('@/assets/images/event5/halloween_party.svg'),
                    img2: require('@/assets/images/event5/helloween_party_cover.jpg'),
                    img3: require('@/assets/images/event5/halloween.jpg'),
                    img4: require('@/assets/images/event5/family_haloween.jpeg'),
                    date: '15/12/2022'
                },
                {
                    id: 4,
                    event_name: 'sport day : football match',
                    describ1: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    describ2: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    describ3: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    describ4: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    presentation: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim cum? Officiis nobis quod eos. Alias eligendi hic officia, laudantium enim sint quidem labore est deleniti, atque, pariatur nemo eius.',
                    poster: require('@/assets/images/event4/poster.jpg'),
                    img1: require('@/assets/images/event4/big_foot.svg'),
                    img2: require('@/assets/images/event4/goolkeeper.jpg'),
                    img3: require('@/assets/images/event4/man_football.jpg'),
                    img4: require('@/assets/images/event4/women_football.jpg'),
                    date: '15/12/2022'
                }
            ]
        }
    },
}
</script>
<style>
.main {
    width: 100% !important;
    margin-bottom: 5%;
    margin-top: 10%;
}

.card-event {
    margin-left: 6%;
    margin-bottom: 5%;
}
.title {
  color: #FFBF00;
  font: bold;
  font-size: 4rem;
  margin-top: 5%;
}
.title-event{
    color: var(--color-yellow);
    font: bold;
  font-size: 4rem;
}
</style>