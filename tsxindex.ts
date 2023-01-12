//1) Create a function that accepts an array of strings, and prints out each one in a loop.
function arrayOfStrings(strings: string[]) {
  for (let str of strings) {
    console.log(str);
  }
}

let listOfStrings = ["string1", "string2", "string3", "string4", "string5"];
arrayOfStrings(listOfStrings);

//2) Create a function that takes 3 numbers, adds them together, and returns them as a number.
function addNumbers(num1: number, num2: number, num3: number): number {
  return num1 + num2 + num3;
}

let addResult = addNumbers(4, 18, 22);
console.log(addResult);

//3) Create a function that takes a string as an argument, and returns a promise to return "hello" plus that string, as a string.
function greet(name: string): Promise<string> {
  return new Promise((resolve) => {
    resolve(`Hello ${name}`);
  });
}

greet("Niel").then((greeting) => {
  console.log(greeting);
});

//4) Create a function that accepts a single array where the elements can be strings OR numbers OR booleans.
// Loop over the array, and if the element is a string, print the string plus the text "is a string".
//If it's a number, print out the number plus "is a number". If it's a boolean, print out the boolean plus "is a boolean".
function checkTypes(arr: any[]) {
  for (let elem of arr) {
    if (typeof elem === "string") {
      console.log(elem + " is a string");
    } else if (typeof elem === "number") {
      console.log(elem + " is a number");
    } else if (typeof elem === "boolean") {
      console.log(elem + " is a boolean");
    }
  }
}

let typeCheckArray = ["first string", 2, true, "second string", 5, false];
checkTypes(typeCheckArray);

//5)Knowing this, create a type that represents a discord user that has the following properties:
//name, which is a string
//isAdmin which is a boolean
//isGMI, which is a boolean
//roles, which is an array of strings.

//NOTE: type definitions create only the structure of an object and it does not create the object itself
type discordUser = {
  name: string;
  isAdmin: boolean;
  isGmi: boolean;
  roles: string[];
};

//create a type that represents a discord message that has the following properties:
//user, which is type DiscordUser
//text, which is a string
//keks, which is a number.
type discordMessage = {
  user: discordUser;
  text: string;
  keks: number;
};

//6)Create functions that use your types:
//addKeksToMessage which takes a discord message
//this one will add 1 kek
function addKeksToMessage(message: discordMessage) {
  message.keks++;
}

//canDeleteServer which takes a discord user and checks if they are admin or not before returning a boolean
function canDeleteServer(user: discordUser): boolean {
  return user.isAdmin;
}
//example log
let user: discordUser = {
  name: "Niel",
  isAdmin: false,
  isGmi: true,
  roles: ["Crane Manager", "GMI"],
};
console.log(`${user.name} can delete the server: ${canDeleteServer(user)}`);

//editMessage which takes a discord message, a discorduser, and newText
//IF the user name is the same as the user on the discordmessage itself, allows them to edit the message.
function editMessage(
  message: discordMessage,
  user: discordUser,
  newText: string
) {
  if (message.user.name === user.name) {
    message.text = newText;
  } else {
    console.log(
      "Unable to edit this message. Only the creator of this message may edit."
    );
  }
}

//7) Create a type that represents a NFT with properties like
//imageURL
//name
//currentOwnerAddress
//openSeaFloorPrice
//description
type checkNft = {
  imageURL: string;
  name: string;
  currentOwnerAddress: string;
  openSeaFloorPrince: number;
  description: string;
};

//8)Create a function that accepts an array of NFTs and returns the one with the lowest floor price
//not the floor price itself, but it returns an NFT
//getCheapestNft
function getCheapestNft(nfts: checkNft[]): checkNft {
  let cheapestNft: checkNft = nfts[0];
  for (let nft of nfts) {
    if (nft.openSeaFloorPrince < cheapestNft.openSeaFloorPrince) {
      cheapestNft = nft;
    }
  }
  return cheapestNft;
}
//example
let nfts = [
  {
    imageURL: "panda342.jpg",
    name: "NGMI Panda",
    currentOwnerAddress: "0xnoob",
    openSeaFloorPrince: 0.000001,
    description: "They are NGMI",
  },
  {
    imageURL: "birb123.jpg",
    name: "Birb",
    currentOwnerAddress: "0xneil",
    openSeaFloorPrince: 3243645645,
    description: "Birbs are real",
  },
  {
    imageURL: "texturepunk324.jpg",
    name: "Texture Punks",
    currentOwnerAddress: "0xnobody",
    openSeaFloorPrince: 0,
    description: "Scams",
  },
];

let cheapestNft = getCheapestNft(nfts);
console.log(
  `Name: ${cheapestNft.name} Price: ${cheapestNft.openSeaFloorPrince} Owner: ${cheapestNft.currentOwnerAddress} Description: ${cheapestNft.description}`
);
