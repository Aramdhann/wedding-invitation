<template>
  <div class="pt-40 max-[392px]:pt-60 rsvp-container">
    <div class="rsvp-wrapper">
      <div class="rsvp-section min-h-screen flex flex-col items-center gap-20">
        <h1 class="custom-font-playwrite-modern font-bold text-5xl">RSVP</h1>
        <div class="w-3/4 flex flex-col">
          <textarea
            class="w-full p-5 h-[164px] rounded-lg active:outline-none focus:outline-none focus:ring-4 focus:ring-[#A4B2A6] transform transition-all duration-500 bg-[#DDE1DD] placeholder-center resize-none mb-5"
            placeholder="Pesan"
          ></textarea>
          <div class="flex justify-between gap-5">
            <button
              class="px-5 py-2 w-full bg-[#DDE1DD] rounded-full hover:bg-[#c2c9c3] hover:scale-105 transform transition-all duration-500 italic"
            >
              Hadir
            </button>
            <button
              class="px-5 py-2 w-full bg-[#DDE1DD] rounded-full hover:bg-[#c2c9c3] hover:scale-105 transform transition-all duration-500 italic"
            >
              Tidak Hadir
            </button>
          </div>
          <button
            class="px-5 py-2 w-fit bg-[#A4B2A6] rounded-full hover:bg-[#8a948b] hover:scale-105 transform transition-all duration-500 italic font-bold mx-auto mt-5"
          >
            Kirim
          </button>
        </div>
      </div>

      <!-- RSVP Section 2 -->
      <div class="rsvp-section min-h-screen flex flex-col gap-12">
        <h1 class="custom-font-playwrite-modern font-bold text-5xl text-center">
          Wishes
        </h1>
        <!-- list chat -->
        <div
          class="list-chat flex flex-col items-center gap-4 overflow-y-auto"
          data-lenis-prevent
        >
          <!-- bubble chat -->
          <div class="flex gap-4">
            <div class="icon-circle"></div>
            <div class="max-w-[250px]">
              <div class="flex gap-2 mb-2 text-white">
                <p class="whitespace-normal">Puput</p>
                <span> - </span>
                <p class="bg-green-500 px-2 rounded-full">Hadir</p>
              </div>
              <div
                class="bubble-chat bg-white p-3 rounded-e-[20px] rounded-bl-[20px] max-w-[250px]"
              >
                <p class="whitespace-normal">
                  Semoga sakinah mawaddah wa rahmah yaa Hanii...
                </p>
              </div>
            </div>
          </div>
          <!-- bubble chat -->
          <div class="flex gap-4">
            <div class="icon-circle"></div>
            <div class="max-w-[250px]">
              <div class="flex gap-2 mb-2 text-white">
                <p class="whitespace-normal">Puput</p>
                <span> - </span>
                <p class="bg-red-500 px-2 rounded-full">Tidak Hadir</p>
              </div>
              <div
                class="bubble-chat bg-white p-3 rounded-e-[20px] rounded-bl-[20px] max-w-[250px]"
              >
                <p class="whitespace-normal">
                  Semoga sakinah mawaddah wa rahmah yaa Hanii...
                </p>
              </div>
            </div>
          </div>
          <!-- bubble chat -->
          <div class="flex gap-4">
            <div class="icon-circle"></div>
            <div class="max-w-[250px]">
              <div class="flex gap-2 mb-2 text-white">
                <p class="whitespace-normal">Puput</p>
                <span> - </span>
                <p class="bg-green-500 px-2 rounded-full">Hadir</p>
              </div>
              <div
                class="bubble-chat bg-white p-3 rounded-e-[20px] rounded-bl-[20px] max-w-[250px]"
              >
                <p class="whitespace-normal">
                  Semoga sakinah mawaddah wa rahmah yaa Hanii...
                </p>
              </div>
            </div>
          </div>
          <!-- bubble chat -->
          <div class="flex gap-4">
            <div class="icon-circle"></div>
            <div class="max-w-[250px]">
              <div class="flex gap-2 mb-2 text-white">
                <p class="whitespace-normal">Puput</p>
                <span> - </span>
                <p class="bg-red-500 px-2 rounded-full">Tidak Hadir</p>
              </div>
              <div
                class="bubble-chat bg-white p-3 rounded-e-[20px] rounded-bl-[20px] max-w-[250px]"
              >
                <p class="whitespace-normal">
                  Semoga sakinah mawaddah wa rahmah yaa Hanii...
                </p>
              </div>
            </div>
          </div>
          <!-- bubble chat -->
          <div class="flex gap-4">
            <div class="icon-circle"></div>
            <div class="max-w-[250px]">
              <div class="flex gap-2 mb-2 text-white">
                <p class="whitespace-normal">Puput</p>
                <span> - </span>
                <p class="bg-green-500 px-2 rounded-full">Hadir</p>
              </div>
              <div
                class="bubble-chat bg-white p-3 rounded-e-[20px] rounded-bl-[20px] max-w-[250px]"
              >
                <p class="whitespace-normal">
                  Semoga sakinah mawaddah wa rahmah yaa Hanii...
                </p>
              </div>
            </div>
          </div>
          <!-- bubble chat -->
          <div class="flex gap-4">
            <div class="icon-circle"></div>
            <div class="max-w-[250px]">
              <div class="flex gap-2 mb-2 text-white">
                <p class="whitespace-normal">Puput</p>
                <span> - </span>
                <p class="bg-red-500 px-2 rounded-full">Tidak Hadir</p>
              </div>
              <div
                class="bubble-chat bg-white p-3 rounded-e-[20px] rounded-bl-[20px] max-w-[250px]"
              >
                <p class="whitespace-normal">
                  Semoga sakinah mawaddah wa rahmah yaa Hanii...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <img src="@/assets/images/joglo_only.png" alt="rumah joglo" class="absolute"> -->
  </div>
</template>

<style scoped>
.placeholder-center {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 15px; /* Sesuaikan padding untuk menempatkan teks placeholder di tengah secara vertikal */
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
  background-image: url('@/assets/images/joglo_part1.png'); /* Gambar bagian kiri */
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

/* Chat Bubble Style */
.icon-circle {
  width: 40px;
  height: 40px;
  background-color: #a4b2a6;
  border-radius: 50%;
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
</style>
