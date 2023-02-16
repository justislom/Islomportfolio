<template>
  <div
    id="Contacts"
    class="text-center ma-md-16 ma-4"
    data-aos="fade-up"
    data-aos-duration="2000"
  >
    <div class="font-weight-black mb-12" style="font-size: 30px">
      {{ $t("contacts") }}
    </div>
    <div class="my-8">
      {{ $t("contacts_sub") }}
    </div>
    <div class="my-12">
      <v-btn rounded dark class="mr-4">
        <span>{{ $t("s") }}</span
        ><span class="text-lowercase"
          ><a href="https://t.me/just_islom">{{ $t("send_message") }}</a></span
        >
      </v-btn>
      <v-btn rounded dark>
        <a href="tel:+998974481512">
          <v-icon>mdi-phone</v-icon>
        </a>
      </v-btn>
    </div>
    <div class="px-md-16 px-sm-8">
      <div class="d-flex align-center mx-md-16 px-md-16 px-sm-8">
        <span class="mx-auto">
          <a href="https://www.linkedin.com/in/islom-rakhmonov-50b99a202">
            <v-img src="../assets/linkedin.png" width="40" height="40"></v-img>
          </a>
        </span>
        <span class="mx-auto">
          <a href="http://instagram.com/just.islommm">
            <v-img src="../assets/instagram.png" width="40" height="40"></v-img>
          </a>
        </span>
        <span class="mx-auto">
          <a href="https://t.me/iyr_portfolio">
            <v-img src="../assets/behance.png" width="40" height="40"></v-img>
          </a>
        </span>
      </div>
    </div>
    <div class="mt-12 text--secondary">
      {{ $t("subscribe1") }}<br />
      {{ $t("subscribe2") }}
    </div>
    <div class="text--secondary subtitle-2 mt-8">
      © All rights reserved. islomrakhmonov - 2022
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
