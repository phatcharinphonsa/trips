<script>
export default {
  name: "ShowTrips",
  data() {
    return {
      trips: [],
    };
  },
  mounted() {
    this.getTripById();
    this.getCustomerById();
  },
  methods: {
    async getTripById() {
      try {
        const id = this.$route.params.id;
        const response = await fetch(
          `http://strapiapi.catflows.com/api/trips/${id}`
        );
        const trip = await response.json();
        this.trips = [trip.data];
        console.log(trip.data);
        console.info("trip", trip.data);
        console.debug(trip.data);
      } catch (error) {
        console.error(error);
        console.debug(error);
      }
    },
    async getCustomerById() {
      try {
        const id = this.$route.params.id;
        const response = await fetch(
          `http://strapiapi.catflows.com/api/customers/${id}`
        );
        const customer = await response.json();
        this.customer = [customer.data];
        console.log(customer.data);
        console.info("customer", customer.data);
        console.debug(customer.data);
      } catch (error) {
        console.error(error);
        console.debug(error);
      }
    },
  },
};
</script>

<script setup>
import { useUserListStore } from "@/views/apps/user/useUserListStore";
import logo from "@images/avatars/logosridara.png";

const userListStore = useUserListStore();
const searchQuery = ref("");
const selectedRole = ref();
const selectedPlan = ref();
const selectedStatus = ref();
const rowPerPage = ref(10);
const currentPage = ref(1);
const totalPage = ref(1);
const totalUsers = ref(0);
const users = ref([]);

const fetchUsers = () => {
  userListStore
    .fetchUsers({
      q: searchQuery.value,
      status: selectedStatus.value,
      plan: selectedPlan.value,
      role: selectedRole.value,
      perPage: rowPerPage.value,
      currentPage: currentPage.value,
    })
    .then((response) => {
      users.value = response.data.users;
      totalPage.value = response.data.totalPage;
      totalUsers.value = response.data.totalUsers;
    })
    .catch((error) => {
      console.error(error);
    });
};

watchEffect(fetchUsers);

watchEffect(() => {
  if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});

const companyOptions = [
  {
    avatar: logo,
    title: "ศรีดารา ทัวร์",
    subtitle:
      "123 ถนนชยางกูร ตรอก/ซอย - ตำบล/แขวง บุ่ง อำเภอ/เขต เมืองอำนาจเจริญ จังหวัด อำนาจเจริญ 37000",
    contact: "080-1615100",
  },
];
</script>

<template>
  <section>
    <VCard class="px-10 pb-10 pt-5">
      <VCardText
        class="d-flex flex-wrap justify-space-between flex-column flex-sm-row print-row"
        v-for="title in trips"
        :key="title"
      >
        <div>
          <div v-for="card in companyOptions" :key="card.name">
            <VImg :src="card.avatar" :width="200" />
          </div>

          <h6 class="font-weight-medium text-xl mb-2 mt-3">NAMELISTGROUP</h6>

          <p class="mb-0">PROGRAM : {{ title.attributes.trip_name }}</p>

          <p class="mb-0">
            DAY : ({{ title.attributes.start_date }}) - ({{
              title.attributes.end_date
            }})
          </p>

          <p class="mb-0">FILGHT : {{ title.attributes.flight }}</p>

          <h6 class="font-weight-medium text-xl mb-6">TOTAL :</h6>
        </div>

        <div class="mt-4 ma-sm-4">
          <p class="mb-2 mt-15">
            <span>HOTEL : {{ title.attributes.hotel_name }}</span>

            <span class="font-weight-semibold" />
          </p>

          <p class="mb-2">
            <span>CHECK IN : {{ title.attributes.start_hotel }}</span>

            <span class="font-weight-semibold" />
          </p>

          <p class="mb-2">
            <span>CHECK OUT : {{ title.attributes.end_hotel }}</span>

            <span class="font-weight-semibold" />
          </p>

          <h6 class="font-weight-medium text-xl mb-6">
            GUIDE : {{ title.attributes.guide_name }}
          </h6>
        </div>
      </VCardText>

      <VCardText class="d-flex flex-wrap py-4 gap-4">
        <div class="d-flex align-center" style="width: 135px">
          <span class="text-no-wrap me-3">แสดง:</span>

          <VSelect
            v-model="rowPerPage"
            density="compact"
            :items="[10, 20, 30, 50]"
          />
        </div>

        <VSpacer />

        <VBtn
          prepend-icon="tabler-plus"
          @click="isAddNewUserDrawerVisible = true"
        >
          เพิ่มทัวร์
        </VBtn>

        <div class="d-flex align-center flex-wrap gap-4">
          <!-- 👉 Search  -->

          <div style="width: 15rem">
            <VTextField
              v-model="searchQuery"
              placeholder="ค้นหา"
              density="compact"
            />
          </div>
        </div>
      </VCardText>

      <VDivider />

      <VTable class="text-no-wrap">
        <thead>
          <tr>
            <th scope="col">ลำดับ</th>

            <th scope="col">ชื่อภาษาไทย</th>

            <th scope="col">Name</th>

            <th scope="col">NO.Passport</th>

            <th scope="col">วันที่ออก</th>

            <th scope="col">วันที่หมด</th>

            <th scope="col">ว/ด/ป เกิด</th>

            <th scope="col">ห้อง</th>

            <th scope="col">หมายเหตุ</th>
          </tr>
        </thead>

        <tbody v-for="cus in customer" :key="cus">
          <tr style="height: 3.75rem">
            <td class="text-center">{{ cus.id }}</td>

            <td class="text-capitalize text-base font-weight-semibold">
              {{ cus.attributes.fname }} {{ cus.attributes.lname }}
            </td>

            <td class="text-center">
              {{ cus.attributes.en_Fname }} {{ cus.attributes.en_lname }}
            </td>

            <td class="text-center">{{ cus.attributes.passport_name }}</td>

            <td class="text-center">{{ cus.attributes.passport_start }}</td>

            <td class="text-center">{{ cus.attributes.passport_end }}</td>

            <td class="text-center">{{ cus.attributes.birthdate }}</td>

            <td class="text-center">{{ cus.attributes.room }}</td>

            <td class="text-center">{{ cus.attributes.note }}</td>
          </tr>
        </tbody>

        <tfoot v-show="!users.length">
          <tr>
            <td colspan="7" class="text-center">No data available</td>
          </tr>
        </tfoot>
      </VTable>

      <VDivider />

      <VCardText
        class="d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5"
      >
        <span class="text-sm text-disabled">
          {{ paginationData }}
        </span>

        <VPagination v-model="currentPage" size="small" />
      </VCardText>
    </VCard>
  </section>
</template>

<style lang="scss">
.app-user-search-filter {
  inline-size: 31.6rem;
}

.text-capitalize {
  text-transform: capitalize;
}

.user-list-name:not(:hover) {
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}

.v-banner--density-default.v-banner--two-line {
  padding-block: 0 16px;
}

p {
  margin-block-end: 0;
}
</style>
