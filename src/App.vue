<template>
  <div class="dashboard">
    <AppHeader />
    <main>
      <Toolbar />
      <Team />
    </main>
  </div>
</template>

<script>

import AppHeader from "@/components/AppHeader.vue";
import Toolbar from "@/components/Toolbar.vue";
import Team from "@/components/Team.vue";

export default {
  name: 'App',
  components: {
    AppHeader,
    Toolbar,
    Team
  }
}
</script>

<style>
:root {
  --primary: #6297dd;
  --primary-alt: #094ca3;
  --light: #EEEEEE;
  --light-alt: #F8F8F8;
  --grey: #888888;
  --dark: #131A26;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Brush Script MT', cursive;

}

body {
  background-color: var(--light);
}

main {
  width: 100vw;
  overflow: hidden;
}

.button {
  display: inline-block;
  padding: 8px 16px;
  background-color: var(--primary);
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.4s;
  border: none;
}

.button:hover {
  background-color: var(--primary-alt) !important;
  transform: scale(1.05);
}

.button.button-outline {
  background-color: transparent;
  border: 2px solid var(--primary);
  padding: 6px 14px;
  color: var(--primary);
}

.button.button-outline:hover {
  background-color: var(--primary-alt) !important;
  color: #fff;
  transform: scale(1.05);
  border: 2px solid var(--light-alt);
}

.button.button-small {
  padding: 4px 8px;
  font-size: 18px;
  font-weight: 600;
}

.button.button-alert {
  background-color: crimson;
}

.button-group {
  display: flex;
  margin: 0px -8px;
  /* gap: inherit; */
  gap: 10px;
}

.button-group.group-end {
  justify-content: flex-end;
  gap: 10px;
}

.button-group.button {
  margin: 0px 8px;
}
</style>
