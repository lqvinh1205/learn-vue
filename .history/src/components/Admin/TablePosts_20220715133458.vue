<template>
  <div class="table_post">
    <table>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Detail</th>
        <th>Action</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Title</td>
        <td>Detail</td>
        <td class="action">
			<button>Edit</button>
			<button>Remove</button>
		</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {};
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
}
th {
  padding: 15px 0;
}
td {
  padding: 5px;
}
</style>
