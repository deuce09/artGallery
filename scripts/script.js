async function fetchArt() {
  try {
    const response = await fetch("../arts.json");

    if (!response.ok) {
      throw new Error("Could not fetch art");
    }

    const data = await response.json();
    // console.log(data);
    return data.twitter;
  } catch (error) {
    console.log(error);
    return [];
  }
}

