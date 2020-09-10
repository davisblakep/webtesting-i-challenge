module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement < 20) {
    return { ...item, enhancement: item.enhancement + 1 };
  } else {
    return { ...item };
  }
}

function fail(item) {
  // If the item's enhancement is less than 15,
  // the durability of the item is decreased by 5.
  if (item.enhancement < 15 && item.durability > 4) {
    return { ...item, durability: item.durability - 5 };
    // Any durability less than 5 will automatically return 0
  } else if (item.enhancement < 15 && item.durability < 5) {
    return { ...item, durability: 0 };
    // If the item's enhancement is 15 or more,
    // the durability of the item is decreased by 10.
  } else if (
    item.enhancement > 14 &&
    item.enhancement < 17 &&
    item.durability > 9
  ) {
    return { ...item, durability: item.durability - 10 };
    // Item enhancement is 15 or more but durabilty is less than 10,
    // return 0
  } else if (
    item.enhancement < 17 &&
    item.enhancement > 14 &&
    item.durability < 10
  ) {
    return { ...item, durability: 0 };
    // If the item's enhancement level is greater than 16,
    // the enhancement level decreases by 1
  } else if (item.enhancement > 16 && item.durability > 9) {
    return {
      ...item,
      durability: item.durability - 10,
      enhancement: item.enhancement - 1,
    };
    // If item enhancement is greater than 16 but durability is
    // less than 10, set durability to 0
  } else if (item.enhancement > 16 && item.durability < 10) {
    return { ...item, durability: 0, enhancement: item.enhancement - 1 };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
