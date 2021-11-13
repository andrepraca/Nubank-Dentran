<template>
    <ion-page>
        <Header />
        <ion-content :fullscreen="true">
            <ion-list v-if="listVehicle">
                <ion-item v-for="vehicle in listVehicle" :key="vehicle.id" :routerLink="'/detran/' + vehicle.id">{{ vehicle.name }}</ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonContent, IonList, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import api from '@/api';

export default defineComponent({
  name: 'Detran',
  components: {
    IonPage,
    IonContent,
    IonList,
    IonItem,
    Header
  },
  data() {
    return {
      listVehicle: []
    }
  },
  methods: {
    async getCars() {
      const response = await api.getVehicles()
      // const json = await response.json()
      const json = response
      this.listVehicle = json
    }
  },
  created() {
    this.getCars()
  }
});
</script>