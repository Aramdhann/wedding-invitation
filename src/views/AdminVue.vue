<template>
    <div v-if="isAuthenticated" class="admin-container">
      <h1>Admin Panel</h1>
      <input type="file" @change="handleFileUpload" />
      <button @click="downloadUpdatedFile" class="mt-4">Download Updated Excel File</button>
      <button @click="downloadJsonFile" class="mt-4">Download JSON File</button>
    </div>
    <div v-else>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import * as XLSX from 'xlsx';
  
  // Define the structure of each guest
  interface Guest {
    Invitation: string;
    url_invitation: string;
  }
  
  // Authentication for admin
  const username = ref('');
  const password = ref('');
  const isAuthenticated = ref(false);
  
  // Define the ref for invited guests with the correct type
  const invitedGuests = ref<Guest[]>([]); // Now invitedGuests has a proper type
  
  const login = () => {
    if (username.value === 'admin' && password.value === 'password') {
      isAuthenticated.value = true;
    } else {
      alert('Incorrect credentials');
    }
  };
  
  // File upload and processing
  const file = ref<File | null>(null);
  const handleFileUpload = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      file.value = target.files[0];
      processFile(file.value);
    }
  };
  
  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target?.result as ArrayBuffer;
      const workbook = XLSX.read(data, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet);
  
      // Process the invitation and generate URLs
      const updatedList: Guest[] = json.map((row: any) => {
        if (row.Invitation) {
          const urlInvitation = generateUrlInvitation(row.Invitation);
          return {
            Invitation: row.Invitation,
            url_invitation: urlInvitation,
          };
        }
        return row;
      });
  
      // Save the updated list in JSON format
      invitedGuests.value = updatedList;
  
      // Create new Excel file with url_invitation
      const newSheet = XLSX.utils.json_to_sheet(updatedList);
      const newWorkbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(newWorkbook, newSheet, 'Updated');
      const updatedFile = XLSX.write(newWorkbook, { bookType: 'xlsx', type: 'array' });
      saveFile(updatedFile);
    };
  
    reader.readAsArrayBuffer(file);
  };
  
  const generateUrlInvitation = (name: string) => {
    return `sekisah.id/${name.toLowerCase().replace(/\s+/g, '+')}`;
  };
  
  // File download (Excel)
  const updatedFile = ref<Blob | null>(null);
  const saveFile = (file: any) => {
    updatedFile.value = new Blob([file], { type: 'application/octet-stream' });
  };
  
  const downloadUpdatedFile = () => {
    if (updatedFile.value) {
      const url = URL.createObjectURL(updatedFile.value);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Updated_Invitations.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('No file processed');
    }
  };
  
  // Download JSON file
  const downloadJsonFile = () => {
    if (invitedGuests.value.length > 0) {
      // Extract just the invitation names for the JSON file
      const jsonNames = invitedGuests.value.map(guest => guest.Invitation);
      
      // Create the JSON blob
      const jsonBlob = new Blob([JSON.stringify(jsonNames, null, 2)], { type: 'application/json' });
      
      // Download the JSON file
      const url = URL.createObjectURL(jsonBlob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Invitations_List.json');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('No data to download');
    }
  };
  </script>
  
  <style scoped>
  .admin-container {
    padding: 20px;
  }
  </style>
  