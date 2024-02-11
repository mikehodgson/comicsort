class Book {
  publisher: string = "";
  series: string = "";
  sort_name: string = "";
  issue: number = 0;
  release_date: Date = new Date();
  variant: string = "";

  constructor(data: any) {
    this.publisher = data["Publisher"] ? data["Publisher"] : "";
    this.series = data["Series"] ? data["Series"] : "";
    this.issue = data["Issue"] || data["Issue No."] || 1;
    this.release_date = data["Release Date"]
      ? new Date(data["Release Date"])
      : new Date();
    this.variant = data["Variant"] ? data["Variant"] : "";
    this.sort_name = this.series.replace(new RegExp(/^the\s*/, "ig"), "");
  }
}

export default Book;
