<template>
  <div>
    <br>
    <h2>{{ title }}</h2>
    <table class="table table-hover table-light">
      <thead>
      <tr>
        <th scope="col">Deadline</th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Name</th>
        <th scope="col">E-mail</th>
        <th scope="col">Date added</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="supportTicket in supportTickets">
        <th scope="row">{{ supportTicket.deadline }}</th>
        <td>{{ supportTicket.title }}</td>
        <td>{{ supportTicket.description }}</td>
        <td>{{ supportTicket.requesterName }}</td>
        <td>{{ supportTicket.requesterEMail }}</td>
        <td>{{ supportTicket.dateAdded }}</td>
        <td>
          <button type="button" style="margin: 5px" class="btn btn-outline-dark"
                  v-on:click="markTicketSolved(supportTicket.id)">Mark solved
          </button>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: "AdminView",
  props: {
    title: String,
  },
  data: function () {
    return {
      supportTickets: []
    }
  },

  methods: {
    findAllActiveTickets: function () {
      this.$http.get("/support/active", {}
      ).then(response => {
        this.supportTickets = response.data
      }).catch(error => {
        console.log(error)
      })
    },

    markTicketSolved: function (supportTicketId) {
      this.$http.patch("/support/solve/" + supportTicketId,
      ).then(response => {
        console.log(response.data)
        this.findAllActiveTickets()
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.findAllActiveTickets()
  }
}
</script>

<style scoped>

</style>