import { NOW, column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config
const Subscribe = defineTable({
  columns: {
    name: column.text(),
    email: column.text(),
    createAt: column.date({ default: NOW }),
  },
});

export default defineDb({
  tables: { Subscribe },
});