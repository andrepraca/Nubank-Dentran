<template>
    <ion-item @click="callService">
      <ion-label>
        <h2>{{ name }}</h2>
        <p>{{ details }}</p>
      </ion-label>
    </ion-item>
</template>

<script>
import { IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
import api from '@/api';

export default defineComponent({
  name: 'DetranServiceItem',
  components: {
    IonItem,
    IonLabel
  },
  props: {
    name: { type: String, default: "" },
    details: String,
    vehicleId: { type: Number, default: 0 }
  },
  methods: {
    async callService() {
      const response = await api.callService(this.vehicleId, this.name)
      // const json = await response.json()
      const json = response

      this.$router.push(`/detran/result/${json.status}`)
    }
  }
});
</script>