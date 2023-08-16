<script setup lang="ts">
const { t, locale, locales, setLocale } = useI18n();
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useNavigationMenu } from "~/composables/navigation";
const { navigationMenu } = useNavigationMenu();
const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const model = navigationMenu();
const showMobileMenu = ref(false);

const showMenu = () => {
  return (showMobileMenu.value = !showMobileMenu.value);
};

onMounted(() => {
  bindOutsideClickListener();
});
onBeforeUnmount(() => {
  unbindOutsideClickListener();
});

const bindOutsideClickListener = () => {
  if (!outsideClickListener.value) {
    outsideClickListener.value = (event) => {
      if (isOutsideClicked(event)) {
        topbarMenuActive.value = false;
      }
    };
    document.addEventListener("click", outsideClickListener.value);
  }
};

const unbindOutsideClickListener = () => {
  if (outsideClickListener.value) {
    document.removeEventListener("click", outsideClickListener);
    outsideClickListener.value = null;
  }
};

const isOutsideClicked = (event) => {
  if (!topbarMenuActive.value) {
    return;
  }
  const sidebarEl = document.querySelector(".layout-topbar-menu");
  const topbarEl = document.querySelector(".layout-topbar-menu-button");

  return !(
    sidebarEl?.isSameNode(event.target) ||
    sidebarEl?.contains(event.target) ||
    topbarEl?.isSameNode(event.target) ||
    topbarEl?.contains(event.target)
  );
};

const switchSelect = (event) => {
  if (event.target.value !== locale.value) {
    setLocale(event.target.value);
  }
  return true;
};
</script>

<template>
  <div class="layout-topbar">
    <div class="linia"></div>
    <button
      class="p-link layout-menu-button layout-topbar-button"
      @click="showMenu()"
    >
      <i class="pi pi-bars" />
    </button>
    <div
      class="layout-menu"
      :class="showMobileMenu ? 'open-menu' : 'closed-menu'"
    >
      <div v-for="(item, i) in model" :key="i" class="menu-item">
        <NuxtLink :to="item.to">
          <span>{{ t(item.label) }}</span>
        </NuxtLink>
      </div>
      <select
        name="language"
        id="select-language"
        class="right"
        @change="switchSelect($event)"
      >
        <option
          v-for="currentLocale in locales"
          :value="currentLocale.code"
          :selected="locale === currentLocale.code"
        >
          {{ currentLocale.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-topbar {
  .linia {
    background: url("/signature.png");
    background-size: 100% 100%;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
  }
  .layout-menu {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    align-items: center;
    width: 100%;
    .menu-item {
      padding: 24px 30px 20px 30px;
      a {
        font-weight: bold;
        color: var(--surface-900);
      }
    }
    .right {
      margin-left: auto;
    }
  }
  .layout-menu-button {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .layout-topbar {
    padding-top: 10px;
    position: absolute;
    width: 100%;

    .open-menu {
      opacity: 1;
      height: 150px;
    }
    .closed-menu {
      opacity: 0;
      height: 0;
      padding: 0;
    }
    .layout-menu {
      flex-direction: column;
      z-index: 100;
      position: relative;
      transition: all 0.2s ease-out;
      .menu-item {
        flex-direction: column;
      }
    }
    .layout-menu-button {
      display: block;
      text-align: right;
      padding: 0 10px 10px 0;
    }
  }
}
</style>
