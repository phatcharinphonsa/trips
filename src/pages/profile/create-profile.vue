<script setup>
import authV1BottomShape from '@images/svg/auth-v1-bottom-shape.svg'
import authV1TopShape from '@images/svg/auth-v1-top-shape.svg'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const form = ref({
  username: '',
  email: '',
  password: '',
  privacyPolicies: false,
})

const isPasswordVisible = ref(false)
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <div class="position-relative my-sm-16">
      <!-- 👉 Top shape -->
      <VImg
        :src="authV1TopShape"
        class="auth-v1-top-shape d-none d-sm-block"
      />

      <!-- 👉 Bottom shape -->
      <VImg
        :src="authV1BottomShape"
        class="auth-v1-bottom-shape d-none d-sm-block"
      />

      <!-- 👉 Auth card -->
      <VCard
        class="auth-card pa-4"
        max-width="448"
      >
        <VCardItem class="justify-center">
          <template #prepend>
            <div class="d-flex">
              <VNodeRenderer :nodes="themeConfig.app.logo" />
            </div>
          </template>

          <VCardTitle class="font-weight-bold text-h5 py-1">
            {{ themeConfig.app.title }}
          </VCardTitle>
        </VCardItem>

        <VCardText class="pt-2">
          <h5 class="text-h5 font-weight-semibold mb-1">
            ยินดีด้วยเราได้สร้างบริษัทให้คุณเรียบร้อยแล้ว 🚀
          </h5>
          <p class="mb-0">
            เพื่อการใช้งานที่ครบถ้วนสมบูรณ์ กรุณาให้ข้อมูลเพิ่มเติม
          </p>
        </VCardText>

        <VCardText>
          <VForm @submit.prevent="() => {}">
            <VRow>
              <!-- Username -->
              <VCol cols="6">
                <VTextField
                  v-model="form.name"
                  label="ชื่อ*"
                />
              </VCol>
              <VCol cols="6">
                <VTextField
                  v-model="form.surname"
                  label="นามสกุล*"
                />
              </VCol>
              <!-- email -->
              <VCol cols="12">
                <VTextField
                  v-model="form.phone"
                  label="หมายเลขโทรศัพท์*"
                  type="number"
                />
              </VCol>
              <VCol cols="12">
                <VTextField
                  v-model="form.business_name"
                  label="ชื่อธุรกิจ*"
                />
              </VCol>
              

              <!-- password -->
              <VCol cols="12">
                
                <VBtn
                  block
                  type="submit"
                >
                 เริ่มต้นใช้งาน
                </VBtn>
              </VCol>

             
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </div>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
