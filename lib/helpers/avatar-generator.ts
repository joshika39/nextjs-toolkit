const getVariantCore = (min: number, max: number, excluded: number[] = []) => {
  let variant = Math.floor(Math.random() * (max - min + 1) + min);
  if (excluded.includes(variant)) {
    variant = getVariantCore(min, max, excluded);
  }
return variant;
}

const getVariant = (min: number, max: number, excluded: number[] = []) => {
  let variant = getVariantCore(min, max, excluded);
  return `variant${variant < 10 ? "0" : ""}${variant}`;
}

const appendParams = (url: string, params: Record<string, any>) => {
  if (!params) {
    return url;
  }
  for (let key in params) {
    if (params[key] === null) {
      continue;
    }
    if (url[url.length - 1] !== "?") {
      url += "&";
    }
    url += `${key}=${params[key]}`;
  }
  return url;
}

export const getAvatarUrl = () => {
  const scale = Math.floor(Math.random() * 70) + 70;
  const background = () => {
    const colors = [
      "b6e3f4",
      "c0aede",
      "d1d4f9",
      "ffd5dc",
      "ffdfbf",
      "ecad80"
    ]

    return colors[Math.floor(Math.random() * colors.length)];
  }
  const eyebrows = getVariant(1, 15);
  const eyes = getVariant(1, 26);
  const glasses = getVariant(1, 5);
  const glassesProbability = Math.floor(Math.random() * 100);
  const mouth = getVariant(1, 30, [13, 11, 6]);
  let url = "https://api.dicebear.com/8.x/adventurer-neutral/svg?"
  const params = {
    scale,
    backgroundColor: background(),
    eyebrows,
    eyes,
    mouth,
    glasses,
    glassesProbability
  }
  url = appendParams(url, params);
  return url;
}