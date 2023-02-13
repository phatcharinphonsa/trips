<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard title="ฟอร์มสร้างทริป">
          <VForm>
            <VRow class="pa-5">
              <VCol cols="12">
                <h2 class="text-lg font-medium mb-5">ข้อมูลทริป</h2>
                <VRow>
                  <VCol cols="12">
                    <VTextField label="โปรแกรม" />
                  </VCol>
                </VRow>
                <VRow>
                  <VCol cols="12">
                    <VTextField label="ไฟท์" />
                  </VCol>
                </VRow>
                <VRow>
                  <VCol cols="6">
                    <AppDateTimePicker
                      density="compact"
                      placeholder="วันเริ่มทริป"
                      style="width: 100%;"
                      :config="{ position: 'auto right' }"
                    />
                  </VCol>
                  <VCol cols="6">
                    <AppDateTimePicker
                      density="compact"
                      placeholder="วันจบทริป"
                      style="width: 100%;"
                      :config="{ position: 'auto right' }"
                    />
                  </VCol>
                </VRow>
              </VCol>
            </VRow>
            <VDivider />
            <VRow class="mx-5">
              <VCol cols="12">
                <h2 class="text-lg font-medium mb-5">ข้อมูลโรงแรม</h2>
                <VRow
                  v-for="(hotel, index) in hotels"
                  :key="index"
                  class="pa-3 my-3 hotel"
                >
                  <VCol>
                    <VRow>
                      <VCol cols="12">
                        <VTextField label="โรงแรม" />
                      </VCol>
                    </VRow>
                    <VRow>
                      <VCol cols="6">
                        <AppDateTimePicker
                          density="compact"
                          placeholder="วันที่จอง"
                          style="width: 100%;"
                          :config="{ position: 'auto right' }"
                        />
                      </VCol>
                      <VCol cols="6">
                        <AppDateTimePicker
                          density="compact"
                          placeholder="วันที่ออก"
                          style="width: 100%;"
                          :config="{ position: 'auto right' }"
                        />
                      </VCol>
                    </VRow>
                    <VRow>
                      <VCol cols="12">
                        <VTextarea label="ไกด์" rows="3" />
                      </VCol>
                    </VRow>
                  </VCol>
                </VRow>
                <VRow class="ml-0 mb-3">
                  <VCol>
                    <VBtn class="text-center" color="primary" @click="addHotel">
                      add Hotel
                    </VBtn>
                  </VCol>
                </VRow>
              </VCol>
            </VRow>
            <VDivider />
            <VRow class="mx-5">
              <VCol cols="12">
                <h2 class="text-lg font-medium my-5">ข้อมูลลูกค้า</h2>
                <VRow
                  v-for="(customer, index) in customers"
                  :key="index"
                  class="pa-3 my-3 customer"
                >
                  <VCol>
                    <VRow>
                      <VCol cols="2">
                        <VSelect
                          v-model="thNameType"
                          :items="thNameTypes"
                          label="คำนำหน้าชื่อ"
                        />
                      </VCol>
                      <VCol cols="10">
                        <VTextField label="ชื่อนามสกุล" />
                      </VCol>
                    </VRow>
                    <VRow>
                      <VCol cols="2">
                      </VCol>
                      <VCol cols="10">
                        <VTextField label="ชื่อภาษาอังกฤษ" />
                      </VCol>
                    </VRow>
                    <VRow>
                      <VCol cols="6">
                        <VTextField label="วันเดือนปีเกิด" />
                      </VCol>
                      <VCol cols="6">
                        <VTextField label="สถานที่เกิด" />
                      </VCol>
                    </VRow>
                    <VRow>
                      <VCol cols="12">
                        <VTextField label="หมายเลขพาสปอร์ต" />
                      </VCol>
                    </VRow>
                    <VRow>
                      <VCol cols="6">
                        <AppDateTimePicker
                          density="compact"
                          placeholder="วันที่ออก"
                          style="width: 100%;"
                          :config="{ position: 'auto right' }"
                        />
                      </VCol>
                      <VCol cols="6">
                        <AppDateTimePicker
                          density="compact"
                          placeholder="วันที่หมด"
                          style="width: 100%;"
                          :config="{ position: 'auto right' }"
                        />
                      </VCol>
                    </VRow>
                    <VRow>
                      <VCol cols="12">
                        <VTextField label="ห้อง" />
                      </VCol>
                    </VRow>
                    <VRow>
                      <VCol cols="12">
                        <VTextarea label="หมายเหตุ" rows="3" />
                      </VCol>
                    </VRow>
                  </VCol>
                </VRow>
                <VRow class="ml-0">
                  <VCol>
                    <VBtn
                      class="text-center"
                      color="primary"
                      @click="addCustomer"
                    >
                      add Customer
                    </VBtn>
                  </VCol>
                </VRow>
              </VCol>
            </VRow>
            <VRow class="ma-3 text-center" justify="center">
              <VCol>
                <VBtn class="mt-5 text-center" color="primary"> Submit </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCard>
      </VCol>
    </VRow>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/component-api-style
  data() {
    return {
      thNameType: "คำนำหน้าชื่อ",
      enNameType: "คำนำหน้าชื่อ",
      thNameTypes: ["นาย", "นาง", "นางสาว"],
      enNameTypes: ["Mr", "Miss","Mrs","Ms"],
      customers: [{}],
      hotels: [{}],
    };
  },
  // eslint-disable-next-line vue/component-api-style
  methods: {
    addCustomer() {
      this.customers.push({});
    },
    addHotel() {
      this.hotels.push({});
    },
  },
};
</script>

<style scoped>
.customer,
.hotel {
  border: 1px solid rgb(215, 215, 215);
  border-radius: 6px;
}
</style>
