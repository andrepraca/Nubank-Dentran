<template>
    <ion-page>
        <Header />
        <ion-content :fullscreen="true">
            <ion-list>
                <DetranServiceItem name="IPVA" details="Imposto sobre veículo" :vehicleId="vehicleId"/>
                <DetranServiceItem name="DPVAT" details="Seguro obrigatória" :vehicleId="vehicleId"/>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonContent, IonList } from '@ionic/vue';
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import DetranServiceItem from '@/components/DetranServiceItem.vue';


export default defineComponent({
  name: 'Detran',
  components: {
    IonPage,
    IonContent,
    IonList,
    Header,
    DetranServiceItem
  },
  computed: {
    vehicleId() {
      return this.$route.params.vehicleId
    }
  },
  methods: {
  }
});
</script>