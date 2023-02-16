<template>
  <div>
    <div class="font-weight-bold text-center my-12" style="font-size: 22px;">
      Pricing table
    </div>
    <v-row align="center" justify="center">
      <v-col>
        <v-card class="pa-16 mx-auto justify-center" width="280" height="350" elevation="14" @click="toCourse('course/start')">
          <v-img class="mx-auto my-16" width="110" height="110" src="../assets/Figma_logo.png" />
        </v-card>
        <div class="text-center font-weight-bold my-4" style="font-size: 22px;">Start</div>
      </v-col>
      <v-col>
        <v-card class="py-16 mx-auto justify-center" width="280" height="350" elevation="14" @click="toCourse('course/pro')">
          <v-row align="center" justify="center">
            <v-col>
              <v-img class="mx-auto mr-n1 my-16" width="110" height="110" src="../assets/AI_logo.png" />
            </v-col>
            <v-col>
              <v-img class="mx-auto ml-n1 my-16" width="110" height="110" src="../assets/PS_logo.png" />
            </v-col>
          </v-row>
        </v-card>
        <div class="text-center font-weight-bold my-4" style="font-size: 22px;">Pro</div>
      </v-col>
      <v-col>
        <v-card class="py-16 mx-auto justify-center" width="280" height="350" elevation="14" @click="toCourse('course/premium')">
          <div>
            <v-row>
              <v-col>
                <v-img class="mx-auto mr-n1" width="110" height="110" src="../assets/AI_logo.png" />
              </v-col>
              <v-col>
                <v-img class="mx-auto ml-n1" width="110" height="110" src="../assets/PS_logo.png" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-img class="mx-auto my-16 mt-n4" width="110" height="110" src="../assets/Figma_logo.png" />
              </v-col>
            </v-row>
          </div>
        </v-card>
        <div class="text-center font-weight-bold my-4" style="font-size: 22px;">Premium</div>
      </v-col>
    </v-row>

    <Contacts />
  </div>
</template>

<script>
  import Contacts from '../components/ContactsFooter'
  export default {
    components: {
      Contacts
    },
    methods: {
      toCourse(push) {
        this.$router.push(push)
      }
    }
  }
</script>

<style scoped>

</style>
