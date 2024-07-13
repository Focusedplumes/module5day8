const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const listData =[
  {
   id: 1,
   name: "House",
   description: "Clean house.",
   notDone: false,
   done: true,
  },
  {
    id: 2,
    name: "Car",
    description: "Wash car.",
    notDone: false,
    done: true,
   },
   {
    id: 3,
    name: "Laundry",
    description: "Do laundry.",
    notDone: false,
    done: true,
   },
   {
    id: 4,
    name: "Clothes",
    description: "Fold clothes.",
    notDone: false,
    done: true,
   },
   {
    id: 5,
    name: "Fun",
    description: "Play video games.",
    notDone: false,
    done: true,
   },
];

async function main() {
  console.log(`Feed the seed data...`);
  for (const d of listData) {
    const toDo = await prisma.toDoList.create({
      data: d,
    });
    console.log(`Created to-do list items with id: ${toDo.id}`);
  }
  console.log(`Seeding done.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
