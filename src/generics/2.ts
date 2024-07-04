type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends Pick<AllType, keyof AllType>>(top: T, bottom: T): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const topObject: AllType = {
  name: 'Top',
  position: 1,
  color: 'Red',
  weight: 100,
};

const bottomObject: AllType = {
  name: 'Bottom',
  position: 2,
  color: 'Blue',
  weight: 200,
};

const result = compare(topObject, bottomObject);
console.log(result); // { name: 'Top', color: 'Red', position: 2, weight: 200 }
