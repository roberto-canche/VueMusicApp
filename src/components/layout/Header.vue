<template lang="pug">
  section.hero.is-success
    .hero-head
        header.nav
            .container
                .nav-left
                    .nav-item
                        strong App Music
                .nav-right.nav-menu
                  router-link.nav-item(:to="{ name: 'search' }") Buscar
                  router-link.nav-item(to="about") Nosotros
    .hero-body
        .container.has-text-centered
            h1.title App Music
            h2.subtitle Lista de las mejores canciones
            pm-player
</template>

<script>
import PmPlayer from '@/components/Player.vue'
export default {
  components: {
    PmPlayer
  }
}
</script>
