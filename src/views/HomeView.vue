<template>
  <div class="home">
    <v-row class="mx-4 mx-md-0" justify="center" align="center" id="Home">
      <v-col cols="12" md="4" class="my-md-10 my-4 px-4">
        <div
          :style="
            $vuetify.breakpoint.smAndUp
              ? { 'font-size': '50px' }
              : { 'font-size': '30px' }
          "
          style="font-weight: 600"
        >
          Islom <br />Rakhmonov
        </div>
      </v-col>

      <v-col cols="12" md="4" class="mb-12 mb-md-0 text-md-center">
        <div>
          UI & UX designer <br />
          20 years old, Uzbekistan
        </div>
      </v-col>

      <v-col cols="12" md="4" class="pr-5 d-md-block d-none">
        <v-item-group class="mr-8 float-right" style="font-size: 22px">
          <v-item
            :class="$i18n.locale === 'en' ? 'text--primary' : 'text--secondary'"
            v-slot="{ active, toggle }"
            style="border-left: 1px solid #838383; cursor: pointer"
          >
            <div
              @click="toggle(), ($i18n.locale = 'en')"
              class="text--rotate my-4 pl-2"
              :style="
                active ? { color: '#070707 !important' } : { color: '#838383' }
              "
            >
              EN
            </div>
          </v-item>
          <v-item
            class="text--secondary"
            v-slot="{ active, toggle }"
            style="border-left: 1px solid #838383; cursor: pointer; width: 50px"
          >
            <div
              @click="toggle(), ($i18n.locale = 'ru')"
              :style="
                active ? { color: '#070707 !important' } : { color: '#838383' }
              "
              class="text--rotate my-4 pl-2"
            >
              RU
            </div>
          </v-item>
          <v-item
            class="text--secondary"
            v-slot="{ active, toggle }"
            style="cursor: pointer; width: 50px"
          >
            <div
              @click="toggle(), ($i18n.locale = 'uz')"
              :style="
                active ? { color: '#070707 !important' } : { color: '#838383' }
              "
              class="text--rotate my-4 pl-2"
            >
              UZ
            </div>
          </v-item>
        </v-item-group>
      </v-col>
    </v-row>
    <div data-aos="fade-up" data-aos-duration="2000">
      <v-img
        class="mb-n16 d-none d-md-flex"
        contain
        src="../assets/Rectangle_10.png"
      />
      <v-img
        class="mb-n16 d-flex d-md-none"
        contain
        src="../assets/Rectangle_11.png"
      />
    </div>
    <div
      id="About_me"
      class="text-sm-center pa-sm-16 px-6 py-12"
      style="background: #f6f6f6"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <p
        class="font-weight-black text-center my-8"
        :style="
          $vuetify.breakpoint.smAndUp
            ? { 'font-size': '30px' }
            : { 'font-size': '20px' }
        "
      >
        {{ $t("about_me") }}
      </p>
      <p class="my-4 px-sm-16">
        {{ $t("about_short") }}
      </p>
      <p>
        {{ $t("about_long") }}
      </p>
    </div>

    <div
      id="Skills"
      class="text-center py-16 mx-4"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div class="font-weight-bold" style="font-size: 30px">
        {{ $t("skills") }}
      </div>
      <div class="my-12">{{ $t("skills_text") }}</div>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="4" class="text-center">
          <div>
            <v-img
              class="mx-auto mb-2"
              src="../assets/figma.png"
              width="58"
              height="88"
            ></v-img>
            <div>Figma</div>
            <v-rating
              v-model="a"
              color="black"
              background-color="secondary"
              dense
              readonly
            ></v-rating>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <div>
            <v-img
              class="mx-auto mb-2"
              src="../assets/ps.png"
              width="89"
              height="88"
            ></v-img>
            <div>Adobe Photoshop</div>
            <v-rating
              v-model="b"
              color="black"
              background-color="secondary"
              dense
              readonly
            ></v-rating>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <div>
            <v-img
              class="mx-auto mb-2"
              src="../assets/ai.png"
              width="89"
              height="88"
            ></v-img>
            <div>Adobe Illustrator</div>
            <v-rating
              v-model="b"
              color="black"
              background-color="secondary"
              dense
              readonly
            ></v-rating>
          </div>
        </v-col>
      </v-row>
    </div>
    <div id="About_course" data-aos="fade-up" data-aos-duration="2000"></div>

    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      class="pa-sm-16 pa-6 text-sm-center"
      style="background: #f6f6f6"
    >
      <div
        class="font-weight-black mb-sm-12 text-center mb-4"
        style="font-size: 30px"
      >
        {{ $t("work_experience") }}
      </div>
      <div>
        {{ $t("work_long") }}
      </div>

      <div class="mt-4 mx-sm-n8">
        <v-row align="center">
          <v-col
            cols="12"
            sm="6"
            md="4"
            class="font-weight-black"
            :style="
              $vuetify.breakpoint.smAndUp
                ? { 'font-size': '20px' }
                : { 'font-size': '16px' }
            "
            >INVAN IT agency
          </v-col>
          <v-col cols="12" sm="6" md="4">1 June 2022 (offline)</v-col>
          <v-col cols="12" sm="6" md="4"> IU & UX DESIGNER</v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            class="font-weight-black"
            :style="
              $vuetify.breakpoint.smAndUp
                ? { 'font-size': '20px' }
                : { 'font-size': '16px' }
            "
            >SMARTGROUP.UZ IT agency
          </v-col>
          <v-col cols="12" sm="6" md="4" class="mt-sm-1 mt-md-0"
            >1 Dec 2021 (online)</v-col
          >
          <v-col cols="12" sm="6" md="4" class="mt-1">UX designer</v-col>
        </v-row>
      </div>
    </div>

    <contacts></contacts>
    <div style="position: fixed; bottom: 20px; right: 20px; border-radius: 50%">
      <v-btn fab x-large>
        <a href="https://t.me/just_islom"
          ><v-icon color="black">mdi-message-processing-outline</v-icon></a
        >
      </v-btn>
    </div>
  </div>
</template>

<script>
import Contacts from "../components/ContactsFooter";
// @ is an alias to /src

export default {
  components: {
    Contacts,
  },
};
</script>
