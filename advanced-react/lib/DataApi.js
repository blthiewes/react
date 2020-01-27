class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }
  mapDataIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  getArticles() {
    return this.mapDataIntoObject(this.rawData.articles);
  }

  getAuthors() {
    return this.mapDataIntoObject(this.rawData.authors);
  }
}

export default DataApi;
