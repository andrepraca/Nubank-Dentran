<template>
    <ion-page>
        <Header />
        <ion-content :fullscreen="true">
            <ion-item v-if="status">
                <ion-label>
                    <h2>Veículo sem pendência</h2>
                </ion-label>
            </ion-item>
            <ion-item v-else>
                <ion-label>
                    <h2>Veículo com pendência</h2>
                    <button>Pagar agora</button>
                </ion-label>
            </ion-item>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonContent, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'DetranResult',
  components: {
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    Header
  },
  computed: {
    status() {
      return this.$route.params.status === 'true'
    }
  },
  methods: {
  }
});
</script>