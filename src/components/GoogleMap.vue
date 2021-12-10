<template>
  <div>
    <button @click="drowMarkers">drow markers</button>
    <button @click="drowDerections">drow derection</button>
    <button @click="clearMap">clear map</button>
    <GmapMap
      :center="{ lat: 10, lng: 10 }"
      :zoom="17"
      map-type-id="terrain"
      style="width: 1000px; height: 300px"
      @click="markLocation($event)"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />

      <gmap-polygon :paths="paths"></gmap-polygon>
    </GmapMap>
  </div>
</template>

<script>
const home = {
  lat: 53.462118,
  lng: -2.249097,
};
const work = {
  lat: 43.642567,
  lng: -3.244612,
};

export default {
  name: 'googleMap',
  data() {
    return {
      markers: [],
      paths: [],
    };
  },

  methods: {
    //show mark what user click
    markLocation(event) {
      this.markers = [
        {
          position: {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
          },
        },
      ];
      console.log(event.latLng.lat());
      console.log(event.latLng.lng());
    },

    //mark home and work points
    drowMarkers() {
      this.markers = [
        {
          position: home,
        },
        {
          position: work,
        },
      ];
    },

    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
