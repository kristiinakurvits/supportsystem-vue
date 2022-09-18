<template>
  <div>
    <br><br><br>
    <div style="with: 1000px; display: inline-block; vertical-align: top;">
      <h4>Add new support ticket</h4>
      <input type="text" style="margin: 5px" placeholder="Name" v-model="supportTicket.requesterName"><br>
      <input type="text" style="margin: 5px" placeholder="E-mail" v-model="supportTicket.requesterEMail"><br>
      <input type="text" style="margin: 5px" placeholder="Title" v-model="supportTicket.title"><br>
      <textarea style="margin: 5px" placeholder="Description" v-model="supportTicket.description"></textarea><br>
      <input type="datetime-local" style="margin: 5px" placeholder="Deadline" v-model="supportTicket.deadline"><br>
      <button type="button" style="margin: 5px" class="btn btn-dark" v-on:click="addNewSupportTicket">Add</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SupportTicketView',
  props: {
    title: String
  },
  data: function () {
    return {
      supportTicket: {},
      errorMessage: ''
    }
  },
  methods: {
    addNewSupportTicket: function () {
      this.$http.post("/support/new", this.supportTicket
      ).then(response => {
        this.errorMessage = ''
        this.$router.push({name: 'submittedRoute'})

      }).catch(error => {
        let errorMessage = error.response.data.detail
        errorMessage = errorMessage.replace('[', '')
        errorMessage = errorMessage.replace(']', '')
        this.errorMessage = errorMessage

      })
    },
  }
}
</script>

<style scoped>

</style>