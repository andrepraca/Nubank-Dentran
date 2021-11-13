<template>
  <ion-page>
    <Header />
    
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-card :routerLink="'/vehicle'" :detail="false">
          <ion-card-header>
            <ion-icon name="car-outline"></ion-icon>
            <ion-card-subtitle>detran.sp</ion-card-subtitle>
          </ion-card-header>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonCard, IonCardSubtitle, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonPage,
    IonCard,  
    IonCardSubtitle, 
    IonIcon,
    Header
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


#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>