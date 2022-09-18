<!--<template>-->
<!--  <div>-->

<!--    <div>-->
<!--      <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayActiveTicket">Display-->
<!--        active tickets-->
<!--      </button>-->
<!--    </div>-->

<!--    <div v-if="divDisplayAllCustomers">-->
<!--      <CustomersTable :customers="customers" title="Kõik kliendid"/>-->
<!--    </div>-->

<!--  </div>-->

<!--</template>-->

<!--<script>-->
<!--import NewCustomerForm from "@/components/customer/NewCustomerForm";-->
<!--import CustomersTable from "@/components/customer/CustomersTable";-->
<!--import FindCustomersByNameForm from "@/components/customer/FindCustomersByNameForm";-->

<!--export default {-->
<!--  name: "AdminView",-->
<!--  components: {FindCustomersByNameForm, CustomersTable, NewCustomerForm},-->
<!--  data: function () {-->
<!--    return {-->
<!--      firstName: '',-->
<!--      lastName: '',-->
<!--      customer: {},-->
<!--      customers: [],-->
<!--      divDisplayAllCustomers: false,-->
<!--      divDisplayFindCustomers: false-->
<!--    }-->
<!--  },-->
<!--  methods: {-->

<!--    findAllCustomers: function () {-->
<!--      this.$http.get('/admin/customers')-->
<!--          .then(response => {-->
<!--            this.customers = response.data-->
<!--          })-->
<!--          .catch(reason => {-->
<!--            console.log(reason)-->
<!--          })-->
<!--    },-->

<!--  },-->
<!--  displayAllCustomers: function () {-->
<!--    this.hideAllDivs()-->
<!--    this.findAllCustomers()-->
<!--    this.divDisplayAllCustomers = true-->
<!--  },-->

<!--  mounted() {-->
<!--    sessionStorage.clear()-->
<!--  }-->
<!--}-->
<!--</script>-->

