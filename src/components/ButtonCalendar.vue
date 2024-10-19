<template>
  <button
    @click="redirectToCalendar"
    class="px-5 py-2 bg-[#B2CAB5] rounded-full hover:bg-[#A0B8A4] hover:scale-105 transform transition-all duration-500"
  >
    Ingatkan Saya
  </button>
</template>

<script setup lang="ts">
// Function to redirect to Google Calendar
const redirectToCalendar = () => {
  const eventTitle = 'The Wedding of Prima & Hanifah'; // Replace with the actual title
  const startDate = '20241110T000000Z'; // Start date (UTC)
  const endDate = '20241110T230000Z'; // End date (UTC)
  const description = 'Join us for the wedding celebration!';
  const location = 'Surabaya'; // Replace with the actual location

  // Construct the Google Calendar URL
  const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;

  // Open the calendar URL in a new tab
  window.open(calendarUrl, '_blank');
};
</script>

<style scoped></style>
