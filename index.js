function Node(parent, value) {
  if (parent) {
    parent.children.push(value);
    const node = value;
    return node;
  } else {
    const node = value;
    return node;
  }
}

function Node(grandma, value) {
  if (grandma) {
    grandma.children.push(value);
    const node = value;
    return node;
  } else {
    const node = value;
    return node;
  }
}

const father = new Node(null, { name: "father", age: 60, children: [] });
const son = new Node(father, { name: "child", age: 30, children: [] });
const grandchild = new Node(son, { name: "grandchild", age: 15, children: [] });

const grandma = new Node(null, { name: "havazelet", age: 64, children: [] });
const daughter = new Node(grandma, { name: "shir", age: 27, children: [] });
const grandaughter = new Node(daughter, {
  name: "moriya",
  age: 3,
  children: [],
});
// console.log(grandma);
let counter=0;
function findPersonByName(fam, name) {
  if (!fam) return;
  counter++
  if (fam.name === name) {
    console.log(fam.name, fam.age);
    // console.log(fam);
    console.log(counter)
    return fam;

  }
  console.log(fam.name, fam.age);

  if (fam.children) {

    // let foundChild = fam.children.find(
    //   (child) => child === findPersonByName(child, name)
    // );
    fam.children?.map((child) => {
      return findPersonByName(child, name);
    });
 // console.log(foundChild);
    // return foundChild;
  }

}

findPersonByName(grandma, "moriya");
