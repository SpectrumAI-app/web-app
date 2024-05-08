<script setup>
defineProps({ blok: Object })


const generateCellStyles = styles => styles || '';

</script>

<template>
  <table v-editable="blok" class="table py-2 my-2">
    <thead class="table__header">
      <tr class="table__row">
        <th
            class="table__cell table__cell--header"
            v-for="(header, index) in blok.table.thead"
            :style="generateCellStyles(blok.colors.thead[index]?.value)"
            :key="header._uid">
          {{ header.value }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="table__row" v-for="(row, rowId) in blok.table.tbody" :key="row._uid">
        <td
            class="table__cell"
            v-for="(cell, cellId) in row.body"
            :style="generateCellStyles(blok.colors.tbody[rowId]?.body[cellId]?.value)"
            :key="cell._uid">
          {{ cell.value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
  @import "Table.scss";
</style>