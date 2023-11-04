<template>
  <div class="page">
    <h4>Thêm liên hệ</h4>
    <ContactForm :contact="{}" @submit:contact="createContact" />
    <p>{{ message }}</p>
  </div>
</template>
      <script>
  import ContactForm from "@/components/ContactForm.vue";
  import ContactService from "@/services/contact.service";
  export default {
    components: {
      ContactForm,
    },
    data() {
      return {
        contact: null,
        message: "",
      };
    },
    methods: {
    async createContact(data){
        try {
            await ContactService.create(data);
            this.message = "Tao lien he thanh cong"
        } catch (error) {
            console.log(error);
        }
     }
    }
  };
  </script>