<template>
  <div style="background: #000">
    <section class="showcase">
      <video src="../assets/bg_video.mp4" muted loop autoplay></video>
      <div class="overlay"></div>
      <div class="text mx-md-16 mt-sm-n16">
        <v-row>
          <v-col>
            <h4 class="mx-md-16">Start</h4>
            <p class="mx-md-16">In this course you Graphic design and everything connecterd with it.</p>
          </v-col>
          <v-col class="text-end d-inline">
            <v-row justify="end">
              <v-col>
                <v-img class="text-end float-right" width="60" height="60" src="../assets/Figma_logo.png"></v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h4 class="mx-md-16">Course price</h4>
            <p class="mx-md-16">299 900 UZS ( Per month )</p>
          </v-col>
          <v-col class="d-none d-md-block">
            <h4 class="mx-md-16">Bio</h4>
            <p class="mx-md-16">Course duration 4 month, 35 lessons</p>
          </v-col>
        </v-row>
        <div class="d-md-none">
          <h4 class="mx-md-16">Bio</h4>
          <p class="mx-md-16">Course duration 4 month, 35 lessons</p>
        </div>
        <h4 class="mx-md-16">Programms to be teached</h4>
        <p class="mx-md-16">Figma</p>
        <a href="https://t.me/I_Rakhmonov" class="black--text mx-md-16">Buy</a>
      </div>
      <!--<ul class="social">-->
      <!--<li><a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png"></a></li>-->
      <!--<li><a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png"></a></li>-->
      <!--<li><a href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png"></a></li>-->
      <!--</ul>-->
    </section>
    <contacts-footer-dark />
  </div>
</template>

<script>
  import ContactsFooterDark from '../components/ContactsFooterDark'

  export default {
    components: {
      ContactsFooterDark,
    },
  }
</script>

<style scoped>

</style>
