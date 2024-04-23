<template>
  <h1 class="heading-1">Table</h1>
  <span>Sort Field: {{ sortField }}</span
  ><br />
  <span>Type Sort: {{ typeSort }}</span
  ><br />
  <base-table
    :head="tableHeads"
    :columnTemplates="tableSizeColumns"
    @sorting="setSort"
  >
    <table-row
      v-for="book in booksSorting"
      :key="book.id"
      :columnTemplates="tableSizeColumns"
      :bgRow="book.bg"
    >
      <table-column :columnTitle="tableHeads[0]">
        {{ book.id }}
      </table-column>
      <table-column :columnTitle="tableHeads[1]">
        {{ book.author }}
      </table-column>
      <table-column :columnTitle="tableHeads[2]">
        {{ book.title }}
      </table-column>
      <table-column :image="true" :srcImage="book.image" />
      <table-column>
        <Button label="Read online"></Button>
      </table-column>
    </table-row>
  </base-table>
</template>

<script setup>
import { ref, computed } from "vue";
import BaseTable from "@/components/table/BaseTable.vue";
import TableRow from "@/components/table/TableRow.vue";
import TableColumn from "@/components/table/Tablecolumn.vue";
import Button from "@/components/Button.vue";

const tableHeads = ["Id", "Author", "Title", "Cover", ""];
const tableSizeColumns = "50px 1fr 2fr 150px 140px";

const sortField = ref("id");
const typeSort = ref("asc");

const books = ref([
  {
    id: 1,
    author: " A. A. Milne",
    title: "Winnie-the-Pooh",
    image: "/vue3-ui-kit/winnie.jpg",
    bg: "#7ddfc3",
  },
  {
    id: 2,
    author: "Sean Carroll",
    title: "Something Deeply Hidden",
    image: "/vue3-ui-kit/sthdeeplyhidden.jpg",
    bg: "#66b5f8",
  },
  {
    id: 3,
    author: "Graham Joyce",
    title: "The Tooth Fairy",
    image: "/vue3-ui-kit/toothfairy.jpg",
    bg: "#ffc7a6",
  },
]);

const booksSorting = computed(() => {
  return books.value.sort((a, b) => {
    let modifier = 1;
    if (typeSort.value === "desc") modifier = -1;
    if (a[sortField.value] < b[sortField.value]) return -1 * modifier;
    if (a[sortField.value] > b[sortField.value]) return 1 * modifier;
    return 0;
  });
});

const setSort = (name) => {
  if (sortField.value === name) {
    if (typeSort.value === "asc") {
      typeSort.value = "desc";
    } else {
      typeSort.value = "asc";
    }
  } else {
    sortField.value = name;
  }
};
</script>
