<template>
  <div>
    <button @click="drowMarkers">drow markers</button>
    <button @click="drowDerections">drow derection</button>
    <button @click="clearMap">clear map</button>
    <GmapMap
      :center="{ lat: 10, lng: 10 }"
      :zoom="7"
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
    </GmapMap>
  </div>
</template>

<script>
const home = {
  lat: 53.462118,
  lng: -2.249097,
};
const work = {
  lat: 53.464144,
  lng: -2.249828,
};

export default {
  name: 'googleMap',
  data() {
    return {
      markers: [],
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

    drowMarkers() {
      this.markers = [
        {
          position: home,
          label: 'Home',
        },
        {
          position: work,
          label: 'Work',
        },
      ];
    },
    drowDerections() {
      alert('drowDerections');
    },
    clearMap() {
      alert('clearMap');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
