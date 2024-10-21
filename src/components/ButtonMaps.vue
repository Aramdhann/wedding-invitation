<template>
    <div class="google-maps-button">
      <button @click="openGoogleMaps" class="px-5 py-2 bg-[#B2CAB5] rounded-full hover:bg-[#A0B8A4] hover:scale-105 transform transition-all duration-500">
        Open Google Maps
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  const latitude = -7.321812; // Replace with your location latitude
  const longitude = 112.7916795; // Replace with your location longitude
  
  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, '_blank'); // Opens in a new tab
  };
  </script>
  
  <style scoped>
  .google-maps-button {
    margin-top: 20px;
    text-align: center;
  }
  </style>
  