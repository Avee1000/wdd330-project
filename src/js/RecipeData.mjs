export default class RecipeData {
  constructor(path) {
    this.path = path;
  }

  async getData() {
    try {
      const res = await fetch(this.path);
      if (!res.ok) {
        throw new Error("Bad Response");
      }
      const data = await res.json();
      return data.recipes;
    } catch (error) {
      // Handle network or parsing errors
      console.error("Fetch error:", error);
      throw error;
    }
  }
}
