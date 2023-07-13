<template>
  <n-modal v-model:show="showModal" :on-after-leave="closeModal">
    <n-card
      style="width: 95%; max-width: 500px"
      :title="title"
      :bordered="false"
      role="dialog"
      closable
      @close="closeModal"
    >
      <n-spin :show="loading">
        <n-form
          :model="form"
          label-placement="top"
          @keydown.enter="submit"
        >
          <n-form-item label="Description" required :feedback="errors.description?.[0]" :validation-status="errors.description && 'error'">
            <n-input v-model:value="form.description"/>
          </n-form-item>
          <n-form-item label="Price" required :feedback="errors.price?.[0]" :validation-status="errors.price && 'error'">
            <n-input-number v-model:value="form.price" class="w-full"/>
          </n-form-item>
          <n-form-item label="Stock" required :feedback="errors.stock?.[0]" :validation-status="errors.stock && 'error'">
            <n-input-number v-model:value="form.stock" class="w-full"/>
          </n-form-item>
        </n-form>
      </n-spin>
      <template #footer>
        <div class="flex justify-end gap-x-2">
          <n-button @click="closeModal">
            Cancel
          </n-button>
          <n-button type="primary" @click="submit" :loading="submitLoading">
            Save
          </n-button>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>
<script setup>
import { ref, computed, watch } from 'vue';
import http from '@/http/http.service'

const props = defineProps(['showModal', 'articleId']);
const emit = defineEmits(['update:showModal', 'reloadData']);
const title = computed(() => {
  return props.articleId ? 'Edit Article' : 'New Article'
})
const form = ref({
  description: '',
  price: null,
  stock: null
})
const errors = ref({});
const submitMethod = ref('')
const urlMethod = ref('')
const loading = ref(false)
const submitLoading = ref(false)

const initForm = () => {
  form.value = {
    description: '',
    price: null,
    stock: null
  }
  errors.value = {}
}

const openModal = () => {
  initForm()
  loadArticle()
}

const closeModal = () => {
  emit('update:showModal', false)
}

watch(() => props.showModal, (showModal) => {
  if(showModal){
    openModal()
  }
})

const loadArticle = () => {
  loading.value = true
  if(props.articleId){
    submitMethod.value = 'put'
    urlMethod.value = `/articles/${props.articleId}`
    http.get(`/articles/${props.articleId}`)
    .then(response => {
      form.value = response.data
      loading.value = false
    })
  }else{
    submitMethod.value = 'post'
    urlMethod.value = `/articles`
    loading.value = false
  }
}

const submit = () => {
  submitLoading.value = true
  http({
    method: submitMethod.value,
    url: urlMethod.value,
    data: form.value
  })
  .then(response => {
    submitLoading.value = false
    emit('reloadData')
    closeModal()
  })
  .catch((error) => {
    submitLoading.value = false
    if (error.response.status === 422) {
      errors.value = error.response.data.errors;
    }
  });
}

</script>
