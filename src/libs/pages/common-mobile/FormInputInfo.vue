<template>
  <div class="form-info">
    <!-- Modal Information -->
    <template v-if="type === 'Name'">
      <svg
        @click="showModalInfo = true"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z"
          fill="#424242"
        />
      </svg>

      <ModalBase
        width="80%"
        v-if="showModalInfo"
        @close="showModalInfo = false"
      >
        <template v-slot:image>
          <svg
            width="64"
            height="56"
            viewBox="0 0 64 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.5255 3.19227C30.6464 1.32426 33.3536 1.32426 34.4745 3.19227L62.5828 50.0395C63.7368 51.9628 62.3513 54.4098 60.1083 54.4098H3.89169C1.64866 54.4098 0.263203 51.9628 1.41723 50.0395L29.5255 3.19227Z"
              fill="#EEF5FF"
              stroke="#BBD3F9"
              stroke-width="2"
            />
            <path
              d="M29.3404 17.5239H34.7318L33.8211 36.1719H30.2147L29.3404 17.5239ZM32.0361 45.6952C31.1861 45.6952 30.4819 45.4029 29.9233 44.8185C29.3647 44.2076 29.0854 43.4638 29.0854 42.5872C29.0854 41.7105 29.3647 40.98 29.9233 40.3956C30.4819 39.8112 31.1861 39.519 32.0361 39.519C32.8619 39.519 33.5418 39.8112 34.0761 40.3956C34.6347 40.98 34.914 41.7105 34.914 42.5872C34.914 43.4638 34.6347 44.2076 34.0761 44.8185C33.5418 45.4029 32.8619 45.6952 32.0361 45.6952Z"
              fill="#BBD3F9"
            />
          </svg>
        </template>

        <template v-slot:title>
          {{ t("name_instruction_title") }}
        </template>

        <div
          class="form-info__description"
          v-html="t('name_instruction_desc')"
        />

        <template #footer>
          <button class="btn btn-primary"  @click="showModalInfo = false">
            {{ t('understand') }}
          </button>
        </template>
      </ModalBase>
    </template>

    <!-- Popover -->
    <el-popover
      v-if="(type === 'Passport')"
      placement="bottom-end"
      :width="255"
      trigger="hover"
      effect="dark"
      :content="t('passport_info')"
    >
      <template #reference>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z"
            fill="#424242"
          />
        </svg>
      </template>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ModalBase from "../common-mobile/ModalBase.vue"

interface Props {
  type: string;
  t: Function;
}
const { type, t } = defineProps<Props>();

const showModalInfo = ref(false);
</script>
