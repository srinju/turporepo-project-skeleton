


export * from "@prisma/client"; //so everyone can export this dependent from db module here

//se we did the above line of code that shows that we can use the prisma client directly from here 
//and then in the package.json of the db folder we update the export as src/index.ts that means prisma client will be used from here
//and on all the applications where our prisma will be used add the deependency '@repo/db' so that the repo/db package can be used there.