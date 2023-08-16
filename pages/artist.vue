<template>
  <div class="grid grid-cols-2 gap-4">
    <div>
      <Carousel
        :value="products"
        :numVisible="1"
        :numScroll="1"
        circular
        :autoplayInterval="3000"
        :pt="{
          indicatorButton: { class: 'border-rd' },
        }"
        containerClass="text-center"
      >
        <template #item="slotProps">
          <img
            :src="slotProps.data.image"
            :alt="slotProps.data.alt"
            class="h-30rem"
          />
        </template>
      </Carousel>
    </div>
    <div class="">
      <h1>Silvia Juez Linares</h1>
      <p class="text-justify">
        {{ t("descripcio_1") }}<br />
        {{ t("descripcio_2") }}<br />
        {{ t("descripcio_3") }}<br />
        {{ t("descripcio_4") }}<br />
        {{ t("descripcio_5") }}<br />
        {{ t("descripcio_6") }}
      </p>
      <Image
        src="/artista/silvia/premios/arc_gran.jpg"
        alt="The Art Renewal Center"
        width="200"
        preview
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
import Carousel from "primevue/carousel";
const products = ref([
  {
    alt: "silvia riendo haciendo una escultura de un hombre",
    image: "artista/silvia/IMG_8518 (551x800).jpg",
  },
  {
    alt: "silvia imitando la escultura que tiene delante",
    image: "artista/silvia/IMG_1644 (627x800).jpg",
  },
]);
</script>

<style scoped></style>
