<script setup>
defineProps({ blok: Object })
</script>

<template>
  <table v-editable="blok" class="py-2 text-white my-2">
    <thead class="font-bold">
      <tr>
        <th class="border-solid border-2 border-indigo-600 p-2" v-for="header in blok.table.thead" :key="header._uid">{{ header.value }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in blok.table.tbody" :key="row._uid">
        <td class="border-solid border-2 border-indigo-600 p-2" v-for="cell in row.body" :key="cell._uid">{{ cell.value }}</td>
      </tr>
    </tbody>
  </table>
</template>