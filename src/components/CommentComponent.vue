<template>
  <div class="pt-40 max-[392px]:pt-60 rsvp-container">
    <div class="rsvp-wrapper">
      <div class="rsvp-section min-h-screen flex flex-col items-center gap-20">
        <h1 class="custom-font-playwrite-modern font-bold text-5xl">RSVP</h1>
        <div class="w-3/4 flex flex-col">
          <textarea
            v-model="message"
            class="w-full p-5 h-[164px] rounded-lg active:outline-none focus:outline-none focus:ring-4 focus:ring-[#A4B2A6] transform transition-all duration-500 bg-[#DDE1DD] placeholder-center resize-none mb-5"
            placeholder="Pesan"
          ></textarea>
          <div class="flex justify-between gap-5">
            <label
              class="flex items-center px-5 py-2 w-full bg-[#DDE1DD] rounded-full hover:bg-[#c2c9c3] hover:scale-105 active:bg-[#A4B2A6] transform transition-all duration-500 italic cursor-pointer"
            >
              <input
                type="radio"
                value="Hadir"
                v-model="status"
                class="hidden"
              />
              <span :class="status === 'Hadir' ? 'font-bold text-green-500' : ''">Hadir</span>
            </label>

            <label
              class="flex items-center px-5 py-2 w-full bg-[#DDE1DD] rounded-full hover:bg-[#c2c9c3] hover:scale-105 active:bg-[#A4B2A6] transform transition-all duration-500 italic cursor-pointer"
            >
              <input
                type="radio"
                value="Tidak Hadir"
                v-model="status"
                class="hidden"
              />
              <span :class="status === 'Tidak Hadir' ? 'font-bold text-red-500' : ''">Tidak Hadir</span>
            </label>
          </div>

          <!-- Tombol Kirim -->
          <button
            @click="submitRSVP"
            class="px-5 py-2 w-fit bg-[#A4B2A6] rounded-full hover:bg-[#8a948b] hover:scale-105 transform transition-all duration-500 italic font-bold mx-auto mt-5"
          >
            Kirim
          </button>
        </div>
        <div>
          <img
            src="../assets/images/left.png"
            alt="swipe left"
            class="mx-auto w-[64px] bg-[#A4B2A6] p-2 rounded-full animate-pulse hover:scale-105 transform transition-all duration-500"
          />
          <p class="mt-2 text-white">swipe left to see message</p>
        </div>
      </div>

      <!-- RSVP Section 2 -->
      <div class="rsvp-section min-h-screen flex flex-col items-center gap-12">
        <h1 class="custom-font-playwrite-modern font-bold text-5xl text-center">Wishes</h1>
        <!-- list chat -->
        <div
          class="list-chat flex flex-col gap-4 overflow-y-auto"
          data-lenis-prevent
        >
          <BubbleChat
            v-for="rsvp in sortedRsvps"
            :key="rsvp.id"
            :name="rsvp.name"
            :status="rsvp.status"
            :message="rsvp.message"
          >
            {{ rsvp.message }}
          </BubbleChat>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Swal from 'sweetalert2';
import BubbleChat from './BubbleChat.vue';
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { supabase } from '@/utils/supabase';

const capitalizedName = (name: string) => {
  return name
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const route = useRoute();
const name = route.params.name as string;
const formattedName = capitalizedName(name.replace(/[+]/g, ' '));

const message = ref('');
const status = ref('');

interface Rsvp {
  id: number; // Make sure to have an id field for unique keys
  name: string;
  status: 'Hadir' | 'Tidak Hadir';
  message: string;
}

const rsvps = ref<Rsvp[]>([]);

const fetchRSVPs = async () => {
  const { data, error } = await supabase.from('rsvp').select('*');

  if (error) {
    console.error('Error fetching RSVPs:', error);
  } else {
    rsvps.value = data || []; // Ensure rsvps is an empty array if data is null
  }
}

const submitRSVP = async () => {
  if (message.value && status.value) {
    const rsvpData = {
      name: formattedName || 'Anonymous',
      status: status.value,
      message: message.value,
    };

    console.log('Data RSVP:', rsvpData);

    const { data, error } = await supabase.from('rsvp').insert([rsvpData]);

    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Terjadi kesalahan. Coba lagi nanti.',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Terima kasih!',
        text: 'Pesan dan status terkirim.',
      });

      message.value = '';
      status.value = '';
      await fetchRSVPs(); // Ensure that you await the fetch
    }
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Pesan dan status harus diisi!',
    });
  }
}

// Call fetchRSVPs to get the data when the component is mounted
onMounted(fetchRSVPs);
// fetchRSVPs();

const sortedRsvps = computed(() => {
  return rsvps.value.slice().reverse(); // Reverse the order of the array
});
</script>

<style scoped>
.placeholder-center {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 15px;
  font-size: italic;
}

.rsvp-container {
  overflow-x: auto; /* Enable horizontal scroll */
  white-space: nowrap; /* Prevent child elements from wrapping to a new line */
  display: flex;
}

.rsvp-wrapper {
  display: flex;
  min-width: 100%;
}

.rsvp-section:first-child {
  background-image: url('@/assets/images/joglo_part1.png');
  background-size: cover;
  background-position: left center;
}

.rsvp-section:last-child {
  background-image: url('@/assets/images/joglo_part2.png');
  background-size: cover;
  background-position: right center;
}

.rsvp-section {
  flex: 0 0 100%; /* Each section takes up the full viewport width */
}

@media (max-width: 376px) {
  .list-chat {
    max-height: 600px;
  }
}

@media (min-width: 376px) {
  .list-chat {
    max-height: 550px;
  }
}

label {
  cursor: pointer;
}
</style>
