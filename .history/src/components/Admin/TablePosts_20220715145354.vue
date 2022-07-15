<template>
  <div class="table_post">
    <table>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Detail</th>
        <th>Action</th>
      </tr>
      <tr v-for="(post, index) in $store.state.posts" :key="index">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.body }}</td>
        <td class="action">
          <router-link :to="'/post/' + post.id + '/edit'"
            ><button class="btn_edit">Edit</button></router-link
          >
          <button
            class="btn_remove"
            @click="$store.dispatch('removePost', post.id)"
          >
            Del
          </button>
        </td>
      </tr>
    </table>
	<PaginationComponent />
  </div>
</template>

<script>
import PaginationComponent from "@/components/PaginationComponent.vue";
export default {
  components: { PaginationComponent },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table_post table {
  width: 100%;
}
table,
th,
td {
  border-collapse: collapse;
  border: 1px solid #acacac;
  height: 100%;
}
th {
  padding: 15px 0;
}
td {
  padding: 5px;
}
.action {
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  display: flex;
  align-items: center;
}
.action .btn_edit {
  font-weight: bold;
  background: #00b0d7;
  border: none;
  border-radius: 5px;
  color: #fff;
  width: 60px;
  height: 30px;
  cursor: pointer;
}
.action .btn_remove {
  padding: 5px 15px;
  font-weight: bold;
  background: rgb(194, 30, 30);
  border: none;
  border-radius: 5px;
  color: #fff;
  width: 60px;
  height: 30px;
  cursor: pointer;
}
</style>
