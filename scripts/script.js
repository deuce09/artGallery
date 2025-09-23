export async function fetchArt() {
  try {
    const response = await fetch("./arts.json");

    if (!response.ok) {
      throw new Error("Could not fetch art");
    }

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function fetchImgFrom(artist) {
  const arts = await fetchArt();
  let results = [];
  for (const char of arts.twitter[artist].characters) {
    results.push(char.img);
  }
  // console.log(`getting info from ${artist}`);
  return results;
}

async function fetchUrlFrom(artist) {
  const arts = await fetchArt();
  let results = [];
  for (const char of arts.twitter[artist].characters) {
    results.push(char.url);
  }
  return results;
}

async function fetchCharacterFrom(artist) {
  const arts = await fetchArt();
  let results = [];

  for (const char of arts.twitter[artist].characters) {
    results.push(char.name);
  }
  return results;
}

async function fetchArtistProfile(artist) {
  const arts = await fetchArt();
  let results = [];

  for (const key in arts.twitter) {
    results.push(arts.twitter[artist].profile);
  }
  return results;
}

async function fetchArtistPfp(artist) {
  const arts = await fetchArt();
  let results = [];
  for (const key in arts.twitter) {
    results.push(arts.twitter[artist].pfp);
  }
  return results;
}

async function fetchCharacterIcon(character) {
  const charIcon = await fetchArt();
  let results = [];
  for (const key in charIcon.zerochan.characters) {
    results.push(charIcon.zerochan.characters[character].img);
  }
  return results;
}

export async function getArtFrom(artist) {
  return {
    image: await fetchImgFrom(artist),
    characters: await fetchCharacterFrom(artist),
    url: await fetchUrlFrom(artist),
    profile: await fetchArtistProfile(artist),
    pfp: await fetchArtistPfp(artist),
  };
}

export async function getIcon(character) {
  return {
    image: await fetchCharacterIcon(character),
  };
}
