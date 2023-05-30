<template>
  <div class="home">
    <h1>LiTools</h1>
    <p>{{ loremText }}</p>

    <div class="grid">
      <div class="grid-item" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="LiTools image">
      </div>
    </div>
  </div>
</template>

<style scoped>.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.home h1 {
  text-align: center;
}

.home p {
  text-align: justify;
  margin-bottom: 40px;
}

.home .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}

.home .grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
}

.home .grid-item img:hover {
  transform: scale(1.1);
}

</style>

<script>
export default {
  name: 'Home',
  data() {
    return {
      images: [
        'https://picsum.photos/600/400/?image=1084',
        'https://picsum.photos/600/400/?image=1048',
        'https://picsum.photos/600/400/?image=1065',
        'https://picsum.photos/600/400/?image=1025',
        'https://picsum.photos/600/400/?image=1063',
        'https://picsum.photos/600/400/?image=1018',
        'https://picsum.photos/600/400/?image=984',
        'https://picsum.photos/600/400/?image=1081',
        'https://picsum.photos/600/400/?image=1080',
        'https://picsum.photos/600/400/?image=1079',
        'https://picsum.photos/600/400/?image=1077',
        'https://picsum.photos/600/400/?image=1074',
      ],
      loremText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus finibus nibh, vitae volutpat ex vehicula vel. Mauris fringilla sem in turpis venenatis sagittis. Curabitur eu sapien et sem consequat viverra. Sed vulputate lobortis magna at bibendum. Mauris finibus, massa ut tempus accumsan, tellus augue gravida nisi, ut efficitur justo mauris nec velit. Integer egestas purus eu ante cursus, ac rhoncus enim consequat. Nam pretium id mauris in lobortis. Cras quis consectetur metus. Aliquam erat volutpat. Donec tristique, sapien et dictum posuere, nisi urna tincidunt elit, ut rutrum ligula leo a quam. Sed elementum commodo mi, vel varius arcu sagittis et.'
    };
  }
};
</script>
