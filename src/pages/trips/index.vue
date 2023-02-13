<!-- eslint-disable semi -->
<!-- eslint-disable vue/component-api-style -->
<script>
import ShowTrips from './show-trips.vue';

export default {
  components: {
    ShowTrips,
  },
  data() {
    return {
      trips: [],
    }
  },
  mounted() {
    this.getTrips()
  },
  methods: {
    async getTrips() {
      try {
        const response = await fetch("http://strapiapi.catflows.com/api/trips")
        const trips = await response.json()

        this.trips = trips.data
        console.log(trips.data)
        console.info("trips", trips.data)
        console.debug(trips.data)
      } catch (error) {
        console.error(error)
        console.debug(error)
      }
    },
    getTripById(currentId, id) {
      this.$router.push({ name: 'ShowTrips', params: { currentId, id } });
    },
  },
}
</script>

<script setup>
import { useUserListStore } from "@/views/apps/user/useUserListStore";
import logo from "@images/avatars/logosridara.png";

const userListStore = useUserListStore()
const searchQuery = ref("")
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalUsers = ref(0)
const users = ref([])

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
    .then(response => {
      users.value = response.data.users
      totalPage.value = response.data.totalPage
      totalUsers.value = response.data.totalUsers
    })
    .catch(error => {
      console.error(error)
    })
}

watchEffect(fetchUsers)
watchEffect(() => {
  if (currentPage.value > totalPage.value) currentPage.value = totalPage.value
})

const companyOptions = [{
  avatar: logo,
  title: "ศรีดารา ทัวร์",
  subtitle: "123 ถนนชยางกูร ตรอก/ซอย - ตำบล/แขวง บุ่ง อำเภอ/เขต เมืองอำนาจเจริญ จังหวัด อำนาจเจริญ 37000",
  contact: "080-1615100",
}]
</script>

<template>
  <section>
    <VCard class="px-10 pb-10 pt-5">
      <div
        v-for="card in companyOptions"
        :key="card.name"
        class="w-100 d-flex justify-center"
      >
        <VBanner
          lines="two"
          class="px-15"
        >
          <template #prepend>
            <VImg
              class="pt-5 pb-5"
              :src="card.avatar"
              :width="300"
            />
          </template>
          <div class="pt-8 px-15">
            <h1>
              {{ card.title }}
            </h1>
            <p class="pt-2">
              {{ card.subtitle }}
            </p>
            <label>เบอร์ติดต่อ {{ card.contact }}</label>
          </div>
        </VBanner>
      </div>

      <VCardText class="d-flex flex-wrap py-4 gap-4">
        <div
          class="d-flex align-center"
          style="width: 135px;"
        >
          <span class="text-no-wrap me-3">แสดง:</span>
          <VSelect
            v-model="rowPerPage"
            density="compact"
            :items="[10, 20, 30, 50]"
          />
        </div>

        <VSpacer />
        <VBtn prepend-icon="tabler-plus">
          เพิ่มทัวร์
        </VBtn>
        <div class="d-flex align-center flex-wrap gap-4">
          <!-- Search  -->
          <div style="width: 15rem;">
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
            <th
              scope="col"
              class="text-center"
            >
              ลำดับ
            </th>
            <th scope="col">
              ชื่อทริป
            </th>
            <th scope="col">
              ไฟท์
            </th>
            <th scope="col">
              วันที่เริ่ม
            </th>
            <th scope="col">
              วันที่จบ
            </th>
            <th scope="col">
              ชื่อไกด์
            </th>
            <th
              scope="col"
              class="text-center"
            >
              จัดการ
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="trip in trips"
            :key="trip"
            style="height: 3.75rem;"
          >
            <td class="text-center">
              {{ trip.id }}
            </td>
            <td class="text-capitalize text-base font-weight-semibold">
              {{ trip.attributes.trip_name }}
            </td>
            <td>{{ trip.attributes.flight }}</td>
            <td>{{ trip.attributes.start_date }}</td>
            <td>{{ trip.attributes.end_date }}</td>
            <td>{{ trip.attributes.guide_name }}</td>
            <td
              class="text-center"
              style="width: 5rem;"
            >
              <VBtn
                icon
                size="x-small"
                color="default"
                variant="text"
              >
                <VIcon
                  size="22"
                  icon="tabler-edit"
                />
              </VBtn>
              <VBtn
                icon
                size="x-small"
                color="default"
                variant="text"
              >
                <VIcon
                  size="22"
                  icon="tabler-trash"
                />
              </VBtn>
              <VBtn
                icon
                variant="text"
                color="default"
                size="x-small"
                @click="getTripById(currentId, trip.id)"
              >
                <VIcon
                  :size="22"
                  icon="tabler-eye"
                />
              </VBtn>
            </td>
          </tr>
        </tbody>

        <!-- 👉 table footer  -->
        <tfoot v-show="!users.length">
          <tr>
            <td
              colspan="7"
              class="text-center"
            >
              No data available
            </td>
          </tr>
        </tfoot>
      </VTable>
      <VDivider />
      <VCardText
        class="d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5"
      >
        <span class="text-sm text-disabled" />
        <VPagination
          v-model="currentPage"
          size="small"
        />
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
