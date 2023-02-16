<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
      class="header"
    >
      <v-btn rounded color="black" class="d-md-none py-6" @click.stop="drawer = !drawer">
        <v-img src="../assets/navbar_icon.png" width="30" height="30"></v-img>
      </v-btn>
      <v-item-group>
        <scrollactive class="d-none d-md-inline-flex ml-16 pl-16">
          <v-item v-slot="{active, toggle}">
            <div class="mx-5" @click="toggle"><a class="scrollactive-item" href="#"><router-link to="/#Home">{{ $t('home') }}</router-link></a></div>
          </v-item>
          <div class="mx-5"><a class="scrollactive-item" href="#About_me"><router-link to="/#About_me">{{ $t('about_me') }}</router-link></a></div>
          <div class="mx-5"><a class="scrollactive-item" href="#Skills"><router-link to="/#Skills" replace>{{ $t('skills') }}</router-link></a></div>
          <div class="mx-5"><a class="scrollactive-item" href="#">
            <router-link to="/courses">{{ $t('about_course') }}</router-link>
          </a></div>
        </scrollactive>
      </v-item-group>

      <v-spacer></v-spacer>
      <scrollactive>
        <div class=" d-none d-md-inline-flex mr-16 pr-16"><a class="scrollactive-item" href="#Contacts">{{
          $t('contacts') }}</a>
        </div>
      </scrollactive>

      <v-item-group class="d-inline-flex d-md-none mx-8 float-right" style="font-size: 22px;">
        <v-item
          class="text--white px-2" v-slot="{active, toggle}"
          style="cursor: pointer; width: 50px;"
        >
          <div
            @click="(toggle()), ($i18n.locale = 'uz')"
            :style="active ? {color: '#f7f7f7 !important'}: {color: '#aaa'}"
          >UZ
          </div>
        </v-item>

        <v-divider vertical style="background: #838383"></v-divider>
        <v-item
          class="text--white px-2" v-slot="{active, toggle}"
          style="cursor: pointer; width: 50px;"
          @click="$i18n.locale = 'ru'"
        >
          <div
            @click="(toggle()), ($i18n.locale = 'ru')"
            :style="active ? {color: '#f7f7f7 !important'}: {color: '#aaa'}"
          >RU
          </div>
        </v-item>
        <v-divider vertical style="background: #838383"></v-divider>


        <v-item
          :class="$i18n.locale === 'en' ? 'text--white' : 'text--white'"
          v-slot="{active, toggle}"
          @click="$i18n.locale = 'en'"
          style="cursor: pointer; width: 50px;"
          class="px-2"
        >
          <div
            @click="(toggle()), ($i18n.locale = 'en')"
            :style="active ? {color: '#f7f7f7 !important'}: {color: '#aaa'}"
          >EN
          </div>
        </v-item>
      </v-item-group>

    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-card
        class="mx-auto"
        max-width="500"
        elevation="0"
        dark
        height="100vh"
        style="border-radius: 0"
      >
        <v-list>
          <v-list-item-group v-model="group" style="height: 95vh" class="d-block align-end flex-column">
            <v-list-item>
              <v-list-item-icon>
                <v-img src="../assets/home.png" width="30" height="30"></v-img>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title><a class="scrollactive-item" href="#" @click="toCourse('/')">{{ $t('home') }}</a></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-img src="../assets/profile.png"></v-img>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title><a class="scrollactive-item" href="#"><router-link to="/#About_me">{{ $t('about_me') }}</router-link></a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-img src="../assets/star.png"></v-img>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title><a class="scrollactive-item" href="#"><router-link to="/#Skills">{{ $t('skills') }}</router-link></a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-img src="../assets/notification.png"></v-img>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title><a class="scrollactive-item" href="#"><router-link to="/courses">{{ $t('about_course') }}</router-link></a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="mt-auto">
              <v-list-item-icon>
                <v-img src="../assets/call.png" class="ml-1"></v-img>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title><a class="scrollactive-item" href="#Contacts">{{ $t('contacts') }}</a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    <v-main style="background: #000">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'DarkMode.vue',
    data: () => ({
      drawer: false
    }),
    methods: {
      toCourse(push) {
        this.$router.push(push)
      }
    }
  }
</script>

<style scoped>

</style>
