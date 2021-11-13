<template>
    <ion-header :translucent="true">
      <ion-toolbar>
        <div class="header">
          <ion-back-button />
          <ion-img class="logo" src="assets/logo.svg" />
          <ion-title>Nubank</ion-title>
        </div>
      </ion-toolbar>
    </ion-header>
</template>

<script>
import { IonHeader, IonTitle, IonToolbar, IonImg, IonBackButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  components: {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonImg,
    IonBackButton
  },
  methods: {
    cardClick() {
      console.log("Cliquei em!")
    }
  }
});
</script>


<style scoped>
.header {
  display: flex;
}
.logo {
  width: 40px;
  fill:#810ad1;
  margin-left: 20px;
}
</style>