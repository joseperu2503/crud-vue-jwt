<template>
  <div class="bg-gray-50 fixed right-0 bottom-0 left-0 top-0">
    <div
      className="bg-primary-600 w-full py-4 flex justify-center items-center gap-4"
    >
      <router-link
        to="/dashboard"
        className="text-white"
      >
        Dashboard
      </router-link>
      <span className="text-white cursor-pointer" @click="logout">Logout</span>
    </div>
    <div class="mt-10 mx-auto max-w-4xl">
      <Card>
        <n-button @click="newArticle">New Article</n-button>
        <n-data-table
          :columns="columns"
          :data="articles"
          :bordered="false"
        />
      </Card>
      <ArticleForm
        v-model:showModal="showModal"
        :articleId="articleId"
        @reloadData="getArticles"
      />
    </div>
  </div>
</template>
<script setup>
import { useAuth } from '@/composables/useAuth'
import { ref } from 'vue';
import Card from "@/components/Card.vue";
import http from '@/http/http.service'
import ArticleForm from './ArticleForm.vue'
import { h } from 'vue'
import { NButton } from 'naive-ui'

const auth = useAuth()

const logout = () => {
  auth.logout();
};

const articles = ref([])

const columns = ref([
  {
    title: 'ID',
    key: 'id'
  },
  {
    title: 'Description',
    key: 'description'
  },
  {
    title: 'Price',
    key: 'price'
  },
  {
    title: 'Stock',
    key: 'stock'
  },
  {
    title: 'Actions',
    key: 'actions',
    render (row) {
      return [
        h(
          NButton,
          {
            tertiary: true,
            size: 'small',
            onClick: () => editArticle(row.id)
          },
          { default: () => 'Edit' }
        ),
        h(
          NButton,
          {
            tertiary: true,
            size: 'small',
            onClick: () => deleteArticle(row.id)
          },
          { default: () => 'Delete' }
        )
      ]
    }
  }
])

const showModal = ref(false)
const articleId = ref(null)

const newArticle = () => {
  articleId.value = null
  showModal.value = true
}

const getArticles = () => {
  http.get("/articles")
  .then(response => {
    articles.value = response.data
  })
  .catch((error) => {
    console.log(error)
  });
}

const editArticle = (id) => {
  articleId.value = id
  showModal.value = true
}

const deleteArticle = (id) => {
  http.delete(`/articles/${id}`)
  .then(response => {
    getArticles()
  })
  .catch((error) => {
    console.log(error)
  });
}

getArticles()

</script>
