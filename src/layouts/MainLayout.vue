<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      class="header"
      :elevation="$vuetify.breakpoint.mdAndUp ? 1 : 0"
    >
      <v-btn rounded color="black" class="d-md-none py-6" @click.stop="drawer = !drawer">
        <v-img src="../assets/navbar_icon.png" width="30" height="30"></v-img>
      </v-btn>
      <v-item-group>
        <scrollactive class="d-none d-md-inline-flex">
          <v-item v-slot="{active, toggle}">
            <div class="mx-5" @click="toggle"><a class="scrollactive-item" href="#Home">{{ $t('home') }}</a></div>
          </v-item>
          <div class="mx-5"><a class="scrollactive-item" href="#About_me">{{ $t('about_me') }}</a></div>
          <div class="mx-5"><a class="scrollactive-item" href="#Skills">{{ $t('skills') }}</a></div>
          <div class="mx-5"><a class="scrollactive-item" href="#"><router-link to="/courses">{{ $t('about_course') }}</router-link></a></div>
        </scrollactive>
      </v-item-group>

      <v-spacer></v-spacer>
      <scrollactive>
        <div class=" d-none d-md-inline-flex"><a class="scrollactive-item" href="#Contacts">{{ $t('contacts') }}</a>
        </div>
      </scrollactive>

      <v-item-group class="d-inline-flex d-md-none mx-8 float-right" style="font-size: 22px;">
        <v-item
          class="text--secondary px-2" v-slot="{active, toggle}"
          style="cursor: pointer; width: 50px;"
        >
          <div
            @click="(toggle()), ($i18n.locale = 'uz')"
            :style="active ? {color: '#070707 !important'}: {color: '#838383'}"
          >UZ
          </div>
        </v-item>

        <v-divider vertical style="background: #838383"></v-divider>
        <v-item
          class="text--secondary px-2" v-slot="{active, toggle}"
          style="cursor: pointer; width: 50px;"
          @click="$i18n.locale = 'ru'"
        >
          <div
            @click="(toggle()), ($i18n.locale = 'ru')"
            :style="active ? {color: '#070707 !important'}: {color: '#838383'}"
          >RU
          </div>
        </v-item>
        <v-divider vertical style="background: #838383"></v-divider>


        <v-item
          :class="$i18n.locale === 'en' ? 'text--primary' : 'text--secondary'"
          v-slot="{active, toggle}"
          @click="$i18n.locale = 'en'"
          style="cursor: pointer; width: 50px;"
          class="px-2"
        >
          <div
            @click="(toggle()), ($i18n.locale = 'en')"
            :style="active ? {color: '#070707 !important'}: {color: '#838383'}"
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
                <v-list-item-title><router-link class="scrollactive-item" to="/">{{ $t('home') }}</router-link></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-img src="../assets/profile.png"></v-img>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title><router-link class="scrollactive-item" to="/#About_me">{{ $t('about_me') }}</router-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-img src="../assets/star.png"></v-img>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title><router-link class="scrollactive-item" to="/#Skills">{{ $t('skills') }}</router-link>
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
                <v-list-item-title><router-link class="scrollactive-item" to="/#Contacts">{{ $t('contacts') }}</router-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

  export default {
    name: 'App',

    components: {},

    data: () => ({
      a: 5,
      b: 4,
      drawer: false,
      group: null,
      model: 1,
    }),
    watch: {
      group() {
        this.drawer = false
      },
    },
    methods: {},
  }
</script>

<style lang="scss">
  .header {
    font-size: 22px;
    a {
      text-decoration: none;
      color: #838383 !important;
    }
  }

  .text--rotate {
    transform: rotate(-90deg) !important;
    width: 50px !important;
  }

  a {
    text-decoration: none;
    color: #fff !important;

  }
</style>
