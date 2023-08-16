<template>
  <div class="surface-0 text-center">
    <div
      class="grid grid-cols-2 lg:grid-cols-4 gap-2 grid-justify-items-center"
    >
      <img
        src="/escultura/Gemma/petita/gemma1.jpg"
        alt="Gemma"
        @click="openGallery('Gemma')"
      />
      <img
        src="/escultura/Torso_Stefano_2015/petita/COMIENZO.jpg"
        alt="Stefano"
        @click="openGallery('Stefano')"
      />
      <img
        src="/escultura/Emanuele/petita/COMIENZA.jpg"
        alt="Emanuele"
        @click="openGallery('Emanuele')"
      />
      <img
        src="/escultura/Torso_Valentino_2014/petita/COMIENZO.jpg"
        alt="Valentino"
        @click="openGallery('Valentino')"
      />
      <img
        src="/escultura/Portrait_2013/petita/COMENZAR.jpg"
        :alt="t('retrat')"
        @click="openGallery('retrat2013')"
      />
      <img
        src="/escultura/Self_Portrait_2015/petita/COMENZAR.jpg"
        :alt="t('retrat')"
        @click="openGallery('retrat2015')"
      />
      <img
        src="/escultura/Skull_2013/petita/IMG_1270.jpg"
        :alt="t('calabera')"
        @click="openGallery('calabera')"
      />
      <img
        src="/escultura/Torso_Liana_2014/petita/COMENZAR.jpg"
        alt="Liana"
        @click="openGallery('Liana')"
      />
      <img
        src="/escultura/Angela_2013/petita/COMIENZO.jpg"
        alt="Angela"
        @click="openGallery('Angela')"
      />
      <img
        src="/escultura/Giovanni/petita/giovanni_tapat.jpg"
        alt="Giovanni"
        @click="openGallery('Giovanni')"
      />
      <img
        src="/escultura/Ambra_2014/petita/COMENZAR.jpg"
        alt="Ambra"
        @click="openGallery('Ambra')"
      />
      <img
        src="/escultura/Fuente_ninos/petita/portada_petita.jpg"
        :alt="t('font_nens')"
        @click="openGallery('font_nens')"
      />
    </div>
  </div>
  <Galleria
    v-model:visible="displayBasic"
    :value="images"
    :responsiveOptions="responsiveOptions"
    :numVisible="9"
    containerStyle="max-width: 50%"
    style="overflow: auto;"
    :circular="true"
    :fullScreen="true"
    :showItemNavigators="true"
  >
    <template #item="slotProps">
      <img
        :src="slotProps.item.itemImageSrc"
        :alt="slotProps.item.alt"
        style="width:100%; display: block"
      />
    </template>
    <template #thumbnail="slotProps">
      <img
        :src="slotProps.item.thumbnailImageSrc"
        :alt="slotProps.item.alt"
        style="display: block"
      />
    </template>
    <template #caption="slotProps">
        <p class="text-white text-center">{{ slotProps.item.alt }}</p>
    </template>
  </Galleria>
</template>

<script setup lang="ts">
import { ref } from "vue";
const { t } = useI18n();
const { data } = await useFetch("/api/sculture");
const images = ref([]);
const responsiveOptions = ref([
  {
    breakpoint: "1500px",
    numVisible: 5,
  },
  {
    breakpoint: "1024px",
    numVisible: 3,
  },
  {
    breakpoint: "768px",
    numVisible: 2,
  },
  {
    breakpoint: "560px",
    numVisible: 1,
  },
]);
const displayBasic = ref(false);
const openGallery = (event) => {
  const listimages = data.value.data.filter((l) => l.name === event);
  if (listimages.length > 0) {
    displayBasic.value = true;
    images.value = listimages[0].images;
  }
};
</script>

<style scoped></style>
